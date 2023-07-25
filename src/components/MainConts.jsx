import React, { useState, useEffect } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
  const [selectCategory, setselectCategory] = useState('빠니보틀');
  const [videos, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${selectCategory}&type=video&key=AIzaSyAi3oS-PQt8OVW6Njn4l4CEXeK8m8W-fMQ`,
    )
      .then(response => response.json())
      .then(result => {
        setYoutubes(result.items);
        // console.log(result.items);
      })
      .catch(error => console.log(error));
  }, [selectCategory]);

  // if (!videos?.items) return <Loader />;

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setselectCategory={setselectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} 유튜버</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
