import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { MoonStar, Sun, Globe } from '~/components/Icons';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { useColorScheme } from '~/lib/useColorScheme';
import { getLocales } from 'expo-localization';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const [t, i18n] = useTranslation("common")

  useEffect(() => {
    const getSystemLanguage = async () => {
      const locale: string | null = await AsyncStorage.getItem("locale") || ""
      if (locale) {
        await i18n.changeLanguage(locale)
      }
      else {
        const code = getLocales()[0].languageCode === "zh" ? "cn" : "en"
        await i18n.changeLanguage(code)
        await AsyncStorage.setItem("locale", code)
      }
    }
    getSystemLanguage()
  }, [])

  const changeLanguage = async () => {
    if (i18n.language === "cn") {
      await i18n.changeLanguage("en")
    }
    else await i18n.changeLanguage("cn")
    await AsyncStorage.setItem("locale", i18n.language)
  }

  return (
    <TouchableOpacity className={`text-sm flex flex-row flex-nowrap items-center p-1 rounded-lg mr-2`}
      onPress={async () => changeLanguage()} >
      <Globe className='text-primary-foreground' size={23} strokeWidth={1.25} />
      <Text className={`ml-1 text-primary-foreground`}>{i18n.language === "cn" ? "EN" : "中"}</Text>
    </TouchableOpacity>
  );
}
