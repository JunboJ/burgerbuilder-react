import React from 'react';

import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Builder></Builder>
      </Layout>
    </div>
  );
}

export default App;
