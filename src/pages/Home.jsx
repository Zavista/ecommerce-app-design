import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
    </div>
  )
}

export default Home