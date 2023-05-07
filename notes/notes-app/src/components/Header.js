import React from "react";

const Header = ({handleToggleDarkMode}) => {
    return(
        <div className="header">
            <h1>Notes Page</h1>
            <button className="save" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Theme</button>
        </div>
    )
};

export default Header;