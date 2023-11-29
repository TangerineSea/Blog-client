const getters = {
  /* 取值举例：store.getters.token */
  sidebar: state => state.app.sidebar, // 取app模块属性
  device: state => state.app.device, // 取app模块属性
  token: state => state.user.token, // 取user模块属性
  avatar: state => state.user.avatar, // 取user模块属性
  name: state => state.user.name // 取user模块属性
}
// getters便捷访问
export default getters
