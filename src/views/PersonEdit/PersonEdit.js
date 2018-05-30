import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'
import styles from './PersonEdit.styles';
import {attachImage} from "../../actions/personsActions";

@connect(
    state => ({}),
    {
        attachImage,
    }
)
export default class PersonEdit extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <Text>Person Edit</Text>

                <Button onPress={() => this.props.attachImage()} title="Attach Image" />
            </View>
        )
    }
}