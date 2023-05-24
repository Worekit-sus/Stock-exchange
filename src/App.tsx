import { useEffect, useState } from 'react'
import './App.css'
import {StockData} from './Types';

const Lista: {time: number, open: number,high: number,low: number, close: number}[] = [];

function App() {

  // Coingeko
  // dane spółki, symbol 
  // API - alpha vantage
  // wykres do zmiany cen dzisiaj, tydzien, miesiąc, rok - biblioteka highcharts wrapper
  // oraz typ wykresu line, area, candlestick, sparkliness
  // lista ulubionych spółek
  
  //1594382400000 (time),
  // 1.1 (open),
  // 2.2 (high),
  // 3.3 (low),
  // 4.4 (close)

  const [stock, setStock] = useState("bitcoin");
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState("30");
  const [data, setData] = useState<StockData>();


  const FetchData = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/${stock}/ohlc?vs_currency=${currency}&days=${days}`)
    .then(response => response.json())
    .then(data => setData(data))  
  }

  // przyp;isać do jakiejś list z obiektów czy coś no i charciki oraz autocompleta z currensami
  useEffect(() => {
    FetchData();
   
  },[])

  console.log(data);
  return (
    <>
      <div className='main-container'>
        <div className='header'>
          <h1>Stock exchange</h1>
          
            
          
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
            
            <h1>Search stocks</h1>

            <input type="text" placeholder="Search stocks" value={stock} onChange={(e) => setStock(e.target.value)}  />
            
          </div>
        </div>
        <div className='stock-data'>

          {stock}

        </div>
      </div>
    </>
  )
}

export default App
