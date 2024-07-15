import { useState } from "react";

function Banner() {
  const welcomeMessage = "welcome explorer".toUpperCase();
  const checkedMessage = "HAVE a GOOD TIME!";
  const [message, setMessage] = useState(welcomeMessage);
  const handleClick = () => setMessage(checkedMessage);
  const resetClick = () => setMessage(welcomeMessage);
  return(
    <div className="banner">
      <div className="container">
        <h2 onClick={ handleClick } onDoubleClick={ resetClick }>{ message }</h2>
      </div>
    </div>
  );
}
export default Banner;