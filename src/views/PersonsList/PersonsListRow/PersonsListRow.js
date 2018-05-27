import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'
import styles from './PersonsListRow.styles';
import Avatar from "../../../components/Avatar/Avatar";

export default class PersonsListRow extends Component {
    render() {
        const {person} = this.props;

        return (
            <TouchableOpacity onPress={() => this.props.onClick(person)} testID="issue-row">
                <View style={styles.row}>
                    <View>
                        <Avatar url={person.avatar} size="md"/>
                    </View>
                    <View style={styles.title}>
                        <View style={styles.name}>
                            <Text style={styles.nameText}>{person.first_name} {person.last_name}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoText}>Info 1</Text>
                            <Text style={styles.infoText}>Info 2</Text>
                        </View>
                    </View>
                    <View style={styles.status}>
                        <Text style={styles.statusText}>{person.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}