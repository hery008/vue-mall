// export default {
//      saveUserName ({ commit},username) { 
//          commit('saveUserName',username)
//      }
//     saveUserName(context,username){
//         context.commit('saveUserName', username);
//     },
// }

/**
 * 商城Vuex-actions
 */
export default {
    saveUserName ({ commit},username){
      commit('saveUserName', username);
    },
    saveCartCount(context, count) {
      context.commit('saveCartCount', count);
    }
  }