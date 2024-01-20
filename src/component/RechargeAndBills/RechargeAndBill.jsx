import React from 'react'
import "./RechargeAndBill.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt ,faMoneyBillWave,faCreditCard,faShoppingCart,faWifi ,faGraduationCap ,faCogs   } from '@fortawesome/free-solid-svg-icons';


export default function RechargeAndBill() {

  const data = [
    { icon: faMobileAlt , text: 'Recharge Prepaid Mobile >' },
    { icon: faMoneyBillWave , text: 'Pay Electricity Bill >' },
    { icon: faCreditCard , text: 'Recharge DTH Connection >' },
    { icon: faShoppingCart , text: 'Book Gas Cylinder >' },
    { icon: faWifi, text: 'Pay Broadband & Landline Bill >' },
    { icon: faGraduationCap, text: 'Pay Eduction Fee >' },
    { icon: faCogs , text: 'All Payment Services' },
  ];


  return (
    <div className='full-container'>
    <div className='inner-container'>
    <h1>Recharge & Pay Bills on Paytm.</h1>

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
