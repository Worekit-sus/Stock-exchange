import { useEffect, useState } from 'react'
import './App.css'


const Lista: {time: number, open: number,high: number,low: number, close: number}[] = [];

function App() {

  // Coingeko
  // dane spółki, symbol 
  // API - alpha vantage
  // wykres do zmiany cen dzisiaj, tydzien, miesiąc, rok - biblioteka highcharts wrapper
  // oraz typ wykresu line, area, candlestick, sparkliness
  // lista ulubionych spółek
  [
    "btc",
    "eth",
    "ltc",
    "bch",
    "bnb",
    "eos",
    "xrp",
    "xlm",
    "link",
    "dot",
    "yfi",
    "usd",
    "aed",
    "ars",
    "aud",
    "bdt",
    "bhd",
    "bmd",
    "brl",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "eur",
    "gbp",
    "hkd",
    "huf",
    "idr",
    "ils",
    "inr",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "vef",
    "vnd",
    "zar",
    "xdr",
    "xag",
    "xau",
    "bits",
    "sats"
  ]

  const [stock, setStock] = useState("bitcoin");
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState("1");
  const [data, setData] = useState(Lista);
  const [list, setList] = useState(Lista);

  // przyp;isać do jakiejś list z obiektów czy coś no i charciki oraz autocompleta z currensami
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${stock}/ohlc?vs_currency=${currency}&days=${days}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
  },[])

  console.log(data);
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

          

        </div>
      </div>
    </>
  )
}

export default App
