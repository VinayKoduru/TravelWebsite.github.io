import React,{useEffect} from 'react'
import './main.css'
//importing icons
import { MdLocationPin } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";


//importing the images
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.png'
import img3 from '../../Assets/img3.png'
import img4 from '../../Assets/img4.png'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.png'
import img7 from '../../Assets/img7.png'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.png'
import img10 from '../../Assets/img10.png'
import img11 from '../../Assets/img11.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Array named data

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'The Grand Canyon',
    location: 'Arizona',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Glacier Trekking on Fox and Franz Josef',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Maui',
    location: 'Hawaii',
    grade: 'CULTURAL RELAX',
    fees: '$550',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Masai Mara',
    location: 'Kenya',
    grade: 'CULTURAL RELAX',
    fees: '$450',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'British Museum',
    location: 'London',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Statue of Liberty',
    location: 'USA',
    grade: 'CULTURAL RELAX',
    fees: '$1700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:10,
    imgSrc: img10,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$250',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  {
    id:11,
    imgSrc: img11,
    destTitle: 'paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays nas adventurous activities. '
  },

  
  
]

const Main = () => {

  // Creating a react hook to add a scroll animation..
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Desitination
        </h3>
        <div className="secContent grid">
          {/* *Here we use high ordfer array method(map).
              *To do that we use list of objects in one array.
              *I create an array named data and from that we use .map() array to 
              fetch each destination at once.
          */}
          
          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
              return( 
                <div key={id} data-aos="fade-up" className="singleDestination">
                  {/* Here it will return single id from the map array */}

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                    <MdLocationPin className='icon'/>
                    <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc"><p>{description}</p></div>
                    <button className="btn flex">DETAILS <FaClipboardCheck  className='icon'/>
                    </button>
                  </div>
                </div>
              )
            })
          }
          

        </div>
      </div>
    </section>
  )
}

export default Main
