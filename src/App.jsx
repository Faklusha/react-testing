import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './reducers/reducer';

const store = createStore(Reducer);
import Page from './components/pages/Page';


export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Page/>
                </Provider>
            </div>
        );
    }
}