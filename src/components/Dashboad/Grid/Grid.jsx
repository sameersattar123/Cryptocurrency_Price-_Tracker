import React from 'react'
import "./style.css"

const Grid = ({coin}) => {
  return (
    <div className='grid-container'>
      <div className="info-flex">
        <img src={coin.image} alt="image" className='coin-image' />
        <div className="name-col">
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </div>
      <div className="chip-flex">
        <div className={coin.price_change_percentage_24h > 0 ? "coin-price-green" : "coin-price-red"}>{coin.price_change_percentage_24h.toFixed(3)}%</div>
      </div>
    </div>
  )
}

export default Grid