import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({ children }: { children: React.ReactNode }) => {

  const insets = useSafeAreaInsets();

  return (
    <View className={`flex-1 w-full justify-center items-center bg-background`}>
      <View className={`flex-1 w-full lg:container lg:mx-auto`}>
        {children}
      </View>
    </View>
  )
}

export default Container