import React from 'react'
import LinkContainer from './components/LinkContainer'
import {useEffect, useState} from 'react'

function App() {
  /*
  const [message, setMessage] = useState(null) 

  const fetchAPI = async () => {
    try {
      let response = await fetch('/api')
      let data = await response.json()
      setMessage(data.message)
    } catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // perform API request
    // use fetch to get our data
    fetchAPI()
  }, [])
*/
  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
