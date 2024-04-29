import { useQuery } from "@tanstack/react-query"
import { userApi } from "../api.user"

const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: () => userApi.getUserInfo(),
  })
}

export { useGetUserInfo }