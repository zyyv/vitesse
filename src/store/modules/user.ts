// import { UserData } from "/@/api"
import router from '/@/route'
import type { Module } from "vuex"
// import { UserLoginResp, Result, Login } from "/@/api/type"
import { getToken, getUserInfo, setRemember, setToken, setUserInfo, storageClear } from "/@/utils/auth"

interface State {
  token: string | null,
}

const user: Module<State, any> = {
  namespaced: true,
  state: {
    token: getToken(),
  },
  mutations: {
    setToken(state: State, token: string) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // async login({ commit }, data: Login) {
    //   return new Promise((resolve, reject) => {
    //     UserData.login(data).then((res: Result<UserLoginResp>) => {
    //       setRemember(data.remember ? 1 : 0) // 记住我
    //       if (res.data) {
    //         commit('setToken', res.data.token)
    //         commit('setUserInfo', res.data.userInfo)
    //         // message.success('登录成功')
    //         setTimeout(() => {
    //           if (res.data && res.data.userInfo.isnew) {
    //             router.replace('/update')
    //           } else {
    //             router.replace('/')
    //           }
    //         }, 1500)
    //       }
    //       resolve(res)
    //     }, err => reject(err))
    //   })
    // },
    async logout({ commit }) {
      commit('setToken', null)
      storageClear()
    }
  }
}

export default user