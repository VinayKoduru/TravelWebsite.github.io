import React,{useEffect} from 'react'
import './footer.css'
import video3 from '../../Assets/video3.mp4'
import { RiSendPlane2Fill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaTripadvisor, FaChevronRight } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  // Creating a react hook to add a scroll animation..
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video3} autoPlay loop muted type='video/mp4' ></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND<RiSendPlane2Fill className='icon' />

            </button>
          </div>
        </div>  

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex"><MdTravelExplore className='icon'/>
              Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Today, the world where we live is covered with various
            interesting and beautiful places from which most of us
            are created by nature, and we humans create some. It 
            isn't easy to compile a list of all these top favourable
            places we should visit. The most prominent cities marked
            by most Tourist travellers include New York, Paris,
            London, Italy, Delhi, and many more.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <FaXTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FaInstagram className='icon'/>
              <FaTripadvisor className='icon'/>

            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group 1 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Services
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Insurance
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Agency
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Tourism
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Payments
            </li>

            </div>
            {/* Group 2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Bookings
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Rental Cars
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              HostelWorld
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Trivago
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              TripAdvisor
            </li>

            </div>
            {/* Group 3 */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              London
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              NewYork
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Paris
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              China
            </li>
            <li className="footerList flex">
              <FaChevronRight className='icon'/>
              Japan
            </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>Travel Theme Page built using React </small>
            <small>By ----Vinay Koduru----</small>
          </div>
        </div>

        
      </div>      
    </section>
  )
}

export default Footer
