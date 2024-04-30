import '~/global.css';
import '~/lib/cssInterop'; //add non native libraries to use tailwind className
import { LogBox, StatusBar, Text, TextInput, View } from "react-native";
LogBox.ignoreLogs([
  "Warning: You are setting the style `{ userSelect: ... }` as a prop. You should nest it in a style object. E.g. `{ style: { userSelect: ... } }`",
  "The previous warning was caused by a component with these props",
  "CssInterop upgrade warning"
]);
import '~/locales/initI18n';
import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import InitApp from '~/components/InitApp';
import { useColorScheme } from '~/lib/useColorScheme';
import { useTranslation } from 'react-i18next';
import { Tabs } from 'expo-router/tabs';
import TabBar from '~/components/TabBar';
import AppBar from '~/components/AppBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { useGetUserInfo } from '~/api/queryHooks/useUserQueries';

export default function RootLayout() {
  // cssInterop(Image, { className: "style" });
  const { isDarkColorScheme } = useColorScheme();
  const { t } = useTranslation("common")
  const insets = useSafeAreaInsets()
  const [up, setUp] = React.useState(true)


  React.useEffect(() => {
    setUp(false)
    setTimeout(() => { setUp(true) }, 1)
  }, [isDarkColorScheme])

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes   
      },
      mutations: {
        onError: (error) => {
          if ("message" in error) {
            console.error(error.message);
          }
        }
      }
    },
  });

  useReactQueryDevTools(client);

  return (
    <QueryClientProvider client={client}>
      <View className='flex-1 bg-background'>
        <InitApp >
          {up && <StatusBar barStyle='light-content' animated />}
          <AppBar />
          <Tabs
            initialRouteName='sign-in'
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
              name='sign-in'
              options={{
                title: 'SignIn',
              }}
            />
            <Tabs.Screen
              name='+not-found'
              options={{ href: null }}
            />
          </Tabs>
        </ InitApp>
      </View>
    </QueryClientProvider>
  );
}
