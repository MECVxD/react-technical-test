import { useEffect, useState } from "react"
import { getRandomFact } from "./services/facts"
import './App.css'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&fontColor=red&json=true`

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  
  

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ')[0]
          fetch(`https://cataas.com/cat/says/${firstWord}?size=50&fontColor=red`)
            .then(response => {
              const { url } = response
              setImageUrl(url)
            })
  },[fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return(
    <main>
      <h1>App de Gatitos</h1>
      {/* <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`} />}
      </section> */}
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`} />}
    </main>
  )
}