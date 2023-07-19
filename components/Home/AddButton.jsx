import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function AddButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/plus.png')} style={styles.addImage} />
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