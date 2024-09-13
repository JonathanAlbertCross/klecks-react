import React from "react";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="./images/LogoKLECKS2.png" alt="Klecks logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#inkblotarea">Test</a>
          </li>
          <li>
            <a href="/results">Results</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
