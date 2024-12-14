import { StyleSheet, Text, View } from 'react-native'
import Wifi from '../icons/Wifi';

interface GameCardProps {
    title: string;
    description?: string;
    
}
const GameCard = ({ title, description,  }: GameCardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            
                
                <View style={styles.textContainer}>
                    <Text style={styles.titleBgText}>{title.toLocaleUpperCase()}</Text>

                </View>
            
        </View>
    )
}
export default GameCard
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#233133',
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
        position:"relative"

    },
    titleText: {
        color: '#ccf9ff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textContainer:{
        position:'relative',
    },
    titleBgText:{
        color:'#ccf9ff',  
        fontSize:86,  
        position:'absolute',
        opacity:0.05,
        top:-79,
        left:-80,
        
    }
})