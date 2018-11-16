import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App/App';
import Root from '../Root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    document.body.appendChild(document.createElement('div'))
  );
});
