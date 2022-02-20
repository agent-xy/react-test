import React from 'react';
import '../App.scss'
import Footer from '../components/Footer';
import Hero from '../components/home/Hero'
import Japan from '../components/home/Japan';
import Running from '../components/home/Running';
import Why from '../components/home/Why';
import { blogList } from '../database/blogList';


const Home = () => {
  return (
    <main className='home-container'>
      <Hero />
      <Running blogs={blogList}/>
      <Japan/>
      <Why />
      <Footer/>
    </main>
  );
}

export default Home;