import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="contentWrapper">
      HOME!
      <Link to="/board">Go to Board</Link>
    </div>
  );
}

export default Home;
