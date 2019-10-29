<template>
	<view>
		<scroll-view class="uni-card" v-for="(value,key) in task.order" >
			<view class="uni-card-header uni-card-media">
				<image v-if="value.scid===1" class="uni-card-media-logo" src="../../static/taobao.png" ></image>
				<image v-if="value.scid===2" class="uni-card-media-logo" src="../../static/jigndong.png" ></image>
				<view class="uni-card-media-body">
						<text class="uni-card-media-text-bottom">发表于 {{value.pub_time}}</text>
				</view>
			</view>
			<view class="uni-card-content image-view">
				<navigator :url="'task_detail?id='+value.tid">
					<image :src="value.gpic" class="gpic"></image>
				</navigator>
				<view class="uni-card-content-inner">
					<view>下单价格 : <text class="price">¥{{value.price}}</text></view>
					<view>奖发布点 : <text class="point">6.76</text></view>
					<view>收货时间 : <text class="view">物流签收好评 </text></view>
					<view>下单买号 : <text class="name">{{value.name}}</text></view>
				</view>
			</view>
			<view class="footer">
				 <image  src="../../static/hbsj.png" v-if="value.other_opts.hbsj"></image> 
				 <image  src="../../static/shoucang.gif" v-if="value.other_opts.is_collect"></image>
				<image  src="../../static/viewpage.png" v-if="value.other_opts.is_page_down"></image>
				<image  src="../../static/viewproduct.png" v-if="value.other_opts.is_view_product"></image> 
				<image  src="../../static/hbsj.png" v-if="value.is_hbsj"></image> 
			</view>
			<view class="content-view" v-if="value.gdesc">
						<text>商家请求:{{value.gdesc}}</text>
			</view>
			
			<view class="uni-card seller">
				<view class="uni-card-header info-head">商家信息</view>
				<view class="uni-card-content info-con">
					<view class="uni-card-content-inner info-inner">
						昵称:<text>{{value.username}}</text>
					</view>
					<view class="uni-card-content-inner info-inner">
						QQ:<text>{{value.qq}}</text>
					</view>
				</view>
				
			</view>
			<view class="uni-card order">
				<view class="uni-card-header info-head">订单信息</view>
				<view class="uni-card-content info-con">
					<view class="uni-card-content-inner info-inner">
						订单号:<text>{{value.sn}}</text>
					</view>
					<view class="uni-card-content-inner info-inner">
						实付金额:<text>{{value.price}}</text>
					</view>
				</view>
				
			</view>
			<view class="uni-card review">
				<view class="uni-card-header info-head">任务日志</view>
				<view class="uni-card-content info-con">
					<view class="uni-card-content-inner info-inner">
						发布时间:<text>{{value.pub_time}}</text>
					</view>
					<view class="uni-card-content-inner info-inner">
						接手时间:<text>{{value.order_time}}</text>
					</view>
					<view class="uni-card-content-inner info-inner">
						付款时间:<text>{{value.order_time}}</text>
					</view>
					<view class="uni-card-content-inner info-inner">
						发货时间:<text>{{value.ship_time}}</text>
					</view>
					<view class="uni-card-content-inner info-inner">
						收货时间:<text>{{value.take_time}}</text>
					</view>
				</view>
				
			</view>
		</scroll-view>
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
				id:0,
				task:[],
			};
		},
		onLoad:function(e){
			uni.request({
				url:`${this.$serverUrl}/task/task_detail?id=`+e.id,
				header:{
					"Content-Type": "application/x-www-form-urlencoded",
					"token":this.userInfo.token
				},
			
				success:(res)=>{
					this.task = res.data;
				}
			})
		},	
}
	
</script>

<style>
	.uni-card-media{height:10upx;}
	.uni-card-media-text-bottom{margin-top: 25upx;font-size: 25upx;}
	.uni-card-media-logo{height: 50upx;width: 50upx;margin: 5upx;}
	
	
	.uni-card-content{height: 230upx;display: flex;justify-content:space-around;align-items: center;padding: 15upx;border-bottom: 1upx solid  #929292;}
	.uni-card-content-inner{padding: 0;width:70%;}
	.uni-card-content-inner text{color: #FF0000;padding: 9px;}
	
	.gpic{height: 180upx; width: 180upx;}
	.footer{padding: 15upx;border-bottom: 1upx solid #B2B2B2;}
	.footer>image{width:70upx;height: 36upx;margin: 0upx 5upx;}
	
	.content-view{padding: 10upx;font-size: 30upx;color: #007AFF;border-bottom: 1upx solid  #929292;}
	
	.uni-card{flex-direction: column;}
	.info-head{height:5upx;font-size: 25upx;line-height: 5upx;padding: 15upx;}
	.info-con{display:inline;border: none;}
	.info-inner{height:50upx;line-height:50upx;padding: 15upx;font-size: 35upx;margin-left: 15upx;}
</style>
