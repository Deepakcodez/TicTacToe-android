import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native'
const gameRoom = ({ route }: any) => {

    const { roomId } = route.params;

    useEffect(() => {
        console.log(roomId)
    }, [roomId])
    return (
        <View>
            <Text>gameRoo</Text>
        </View>
    )
}
export default gameRoom
