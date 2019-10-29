<template>
	<view>
		<view class="list" v-for="(list,list_i) in severList" >
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(li.url)"  v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover"    :key="li.name" >
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/to.png" ></image>
			
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: mapState([ 'hasLogin','userInfo']),
		data() {
			return {
				severList:[
					[
						{name:'手机认证',icon:'../../static/point.png',url:'moible'
						},
						{name:'实名认证',icon:'../../static/quan.png',url:'IDcard'
						},
						{name:'银行卡认证',icon:'../../static/momey.png',url:'bank_card'
						},
						{name:'视屏认证',icon:'../../static/renw.png',url:'video'
						},
						
						]
				]
			};
		},
		onLoad() {
			if(this.hasLogin){
				uni.request({
					url:`${this.$serverUrl}/home/setting`,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					method:"GET",
					success: (res) => {//请求成功后返回的数据
					console.log(res.data)
						//const data = res.data.info	
						//this.account = data.account;
					}
				})
			}else{
				uni.reLaunch({
					url:"../login/login"
				})
			}	
		},
		methods:{
			toPage(url){
				uni.navigateTo({
					url:url,
				})
			}
		}
	}
</script>


<style>
.list{width:100%;border-bottom:solid 13px #f1f1f1;}
	.li{width:92%;height:50px;padding:0 4%;border-bottom:solid 1px #e7e7e7;display:flex;align-items:center;}
	.noborder{border-bottom:0;}
	
	.text{padding-left:10px;width:100%;color:#666}
	.to{flex-shrink:0;width:20px;height:20px}
</style>
