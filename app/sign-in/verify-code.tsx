import React, { useEffect, useState } from 'react'
import { useWindowDimensions, View } from 'react-native'
import Container from '~/components/Container'
import { Input } from '~/components/ui/input'
import { H4, Muted } from '~/components/ui/typography'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'
import { useLocalSearchParams, useRouter } from 'expo-router'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import tw from "twrnc"
import { useAppDispatch } from '~/redux/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUserInfo } from '~/redux/slice/app'
import { OtpInput } from "react-native-otp-entry";
import { useColorScheme } from '~/lib/useColorScheme';
import BackAndTitle from '~/components/BackAndTitle'

type Props = {}

const SignIn = (props: Props) => {
  const { width, height } = useWindowDimensions()
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const router = useRouter()
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const phoneNumber = useLocalSearchParams().phoneNumber || ""
  const dispatch = useAppDispatch()
  const handleChange = (text: string) => {
    // Replace non-numeric characters with empty string
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhone(numericValue);
  };
  const [otp, setOtp] = React.useState('');

  const handleLogin = async (code: string) => {
    // try {
    //   setError("")
    //   let body
    //   // if (signinMethod === "code") {
    //   if (code.length !== 6) {
    //     setError("EMPTY_CODE")
    //     return
    //   }
    //   body = {
    //     user_name: phoneNumber + "",
    //     verifycode: code
    //   }
    //   setIsLoading(true)
    //   const res: any = await userAuthAPI.login(body)
    //   if (res.code === 200 || res.code === 202) {
    //     await AsyncStorage.setItem("buyerToken", res.data)
    //     const user = await userAccountAPI.userInfo()
    //     dispatch(setUserInfo(user.data))

    //     // await registerForPushNotificationsAsync(t)
    //     if (res.code === 200) {
    //       if (origin) {
    //         // router.push("/" + origin)
    //       }
    //       else router.push("/")
    //     }
    //     if (res.code === 202) {
    //       // router.push("/register")
    //     }
    // await Clipboard.setStringAsync('hello world')

    //   } else {
    //     setError(res)
    //     throw res.message
    //   }
    // }
    // catch (error: any) {
    //   setError(t`Code invalid`)
    // }
    // finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <Container>
      <View style={tw`absolute z-50`}>
        <BackAndTitle />
      </View>
      <KeyboardAwareScrollView>
        <View className='items-center p-4 sm:p-[100px] w-full'>
          <View className='sm:bg-card mt-4 items-center w-full max-w-lg sm:shadow-xl sm:shadow-muted dark:shadow-none rounded sm:p-20'>

            <H4 className='mt-8 text-center'>
              Verify Account
            </H4>

            <Muted className='mt-4 text-center'>
              Enter the one-time code we sent to
            </Muted>

            <H4 className=' text-center mt-3 mb-8'>
              1234567890
            </H4>

            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => console.log(text)}
              textInputProps={{
                maxFontSizeMultiplier: 0.1
              }}
              theme={{
                containerStyle: tw`flex-1`,
                pinCodeContainerStyle: tw`web:mx-2 min-h-14 min-w-10 h-full`,
                pinCodeTextStyle: tw`text-red-400 text-xl`,
                focusStickStyle: tw`bg-red-400`,
                focusedPinCodeContainerStyle: tw`border-red-300`,
              }}
            />

            <Button variant={"ghost"}
              onPress={() => console.log("fuck")}>
              <Text className='text-muted-foreground mt-8'>Resend</Text>
            </Button>

          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default SignIn