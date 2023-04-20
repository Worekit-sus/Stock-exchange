import { useState } from 'react'
import './App.css'

function App() {

  // OG9LS4THFHZYBROP
  // dane spółki, symbol 
  // API - alpha vantage
  // wykres do zmiany cen dzisiaj, tydzien, miesiąc, rok - biblioteka highcharts wrapper
  // oraz typ wykresu liniowy, słupkowy, ...
  // lista ulubionych spółek
  
  return (
    <>
      <div className='main-container'>
        <div className='header'>
          <h1>Stock exchange</h1>
        </div>
        <div className='favorite-search'>
          <h1>Favorite stocks and search</h1>
        </div>
        <div className='stock-data'>
          <h1>Stock data</h1>
        </div>
      </div>
    </>
  )
}

export default App
