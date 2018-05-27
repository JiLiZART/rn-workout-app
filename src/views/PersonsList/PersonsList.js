import React, {Component} from 'react';
import {FlatList, Text, View} from "react-native";
import {connect} from 'react-redux'
import styles from './PersonsList.styles';
import PersonsListRow from "./PersonsListRow/PersonsListRow";

@connect(
    state => ({
        persons: [
            {
                "id": 4,
                "first_name": "Eve",
                "last_name": "Holt",
                "status": "Active",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
            },
            {
                "id": 5,
                "first_name": "Charles",
                "last_name": "Morris",
                "status": "Active",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
            },
            {
                "id": 6,
                "first_name": "Tracey",
                "last_name": "Ramos",
                "status": "Active",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
            }
        ]
    })
)
export default class PersonList extends Component {
    static navigationOptions = {
        title: 'Persons',
    };

    _keyExtractor = (item, index) => item.id;

    renderItem = ({item}) => (
        <PersonsListRow person={item} onClick={this.onPersonClick}/>
    );

    onPersonClick = (person) => {
        this.props.navigation.navigate('PersonsView', person)
    };

    render() {
        return (
            <View styles={styles.container}>
                <FlatList
                    data={this.props.persons}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}