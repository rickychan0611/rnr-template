import { useAppSelector } from '~/redux/hooks';
import { Redirect, Stack } from 'expo-router';

export default function Layout() {
  const userInfo = useAppSelector(state => state.app.userInfo)

  // if (userInfo) {
  //   return <Redirect href="/" />
  // }
  
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  );
}
