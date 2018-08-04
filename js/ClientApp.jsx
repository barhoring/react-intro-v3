import React from 'react';
import { render } from 'react-dom';

const App = () =>
    <div className='app'>
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' />
        <a href='google.com' >Or browse all</a>
      </div>
    </div>

render(<App />, document.getElementById('app'))