import React from 'react'
import './index.scss'
export default function DestinationCard({image,title,location}) {
  return (
    <div className='destination-card' >
        <div className='destination-card__destination-image'>
             <img className='destination-card__destination-image__round' width={'250px'} height={'270px'} src={image} />
             </div>
        <div className='destination-card__content' >
            <div className='destination-card__content__title'><p>{title}</p><div className='destination-card__content__title__orange-line'></div> </div>
            <div className='destination-card__content__location'><p>{location}</p></div>


        </div>
    </div>
  )
}
