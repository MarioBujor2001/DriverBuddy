import { StyleSheet, View, Text, Modal, Pressable, ScrollView, Alert } from 'react-native';
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
export default function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [infoModalVisible, setInfoModalVisible] = useState(false);
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
    useEffect(() => {
        const filtered = data.filter((e) => parseInt(e.date.split('.')[1]) === monthSelected + 1)
        setUsedData(filtered);
        setTotal(filtered.reduce((acc, curr) => acc + computeNetIncome(curr), 0).toFixed(2))
    }, [monthSelected])

    const handleAddEntry = (entry) => {
        const updated = [...usedData, entry];
        setUsedData(updated);
    }

    return (
        <View style={styles.container}>
            {/* adding modal */}
            <Modal
                animationType="slide"
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
                animationType="slide"
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
            <View style={styles.header}>
                <Menu />
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
                />
                <TotalIncome month={months[monthSelected].name} total={total} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'grey',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'grey',
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
})