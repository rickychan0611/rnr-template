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
import Logo from '~/assets/icons/app-icon-circle.png'
import { Row, RowBetween } from './FlexViews';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H2, H3, H4 } from './ui/typography';
import { Image } from 'expo-image';
import { ThemeToggle } from './ThemeToggle';

const AppBar = () => {
  const { t } = useTranslation("common")
  const insets = useSafeAreaInsets()

  return (
    <View className={`z-50 w-full flex flex-row justify-between items-center px-4 pb-2 bg-primary shadow`}
      style={{ paddingTop: insets.top + 8 }}
    >
      <RowBetween className='flex-1'>
        <Row>
          <Image source={Logo} className={`rounded-full w-8 h-8 object-contain mr-4`} />
          <H4 className='text-primary-fg'>{t`PEACEFUL SUPPLY`}</H4>
        </Row>
        <ThemeToggle />
      </RowBetween>
      {/* 
        <RowView className={`flex-1 justify-end`}>
        </RowView> */}
    </View >
  )
}

export default AppBar