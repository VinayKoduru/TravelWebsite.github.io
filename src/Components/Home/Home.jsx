import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video2.mp4'
import { IoLocationSharp } from "react-icons/io5";
import { MdFilterListAlt } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  // Creating a react hook to add a scroll animation..
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
  <section className="home">
    <div className="overlay"></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>

    <div className="homeContent container">
      <div className="textDiv">

        <span data-aos="fade-up" className="smallText">
          Our Packages
        </span>

        <h1 data-aos="fade-up" className="homeTitle">
          Search your HOLIDAY
        </h1>
      </div>

      <div data-aos="fade-up" className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search your Destination:</label>
          <div className="input flex">
            <input type="text" placeholder='Enter name here' />
            <IoLocationSharp className='icon' />
          </div>
        </div>

        <div className="dateInput">
          <label htmlFor="date">select yout Date</label>
          <div className="input flex">
            <input type="date" />
          </div>
        </div>

        <div className="priceInput">
          <div className='input_total flex'>
            <label htmlFor='price'>Max price:</label>
            <h3 className='total'>$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max={5000} min={1000} />
          </div>
        </div>
        <div className="searchOptions flex">
          <MdFilterListAlt className='icon' />
          <span>Filter Here</span>
        </div>
      </div>

      <div data-aos="fade-up" className="homeFooterIcons flex">
        <div className="rightIcons">
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <FaTripadvisor className='icon' />
        </div>

        <div className="leftIcons">
          <CiCircleList className='icon' />
          <TbApps className='icon'/>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Home
