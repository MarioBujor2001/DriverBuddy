import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import EntryItem from './EntryItem';
export default function EntriesList({ setInfoModalVisible, setDayInfo, usedData, handleDeleteEntry, handleOpenUpdateEntry }) {
    const openInfo = (item) => {
        setInfoModalVisible(true);
        setDayInfo(item);
    }
    return (
        <FlatList
            style={styles.entriesList}
            data={usedData}
            renderItem={({ item }) => (
                <EntryItem
                    item={item}
                    openInfo={openInfo}
                    handleDeleteEntry={handleDeleteEntry}
                    handleOpenUpdateEntry={handleOpenUpdateEntry} />
            )}
            idExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
})