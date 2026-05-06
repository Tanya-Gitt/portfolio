import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 70;
const EDGE_THRESHOLD = 3.0;

function DataNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const velocities = useRef<Float32Array>(new Float32Array(NODE_COUNT * 3));

  const { camera } = useThree();

  useEffect(() => {
    if (!groupRef.current) return;

    // Create node positions
    const positions = new Float32Array(NODE_COUNT * 3);
    const vel = velocities.current;
    for (let i = 0; i < NODE_COUNT; i++) {
      const r = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      vel[i * 3] = (Math.random() - 0.5) * 0.006;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.006;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
    }

    // Points geometry
    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointMat = new THREE.PointsMaterial({
      size: 0.09,
      color: 0x00f5c4,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    pointsRef.current = points;
    groupRef.current.add(points);

    // Lines geometry (starts empty)
    const lineGeo = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f5c4,
      transparent: true,
      opacity: 0.15,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    linesRef.current = lines;
    groupRef.current.add(lines);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      pointGeo.dispose();
      lineGeo.dispose();
      pointMat.dispose();
      lineMat.dispose();
    };
  }, []);

  useFrame(() => {
    const pts = pointsRef.current;
    const lns = linesRef.current;
    if (!pts || !lns) return;

    const pos = (pts.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    const vel = velocities.current;

    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3] += vel[i * 3];
      pos[i * 3 + 1] += vel[i * 3 + 1];
      pos[i * 3 + 2] += vel[i * 3 + 2];

      const dist = Math.sqrt(pos[i*3]**2 + pos[i*3+1]**2 + pos[i*3+2]**2);
      if (dist > 10 || dist < 2) {
        vel[i * 3] *= -1;
        vel[i * 3 + 1] *= -1;
        vel[i * 3 + 2] *= -1;
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;

    // Rebuild edge positions
    const linePos: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i*3] - pos[j*3];
        const dy = pos[i*3+1] - pos[j*3+1];
        const dz = pos[i*3+2] - pos[j*3+2];
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (d < EDGE_THRESHOLD) {
          linePos.push(pos[i*3], pos[i*3+1], pos[i*3+2]);
          linePos.push(pos[j*3], pos[j*3+1], pos[j*3+2]);
        }
      }
    }
    lns.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(linePos), 3)
    );

    // Gentle camera drift
    (camera.position.x as number) += (mouse.current.x * 1.5 - camera.position.x) * 0.025;
    (camera.position.y as number) += (mouse.current.y * 1.2 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });

  return <group ref={groupRef} />;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 16], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <DataNetwork />
    </Canvas>
  );
}
