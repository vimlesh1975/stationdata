'use client';

import Link from 'next/link';
import Mumbai from './Mumbai';
import Ahmedabad from './Ahmedabad';
import ComponentContainer from './ComponentContainer';
import { useState } from 'react';

const Stations = [
  { component: Mumbai, name: 'Mumbai' },
  { component: Ahmedabad, name: 'Ahmedabad' },
];

export default function Home() {
  const [currentStation, setCurrentStation] = useState(Stations[0]);
  return (
    <div>
      <h1 style={{ textAlign: 'center', backgroundColor: 'coral' }}>
        Station Data
      </h1>
      <div style={{ display: 'flex' }}>
        <div
          style={{ width: 200, height: '90vh', backgroundColor: 'Highlight' }}
        >
          {Stations.map((Station, i) => (
            <li
              key={i}
              style={{ color: 'white' }}
              onClick={() => setCurrentStation(Station)}
            >
              <Link href={''}>{Station.name}</Link>
            </li>
          ))}
        </div>
        <div style={{}}>
          {currentStation.name}
          <ComponentContainer ComponentName={currentStation.component} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'ActiveBorder',
          color: 'white',
          textAlign: 'center',
        }}
      >
        CopyRight @DDK Mumbai 2023
      </div>
    </div>
  );
}
