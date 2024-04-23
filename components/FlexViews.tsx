import React, { FC, ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
  children: ReactNode;
  style?: ViewProps;
  className: string
};

export const RowView: FC<Props> = ({ className, children, ...props }) => (
  <View className={`flex-row items-center ` + className} {...props}>
    {children}
  </View>
)

