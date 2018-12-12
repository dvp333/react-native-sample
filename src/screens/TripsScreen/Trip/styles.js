import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapperTrip: {
        backgroundColor: 'white',
        marginTop: 16,
        marginLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
    image: {
        backgroundColor: 'green',
        height: 144,
        marginBottom: 6
    },
    price: {
        position: 'absolute',
        top: 144 - 32,
        right: 32,
        backgroundColor: '#24C6DC',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 4,
        paddingLeft: 4,
        color: 'white'
    }
})

export default styles