import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            Mark All Complete
          </label>
          <button id="delete">Delete All</button>
        </div>
    </div>
  );
};

export default Footer;
