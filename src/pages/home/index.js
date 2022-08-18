import React from 'react'
import DestinationCard from '../../components/destinationcard'
import './index.scss'
import LocationImage from '../../assets/img/locations/istanbul.jpg'
export default function Home() {
  return (
    <div className='home'>
      <div className='home__content-box'>
        <h1 >Plan your Adventures with us</h1>
        <h2  >Experience a Journey full of adventures with the peaceful environment</h2>
        <button className='home__content-box__button'>Explore Now</button>
        <div className='home__content-box__search-box' >
          <div className='home__content-box__search-box__searchbox-item'>
              <p>Location</p>
              <select>
                <option>Istanbul</option>
                <option>Austin</option>
                <option>London</option>
                <option>Venice</option>

              </select>
          </div>
          <div className='home__content-box__search-box__searchbox-item'>
              <p>Price Range</p>
              <select>
                <option>$400-$1000</option>
                <option>$200-$399</option>
                <option>$50-$199</option>
              </select>
          </div>
          <button className='home__content-box__search-box__searchbox-button' >Search</button>
        </div>
        

      </div>
      <div className='destination'>
        <div className='destination__container' >
        <div className='destination__container__destination-title' >
          <h3>Popular Destinations</h3>
          <p>From Religious Places to splendours. Visit the most popular places.</p>
        </div>
        <div className='destination__container__arrows-row' >
        </div>
        <div className='destination__container__destination-items' >
          <DestinationCard title={'01'} location={'Istanbul,Turkey'} image={LocationImage} />
          <DestinationCard title={'02'} location={'Istanbul,Turkey'} image={LocationImage} />
          <DestinationCard title={'03'} location={'Istanbul,Turkey'} image={LocationImage} />
          <DestinationCard title={'04'} location={'Istanbul,Turkey'} image={LocationImage} />


        </div>

      </div>
        </div>
     
      <div className='speacial-offers'>
        <div className='special-offers__container' >
          
        </div>

      </div>

    </div>
  )
}
