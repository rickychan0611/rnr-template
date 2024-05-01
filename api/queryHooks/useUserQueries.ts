import { useQuery } from "@tanstack/react-query"
import { api_products } from "../api_products"

const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => api_products.getOrders( "all", 1, 0, 0),
  })
}

export { useGetUserInfo }