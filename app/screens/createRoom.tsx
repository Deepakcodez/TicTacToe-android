import { useSocket } from '@/context/SocketContext';
import 'react-native-get-random-values';
import { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { v4 as uuidv4 } from 'uuid';
const CreateRoom = () => {
  const [roomId, setRoomId] = useState<string>('');
  const socket = useSocket();

  const generateShortId = (): string => {
    const fullUuid = uuidv4(); // Generate a full UUID
    return fullUuid.replace(/-/g, '').substring(0, 8); // Remove hyphens and take the first 8 characters
  };

  // Handle socket connection
  useEffect(() => {
    if (!socket) return;
    // Listen for connection event
    socket.on('connect', () => {
      console.log('Connected to server with ID:', socket.id);
    });
    // Clean up the listener
    return () => {
      socket.off('connect');
    };
  }, [socket]);



  const handleCreateRoom = () => {
    if (!socket) {
      console.error('Socket is not available');
      return;
    }

    let id = generateShortId();
    setRoomId(() => id)

    if (!id.trim()) {
      console.error('Room name cannot be empty');
      return;
    }

    console.log('Creating room:', roomId);
    socket.emit('createRoom', roomId);
  };


  return (
    <SafeAreaView className='flex-1  w-full' >
      <View>
        <Text className='text-5xl font-bold text-center text-white/30'>
          Create Room ID
        </Text>
        <View className=' w-full px-12  '>
          <TouchableOpacity
            onPress={handleCreateRoom}
            className='bg-violet-500   mx-auto  mt-6 py-5  rounded-lg'>
            <Text className='text-center text-white/80'>CREATE</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Text className='text-white/30 text-center mt-12 '>OR</Text>

      <View className='mt-12'>
        <Text className='text-5xl font-bold text-center text-white/30'>
          Join Room
        </Text>
        <View className='mx-12'>
          <TextInput
            className='bg-white/20 h-24 mt-6 rounded-lg text-5xl text-white/80 font-bold px-4' />
        </View>
        <TouchableOpacity className='bg-violet-500 w-24 mx-auto  mt-6 py-2 rounded-lg'>
          <Text className='text-center text-white/80'>JOIN</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}
export default CreateRoom