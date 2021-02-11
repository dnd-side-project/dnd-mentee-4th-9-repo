import React from 'react';
import {useLocation} from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function TestResult() {
  const location = useLocation();

  const getResultPlant = () => {
    const result = location.state;
    return Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
  };

  return (
    <div>
      {getResultPlant()}
      <Footer />
    </div>
  );
}

export default TestResult;
