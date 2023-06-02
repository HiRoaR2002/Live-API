import React, { useState } from 'react';
import Shows from './Components/Shows';
import MoreInfo from './Components/MoreInfo';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      {selectedShow ? (
        <MoreInfo show={selectedShow} />
      ) : (
        <Shows onSelect={handleSelectShow} />
      )}
    </div>
  );



};

export default App;
