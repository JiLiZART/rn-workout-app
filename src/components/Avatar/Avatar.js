import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'
import styles from './Avatar.styles';

export default class Avatar extends Component {
    render() {
        const {person} = this.props;

        return (
            <View style={styles.avatar}>
                <Image
                    style={[
                        styles.image,
                        this.props.size === 'md' && styles.imageSizeMd,
                        this.props.size === 'lg' && styles.imageSizeLg
                    ]}
                    source={{uri: this.props.url}}
                />
            </View>
        )
    }
}