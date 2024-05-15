import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader';

const API_KEY = "7ilQImKPPnwN5rs9u9sOmrBnFoR8oyFz"


export default function useGif(tag) {

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false)
  
const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


  async function fetchData(tag) {
    try{
      setLoading(true)
      const {data} = await axios.get(tag ? (tagMemeurl) : (randomMemeurl));
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource)
      setLoading(false)
    }
    catch(error){
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  useEffect( () => {
    fetchData();
  }, [])

  return {
       gif, loading, fetchData
  };

}
