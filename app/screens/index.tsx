import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Offline = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Offline Game Content</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});

export default Offline;
