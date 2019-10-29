<template>
	<view>
		<!-- 分类导航 -->
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x>
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list"  @click="tapTab(tab.id)">
			 {{tab.name}}
			 </view>
		</scroll-view>
		<!-- 分类导航 -->
		
		<view class="pingjia">
			<view  class="gys" v-for="(value,key,index) in account" @click="order(value.id)">
			<view class="info-top">
			<view class="icon">
				<image src="../../static/taobao.png" v-if="value.scid==1"></image>
				<image src="../../static/.png" v-if="value.scid==2"></image>
				<image src="../../static/jigndong.png" v-if="value.scid==3"></image>
				<image src="../../static/.png" v-if="value.scid==4"></image>
			</view>
			<text class="siy">{{value.name}}</text>
			<text class="das">年龄:{{value.age}}</text>
			</view>
			<view>
				<text class="wae">等级：{{value.name}}</text>
				<text class="nian">今日接单1周2月2</text>
			</view>
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
				account:[],
				tabBars:[
					{name: '全部',id: 0},
					{name: '淘宝',id: 1},
					{name: '天猫',id: 2},
					{name: '京东',id: 3},
					{name: '拼多多',id: 4},
					{name: '聚划算',id: 5},
				]
			};
		},
		onLoad() {	
			if(this.hasLogin){
				uni.request({
					url:`${this.$serverUrl}/index/item`,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					method:"GET",
					success: (res) => {//请求成功后返回的数据
						const data = res.data.info
						this.account = data.account;
					}
				})
			}else{
				uni.reLaunch({
					url:"../login/login"
				})
			}	
		},
		methods:{
			 tapTab(index){
				uni.request({
					url:`${this.$serverUrl}/index/item?scid=`+index,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					method:"GET",
					success: (res) => {//请求成功后返回的数据
						const data = res.data.info
						this.account = data.account;
					}
				})
			},
		}
	}
</script>

<style>
.pingjia{border-top: #F0AD4E solid 3px; background: #FFFFFF;}
.gys{border-bottom: #EEEEEE solid 1px;}
.das{color: #09BB07;right: 15px; position: absolute;}
	.siy{margin-left: 10px;}
	.wae{margin-left: 10px; color: #007AFF;}
	.nian{right: 15px; position: absolute;}
	.zitu{color: red;}
	.info-top{display: flex;}
	.icon image{width: 40upx;height: 40upx;}
</style>
