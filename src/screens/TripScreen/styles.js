import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    header: {
        height: 192,
        backgroundColor: 'grey'
    },
    backButton: {
        position: 'absolute',
        top: 36,
        left: 16,
    },
    tripName: {
        position:'absolute',
        left: 16,
        bottom: 16
    },
    tripPrice: {
        position: 'absolute',
        bottom: 16,
        right: 32,
        backgroundColor: '#24C6DC',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 4,
        paddingLeft: 4,
        color: 'white'
    },


    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    wrapperItemInfo: {
        flex: 1
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },
    price: {
        textAlign: 'center',
        color: '#24C6DC',
        fontWeight: 'bold'
    }
})

export default styles