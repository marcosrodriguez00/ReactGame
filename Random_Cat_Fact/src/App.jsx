/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_PREFIX_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)

        const firstWord = data.fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            console.log(response)
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <img src={`${CAT_PREFIX_URL}${imageUrl}`} alt={`Image extracted using the first word of the random fact: ${fact}`} />
    </main>
  )
}
