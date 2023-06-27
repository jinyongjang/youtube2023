import React, { useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
  const [selectCategory, setselectCategory] = useState('빠니보틀');

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
        <Videos />
      </section>
    </main>
  );
};

export default MainConts;
