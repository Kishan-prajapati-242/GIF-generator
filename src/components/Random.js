import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import useGif from '../hooks/useGif';
import {Loader} from './Loader';

export default function Random() {

  const {gif, loading, fetchData} = useGif()

  useEffect( () => {
    fetchData();
  }, [])

  function clickHandler(){
    fetchData()
  }

  return (
    <div className="w-1/2 bg-green-400 rounded-xl border border-black flex flex-col items-center gap-y-5">
      <div className="text-3xl underline uppercase font-semibold mt-[15px]">a Random Gif</div>

      {loading ? (<Loader/>) : 
      (<img src={gif} width="450"></img>)}
      
      <button
      onClick={clickHandler}
      className="bg-white opacity-70 w-10/12 text-lg py-1 mt-[25px] rounded-lg font-bold mb-[30px]">
      GENERATE
      </button>

    </div>
  )
}
