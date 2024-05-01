import { QueryCache, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { Text, View } from 'react-native';
import { useOrders } from '~/api/queryHooks/useProductQueries';
import { useGetOrderList } from '~/interfaces/productTypes';
import { useFocusEffect } from '@react-navigation/native'

type Props = {}

const Orders = (props: Props) => {
  const [input, setInput] = React.useState<useGetOrderList>({
    status: "all",
    page: 1,
    pagesize: 10
  })
  const orders = useOrders(input)

  const firstTimeRef = React.useRef(true)
  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false
        return
      }
      orders.refetch()
    }, [orders.refetch]),
  )

  return (
    <View className='flex-1 p-4'>
      <Text>isLoading = {orders.isLoading + ""}</Text>
      <Text>isFetching = {orders.isFetching + ""}</Text>
      <Text>isPending = {orders.isPending + ""}</Text>
      <Text>{!orders.isLoading && JSON.stringify(orders.data?.[0]?.id)}</Text>
    </View>
  )
}

export default Orders