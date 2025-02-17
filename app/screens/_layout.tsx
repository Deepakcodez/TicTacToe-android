import { Stack } from 'expo-router';

const ScreenRoot = () => {
    return (
        <Stack screenOptions={{
            headerShown:false,
           
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                    headerTitle: "Offline Game",
                     
                }} />
            <Stack.Screen
                name="createRoom"
                options={{
                    headerShown: true,
                    headerTitle: "Online Game",
                }}
            />
            <Stack.Screen
                name="gameRoom"
                options={{
                    headerShown: true,
                    headerTitle: "Room",
                }}
            />


        </Stack>
    );
};

export default ScreenRoot;
  