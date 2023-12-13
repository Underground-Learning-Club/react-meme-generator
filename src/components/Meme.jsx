import '../CSS/Meme.scss'

const Meme = () => {
  return (
    <>
      <form className="meme--form">
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

        <button className="meme--btn">Get new meme image</button>
      </form>
    </>
  )
}

export default Meme
