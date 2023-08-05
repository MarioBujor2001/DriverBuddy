import { StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function EntryItem({ item, openInfo, setInfoModalVisible }) {
    return (
        <TouchableOpacity
            onPress={() => { openInfo(item); }}
        >
            <View style={styles.item}>
                <View style={[styles.indicator, styles.date]}>
                    <Text>{item.date.substr(0, 5)}</Text>
                </View>
                <View style={[styles.indicator, styles.km]}>
                    <Text>KM:{item.km}</Text>
                </View>
                <View style={[styles.indicator, styles.income]}>
                    <Text>+ {item.income}</Text>
                </View>
                <View style={[styles.indicator, styles.cost]}>
                    <Text>- {item.cost}</Text>
                </View>
                <View style={[styles.indicator, styles.netIncome]}>
                    <Text>= {item.netIncome}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 5,
        height: 50,
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    indicator: {
        marginHorizontal: 5,
        borderRadius: 10,
        width: 50,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        backgroundColor: '#fff',
    },
    km: {
        backgroundColor: '#fff',
        width: 65
    },
    income: {
        backgroundColor: '#90BBE2',
        width: 65
    },
    cost: {
        backgroundColor: '#FFA6A6',
        width: 65
    },
    netIncome: {
        backgroundColor: '#92E290',
        width: 65
    }
})