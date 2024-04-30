import { QueryCache, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { Text } from 'react-native';

type Props = {}

const Orders = (props: Props) => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData(['userInfo'])
  // const { data } = useUserInfo()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Text>{JSON.stringify(data)}</Text>
  )
}

export default Orders