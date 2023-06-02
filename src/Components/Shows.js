import React from 'react'
import { useState ,useEffect} from 'react';
import './Shows.css'
const Shows = ({onSelect}) => {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <div className='Shows'>
         <h2>List of Shows</h2>
      {shows.map((show) => (
        <div key={show.show.id} className='ShowData'>
          <div className='Title'>
            <h3>{show.show.name}</h3>
          </div>
          
          <div >
              
              <h2>{show.show.language}</h2>
              <button onClick={() => onSelect(show.show)}>More Information</button>
          </div>
         
        </div>
      ))}

    </div>
  )
}

export default Shows;
