import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafc',
    },
    person: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fafafc',
        borderBottomColor: '#ededef',
        borderBottomWidth: 1,
        maxHeight: 140,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
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
    nameFirst: {
        marginBottom: 5,
    },
    content: {
        flex: 4,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    }
})