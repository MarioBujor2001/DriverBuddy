import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default function InfoModal({ infoModalVisible, setInfoModalVisible, dayInfo }) {
    const computeCost = (data) => {
        return (data.km * data.gasCons / 100 * data.gasPrice).toFixed(2);
    }
    const computeNetIncome = (data) => {
        return data.ridesIncome + data.tipsIncome - computeCost(data);
    }
    const computeHourlyIncome = (data) => {
        return (computeNetIncome(data) / data.noHours).toFixed(2);
    }
    const computeRideIncome = (data) => {
        return (computeNetIncome(data) / data.noRides).toFixed(2);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalView}>
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Detalii pentru ziua</Text>
                    <View style={styles.dayContainer}>
                        <Text style={styles.textStyle}>{dayInfo.date}</Text>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>KM:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.km.toString() + " KM"} keyboardType='numeric' maxLength={4} editable={false} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Venituri:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.ridesIncome.toString() + " RON"} keyboardType='numeric' maxLength={4} editable={false} />
                    <Image source={require('../../../assets/plus.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.tipsIncome.toString() + " RON"} keyboardType='numeric' maxLength={4} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Consum:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.gasCons.toString() + " %"} keyboardType='numeric' maxLength={2} editable={false} />
                    <Image source={require('../../../assets/gas-station.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.gasPrice.toString() + " RON"} keyboardType='numeric' maxLength={4} editable={false} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Curse:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.noRides.toString()} keyboardType='numeric' maxLength={4} editable={false} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Ore:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} value={dayInfo.noHours.toString() + " H"} keyboardType='numeric' maxLength={2} editable={false} />
                </View>
            </View>
            {/* ride summary */}
            <View style={styles.summaryContainer}>
                <View style={[styles.textStyle, styles.summaryOutput, styles.blue, styles.center, { flexDirection: 'row' }]}>
                    <Image source={require('../../../assets/plus.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle]} value={dayInfo.ridesIncome + dayInfo.tipsIncome + " RON"} keyboardType='numeric' maxLength={2} editable={false} />
                </View>
                <View style={[styles.textStyle, styles.summaryOutput, styles.red, styles.center, { flexDirection: 'row' }]}>
                    <Image source={require('../../../assets/gas-station.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle]} value={computeCost(dayInfo) + " RON"} keyboardType='numeric' maxLength={2} editable={false} />
                </View>
                <View style={[styles.textStyle, styles.summaryOutput, styles.green, styles.center, { flexDirection: 'row' }]}>
                    <Image source={require('../../../assets/equal.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle]} value={computeNetIncome(dayInfo) + " RON"} keyboardType='numeric' maxLength={2} editable={false} />
                </View>
            </View>
            <View style={[styles.summaryContainer, styles.summaryStatistics, styles.green, { justifyContent: 'space-evenly' }]}>
                <View style={[styles.textStyle, styles.summaryOutput, styles.green, styles.center, { flexDirection: 'row', width: 200 }]}>
                    <Image source={require('../../../assets/plus.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle]} value={computeHourlyIncome(dayInfo) + " RON/H"} keyboardType='numeric' maxLength={2} editable={false} />
                </View>
                <View style={[styles.textStyle, styles.summaryOutput, styles.green, styles.center, { flexDirection: 'row', width: 200 }]}>
                    <Image source={require('../../../assets/equal.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle]} value={computeRideIncome(dayInfo) + " RON/CURSA"} keyboardType='numeric' maxLength={2} editable={false} />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setInfoModalVisible(!infoModalVisible)}>
                    <Text style={styles.textStyle}>Inchide</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    modalView: {
        width: '95 %',
        height: '70 %',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginHorizontal: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginHorizontal: 10
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
        fontSize: 20,
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
        height: 50,
        marginHorizontal: 5
    },
    summaryOutput: {
        borderRadius: 15,
        padding: 10,
        width: 150,
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
        width: "80%",
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