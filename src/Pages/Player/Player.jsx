import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'



const Player = () => {

  const {id} = useParams()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })



  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzYzY2RmNDFjODgyZWNiMDc1Yjc5N2MzOTRlYzRhYiIsIm5iZiI6MTc2NzMwMzk2MC4zNTIsInN1YiI6IjY5NTZlYjE4OWMyZjg0OGYzOWQ3YWJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Z_dS8M_wyw2hq17UphZ-NgKG6eqVFY6E_6VO8DPNkg'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])







  return (
    <div className='player'>
      <Link to="/">
      <img src={backArrowIcon} alt="" />
      </Link>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player__info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
