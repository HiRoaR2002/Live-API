import React from 'react'
import { useEffect} from 'react'
import './MoreInfo.css'
const MoreInfo = ({ show }) => {

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows?q=all`)
      .then((response) => response.json())
  }, [show]);

  return (
    <div className='Main-info'>
           
      <h2>Show Information</h2>
      <hr />
      <h3>Summary - {show.summary}</h3>
      <h3>Run Time - {show.runtime} mins</h3>
      <h3>Genres - {show.genres}</h3>

    </div>
  )
}

export default MoreInfo;
