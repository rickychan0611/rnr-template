import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Blocks, Home, UserRound, ScrollText, LayoutDashboard, ClipboardList, Boxes, Store } from '~/components/Icons';

export default function TabBar({ state, descriptors, navigation, props }: any) {
  const insets = useSafeAreaInsets();

  const Icon = (props: any) => {
    const label = props.label
    const Component =
      label === "Home" ? LayoutDashboard :
        label === "Order" ? ClipboardList :
          label === "Listings" ? Boxes : Store
    return <Component {...props} />
  }

  return (
    <View className={`flex-row pt-2 bg-card`}
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

          const Iconclass = isFocused ? "text-primary stroke-[1.5px]" : "text-muted stroke-[1.5px]"
          const Textclass = isFocused ? "text-primary text-sm" : "text-muted text-sm "

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
                <Icon className={Iconclass} width={30} height={30} label={label} />
                <Text className={Textclass}
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