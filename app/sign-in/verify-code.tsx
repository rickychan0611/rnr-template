import { Image } from 'expo-image'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Pressable, View } from 'react-native'
import Container from '~/components/Container'
import { Input } from '~/components/ui/input'
import { H4, Muted } from '~/components/ui/typography'
import logo from '~/assets/icons/app-icon-circle.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'
import { useRouter } from 'expo-router'

type Props = {}

const SignIn = (props: Props) => {
  const router = useRouter()
  const [phone, setPhone] = useState("")

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
            <H4 className=' text-center'>Sign in to your account</H4>
            <Image source={logo} className='mt-10 w-16 h-16 object-contain ' />
            <Muted className='mt-4 text-center'>Harmony Builds Wealth, Together We Flourish</Muted>
            <Input
              className='mt-10'
              placeholder='Phone number'
              keyboardType='number-pad'
              value={phone}
              onChangeText={handleChange}
            />
            <Pressable onPress={() => handleSubmit()}>
              <Button className='w-full mt-6'>
                <Text>Submit</Text>
              </Button>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default SignIn