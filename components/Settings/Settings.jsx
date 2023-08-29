import { View, StyleSheet, Text, Switch, ScrollView } from "react-native";
import { useState } from "react";
import Line from "./Line";
export default function Settings() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (<ScrollView contentContainerStyle={styles.container}>
        <View style={styles.settingsContainer}>
            <View style={styles.settingsHeader}>
                <Text style={[styles.textStyle, { marginBottom: 10 }]}>Setari comisioane</Text>
                <Line />
            </View>
            <View style={styles.settingsItem}>
                <Text style={styles.textStyle}>Carte de munca</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#1fa800' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Line />
            <View style={styles.settingsItem}>
                <Text style={styles.textStyle}>Contabil</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#1fa800' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Line />
            <View style={styles.settingsItem}>
                <Text style={styles.textStyle}>Taxa Flota</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#1fa800' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Line />
            <View style={styles.settingsItem}>
                <Text style={styles.textStyle}>Alte Taxe</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#1fa800' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Line />
        </View>
        <View style={styles.settingsContainer}>
            <Text style={styles.textStyle}>Setari cont</Text>
            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
        </View>
        <View style={styles.settingsContainer}>
            <Text style={styles.textStyle}>Setari generale</Text>
            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
        </View>
    </ScrollView >)

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',

    },
    settingsContainer: {
        backgroundColor: 'white',
        width: '95%',
        borderRadius: 10,
        padding: 10,
        height: '31%',
        marginTop: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#171717',
        shadowOpacity: 0.4,
        shadowRadius: 6,
        // borderColor: 'grey',
        // borderWidth: 0.5
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    textStyle: {
        fontSize: 16
    },
    line: {
        width: '80 %'
    }
});