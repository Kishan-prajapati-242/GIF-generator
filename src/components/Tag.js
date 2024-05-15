import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Loader } from './Loader';
import useGif from '../hooks/useGif';

export default function Tag() {

  const [tag, setTag] = useState("")

  const {gif, loading, fetchData} = useGif(tag)

  useEffect( () => {
    fetchData();
  }, [])

  function clickHandler(){
    fetchData(tag)
  }

  function changeHandler(e){
    setTag(e.target.value)
  }

  return (
    <div className="w-1/2 bg-blue-400 rounded-xl border border-black flex flex-col items-center gap-y-5">
      <div className="text-3xl underline uppercase font-semibold mt-[15px]">Random {tag} Gif</div>


      {loading ? (<Loader/>) : 
      (<img src={gif} width="450"></img>)}
      

      <input
        className="w-10/12 text-lg py-1 mt-[25px] rounded-lg text-center"
        placeholder="what kind of GIF you would like to see"
        onChange={changeHandler}
        value={tag}
      />

      <button
      onClick={clickHandler}
      className="bg-white opacity-70 w-10/12 text-lg py-1 mt-[6px] rounded-lg font-bold mb-[30px]">
      GENERATE
      </button>

    </div>
  )
}
