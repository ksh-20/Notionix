import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimit from '../components/RateLimit'
import axios from 'axios'

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async() => {
      try {
        const res = await axios.get("https://localhost:5001/api/notes");
        console.log(res.data);
      } catch (error) {
        console.error("Error Fetching Notes", error);
      }
    }
    fetchNotes();
  },[])
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimit />}
    </div>
  )
}

export default HomePage