import React from 'react'
import { View } from 'react-native'

const Divider = ({ className, ...props }: any) => {
  return (
    <View {...props}
      className={"h-[2px] w-full border-b border-divider " + className} />
  )
}

export default Divider