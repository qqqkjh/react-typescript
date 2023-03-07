import React, { useState } from 'react';
import '@src/css/header.css';

interface MenuButtonProps {
    text : string
    onClick? : () => void;
}

const MenuButton = (prop: MenuButtonProps) => {
    const { text , onClick } = prop;

    return (
      <button onClick={onClick} className="menu-btn" type="button">{text}</button>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header className="header">
        <div className="header-box">
          <div className="header-item">
            <MenuButton text={'메뉴'} onClick={handleClick} />
          </div>
          <div className="header-item">

            <h1 className="root-title">
              <p className="sub-title">{isOpen ? '트루' : '펄스'}</p>
            </h1>
          </div>
          <div className="header-item">

            <div className="search-box">
              <button className="btn search-btn" type="button">통합 검색</button>
              <div className="input-group" />
            </div>
          </div>
        </div>
      </header>

    );
};

export default Header;
