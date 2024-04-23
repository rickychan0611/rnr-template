import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Blocks, Home, LogIn, ScrollText } from '~/components/Icons';

export default function TabBar({ state, descriptors, navigation, props }: any) {
  const insets = useSafeAreaInsets();

  const Icon = (props: any) => {
    const label = props.label
    const Component =
      label === "Home" ? Home :
        label === "Order" ? ScrollText :
          label === "Listings" ? Blocks : LogIn
    return <Component {...props} />
  }

  return (
    <View className={`flex-row pt-4 bg-bg`}
      style={{ paddingBottom: insets?.bottom || 6 }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (
          label === "Home" ||
          label === "Order" ||
          label === "Listings" ||
          label === "SignIn"
        ) {
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
              key={index}
            >
              <View className='flex-col gap-1 justify-center items-center'>
                <Icon className={`${isFocused ? "text-primary" : "text-muted-fg"} stroke-[1.5px]`} width={30} height={30} label={label} />
                <Text className={`${isFocused ? "text-primary" : "text-muted-fg"} text-sm`}
                  maxFontSizeMultiplier={1.4}
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
      })
      }
    </View >
  );
}