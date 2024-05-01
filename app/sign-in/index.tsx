import React, { useCallback, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { View, Text } from 'react-native'
import TextInput from '~/components/TextInput'
import Container from '~/components/Container'
import { H4, Muted, Error } from '~/components/Typography'
import logo from '~/assets/icons/app-icon-circle.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { userApi } from '~/api/api.user'
import Button from '~/components/Button'

const SignIn = () => {
  const router = useRouter()
  const [phone, setPhone] = useState<string>("")
  const [t] = useTranslation("common")
  const [err, setErr] = useState("")

  const sendCodeQuery = useMutation({
    mutationFn: () => userApi.sendSignInCode(phone),
    onError: (err) => {
      console.log("onError", err)
      setErr("Invalid Phone Number")
    },
    onSuccess: () => router.push({ pathname: '/sign-in/verify-code', params: { phone } }),
  });

  const handleChange = (text: string) => {
    setErr("")
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhone(numericValue);
  };

  const handleSubmit = () => {
    sendCodeQuery.mutate()
  }

  useEffect(() => {
    return () => sendCodeQuery.reset()
  }, [])

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View className='items-center p-4 sm:p-[100px] w-full'>
          <View className='sm:bg-card mt-4 items-center w-full max-w-lg sm:shadow-xl sm:shadow-neutral-200 dark:shadow-none rounded sm:p-20'>
            <H4 className=' text-center'>
              Sign in to your account
            </H4>
            <Image source={logo} className='mt-10 w-16 h-16 object-contain ' />
            <Muted className='mt-4 text-center'>
              Harmony Builds Wealth, Together We Flourish
            </Muted>

            <TextInput
              placeholder={t`Phone number`}
              inputMode='numeric'
              value={phone}
              onChangeText={handleChange}
              onSubmitEditing={handleSubmit}
            />

            <Error className='mt-2'>{err || ""}</Error>

            <View className='w-full mt-7'>
              <Button
                disabled={sendCodeQuery.isPending}
                onPress={() => handleSubmit()}>
                Continue
              </Button>
            </View>

          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container >
  )
}

export default SignIn