
import React from "react";

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = React.useState(messages[0]);

  function handleClick() {
    console.log('哈哈哈啊')
    setGreeting(randomMessage());
  }

  return (
    <div>
      <h3>{greeting}</h3>
      <button className="btn"  onClick={handleClick}>
        New Greeting
      </button>
    </div>
  );
}