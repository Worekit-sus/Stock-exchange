import { useState } from 'react'
import './App.css'

function App() {

  // OG9LS4THFHZYBROP
  // dane spółki, symbol 
  // API - alpha vantage
  // wykres do zmiany cen dzisiaj, tydzien, miesiąc, rok - biblioteka highcharts wrapper
  // oraz typ wykresu line, area, candlestick, sparkliness
  // lista ulubionych spółek
  
  return (
    <>
      <div className='main-container'>
        <div className='header'>
          <h1>Stock exchange</h1>
          
            <h1>BTC +0,06%</h1>
            <h1>ETH +0,32%</h1>
            <h1>BNB -0,07%</h1>
          
          <select>
            <option>USD $</option>
            <option>EUR €</option>
            <option>PLN zł</option>
            <option>JPY ¥</option>
            <option>GBP £</option>
            <option>CAD $</option>
            <option>ARS $</option>
          </select>
        </div>
        <div className='favorite-search'>
          

          <div>
            <h1>Stocks you follow</h1>
            <h3>Bitcoin</h3>
            <h3>Ethereum</h3>
            <h1>Search stocks</h1>

            <input type="text" placeholder="Search stocks"  />
            <h3>Dogecoin</h3>
            <h3>Polygon</h3>
          </div>
        </div>
        <div className='stock-data'>
          <h1>Stock data</h1>
          <h1>img BTC +0.60%</h1>
          <h4>1 BTC =        126.2149534 PLN</h4>
        </div>
      </div>
    </>
  )
}

export default App
