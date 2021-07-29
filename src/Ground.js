import React from 'react'

export const Ground = (props) => {
  return <mesh>
    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
    <meshStandardMaterial attach="material" />
  </mesh>
}