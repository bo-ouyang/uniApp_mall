<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function () {
			uni.getStorage({
				key: 'userInfo',
				success:(res) => {
					this.setlogin(res.data);
					
					var res = res.data
					// 如果还需要重新校验或是想要刷新token的有效时间 就再联网请求一次
					this.$api.auth({user:res.data.username}).then((ret)=>{
							this.setlogin(ret.data);
					}).catch((err)=>{
						
					})
				},
				fail: (res) => {
					console.log('cache fail')
				}
			});
		
		},
		methods: {
			...mapMutations(['setlogin'])
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
 	page{
		height:100%;
		
		background-color:#F4F5F6;
		font-size:28upx;
		line-height: 1.8;
	} 
</style>
