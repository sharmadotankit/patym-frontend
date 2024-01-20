import React from 'react'
import "./BookAndBuy.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt ,faMoneyBillWave,faCreditCard,faShoppingCart,faWifi ,faGraduationCap ,faCogs   } from '@fortawesome/free-solid-svg-icons';


export default function BookAndBuy() {

  const data = [
    { icon: faMobileAlt , text: 'Movie Tickets >' },
    { icon: faMoneyBillWave , text: 'Flight Tickets >' },
    { icon: faCreditCard , text: 'Bus Tickets >' },
    { icon: faShoppingCart , text: 'Train Tickets >' },
    { icon: faWifi, text: 'buy Insurance >' },
    { icon: faGraduationCap, text: 'International Flight >' },
    { icon: faCogs , text: 'Invest in Stocks' },
  ];


  return (
    <div className='full-container-bb'>
    <div className='inner-container'>
    <h1>Book & Buy on Paytm.</h1>

    <div className='item-container'>
      {data.map((item, index) => (
        <div key={index}  className='item-div'>
          <FontAwesomeIcon icon={item.icon} size="2x" className='icon-fa'/>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    </div>
   
    </div>
  )
}
