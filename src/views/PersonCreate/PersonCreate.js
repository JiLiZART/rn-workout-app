import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'
import styles from './PersonCreate.styles';

export default class PersonCreate extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <Text>Person Create</Text>
            </View>
        )
    }
}