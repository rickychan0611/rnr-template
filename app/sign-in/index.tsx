import React, { useState, useTransition } from 'react'
import { Image } from 'expo-image'
import { View } from 'react-native'
import Container from '~/components/Container'
import { Input } from '~/components/ui/input'
import { H4, Muted, P } from '~/components/ui/typography'
import logo from '~/assets/icons/app-icon-circle.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

const SignIn = () => {
  const router = useRouter()
  const [phone, setPhone] = useState("")
  const [t] = useTranslation("common")

  const handleChange = (text: string) => {
    // Replace non-numeric characters with empty string
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhone(numericValue);
  };

  const handleSubmit = () => {
    router.push('/sign-in/verify-code')
  }

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View className='items-center p-4 sm:p-[100px] w-full'>
          <View className='sm:bg-card mt-4 items-center w-full max-w-lg sm:shadow-xl sm:shadow-muted dark:shadow-none rounded sm:p-20'>
            <H4 className=' text-center'>
              Sign in to your account
            </H4>
            <Image source={logo} className='mt-10 w-16 h-16 object-contain ' />
            <Muted className='mt-4 text-center'>
              Harmony Builds Wealth, Together We Flourish
            </Muted>
            <Input
              className='mt-10'
              placeholder={t`Phone number`}
              inputMode='numeric'
              value={phone}
              onChangeText={handleChange}
            />
            <Button className='w-full mt-6'
              onPress={() => handleSubmit()}>
              <Text>
                Continue
              </Text>
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default SignIn