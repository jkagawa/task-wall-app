import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Header() {
  return (
    <header>
      <h1>
        <CheckCircleOutlineIcon />
        <div>Task Wall</div>
      </h1>
    </header>
  );
}

export default Header;
