import Vue from 'vue'
import Vuex from 'vuex'
import WXrequest from './utils/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {
    isLogin(state) {
      return !!state.userInfo.id;
    }
  },
  mutations: {
    SET_USER_INFO(state, userinfo) {
      state.userInfo = userinfo
    }
  },
  actions: {
    async getUserInfo({
      commit
    }) {
      // 微信小程序打开获取用户信息
      const newUserData = await new Promise((resolve, reject) => {
        wx.getSetting({
          success: res => {
            // 如果用户已经授权，则直接获取用户信息，不用提示授权信息
            if (res.authSetting["scope.userInfo"]) {
              // 获取用户信息
              wx.getUserInfo({
                success: res => {
                  resolve(res.userInfo);
                }
              });
            }
          }
        });
      });
      // 用户登录获取用户信息
      let oldUserData = await new Promise((resolve, reject) => {
        wx.login({
          success(res) {
            if (res.code) {
              WXrequest
                .get({
                  url: `/user/getUserInfo?code=${res.code}`,
                  isLoading: false
                })
                .then(res => {
                  resolve(res.data);
                });
            }
          }
        });
      });

      if (oldUserData.id) {
        // 如果用户存在更新用户信息
        await WXrequest.post({
          url: "/user/updateUser",
          isLoading: false,
          data: {
            updateData: Object.assign({
              id: oldUserData.id
            },
            newUserData
            )
          }
        });
      } else {
        // 如果用户不存在创建用户
        const result = await WXrequest.post({
          url: "/user/createUser",
          data: {
            userData: Object.assign({
              openid: oldUserData.openid
            }, newUserData)
          },
          isLoading: false
        });
        oldUserData = result.data
      }
      commit(
        "SET_USER_INFO",
        Object.assign(oldUserData, newUserData)
      );
    }
  }
})

export default store
