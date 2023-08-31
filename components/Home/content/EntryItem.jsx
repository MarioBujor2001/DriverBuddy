import { StyleSheet, SafeAreaView, View, Text, Alert, TouchableOpacity } from 'react-native';
import { computeNetIncome, computeCost, computeIncome } from '../computeUtils';
export default function EntryItem({ item, openInfo, handleDeleteEntry, handleOpenUpdateEntry }) {
    return (
        <TouchableOpacity
            onPress={() => { openInfo(item); }}
            onLongPress={() => {
                Alert.alert('Modificare', 'Doriti sa modificati inregistrarea curenta ?', [
                    {
                        text: 'Anulare',
                        onPress: () => {
                            //do nothing
                        }
                    },
                    {
                        text: 'Sterge',
                        onPress: () => {
                            handleDeleteEntry(item);
                        }
                    },
                    {
                        text: 'Editeaza',
                        onPress: () => {
                            handleOpenUpdateEntry(item);
                        }
                    },
                ])
            }}
        >
            <View style={styles.item}>
                <View style={[styles.indicator, styles.date]}>
                    <Text style={styles.boldText}>{item.date.substr(0, 5)}</Text>
                </View>
                <View style={[styles.indicator, styles.km]}>
                    <Text style={styles.boldText}>{item.km} KM</Text>
                </View>
                <View style={[styles.indicator, styles.income]}>
                    <Text style={styles.boldText}>+ {computeIncome(item)}</Text>
                </View>
                <View style={[styles.indicator, styles.cost]}>
                    <Text style={styles.boldText}>- {computeCost(item)}</Text>
                </View>
                <View style={[styles.indicator, styles.netIncome]}>
                    <Text style={styles.boldText}>= {computeNetIncome(item).toFixed(2)}</Text>
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
        width: 70
    },
    income: {
        backgroundColor: '#90BBE2',
        width: 70
    },
    cost: {
        backgroundColor: '#FFA6A6',
        width: 70
    },
    netIncome: {
        backgroundColor: '#92E290',
        width: 65
    },
    boldText: {
        fontWeight: '600'
    }
})