import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View>
            <View style={{
                paddingTop: 50,
                flexDirection: 'row',
                width: '80%',
                height: 300,
                alignItems: 'center'
            }}>
                <View style={styles.red}>
                    <Text>1</Text>
                </View>
                <View style={styles.green}>
                    <Text>2</Text>
                </View>
                <View style={styles.blue}>
                    <Text>3</Text>
                </View>
            </View>
            <View style={{padding: 50}}>
                <View style={styles.red}>
                    <Text>1</Text>
                </View>
                <View style={styles.green}>
                    <Text>2</Text>
                </View>
                <View style={styles.blue}>
                    <Text>3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    red: {
        width: 100,
        height: 100,
        backgroundColor: '#ff0000',
        alignItems: 'center', // center in  vertical
        justifyContent: 'center', // center in horizontal
        flex: 1
    },
    blue: {
        // width: 100,
        // height: 100,
        backgroundColor: '#0034ff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2

    },
    green: {
        // width: 100,
        // height: 100,
        backgroundColor: '#66ff00',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
