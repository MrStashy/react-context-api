import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

const TwitterContext = createContext();


function App() {
  const loadedTheme = localStorage.getItem('theme')
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(loadedTheme || "light");


  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <TwitterContext.Provider value={ { theme, setTheme,  tweets, setTweets, user } }>
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </TwitterContext.Provider>
  );
}

export { App };
export default TwitterContext;
