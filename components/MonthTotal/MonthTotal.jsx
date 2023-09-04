import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
import CircularProgress from "react-native-circular-progress-indicator";
import axios from "axios";
import { computeNetIncome } from "../Home/computeUtils";
export default function MonthTotal({ route, navigation }) {

    const { usedData } = route.params;
    const [formatedData, setFormatedData] = useState(null);
    const [total, setTotal] = useState(0);
    const [rides, setRides] = useState(0);
    const [hours, setHours] = useState(0);

    const updateTotal = (array) => {
        setTotal(array.reduce((acc, curr) => acc + computeNetIncome(curr), 0).toFixed(2));
    }
    const updateRides = (array) => {
        setRides(array.reduce((acc, curr) => acc + curr.noRides, 0));
    }
    const updateHours = (array) => {
        setHours(array.reduce((acc, curr) => acc + curr.noHours, 0));
    }

    const updateScreen = (array) => {
        updateTotal(array);
        updateHours(array);
        updateRides(array);
    }

    useEffect(() => {
        const groupedData = groupByPeriod(usedData);
        const data = Object.entries(groupedData).map(([period, income]) => ({ x: period, y: income }));
        setFormatedData(data);
        updateScreen(usedData);
    }, [])

    function groupByPeriod(dataArray) {
        const currentDate = new Date();
        const currentMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const periods = {};

        for (let i = 1; i <= 5; i++) {
            let startDay = (i - 1) * 7 + 1;
            let endDay = i * 7;

            // Adjust the end day for the last period
            if (i === 5) {
                endDay = currentMonthLastDay;
            }

            periods[`${startDay}-${endDay}`] = 0;
        }

        dataArray.forEach(item => {
            const dateParts = item.date.split('.');
            const day = parseInt(dateParts[0]);
            const periodNumber = Math.ceil(day / 7);
            let startDay = (periodNumber - 1) * 7 + 1;
            let endDay = periodNumber * 7;

            // Adjust the end day for the last period
            if (periodNumber === 5) {
                endDay = currentMonthLastDay;
            }

            const periodKey = `${startDay}-${endDay}`;

            if (!periods[periodKey]) {
                periods[periodKey] = 0;
            }

            periods[periodKey] += item.ridesIncome;
        });

        return periods;
    }

    const data = [
        { x: '1-7', y: 50 },
        { x: '8-14', y: 100 },
        { x: '15-21', y: 200 },
        { x: '22-28', y: 300 },
        { x: '29-31', y: 150 },
    ];

    const getProgressColor = (value) => {
        let color;

        switch (true) {
            case value < 0.2:
                color = 'red';
                break;
            case value >= 0.2 && value <= 0.7:
                color = 'orange';
                break;
            case value > 0.7:
                color = '#2ecc71';
                break;
            default:
                color = 'unknown';
        }

        return color;
    }
    return (
        <View style={styles.container}>
            <View style={styles.summaryHeader}>
                <View style={styles.headerSection}>
                    <Text style={styles.subtitle}>Venituri Nete</Text>
                    <View style={styles.headerSubsection}>
                        <Text style={[styles.subtitle, { fontWeight: '700' }]}>{total} RON</Text>
                        <Text >Crestere 20%</Text>
                    </View>
                </View>
                <View style={styles.headerSection}>
                    <View style={styles.headerSubsection}>
                        <Text style={styles.subtitle}>Curse</Text>
                        <Text >{rides}</Text>
                    </View>
                    <View style={styles.headerSubsection}>
                        <Text style={styles.subtitle}>Ore</Text>
                        <Text >{hours}</Text>
                    </View>
                </View>
            </View>
            <View>
                {formatedData !== null ?
                    <VictoryChart theme={VictoryTheme.material} height={300} domainPadding={20}>
                        <VictoryBar
                            data={formatedData}
                            barWidth={20}
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                            cornerRadius={{ bottom: 12, top: 12 }}
                        />
                    </VictoryChart>
                    : null
                }
            </View>
            <View style={styles.goalsContainer}>
                <View style={styles.goalsItem}>
                    <CircularProgress
                        value={60}
                        valueSuffix={'%'}
                        duration={1000}
                        radius={30}
                        inActiveStrokeOpacity={0.15}
                        activeStrokeColor={getProgressColor(0.6)}
                    />
                    <View style={styles.goalsTextContent}>
                        <Text style={styles.subtitle}>Numar de curse</Text>
                        <Text>120/200</Text>
                    </View>
                </View>
                <View style={styles.goalsItem}>
                    <CircularProgress
                        value={5}
                        valueSuffix={'%'}
                        duration={1000}
                        radius={30}
                        inActiveStrokeOpacity={0.15}
                        activeStrokeColor={getProgressColor(0.05)}
                    />
                    <View style={styles.goalsTextContent}>
                        <Text style={styles.subtitle}>Numar de ore</Text>
                        <Text>10/200</Text>
                    </View>
                </View>
                <View style={styles.goalsItem}>
                    <CircularProgress
                        value={75}
                        valueSuffix={'%'}
                        duration={1000}
                        radius={30}
                        inActiveStrokeOpacity={0.15}
                        activeStrokeColor={getProgressColor(0.75)}
                    />
                    <View style={styles.goalsTextContent}>
                        <Text style={styles.subtitle}>Venituri Nete</Text>
                        <Text>1500/2000 RON</Text>
                    </View>
                </View>
                <View style={styles.goalsItem}>
                    <CircularProgress
                        value={10}
                        valueSuffix={'%'}
                        duration={1000}
                        radius={30}
                        inActiveStrokeOpacity={0.15}
                        activeStrokeColor={getProgressColor(0.1)}
                    />
                    <View style={styles.goalsTextContent}>
                        <Text style={styles.subtitle}>Numar zile lucrate</Text>
                        <Text>3/30</Text>
                    </View>
                </View>
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
    goalsContainer: {
        backgroundColor: '#e6e6e6',
        flexGrow: 1,
        marginHorizontal: 10,
        marginBottom: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goalsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '95%',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginVertical: 5
    },
    goalsTextContent: {
        marginStart: 20,
        justifyContent: 'space-between',
    }
})