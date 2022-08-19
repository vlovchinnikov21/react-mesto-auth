import React from 'react';
import mainLogo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
          <img
            src={mainLogo}
            alt="лого-место"
            className="logo"
          />
        </header>
    );
}

export default Header