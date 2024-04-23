import '~/global.css';
import '~/lib/cssInterop'; //add non native libraries to use tailwind className
import { LogBox, Text, TextInput, View } from "react-native";
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
import { useTranslation } from 'react-i18next';
import { Tabs } from 'expo-router/tabs';
import TabBar from '~/components/TabBar';
import AppBar from '~/components/AppBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export default function RootLayout() {
  // cssInterop(Image, { className: "style" });
  const { isDarkColorScheme } = useColorScheme();
  const { t } = useTranslation("common")
  const insets = useSafeAreaInsets()

  
  return (
    <Provider store={store}>
      <View className='flex-1 bg-bg'
      //  style={{ paddingTop: insets.top }} 
      >
        <InitApp >
          <StatusBar style={isDarkColorScheme ? 'light' : 'light'} />
          <AppBar />
          <Tabs
            backBehavior='history'
            screenOptions={{
              headerShown: false,
            }}
            tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen
              name='index'
              options={{ title: 'Home' }}
            />
            <Tabs.Screen
              name='orders'
              options={{
                title: 'Order',
              }}
            />
            <Tabs.Screen
              name='listings'
              options={{
                title: 'Listings',
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
