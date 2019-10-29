<script>
	import {
		mapMutations
	} from 'vuex';
	
	export default {
		onLaunch: function () {
			uni.getStorage({
				key: 'userInfo',
				success:(res) => {
					this.login(res.data);
					
					// 如果还需要重新校验或是想要刷新token的有效时间 就再联网请求一次
					uni.request({
						url: `${this.$serverUrl}/index/auth`,
						header: {
							"Content-Type": "application/x-www-form-urlencoded",
							"token":res.data.token
						},
						data: {
							"username":res.data.username
						},
						method: "POST",
						success: (e) => {
							if (e.statusCode === 200 && e.data.code === 0) {
								this.login(e.data);
							}
						}
					})
				},
				fail: (res) => {
					console.log('cache fail')
				}
			});
		
		},
		methods: {
			...mapMutations(['login'])
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
