import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import data from './data';
import EntryItem from './EntryItem';
export default function EntriesList({ infoModalVisible, setInfoModalVisible, setDayInfo }) {
    const openInfo = (data) => {
        setInfoModalVisible(true);
        setDayInfo(data);
        console.log(data)
    }
    return (
        <FlatList
            style={styles.entriesList}
            data={data}
            renderItem={({ item }) => (
                <EntryItem item={item} openInfo={openInfo} />
            )}
            idExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    entriesList: {

    }
})