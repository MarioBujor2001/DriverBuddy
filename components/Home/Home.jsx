import { StyleSheet, SafeAreaView, View } from 'react-native';
import Menu from './Menu';
import AddButton from './AddButton';
import MonthsBar from './MonthsBar';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Menu />
                <AddButton />
            </View>
            <View style={styles.monthsBar}>
                <MonthsBar />
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
    }
})