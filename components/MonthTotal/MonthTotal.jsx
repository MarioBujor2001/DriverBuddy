import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useState } from "react";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
export default function MonthTotal() {
    const data = [
        { x: '1-7', y: 50 },
        { x: '8-14', y: 100 },
        { x: '15-21', y: 200 },
        { x: '22-28', y: 300 },
        { x: '29-31', y: 150 },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.summaryHeader}>
                <View style={styles.headerSection}>
                    <Text style={styles.subtitle}>Venituri Nete</Text>
                    <View style={styles.headerSubsection}>
                        <Text style={[styles.subtitle, { fontWeight: '700' }]}>2200.2 RON</Text>
                        <Text >Crestere 20%</Text>
                    </View>
                </View>
                <View style={styles.headerSection}>
                    <View style={styles.headerSubsection}>
                        <Text style={styles.subtitle}>Curse</Text>
                        <Text >200</Text>
                    </View>
                    <View style={styles.headerSubsection}>
                        <Text style={styles.subtitle}>Ore</Text>
                        <Text >1200</Text>
                    </View>
                </View>
            </View>
            <View>
                <VictoryChart theme={VictoryTheme.material} height={300} domainPadding={20}>
                    <VictoryBar
                        data={data}
                        barWidth={20}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        cornerRadius={{ bottom: 12, top: 12 }}
                    />
                </VictoryChart>
            </View>
            <View style={styles.summaryDetails}>
                <Text style={styles.subtitle}>Aici obiective indeplinite</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    summaryHeader: {
        height: '16%',
        // borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // shadowOffset: { width: 0, height: 0 },
        // shadowColor: '#171717',
        // shadowOpacity: 0.4,
        // shadowRadius: 6,
    },
    headerSection: {
        backgroundColor: '#e6e6e6',
        height: '100%',
        width: '49%',
        borderRadius: 15,
        justifyContent: 'space-between',
        padding: 10
    },
    headerSubsection: {
        // backgroundColor: 'white'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    h3: {

    },
    summaryDetails: {
        backgroundColor: '#e6e6e6',
        flexGrow: 1,
        marginHorizontal: 10,
        marginBottom: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})