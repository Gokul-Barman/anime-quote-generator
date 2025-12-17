import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/quote");
      
      const { 
        content,
        character: {name: characterName},
        anime: {name: animeName}  } = response.data.data;
        setQuote({content,characterName, animeName})
    }  catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     
     {loading ? (<div>
      <h1 className="loading">loading...</h1>
     </div>) : quote ?  (
     <div className="quote-box">
      <h4 className="content">{quote.content}</h4>
      <p className="character-name">Character Name: <strong>{quote.characterName}</strong></p>
      <p className="anime-name">Anime Name: <strong>{quote.animeName}</strong></p>
     </div>
    ):(<div className="quote-box">
      <p>click the button to generate some random anime quote!</p>
    </div>)} 
    <div className="button-div">
      <button className="btn-css" onClick={fetchQuote}>generate quote</button>
    </div>
    <footer className="footer">
      <p className="footer-p">
        Created with ❤️ by <span>GB</span> | {new Date().getFullYear()}
      </p>
    </footer>
    </>
  )
}

export default App;
