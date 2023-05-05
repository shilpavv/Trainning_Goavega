import React from 'react';
// import memesData from './memesData';
export default function Meme() {
    /**
    * Challenge: Save the random meme URL in state
    * - Create new state called `memeImage` with an
    *   empty string as default
    * - When the getMemeImage function is called, update
    *   the `memeImage` state to be the random chosen
    *   image URL
    * - Below the div.form, add an <img /> and set the
    *   src to the new `memeImage` state you created
    */


    /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   * 
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   * 
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   * 
   * Lastly, update the `getMemeImage` function and the markup 
   * to reflect our newly reformed state object and array in the
   * correct way.
   */
    // const [memeImage,setImage]=React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: " "
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])


    function getImage() {
        // const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">

                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}

                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className='meme'>
                <img
                    src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}
