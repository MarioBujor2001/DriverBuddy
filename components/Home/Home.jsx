import { StyleSheet, View, Modal, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import Menu from './header/Menu'
import AddButton from './header/AddButton';
import MonthsBar from './monthsBar/MonthsBar';
import EntriesList from './content/EntriesList';
import TotalIncome from './content/TotalIncome';
import { useState } from 'react';
import AddModal from './addModal/AddModal';
import InfoModal from './infoModal/InfoModal';
import data from './content/data';
import { useEffect } from 'react';
import { computeNetIncome } from './computeUtils';
import MenuModal from './menuModal/MenuModal';
import UpdateModal from './updateModal/UpdateModal';
import axios from 'axios';
export default function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [infoModalVisible, setInfoModalVisible] = useState(false);
    const [menuModalVisible, setMenuModalVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [dayInfo, setDayInfo] = useState({});
    const [months, setMonths] = useState([
        { id: 0, name: 'Ianuarie' },
        { id: 1, name: 'Februarie' },
        { id: 2, name: 'Martie' },
        { id: 3, name: 'Aprilie' },
        { id: 4, name: 'Mai' },
        { id: 5, name: 'Iunie' },
        { id: 6, name: 'Iulie' },
        { id: 7, name: 'August' },
        { id: 8, name: 'Septembrie' },
        { id: 9, name: 'Octombrie' },
        { id: 10, name: 'Noiembrie' },
        { id: 11, name: 'Decembrie' }]);
    const [monthSelected, setMonthSelected] = useState(new Date().getMonth());
    const [total, setTotal] = useState(0);
    const [usedData, setUsedData] = useState(data);
    const [updateEntry, setUpdateEntry] = useState({});

    useEffect(() => {
        axios.get(`https://4c47-2a02-2f0f-c104-ef00-7494-fc6b-e4d-7fe6.ngrok-free.app/entries?month=${monthSelected + 1}`)
            .then((resp) => {
                setUsedData(resp.data);
            })
            .catch((err) => { console.error(err.toJSON()); })
    }, [])

    useEffect(() => {
        axios.get(`https://4c47-2a02-2f0f-c104-ef00-7494-fc6b-e4d-7fe6.ngrok-free.app/entries?month=${monthSelected + 1}`)
            .then((resp) => {
                setUsedData(resp.data);
                updateTotal(resp.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [monthSelected])

    const updateTotal = (array) => {
        setTotal(array.reduce((acc, curr) => acc + computeNetIncome(curr), 0).toFixed(2));
    }

    const handleAddEntry = (entry) => {
        //TODO: axios.post
        axios.post(`https://4c47-2a02-2f0f-c104-ef00-7494-fc6b-e4d-7fe6.ngrok-free.app/entries`, entry)
            .then((resp) => { console.log('da'); })
            .catch((err) => { console.log('nu'); })
        const updated = [...usedData, entry];
        setUsedData(updated);
        updateTotal(updated);
    }

    const handleDeleteEntry = (entry) => {
        axios.delete(`https://4c47-2a02-2f0f-c104-ef00-7494-fc6b-e4d-7fe6.ngrok-free.app/entries/${entry.id}`)
            .then((resp) => { console.log('da'); })
            .catch((err) => { console.log('nu'); })
        const filtered = usedData.filter((element) => element.id !== entry.id);
        setUsedData(filtered);
        updateTotal(filtered);
    }

    const handleOpenUpdateEntry = (entry) => {
        setUpdateEntry(entry);
        setUpdateModalVisible(true);
    }

    const handleUpdateEntry = (entry) => {
        let index = usedData.findIndex(item => item.id === entry.id);
        if (index !== -1) {
            let replacement = [...usedData];
            replacement[index] = entry;
            setUsedData(replacement);
            updateTotal(replacement);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* adding modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <ScrollView contentContainerStyle={styles.absoluteView} keyboardShouldPersistTaps='handled'>
                    <AddModal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        handleAddEntry={handleAddEntry}
                        usedData={usedData}
                    />
                </ScrollView>
            </Modal>
            {/* info modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={infoModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setInfoModalVisible(!infoModalVisible);
                }}>
                <ScrollView contentContainerStyle={styles.absoluteView} keyboardShouldPersistTaps='handled'>
                    <InfoModal
                        infoModalVisible={infoModalVisible}
                        setInfoModalVisible={setInfoModalVisible}
                        dayInfo={dayInfo}
                    />
                </ScrollView>
            </Modal>
            {/* update modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={updateModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setUpdateModalVisible(!updateModalVisible);
                }}>
                <ScrollView contentContainerStyle={styles.absoluteView} keyboardShouldPersistTaps='handled'>
                    <UpdateModal
                        updateModalVisible={updateModalVisible}
                        setUpdateModalVisible={setUpdateModalVisible}
                        updateEntry={updateEntry}
                        handleUpdateEntry={handleUpdateEntry}
                    />
                </ScrollView>
            </Modal>
            {/* menu modal */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={menuModalVisible}
                onRequestClose={() => {
                    setMenuModalVisible(!menuModalVisible)
                }}
            >
                <TouchableOpacity
                    style={styles.menuView}
                    activeOpacity={1}
                    onPressOut={() => { setMenuModalVisible(false) }}
                >

                    <MenuModal
                        menuModalVisible={menuModalVisible}
                        setMenuModalVisible={setMenuModalVisible}
                        navigation={navigation}
                    />
                </TouchableOpacity>
            </Modal>
            <View style={styles.header}>
                <Menu
                    menuModalVisible={menuModalVisible}
                    setMenuModalVisible={setMenuModalVisible}
                />
                <AddButton
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
            </View>
            <View style={styles.monthsBar}>
                <MonthsBar
                    months={months}
                    setMonths={setMonths}
                    monthSelected={monthSelected}
                    setMonthSelected={setMonthSelected} />
            </View>
            <View style={styles.entriesContainer}>
                <EntriesList
                    setInfoModalVisible={setInfoModalVisible}
                    setDayInfo={setDayInfo}
                    usedData={usedData}
                    handleDeleteEntry={handleDeleteEntry}
                    handleOpenUpdateEntry={handleOpenUpdateEntry}
                />
                <TotalIncome month={months[monthSelected].name} total={total} navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 5,
        paddingEnd: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70
    },
    monthsBar: {
    },
    entriesContainer: {
        height: '85%',
    },
    //modal
    absoluteView: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'rgba(181, 181, 181, 0.53)',
        flex: 1,
    },
    //menu Modal
    menuView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(181, 181, 181, 0.53)',
        flex: 1,
    }
})