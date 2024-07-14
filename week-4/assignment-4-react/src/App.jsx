import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    const fetchRepos = () => {
      setIsFetching(true);
      const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setRepos(prevRepos => [...prevRepos, ...data]);
          setIsFetching(false);
        })
        .catch(error => {
          console.log('Error: ', error);
          setIsFetching(false);
        });
    };

    fetchRepos();
  }, [page, initialLoad]);

  const handleMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <>
      <ul id="repos" className="cardContainer">
        {repos.map(repo => (
          <li key={ repo.id } className="card">
            <div className="card-title">
              <h3><a href={ repo.html_url } target="_blank" rel="noreferrer">{ repo.name }</a></h3>
              <span className="visibility">{ repo.visibility }</span>
            </div>
            <div className="description">{ repo.description || "No description" }</div>
            { repo.topics.length > 0 ? (
              <ul className="btnGroup">
                {repo.topics.map((topic, index) => (
                  <li key={ index } className="btnItem"><button className="topicsBtn">{ topic }</button></li>
                ))}
              </ul>
            ) : (
              <ul className="btnGroup" style={{ display: 'none' }}></ul>
            ) }
          </li>
        ))}
      </ul>
      <div className="moreBtnContainer">
        <button className="moreBtn" id="more" onClick={ handleMoreClick } disabled={ isFetching }>
          { isFetching ? "Loading..." : "More" }
        </button>
      </div>
    </>
  );
}

export default App;