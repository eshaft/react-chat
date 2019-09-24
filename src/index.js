import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import 'typeface-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const rootEl = document.getElementById('root');

const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        rootEl
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<App/>, rootEl);
        render(App);
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
