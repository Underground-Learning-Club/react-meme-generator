import { useState } from 'react'
import '../CSS/Meme.scss'
import memesData from '../memesData'

const Meme = () => {
  const [memeImage, setMemeImage] = useState('')

  const getNewMemeImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage(url)
  }

  return (
    <>
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
          <button className="form--button" onClick={getNewMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <img src={memeImage} className="meme--image" />
      </main>
    </>
  )
}

export default Meme
