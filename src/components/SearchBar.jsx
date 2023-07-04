import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [SearchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onKeyPress = e => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (SearchTerm) {
      navigate(`/search/${SearchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <AiOutlineSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="동영상을 검색하세요"
        title="검색"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
