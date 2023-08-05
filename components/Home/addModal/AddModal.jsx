import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default function AddModal({ modalVisible, setModalVisible }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalView}>
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Adauga detalii pentru ziua</Text>
                    <View style={styles.dayContainer}>
                        <Text style={styles.textStyle}>{'25.03.2023'}</Text>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>KM:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='230 KM' keyboardType='numeric' maxLength={4} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Venituri:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='702 RON' keyboardType='numeric' maxLength={4} />
                    <Image source={require('../../../assets/plus.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='58 RON' keyboardType='numeric' maxLength={4} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Consum:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='12%' keyboardType='numeric' maxLength={2} />
                    <Image source={require('../../../assets/gas-station.png')} style={styles.image} />
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='4.3 RON' keyboardType='numeric' maxLength={4} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Curse:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='50' keyboardType='numeric' maxLength={4} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Ore:</Text>
                    <TextInput style={[styles.textStyle, styles.textInput]} placeholder='4 H' keyboardType='numeric' maxLength={2} />
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
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Adauga</Text>
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