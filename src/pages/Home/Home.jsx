import React, { useEffect, useState } from 'react';
// import InformationCard from '../components/InformationCard';
// import Button1 from '../components/Button1';
// import { Link } from 'react-router-dom';
// import Grid from '../components/Grid';
import ClothesList from './ListBaju';

const Home = () => {
  return (
    <div className="Home" style={{ width: '100%', height: '100%', background: '#F5F6FA', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
      <ClothesList />
    </div>
  );
};
  
export default Home;