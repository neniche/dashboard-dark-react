import React, {Fragment} from 'react';
import './globals.css';
import Header from './header.js';
import TopCardList from './top-card-list.js';
import Overview from './overview';
import Switch from './switch';

function App() {
  return (
    <Fragment>
      <Header>
        <Switch/>
      </Header>
      <TopCardList/>
      <Overview/>
    </Fragment>
  );
}

export default App;
