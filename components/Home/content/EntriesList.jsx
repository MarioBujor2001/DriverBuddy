import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import data from './data';
import EntryItem from './EntryItem';
import { computeNetIncome } from '../computeUtils';
export default function EntriesList({ infoModalVisible, setInfoModalVisible, setDayInfo, monthSelected, setTotal }) {
    const [usedData, setUsedData] = useState(data);
    const openInfo = (data) => {
        setInfoModalVisible(true);
        setDayInfo(data);
    }
    useEffect(() => {
        const filtered = data.filter((e) => parseInt(e.date.split('.')[1]) === monthSelected + 1)
        setUsedData(filtered);
        setTotal(filtered.reduce((acc, curr) => acc + computeNetIncome(curr), 0).toFixed(2))
    }, [monthSelected])
    return (
        <FlatList
            style={styles.entriesList}
            data={usedData}
            renderItem={({ item }) => (
                <EntryItem item={item} openInfo={openInfo} />
            )}
            idExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
})