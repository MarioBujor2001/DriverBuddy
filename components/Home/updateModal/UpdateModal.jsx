import { StyleSheet, View, Text, Image, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
export default function UpdateModal({ updateModalVisible, setUpdateModalVisible, updateEntry, handleUpdateEntry }) {
    const [km, setKm] = useState(updateEntry.km);
    const [ridesIncome, setRidesIncome] = useState(updateEntry.ridesIncome);
    const [tipsIncome, setTipsIncome] = useState(updateEntry.tipsIncome);
    const [gasCons, setGasCons] = useState(updateEntry.gasCons);
    const [gasPrice, setGasPrice] = useState(updateEntry.gasPrice);
    const [noRides, setNoRides] = useState(updateEntry.noRides);
    const [noHours, setNoHours] = useState(updateEntry.noHours);

    const handleUpdateEntryValidation = () => {
        const entryList = [km, ridesIncome, tipsIncome, gasCons, gasPrice, noRides, noHours];
        for (e of entryList) {
            if (e === 0) {
                Alert.alert('Date lipsa', `Introduceti o valoare pentru fiecare camp !`, [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            //do smth
                        }
                    }
                ]);
                return;
            }
        }
        //TODO: add the entry if there is no missing input
        //FIXME: atm it just closes it
        handleUpdateEntry({ date: updateEntry.date, gasCons, gasPrice, id: updateEntry.id, km, noHours, noRides, ridesIncome, tipsIncome });
        setUpdateModalVisible(!updateModalVisible);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalView}>
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Modifica detalii pentru ziua</Text>
                    <View style={styles.dayContainer}>
                        <Text style={styles.textStyle}>{updateEntry.date}</Text>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>KM:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.km.toString()}
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setKm(parseInt(value)) }} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Venituri:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.ridesIncome.toString()}
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setRidesIncome(parseInt(value)) }} />
                    <Image
                        source={require('../../../assets/plus.png')}
                        style={styles.image} />
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.tipsIncome.toString()}
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setTipsIncome(parseInt(value)) }} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Consum:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.gasCons.toString()}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(value) => { setGasCons(parseInt(value)) }} />
                    <Image source={require('../../../assets/gas-station.png')} style={styles.image} />
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.gasPrice.toString()}
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setGasPrice(parseFloat(value.replace(',', '.'))) }} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Curse:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.noRides.toString()}
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setNoRides(parseInt(value)) }} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Ore:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        defaultValue={updateEntry.noHours.toString()}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(value) => { setNoHours(parseInt(value)) }} />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setUpdateModalVisible(!updateModalVisible)}>
                    <Text style={styles.textStyle}>Anuleaza</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonAdd]}
                    onPress={() => handleUpdateEntryValidation()}>
                    <Text style={styles.textStyle}>Salveaza</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    modalView: {
        width: '95 %',
        height: '60 %',
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
        marginRight: 5,
    },
    button: {
        borderRadius: 20,
        padding: 15,
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