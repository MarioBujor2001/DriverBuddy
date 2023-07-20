import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MonthItem({ month, selected, changeSelectedMonth }) {
    return (
        <TouchableOpacity
            style={month.id === selected ? [styles.monthItem, styles.shadowProp] : styles.monthItem}
            onPress={() => { changeSelectedMonth(month.id); }}
        >
            <Text>{month.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    monthItem: {
        flex: 1,
        backgroundColor: "#eee",
        height: 40,
        width: 100,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    shadowProp: {
        shadowOffset: { width: 3, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#ddd',
    },
})