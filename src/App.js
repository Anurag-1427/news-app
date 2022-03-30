import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
// import logo from './logo.svg';
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";



const alanKey = '0a96f599bc087ae65372595769426ad82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines'){
          console.log(articles);
          setNewsArticles(articles);
        }
      }
    })
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
