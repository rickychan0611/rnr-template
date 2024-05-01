import { QueryCache, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { Text } from 'react-native';
import { useOrders } from '~/api/queryHooks/useProductQueries';
import { useGetOrderList } from '~/interfaces/productTypes';

type Props = {}

const Orders = (props: Props) => {
  const [input, setInput] = React.useState<useGetOrderList>({
    status: "all",
    page: 1,
    pagesize: 10
  })
  const orders = useOrders(input)

  return (
    <Text>{JSON.stringify(orders.data[0].id)}</Text>
  )
}

export default Orders