<template>
	<scroll-view scroll-y="">
		
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<view class="swiper-item"><image src="http://gd3.alicdn.com/imgextra/i4/3193079952/TB2vxEigBmWBuNkSndVXXcsApXa_!!3193079952.jpg_400x400.jpg"></image></view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item"><image src="http://img.alicdn.com/imgextra/i1/2901927825/TB1xin_db9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg"></image></view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			
		<view class="xiadan">
			<view class="act"><image src="../../static/nopic_2.png"></image>
			<text>编号：{{info.id}}</text>
			<text class="ts">电脑下单</text>
			</view>
			<view class="jiage">
				<text class="xia">下单价格：</text>
				<text class="byu">{{info.price}}</text>
				<text>元（先垫付）</text>
			</view>
			<view class="jiage">
				<text class="xia">完成返还：</text>
				<text class="byu">{{info.price}}</text>
				<text>元+返回点：</text>
				<text class="byu">2.8</text>
			</view>
			<view class="jiage">
				<text class="xia">收货时间：</text>
				<text class="byu">物流签收好评</text>
			</view>
			<view class="bum" v-for="(image,key,index) in imagelist">
				<image v-if="image==='hbsj'" src="../../static/hbsj.png"></image>
				<image v-if="image==='view_product'" src="../../static/viewproduct.png"></image>
					<image v-if="image==='is_page_down'" src="../../static/viewpage.png"></image>
					<image v-if="image==='is_collect'" src="../../static/shoucang.png"></image>
					
			</view>
			
		</view>
		
		<view class="pingjia">
			
			<view  class="gys" v-for="(value,key,index) in account" @click="order(value.id)">
			<view>
			<text class="siy">{{value.name}}</text>
			<text class="das">年龄:{{value.age}}</text>
			</view>
			<view>
				<text class="wae">等级：{{value.name}}</text>
				<text class="nian">今日接单1周2月2</text>
			</view>
			</view>
			
		</view>
		
		<view class="zitu">
			【注意】
         <view>选择哪个买号，必需用该买号购买商家宝贝，乱购买或随意退款者，一经举报封号处理。</view>
		</view>
		<navigator url="../goods/goods?title=goods"  hover-class="goods-hover">
		<view class="dibu">
			<text>返回</text>
		</view>
		</navigator>
		
	</scroll-view>
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
				title: 'navigator',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				account:[],
				info:[],
				imagelist:[],
				tid:0,
			};
		},
		onLoad:function(e) {	
			if(this.hasLogin){
				//console.log(this.userInfo)
				this.tid = e.id;
				uni.request({
					url:`${this.$serverUrl}/index/item?id=`+e.id,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					method:"GET",
					success: (res) => {//请求成功后返回的数据
						const data = res.data.info
						this.account = data.account;
						this.info = data.data;
						//console.log(data)
						for (let opt in this.info.other_opts) {  
							this.imagelist = this.imagelist.concat(opt);
						}
						
					}
				})
			}else{
				uni.reLaunch({
					url:"../login/login"
				})
			}
			
			
		},
		methods:{
			order(bid){
				uni.request({
					url:"http://t2.qingxinedu.cn/api/index/order?tid="+this.tid,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					data:{bid:bid},
					method:'POST',
					success:(res)=>{
						
						if(res.data.status==1){
							
							uni.reLaunch({
								url:"../task/task",				
							})
						}else if(res.data.status==2){
							uni.showToast({
								title:'该商品已下单'
							})
						}else{
							console.log('系统错误')
						}
					},
					fail:(res)=>{
						console.log(res.data)
					},
					
				})
			},
		}
	}
</script>

<style>
	.xiadan{border-top: #6D6D72 solid 3px; background: #FFFFFF;}
.act{height: 36px; border-bottom: #BBBBBB solid 1px;}	
.act image{height: 15px; width: 15px; margin-left: 10px;}
.ts{color: #007AFF; position: absolute; right: 10px;}
.byu{color: red;}
.xia{margin-left: 10px;}
.jiage{height: 36px; border-bottom: #BBBBBB solid 1px;}
.bum{height: 36px; display: inline;line-break: 36px;}
.bum>image{width: 50px; height: 16px; margin-top: 15upx;}
.sgf{color: #007AFF;}
.wer{background: #929292; height: 10px; }
.pingjia{border-top: #F0AD4E solid 3px; background: #FFFFFF;}
.gys{border-bottom: #EEEEEE solid 1px;}
.swiper {
		height: 280upx;
		width: 100%;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}
	.swiper image{height: 280upx;width: 100%;}
	.das{color: #09BB07;right: 15px; position: absolute;}
	.siy{margin-left: 10px;}
	.wae{margin-left: 10px; color: #007AFF;}
	.nian{right: 15px; position: absolute;}
	.zitu{color: red;} 
	.dibu{background: red; width: 100%; height: 36px; position: fixed; bottom: 0;text-align: center;}
	.dibu>text{color: #FFFFFF; font-size: 20px;}
</style>
