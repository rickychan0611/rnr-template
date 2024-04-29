import { QueryCache, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { getUserInfo } from '~/api/api.user';
import { useUserInfo } from '~/api/queries';
import { Text } from '~/components/ui/text'

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