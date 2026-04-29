import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [museoData, setMuseoData] = useState(null)
  const BASE_URL = 'https://api.artic.edu/api/v1/artworks/'

  const fetchMuseo = async(id) =>{
    try{
      const response = await fetch(`${BASE_URL}${id}`)
      const data = await response.json()
      console.log(data)
      setMuseoData(data)
    }catch(error){
      console.error('Error con el fetch del museo')
    }
  }
  useEffect(()=> {
    fetchMuseo(129884)
  }, [])

  const imageUrl = museoData
  ? `https://www.artic.edu/iiif/2/${museoData.data.image_id}/full/200,/0/default.jpg`
  : null;

  return (
  <div>
    <h1>API Museo</h1>

    {museoData && (
      <>
        <h2>{museoData.data.title}</h2>

        <img 
          src = {imageUrl}
          alt={museoData.data.thumbnail?.alt_text}
        />
      </>
    )}
  </div>
)

}

export default App
