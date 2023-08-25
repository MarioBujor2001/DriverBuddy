import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function Menu({ setMenuModalVisible, menuModalVisible }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => { setMenuModalVisible(true) }}
        >
            <Image source={require('../../../assets/menu.png')} style={styles.menuImage} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
    },
    menuImage: {
        width: 50,
        height: 50
    }
})