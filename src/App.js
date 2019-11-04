import React from 'react';

import Layout from './components/Layout/Layout';
import Builder from './containers/Builder/Builder';

function App() {
  return (
    <div className="App">
      <Layout>
        <h2>Here goes all the content </h2>
        <Builder></Builder>
      </Layout>
    </div>
  );
}

export default App;
