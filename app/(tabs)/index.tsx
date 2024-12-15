import {  Image, StyleSheet,  View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import GameCard from '@/components/ui/GameCard';
import { TouchableOpacity } from 'react-native';
import {  useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#5aadd2', dark: '#5aadd2' }}
      headerImage={
        <Image
          source={require('@/assets/images/headerImage.jpg')}
          className='w-full h-full absolute left-0 bottom-0'
        />
      }>
      <View className='flex-1 flex-row justify-between items-center '>

        <TouchableOpacity  onPress={() => router.push('/screens')} >
          <GameCard
            title="Offline"
          />
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => router.push('/screens/createRoom')}>
          <GameCard
            title="Online"
          />
        </TouchableOpacity>



      </View>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,

  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

});
