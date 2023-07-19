import { StyleSheet, SafeAreaView, View } from 'react-native';
import Menu from './Menu';
import AddButton from './AddButton';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Menu />
                <AddButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})