import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import { useState } from 'react';
import MonthItem from './MonthItem';
export default function MonthsBar() {

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

    const changeSelectedMonth = (month) => {
        setMonthSelected(month);
    }

    const computeOffset = () => {
        if (monthSelected == 0)
            return monthSelected * 105 + 5 * monthSelected;
        if (monthSelected < 9)
            return monthSelected * 105 + 5 * monthSelected - 100;
        return 8 * 105 + 5 * 8 + 20;
    }

    return (
        <FlatList
            initialNumToRender={12}
            contentOffset={{ x: computeOffset(), y: 0 }}
            style={styles.list}
            horizontal
            data={months}
            renderItem={({ item }) => (
                <MonthItem
                    month={item}
                    selected={monthSelected}
                    changeSelectedMonth={changeSelectedMonth}
                />
            )}
            idExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        height: 60,
        paddingTop: 5
    }
})