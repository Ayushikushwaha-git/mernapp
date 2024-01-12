import React from 'react';
import ConsumerNavbar  from './ConsumerNavbar';
export default function HomeForConsumer() {
  return (
    <div>
      <ConsumerNavbar/>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </div>
  );
}
