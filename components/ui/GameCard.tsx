import { StyleSheet, Text, View } from 'react-native'

interface GameCardProps {
    title: string;
    description?: string;

}
const GameCard = ({ title, description, }: GameCardProps) => {
    return (
        <View className='flex-1 justify-center items-center bg-[#233133] rounded-lg  w-[12rem] h-32  overflow-hidden '>
            <Text className='text-white text-lg '>{title.toUpperCase()}</Text>


            <View style={styles.textContainer}>
                <Text className='absolute font-bold text-[5rem] text-[#ccf9ff] opacity-5 -bottom-[8rem] -right-[4.8rem] '>{title.toLocaleUpperCase()}</Text>

            </View>

        </View>
    )
}
export default GameCard
const styles = StyleSheet.create({

    
    titleText: {
        color: '#ccf9ff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textContainer: {
        position: 'relative',
    },
    titleBgText: {
        color: '#ccf9ff',
        fontSize: 86,
        position: 'absolute',
        opacity: 0.05,
        top: -79,
        left: -80,

    }
})