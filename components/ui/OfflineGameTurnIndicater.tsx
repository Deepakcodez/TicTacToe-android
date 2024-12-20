import React from 'react';
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable';

type Props = {
    isXNext: boolean
}
const OfflineGameTurnIndicater: React.FC<Props> = ({ isXNext }) => {
    return (
        <View className=" flex flex-row  justify-between items-center ">
            <View
                style={{ elevation: isXNext ? 12 : 0 }}
                className={`relative  p-3 rounded-full  px-12 border border-violet-300 overflow-hidden ${isXNext ? 'bg-violet-400' : 'bg-violet-200'}`}>
                <Text className={` font-bold ${isXNext ? 'text-violet-200' : 'text-violet-700'}`}>X</Text>
                <Animatable.Text
                    iterationCount={isXNext ? 'infinite' : undefined}
                    iterationDelay={1000}
                    animation={isXNext ? 'swing' : ''}
                    className={`absolute  right-0 -bottom-[14px] -left-[2px] text-[4rem] font-bold text-violet-500 ${isXNext ? 'opacity-55' : 'opacity-25'}`}>
                    X
                </Animatable.Text>
            </View>
            <View
                style={{ elevation: !isXNext ? 12 : 0 }}
                className={`relative  p-3 rounded-full  px-12 border border-violet-300 overflow-hidden ${!isXNext ? 'bg-violet-400' : 'bg-violet-200'}`}>
                <Text className={` font-bold ${!isXNext ? 'text-violet-200' : 'text-violet-700'}`}>0</Text>
                <Animatable.Text
                    iterationCount={!isXNext ? 'infinite' : undefined}
                    iterationDelay={1000}
                    animation={!isXNext ? 'swing' : ''}
                    className={`absolute  right-0 -bottom-[14px] -left-[2px] text-[4rem] font-bold text-violet-500 ${!isXNext ? 'opacity-55' : 'opacity-25'}`}>
                    0
                </Animatable.Text>
            </View>
        </View>
    )
}
export default OfflineGameTurnIndicater