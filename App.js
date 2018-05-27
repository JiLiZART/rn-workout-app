import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {createStackNavigator} from 'react-navigation';

import PersonsListView from './src/views/PersonsList/PersonsList'
import PersonsViewView from './src/views/PersonView/PersonView'
import PersonCreateView from './src/views/PersonCreate/PersonCreate'

const store = createStore((state) => state);

const RootStack = createStackNavigator(
    {
        PersonsList: {
            screen: PersonsListView
        },
        PersonsView: {
            screen: PersonsViewView
        },
        PersonCreate: {
            screen: PersonCreateView
        }
    },
    {
        initialRouteName: 'PersonsList',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack/>
            </Provider>
        );
    }
}