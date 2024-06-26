import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
import { MoonStar, Sun } from '~/components/Icons';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { useColorScheme } from '~/lib/useColorScheme';

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  return (
    <TouchableOpacity
      onPress={() => {
        const newTheme = isDarkColorScheme ? 'light' : 'dark';
        setColorScheme(newTheme);
        setAndroidNavigationBar(newTheme);
        AsyncStorage.setItem('theme', newTheme);
      }}
    >
      {isDarkColorScheme ? (
        <MoonStar className='text-primary-foreground' size={23} strokeWidth={1.25} />
      ) : (
        <Sun className='text-primary-foreground' size={24} strokeWidth={1.25} />
      )}
    </TouchableOpacity>
  );
}
