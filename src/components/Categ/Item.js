import React from "react";

export default ({ handleClick, link, name, className }) => (
    <div onClick={handleClick} className={className}>
        <a href={link}>{name}</a>
    </div>
);
