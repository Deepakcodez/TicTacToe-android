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
                    headerTitle: "T3",
                     
                }} />
            <Stack.Screen
                name="createRoom"
                options={{
                    headerShown: true,
                    headerTitle: "Create Room",
                }}
            />


        </Stack>
    );
};

export default ScreenRoot;
  