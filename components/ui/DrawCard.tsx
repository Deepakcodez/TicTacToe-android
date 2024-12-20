import { BlurView } from 'expo-blur';
import { View } from 'react-native'
import * as Animatable from 'react-native-animatable';

const DrawCard = () => {
    return (
        <View className="absolute top-0 left-0 right-0 bottom-0 flex flex-1 justify-center items-center bg-white/20 backdrop:blur-lg  bg-opacity-50 z-10 ">
            <Animatable.Text
                style={{ elevation: 12 }}
                className="text-2xl p-12 rounded-md font-bold text-white bg-cyan-800"
                animation="zoomIn"
                iterationCount={1}
                duration={100}
                direction="alternate">
                Draw
            </Animatable.Text>


        </View>
    )
}
export default DrawCard