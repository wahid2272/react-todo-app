import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            All Complete
          </label>
          <p>You have 0 things to do</p>
          <button id="delete">Delete All</button>
        </div>
    </div>
  );
};

export default Footer;
