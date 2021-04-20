import Vue from 'vue'
import App from './App'
import api from './common/api.js'
Vue.prototype.$request = api

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);
//封装登录检查
Vue.prototype.checkLogin = function(){    
    var TOKEN  = uni.getStorageSync('tokens');
    if(TOKEN == '' ){  
		return false;
    } 
	return true;
}

const app = new Vue({
    ...App
})
app.$mount()
