import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { computeNetIncome, computeCost, computeHourlyIncome, computeRideIncome, computeIncome } from '../computeUtils';
export default function MenuModal({ menuModalVisible, setMenuModalVisible, navigation }) {
    return (
        <TouchableOpacity
            style={styles.modalView}
            activeOpacity={1}
        >
            <View
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.innerModalView}
            >
                <View style={styles.headerContainer}>
                    <Text style={[styles.label, styles.grey]}>Meniu</Text>
                </View>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../../../assets/user.png')} style={styles.image} />
                        <Text style={styles.label}>Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../../../assets/stats.png')} style={styles.image} />
                        <Text style={styles.label}>Grafice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionItem}>
                        <Image source={require('../../../assets/target.png')} style={styles.image} />
                        <Text style={styles.label}>Obiective</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionItem}
                        onPress={() => {
                            navigation.navigate('Settings');
                            setMenuModalVisible(false);
                        }}
                    >
                        <Image source={require('../../../assets/setting.png')} style={styles.image} />
                        <Text style={styles.label}>Setari</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[styles.label, styles.grey]}>© BujuSoft</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalView: {
        width: '45%',
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingTop: 90,
        paddingBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    innerModalView: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30
    },
    optionsContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    optionItem: {
        flexDirection: 'row',
        marginVertical: 25,
        width: '65%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'grey'
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    label: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    grey: {
        color: 'grey'
    }
})