import '~/global.css';
import { LogBox, Text, TouchableOpacity, View } from "react-native";
LogBox.ignoreLogs([
  "Warning: You are setting the style `{ userSelect: ... }` as a prop. You should nest it in a style object. E.g. `{ style: { userSelect: ... } }`",
  "The previous warning was caused by a component with these props",
  "CssInterop upgrade warning"
]);
import '~/locales/initI18n';
import * as React from 'react';
import { Provider } from 'react-redux'
import { store } from '~/redux/store'
import { StatusBar } from 'expo-status-bar';
import InitApp from '~/components/InitApp';
import { useColorScheme } from '~/lib/useColorScheme';
import Container from '~/components/Container';
import { useTranslation } from 'react-i18next';
import { Tabs } from 'expo-router/tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Blocks, Home, ScrollText } from '~/components/Icons';

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const { t } = useTranslation("common")
  const insets = useSafeAreaInsets();

  function MyTabBar({ state, descriptors, navigation, props }: any) {
    return (
      <View className={`flex-row pt-4 bg-primary`}
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
            label === "Listings"
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
                  {label === "Home" ? <Home className={`${isFocused ? "text-primary-foreground" : "text-muted-foreground"} stroke-[1px]`} width={30} height={30} /> :
                    label === "Order" ? <ScrollText className={`${isFocused ? "text-primary-foreground" : "text-muted-foreground"} stroke-[1px]`} width={30} height={30} /> :
                      label === "Listings" ? <Blocks className={`${isFocused ? "text-primary-foreground" : "text-muted-foreground"} stroke-[1px]`} width={30} height={30} /> : <></>
                  }
                  <Text className={`${isFocused ? "text-primary-foreground" : "text-muted-foreground"} text-sm`}
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

  return (
    <Provider store={store}>
      <View className='flex-1 bg-primary' style={{ paddingTop: insets.top }} >
        <InitApp >
          <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
          <Tabs
            backBehavior='history'
            screenOptions={{
              headerShown: false,
            }}
            tabBar={props => <MyTabBar {...props} />}>
            <Tabs.Screen
              name='index'
              options={{
                title: 'Home',
                headerShown: false,
                // tabBarIcon: ({ color, size }) => (
                //   <Home width={size + 2} height={size + 2} color={color} />
                // ),
              }}
            />
            <Tabs.Screen
              name='orders'
              options={{
                title: 'Order',
                headerShown: false,
                // tabBarIcon: ({ color, size }) => (
                //   <ScrollText width={size + 2} height={size + 2} color={color} />
                // ),
              }}
            />
            <Tabs.Screen
              name='listings'
              options={{
                title: 'Listings',
                headerShown: false,
                // tabBarIcon: ({ color, size }) => (
                //   <Blocks width={size + 2} height={size + 2} color={color} />
                // ),
              }}
            />
            <Tabs.Screen
              name='+not-found'
              options={{ href: null }}
            />
          </Tabs>
        </ InitApp>
      </View>
    </Provider >
  );
}
