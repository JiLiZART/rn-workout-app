import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'
import styles from './PersonView.styles';
import Avatar from "../../components/Avatar/Avatar";

@connect(
    state => ({
        person: {
            "id": 4,
            "first_name": "Eve",
            "last_name": "Holt",
            "status": "Active",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
    })
)
export default class PersonView extends Component {
    static navigationOptions = ({navigation}) => {
        const firstName = navigation.getParam('first_name', 'Foo');
        const lastName = navigation.getParam('last_name', 'Bar');

        return {
            title: `${firstName} ${lastName}`,
        };
    };

    render() {
        const {person} = this.props;
        const {navigation} = this.props;
        const avatar = navigation.getParam('avatar', '');
        const firstName = navigation.getParam('first_name', 'Foo');
        const lastName = navigation.getParam('last_name', 'Bar');

        return (
            <View style={styles.container}>
                <View style={styles.person}>
                    <View style={styles.avatar}><Avatar url={avatar} size="lg"/></View>
                    <View style={styles.name}>
                        <Text style={styles.nameText}>{firstName}</Text>
                        <Text style={styles.nameText}>{lastName}</Text>
                    </View>
                </View>
                <Text>Person View</Text>
            </View>
        )
    }
}