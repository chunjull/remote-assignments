function Banner() {
  const welcomeMessage = "welcome explorer".toUpperCase();
  const checkedMessage = "HAVE a GOOD TIME!";
  const handleClick = (e) => e.target.textContent = `${checkedMessage}`;
  const resetClick = (e) => e.target.textContent = `${welcomeMessage}`;
  return(
    <div className="banner">
      <div className="container">
        <h2 onClick={(e) => handleClick(e)} onDoubleClick={(e) => resetClick(e)}>{ welcomeMessage }</h2>
      </div>
    </div>
  );
}
export default Banner;