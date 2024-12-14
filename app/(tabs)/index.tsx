import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import GameCard from '@/components/ui/GameCard';
import Wifi from '@/components/icons/Wifi';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#5aadd2', dark: '#5aadd2' }}
      headerImage={
        <Image
          source={require('@/assets/images/headerImage.jpg')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <GameCard
            title="Offline"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
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
  reactLogo: {
    height: 178,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
