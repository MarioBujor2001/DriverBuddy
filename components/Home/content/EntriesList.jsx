import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import data from './data';
import EntryItem from './EntryItem';
export default function EntriesList() {
    return (
        <FlatList
            style={styles.entriesList}
            data={data}
            renderItem={({ item }) => (
                <EntryItem item={item} />
            )}
            idExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    entriesList: {

    }
})