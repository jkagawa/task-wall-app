import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Made by <a href="https://jkagawa.com" target="_blank" rel="noopener noreferrer">Joshua Kagawa</a></p>
    </footer>
  );
}

export default Footer;
