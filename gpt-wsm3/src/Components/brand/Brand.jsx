import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './Brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="dummy-text"/>
    </div>
    <div>
      <img src={slack} alt="dummy-text"/>
    </div>
    <div>
      <img src={atlassian} alt="dummy-text"/>
    </div>
    <div>
      <img src={dropbox} alt="dummy-text"/>
    </div>
    <div>
      <img src={shopify} alt="dummy-text"/>
    </div>
  </div>
);

export default Brand;