import React, { useEffect, useState } from 'react';
import RepoList from './RepoList';
import LoadingList from './LoadingList';
import Particlesss from "./ParticlesComp";

function Portfolio() {
  //Declare my constants
  const ListLoading = LoadingList(RepoList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/BernardDW/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='resume-image portfolio' id = "portfolio">
      <Particlesss></Particlesss>
      <div className=" titles">
          <h1>Portfolio</h1>
      </div> 
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default Portfolio;
