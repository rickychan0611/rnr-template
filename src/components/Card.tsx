import React from 'react'
import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
  className?: string
}

const Card = (props: Props) => {
  return (
    <View className={'bg-card p-ml rounded-sm ' + props.className}>
      {props.children}
    </View>
  )
}

export default Card