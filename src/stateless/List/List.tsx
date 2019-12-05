import React from 'react';
// import { FixedSizeList } from 'react-window';

export default function ListComponent(props: any) {
  // <FixedSizeList height={400} width={360} itemSize={46} itemCount={200}>
  // </FixedSizeList>
  return (
    <div style={{ height: '30vh', overflow: 'auto' }}>{props.children}</div>
  );
}
