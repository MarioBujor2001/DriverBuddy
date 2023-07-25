import { StyleSheet, View, Text, Modal, Pressable, ScrollView } from 'react-native';
import Menu from './header/Menu'
import AddButton from './header/AddButton';
import MonthsBar from './monthsBar/MonthsBar';
import EntriesList from './content/EntriesList';
import TotalIncome from './content/TotalIncome';
import { useState } from 'react';
import AddModal from './addModal/AddModal';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
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
                <MonthsBar />
            </View>
            <View style={styles.entriesContainer}>
                <EntriesList />
                <TotalIncome month={'Iulie'} total={'2450.5'} />
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