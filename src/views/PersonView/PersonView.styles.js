import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    person: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fafafc',
        borderBottomColor: '#ededef',
        borderBottomWidth: 1,
    },
    name: {
        flex: 1,
        marginLeft: 20,
    },
    nameText: {
        color: '#1f1f1f',
        fontSize: 28,
        fontWeight: 'bold'
    },
})