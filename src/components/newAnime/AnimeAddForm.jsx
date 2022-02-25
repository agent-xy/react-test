import React from 'react'
import { useState } from 'react';

const AnimeAddForm = () => {

  const [name, setName] = useState('Hori-san to Miyamura')
  const [image, setImage] = useState('https://animesher.com/orig/1/113/1133/11331/animesher.com_anime-charlotte-1133142.gif')
  const [tags, setTags] = useState('Comedy, Romance, School, Shounen,')

  var id = 7;

  const handleSubmit = (e) => {
    e.preventDefault();
    const animeList = { id, image, name, tags };
    console.log(animeList);
    id++;
  }

  return (
    <div className='anime-add-form-section'>
      <div className='row anime-add-form-container'>
        <div className='box see-new-post-container'>
          <div className='box-title'>
            <h2>New anime post:</h2>
          </div>
          <p>{name}</p>
          <img src={image}/>
          <p>{tags}</p>
        </div>
        <div className='box anime-add-form'>
          <div className='box-title'>
            <h2>Add new anime:</h2>
          </div>
          <br />
          <form className='add-anime' onSubmit={handleSubmit}>
            
            <label htmlFor="">Anime name:</label>
            <input type="text" placeholder={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Anime tags:</label>
            <input type="text" placeholder={tags} onChange={(e) => setTags(e.target.value)} />

            <div className='new-anime-img-container'>
              <div className='new-anime-img'>
                <div className='doboz'>
                  <input type="radio" name="new-anime-cions" id="1-anime-img-checked" className='btn-radio-anime' onClick={ () => setImage('https://animesher.com/orig/1/113/1133/11331/animesher.com_anime-charlotte-1133142.gif')}/>
                  <label htmlFor="1-anime-img-checked">
                    <img className='new-anime-img-radio' src="https://animesher.com/orig/1/113/1133/11331/animesher.com_anime-charlotte-1133142.gif" alt="" />
                  </label>
                </div>
                <div className='doboz'>
                  <input type="radio" name="new-anime-cions" id="2-anime-img-checked" className='btn-radio-anime' onClick={ () => setImage('https://data.whicdn.com/images/318255633/original.gif')}/>
                  <label htmlFor="2-anime-img-checked">
                    <img className='new-anime-img-radio' src="https://data.whicdn.com/images/318255633/original.gif" alt="" />
                  </label>
                </div>
                <div className='doboz'>
                  <input type="radio" name="new-anime-cions" id="3-anime-img-checked" className='btn-radio-anime' onClick={ () => setImage('https://c.tenor.com/siuavYKgxtoAAAAC/yuu-charlotte.gif')} />
                  <label htmlFor="3-anime-img-checked">
                    <img className='new-anime-img-radio' src="https://c.tenor.com/siuavYKgxtoAAAAC/yuu-charlotte.gif" alt="" />
                  </label>
                </div>
              </div>
              <button className='btn-add-anime why-btn'>Add new</button>
            </div>
            <p className='dev-text'>under development</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AnimeAddForm