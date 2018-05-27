import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    row: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fafafc',
        borderBottomColor: '#ededef',
        borderBottomWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
    },
    infoText: {
        color: '#d4d4d6'
    },
    name: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    nameText: {
        flex: 1,
        color: '#1f1f1f',
        fontSize: 18,
        fontWeight: 'bold'
    },
    status: {
        flex: 1,
        flexDirection: 'column',
    },
    statusText: {
        marginTop: 'auto',
        marginLeft: 'auto',
        color: '#d4d4d6'
    },
})