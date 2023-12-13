import '../CSS/Meme.scss'
import memesData from '../memesData'

const Meme = () => {
  const getNewMemeImage = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(memesData.data.memes[randomNumber].url)
  }

  return (
    <>
      <div className="meme--form">
        <div className="meme--input-fields-wrapper">
          <div className="meme--input-field-wrapper">
            <label htmlFor="topText">Top text</label>
            <input
              className="meme--input"
              type="text"
              name="topText"
              placeholder="Top Text"
            />
          </div>
          <div className="meme--input-field-wrapper">
            <label htmlFor="bottomtext">Bottom text</label>
            <input
              className="meme--input"
              type="text"
              name="bottomText"
              placeholder="Bottom Text"
            />
          </div>
        </div>

        <button className="meme--btn" onClick={getNewMemeImage}>
          Get new meme image
        </button>
      </div>
    </>
  )
}

export default Meme
