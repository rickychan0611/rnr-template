import { useMutation, useQueries, useQuery } from "@tanstack/react-query"
import { userAuthAPI } from "./authAPI"
import { POST_NO_TOKEN } from "./apiCalls"

export const useSendSignInCode = (phone: string) => {
  return useMutation({
    mutationFn: POST_NO_TOKEN("/api/b2b/user/sendcodeforlogin", { phone })
  })
}