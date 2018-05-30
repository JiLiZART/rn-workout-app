import React from 'react';
import { Provider } from 'react-redux';

import {createStackNavigator} from 'react-navigation';

import PersonsListView from './views/PersonsList/PersonsList'
import PersonsViewView from './views/PersonView/PersonView'
import PersonCreateView from './views/PersonCreate/PersonCreate'
import PersonEditView from './views/PersonEdit/PersonEdit'

import store from './store';

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
        },
        PersonEdit: {
            screen: PersonEditView
        }
    },
    {
        initialRouteName: 'PersonsList',
    }
);

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack persistenceKey={navigationPersistenceKey}/>
            </Provider>
        );
    }
}