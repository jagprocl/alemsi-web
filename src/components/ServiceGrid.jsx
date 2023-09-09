import React from 'react';
import ServiceCard from './ServiceCard';
import { data } from '../local/data';

const ServiceGrid = () => {
  const handleClick = (action, message) => {
    const topic = document.getElementById('topic');
    topic.value = message;
  };
  return (
    <>
      <div className='service-grid'>
        {data.map((d, k) => (
          <ServiceCard key={k} {...d} onClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default ServiceGrid;
