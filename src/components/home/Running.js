import React from 'react';
import { blogList } from '../../database/blogList';
import { useState } from 'react';
//import { animeInfAdd } from '../posts/Post'


const Running = () => {
  console.disableYellowBox = true;
  console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

  const [ animeInformationNew, setanimeInformationNew ] = useState (0);

  const animePosts = blogList.map(animePost =>
    <div className='anime-item' onClick={ () => {setanimeInformationNew(animePost.id - 1);}}>
      <img className='anime-logo' src={animePost.img}/>
      <h3>{animePost.title}</h3>
    </div>
  )

  return (
    <div className='running-section'>
      <div className='row running-container'>
        <div className='box item1 running-anime'>
          <div className='box-title'>
            <h2>Anime information</h2>
          </div>
          <div className='anime-information'>
            <div className='anime-inf'>
              <h2>{blogList[animeInformationNew].title}</h2>
              <img src={blogList[animeInformationNew].img} />
              <h2>{blogList[animeInformationNew].tags}</h2>
            </div>
          </div>
        </div>
        <div className='box item2 running-anime'>
          <div className='box-title'>
            <h2>Running Season </h2>
          </div>
          <div className='anime-list'>
            {animePosts}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Running