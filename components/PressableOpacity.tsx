import React, { useCallback } from 'react';
import { Pressable, View } from 'react-native';

function PressableOpacity({ onPress, children }: any) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.5 : 1 }}>
          {children}
        </View>
      )}
    </Pressable>
  );
}

export default PressableOpacity;