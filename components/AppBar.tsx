import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
// import { Image } from 'expo-image';

//styling
import { Text, View, TouchableOpacity, Modal } from 'react-native';

//navigation
import { useTranslation } from 'react-i18next';

//redux 
import { useAppDispatch, useAppSelector } from '~/redux/hooks';

// icons
import logo from '~/assets/icons/app-icon-circle.png'
import { Row, RowBetween } from './FlexViews';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H2, H3, H4 } from './ui/typography';
import { Image } from 'expo-image';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const AppBar = () => {
  const insets = useSafeAreaInsets()
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
    <View className={`z-50 w-full flex flex-row justify-between items-center px-4 pb-2 bg-primary shadow`}
      style={{ paddingTop: insets.top + 8 }}
    >
      <RowBetween className='flex-1'>
        <Row>
          <Image source={logo} className={`rounded-full w-8 h-8 object-contain mr-4`} />
          <H4 className='text-primary-foreground hidden sm:block'>Peaceful supplier dashboard</H4>
        </Row>
        <Row className='gap-4'>
          <LanguageToggle />
          <ThemeToggle />
        </Row>
      </RowBetween>
    </View >
  )
}

export default AppBar