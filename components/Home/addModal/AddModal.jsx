import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { formatDateToDdMmYyyy } from '../computeUtils';
export default function AddModal({ modalVisible, setModalVisible, handleAddEntry, usedData }) {
    const [km, setKm] = useState(0);
    const [ridesIncome, setRidesIncome] = useState(0);
    const [tipsIncome, setTipsIncome] = useState(0);
    const [gasCons, setGasCons] = useState(0);
    const [gasPrice, setGasPrice] = useState(0);
    const [noRides, setNoRides] = useState(0);
    const [noHours, setNoHours] = useState(0);

    useEffect(() => {
        for (e of usedData) {
            if (e.date === formatDateToDdMmYyyy(new Date())) {
                Alert.alert('Eroare', `Au fost deja introduse date pentru ziua curenta`, [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            //do smth
                        }
                    }
                ]);
                setModalVisible(!modalVisible);
            }
        }
    }, [])

    const handleAddEntryValidation = () => {
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
        setModalVisible(!modalVisible);
        handleAddEntry({ date: formatDateToDdMmYyyy(new Date()), gasCons, gasPrice, id: 1000, km, noHours, noRides, ridesIncome, tipsIncome });
        setModalVisible(!modalVisible);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalView}>
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Adauga detalii pentru ziua</Text>
                    <View style={styles.dayContainer}>
                        <Text style={styles.textStyle}>{formatDateToDdMmYyyy(new Date())}</Text>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>KM:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput, km === "" ? styles.errorTextInput : null]}
                        placeholder='--- KM' keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setKm(parseInt(value)) }}
                    />
                </View>
                <View style={styles.input}>
                    <Text
                        style={styles.label}>Venituri:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        placeholder='--- RON'
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setRidesIncome(parseInt(value)) }}
                    />
                    <Image
                        source={require('../../../assets/plus.png')}
                        style={styles.image} />
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        placeholder='--- RON'
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setTipsIncome(parseInt(value)) }}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Consum:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        placeholder='-- %'
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(value) => { setGasCons(parseInt(value)) }}
                    />
                    <Image source={require('../../../assets/gas-station.png')} style={styles.image} />
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        placeholder='-- RON'
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setGasPrice(parseInt(value)) }}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Curse:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        placeholder=''
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(value) => { setNoRides(parseInt(value)) }} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Ore:</Text>
                    <TextInput
                        style={[styles.textStyle, styles.textInput]}
                        placeholder='-- H'
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(value) => { setNoHours(parseInt(value)) }} />
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Inchide</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonAdd]}
                    onPress={() => { handleAddEntryValidation(); }}>
                    <Text style={styles.textStyle}>Adauga</Text>
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
        marginHorizontal: 5
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
    errorTextInput: {
        borderColor: 'red',
        borderWidth: 2,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
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
    }
})