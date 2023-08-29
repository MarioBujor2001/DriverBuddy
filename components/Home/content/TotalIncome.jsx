import { StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function TotalIncome({ month, total, navigation }) {
    return (
        <View style={styles.totalIncomeContainer}>
            <Text style={styles.totalText}>Venituri totale luna {month}</Text>
            <TouchableOpacity
                style={styles.totalDisplay}
                onPress={() => { navigation.navigate('MonthTotal') }}
            >
                <Text style={styles.totalDisplaySum}>+ {total} RON</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    totalIncomeContainer: {
        backgroundColor: '#ddd',
        height: 190,
        marginBottom: -100,
        marginHorizontal: -20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    totalDisplay: {
        backgroundColor: '#fff',
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 5
    },
    totalDisplaySum: {
        color: '#007B0C',
        fontSize: 25,
        fontWeight: 'bold'
    }
})