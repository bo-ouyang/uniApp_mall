<template>
	<view>
		
		
		<view class="list" v-for="(list,list_i) in severList" >
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(li.url)"  v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover"    :key="li.name" >
				<view class="icon"><image :src="'../../static/sever/'+li.icon"></image></view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/to.png"></image>
				
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
						{name:'淘宝',icon:'../../static/point.png',url:'bindAccount?id=1'
						},
						{name:'天猫',icon:'../../static/quan.png',url:'bindAccount?id=2'
						},
						{name:'拼多多',icon:'../../static/momey.png',url:'bindAccount?id=3'
						},
						{name:'京东',icon:'../../static/renw.png',url:'bindAccount?id=4'
						},
						{name:'蘑菇街',icon:'../../static/renw.png',url:'bindAccount?id=5'
						},
						]
				]
			};
		},
		onLoad() {
			if(this.hasLogin){
				uni.request({
					url:`${this.$serverUrl}/home/bind_lost`,
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
					url:url
				})
			}
		}
	}
</script>

<style>
.list{width:100%;border-bottom:solid 13px #f1f1f1;}
	.li{width:92%;height:50px;padding:0 4%;border-bottom:solid 1px #e7e7e7;display:flex;align-items:center;}
	.noborder{border-bottom:0;}
	.icon{flex-shrink:0;width:25px;height:25px;}
	.icon image{width:25px;height:25px}
	.text{padding-left:10px;width:100%;color:#666}
	.to{flex-shrink:0;width:20px;height:20px}

</style>
