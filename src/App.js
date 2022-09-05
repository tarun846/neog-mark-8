import "./styles.css";
import { useState } from "react";
const emojiDictionary = {
  "😥": "sad",
  "😑": "annoyance",
  "❤️": "red heart",
  "😊": "smiling",
  "😠": "angry",
  "🔥": "fire",
  "👍": "thumbs up",
  "🥭": "mango",
  "🙊": "Speak-No-Evil Monkey",
  "⚽": "Activity"
};
const emojis = Object.keys(emojiDictionary);
console.log(emojis);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) meaning = "Not present in dictionary";
    setMeaning(meaning);
  }
  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji FInder</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>Meaning:{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojis.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}