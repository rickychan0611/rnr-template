import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
type Props = {}

const TextInput = (props: any) => {

  return (
    <RNTextInput
      maxFontSizeMultiplier={1.5}
      className='p-4 mt-10 w-full bg-input lg:bg-background rounded placeholder:text-muted'
      {...props}
    />
  )
}

export default TextInput