import React, {Component} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'
import {StyleSheet} from 'react-native'
import styles from './PersonView.styles';
import Avatar from "../../components/Avatar/Avatar";
import SegmentControl from 'react-native-segment-controller';

const cn = StyleSheet.flatten;

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
            headerRight: (
                <Button
                    onPress={() => navigation.push('PersonEdit')}
                    title="Edit"
                />
            ),
        };
    };

    state = {
        index: 0,
        content: ''
    };

    onPress = (index) => {
        this.setState({content: `Segment ${index + 1} selected !!!`, index});
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
                        <Text style={cn([styles.nameText, styles.nameFirst])}>{firstName}</Text>
                        <Text style={cn([styles.nameText, styles.nameLast])}>{lastName}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <SegmentControl
                        values={['One', 'Two', 'Three', 'Four']}
                        badges={[0, 5, 0, 2]}
                        selectedIndex={this.state.index}
                        height={30}
                        onTabPress={this.onPress}
                        borderRadius={5}
                        tabBadgeContainerStyle={{backgroundColor: 'red'}}
                    />
                    <View style={{marginTop: 20, marginBottom: -50}}>
                        <Text style={styles.tab}>{this.state.content}</Text>
                        <Text style={styles.info}>Author: csath</Text>
                        <Text style={styles.info}>Email: chanakaathurugiriya@gmail.com</Text>
                    </View>
                </View>
                <Text>Person View</Text>
            </View>
        )
    }
}