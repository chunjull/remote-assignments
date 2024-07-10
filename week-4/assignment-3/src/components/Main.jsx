import { useState } from "react";

const initialCards = [
  {
    id: 0,
    context: "Interstellar Adventure",
    imageUrl: "https://images.unsplash.com/photo-1447433516455-abac93050eab?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "flex"
  },
  {
    id: 1,
    context: "Camping & Gazing",
    imageUrl: "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "flex"
  },
  {
    id: 2,
    context: "Outdoor Stargazing",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "flex"
  },
  {
    id: 3,
    context: "Solar Eclipse",
    imageUrl: "https://images.unsplash.com/photo-1577372216811-57a9facec877?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "flex"
  },
  {
    id: 4,
    context: "Star Trail",
    imageUrl: "https://images.unsplash.com/photo-1483470561301-395323922c3c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "none"
  },
  {
    id: 5,
    context: "Observe the Moon",
    imageUrl: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "none"
  },
  {
    id: 6,
    context: "Earth Exploration",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "none"
  },
  {
    id: 7,
    context: "Build a Rocket",
    imageUrl: "https://images.unsplash.com/photo-1516850228053-a807778c4e0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    display: "none"
  },
]

function Cards({cards}) {
  return(
    <ul className="card">
      {cards.map((card) => (
        <li
          className="cardItem"
          style={{ backgroundImage: `url(${card.imageUrl})`, display: `${card.display}` }}
          key={card.id}
        >
          <p>{card.context}</p>
        </li>
      ))}
    </ul>
  );
}

function Button({toggleClick, buttonText}) {
  return(
    <div className="buttonContainer">
      <button className="button" onClick={toggleClick}>{buttonText}</button>
    </div>
  );
}

function Main() {
  const [cards, setCards] = useState(initialCards);
  const [showMore, setShowMore] = useState(false);
  const toggleClick = () => {
    setCards((prevCards) =>
      prevCards.map((card, index) => {
        if (index >= 4) {
          return { ...card, display: showMore ? "none" : "flex" };
        }
        return card;
      })
    );
    setShowMore(!showMore);
  }
  return(
    <div className="container">
      <div className="main">
        <h3>Select a trip.</h3>
        <Cards cards={cards}></Cards>
        <Button toggleClick={toggleClick} buttonText={showMore ? "show less" : "show more"}></Button>
      </div>
    </div>
  );
}
export default Main;