import { GET, POST, POST_NO_TOKEN } from './apiCalls'

export const sendSignInCode: any = async (phone: string) => {
  return await POST_NO_TOKEN("/api/b2b/user/sendcodeforlogin", { phone })
}

export const login = async (body: { user_name: string, verifycode: string }) => {
  return await POST_NO_TOKEN("/api/b2b/user/login", body)
}

export const logout = async () => {
  return await POST("/api/b2b/user/logout", undefined)
}

export const deleteUser = async () => {
  return await POST("/api/b2b/user/delete", undefined)
}