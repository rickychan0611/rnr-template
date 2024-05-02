import React, { FC, ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
  children: ReactNode;
  style?: ViewProps;
  className?: string 
};

export const Row: FC<Props> = ({ className, children, ...props }) => (
  <View className={`flex-row items-center ` + className} {...props}>
    {children}
  </View>
)

export const RowBetween: FC<Props> = ({ className, children, ...props }) => (
  <View className={`flex-row items-center justify-between ` + className} {...props}>
    {children}
  </View>
)

export const Center: FC<Props> = ({ className, children, ...props }) => (
  <View className={`flex-row items-center justify-center ` + className} {...props}>
    {children}
  </View>
)

export const ColCenter: FC<Props> = ({ className, children, ...props }) => (
  <View className={`flex-col items-center justify-center ` + className} {...props}>
    {children}
  </View>
)

