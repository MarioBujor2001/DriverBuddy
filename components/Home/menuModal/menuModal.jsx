import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { computeNetIncome, computeCost, computeHourlyIncome, computeRideIncome, computeIncome } from '../computeUtils';
export default function MenuModal({ menuModalVisible, setMenuModalVisible }) {
    return (
        <TouchableOpacity
            style={styles.modalView}
            activeOpacity={1}
        >
            <View
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.buttonsContainer}>

                </View>
                <View style={styles.detailsContainer}>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalView: {
        width: '45%',
        height: '100%',
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 90,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonAdd: {
        backgroundColor: '#6BCF6F',
    },
    buttonClose: {
        backgroundColor: '#EFA8A8',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
    },
    smallerTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 14
    },
    label: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        width: 90
    },
    modalText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textInput: {
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        padding: 10,
        width: 110,
        height: 40,
        marginHorizontal: 5
    },
    summaryOutput: {
        borderRadius: 15,
        padding: 10,
        width: 120,
        height: 50,
    },
    blue: {
        backgroundColor: '#90BBE2'
    },
    red: {
        backgroundColor: '#EFA8A8'
    },
    green: {
        backgroundColor: '#92E290'
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: "100%",
    },
    summaryStatistics: {
        borderRadius: 15,
        height: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    dayContainer: {
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10
    },
    detailsContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%'
    },
    input: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})