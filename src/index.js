import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';  // Import the store from your redux folder

ReactDOM.render(
    <Provider store={store}>  {/* Wrap App with Provider and pass the store */}
        <App />
    </Provider>,
    document.getElementById('root')
);
