import { httpGet, httpPost } from "./axios"
// import { Login, PostLike, Sms } from "./type"
// export const UserData = {
//   // 获取验证码
//   sendSms: async (data: Sms) => {
//     return httpPost('/user/sendSmsCode', data)
//   },
//   login: async (data: Login) => {
//     return httpPost('/user/login', data)
//   },
//   update: async (data: object) => {
//     return httpPost('/user/update', data)
//   }
// }
// export const ZoneData = {
//   list: async () => {
//     return httpGet('/zone/list')
//   },
//   liked: async (data: PostLike) => {
//     return httpPost('/zone/liked', data)
//   },
//   disliked: async (data: PostLike) => {
//     return httpPost('/zone/disliked', data)
//   },
// }