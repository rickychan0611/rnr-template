import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
type Props = {}

const TextInput = (props: any) => {

  return (
    <RNTextInput
      maxFontSizeMultiplier={1.5}
      className='p-4 mt-10 w-full bg-input sm:bg-background rounded text-black placeholder:text-muted'
      placeholderTextColor={'#9CA3AF'}
      {...props}
    />
  )
}

export default TextInput