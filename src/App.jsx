import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Card from './components/Card'
import data from './data'

console.log(data)

function App() {

  const card = data.map( (item) => {
              return(

               <Card 
                    key = {item.id}            
                    {...item}
               />
                     

              )

  }

  )

  return (
    <>
    <Navbar/>
    {card}
    </>
  )
}

export default App
