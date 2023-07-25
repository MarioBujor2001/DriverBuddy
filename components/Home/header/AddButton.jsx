import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function AddButton({ setModalVisible }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => { setModalVisible(true); }}
        >
            <Image source={require('../../../assets/plus.png')} style={styles.addImage} />
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
    addImage: {
        width: 40,
        height: 40
    }
})