<template>
	
	<view class="uni-tab-bar">
		
		<scroll-view class="uni-swiper-tab" scroll-x> 
			<view @tap="activefn(0)" class="swiper-tab-list">
				<text>全部</text>
			</view>
			<view @tap="activefn(1)" class="swiper-tab-list">
				<text>待下单</text>
			</view>
			<view @tap="activefn(2)" class="swiper-tab-list"><text>待发货</text></view>
			<view @tap="activefn(3)" class="swiper-tab-list"><text>待收货</text></view>
			<view @tap="activefn(4)" class="swiper-tab-list"><text>待返款</text></view>
			<view @tap="activefn(5)" class="swiper-tab-list"><text>待追评</text></view>
			<view @tap="activefn(6)" class="swiper-tab-list"><text>待审核追评</text></view>
			<view @tap="activefn(7)" class="swiper-tab-list"><text>已完成</text></view>
		</scroll-view>
		<!-- 任务列表 -->
	<scroll-view scroll-y  @scrolltolower="LoadMore" @scroll="scroll" style="height: 95%;">
		<view class="uni-card" v-for="(value,key) in task" style="background: #F1F1F1;">
			<view class="uni-card-header uni-card-media">
				<image class="uni-card-media-logo" src="../../static/taobao.png" v-if="value.scid==1"></image>
				<image class="uni-card-media-logo" src="../../static/jigndong.png" v-if="value.scid==2"></image>
				
				
						<text class="uni-card-media-text-bottom">{{value.order_time}}</text>
						<text class="uni-card-media-text-bottom stauts-msg" v-if="value.status==1">等待下单付款</text>
						<text class="uni-card-media-text-bottom stauts-msg" v-if="value.status==2">等待发货</text>
						<text class="uni-card-media-text-bottom stauts-msg" v-if="value.status==3">该任务被锁定</text>
						<text class="uni-card-media-text-bottom stauts-msg" v-if="value.status==4">等待商家审核并放款</text>
						
				
			</view>
			
			<view class="uni-card-content image-view">
				<navigator :url="'../task_detail/task_detail?id='+value.tid">
					<image :src="value.gpic" class="gpic"></image>
				</navigator>
				<view class="uni-card-content-inner">
					<view class="info-detail">下单价格 : <text class="price">¥{{value.price}}</text></view>
					<view class="info-detail">奖发布点 : <text class="point">6.76</text></view>
					<view class="info-detail">收货时间 : <text class="view">物流签收好评 </text></view>
					<view class="info-detail">下单买号 : <text class="name">{{value.name}}</text></view>
				</view>
			</view>
			<view class="footer">
				<image  src="../../static/hbsj.png" v-if="value.other_opts.hbsj"></image>
				<image  src="../../static/shoucang.gif" v-if="value.other_opts.is_collect"></image>
				<image  src="../../static/viewpage.png" v-if="value.other_opts.is_page_down"></image>
				<image  src="../../static/viewproduct.png" v-if="value.other_opts.is_view_product"></image>
				<image  src="../../static/sousuo.gif" v-if="value.other_opts.sousuo"></image>
			</view>
			<view class="content-view" v-if="value.gdesc"> 
						<text>商家请求:{{value.gdesc}}</text>
			</view>
			
			<!-- 倒计时 -->
			<view class="button-sp" v-if="value.status==1"> 
				<button class="btn" type="default"  @click="timeup(value.id)" plain="true">退出任务</button>
				<button class="btn" type="warn"  @click="To_order(value.id)">下单流程</button>
				<uni-countdown :show-colon="false" :show-day="false"  :minute="0" :second="(value.order_time_second+3600-nowtime)" @timeup="timeup(value.id)" class="time"></uni-countdown>
				<text>自动退出</text>
			</view>
			<view class="button-sp" v-if="value.status==2"> 
				<button class="btn" type="default" disabled="true" plain="true"  style="margin-right: 10px;color:#333333;">等待发货</button>
			</view>
			
			<view class="button-sp" v-if="value.status==4">
				<button class="mini-btn" type="warn" size="mini" @click="timeup(value.id)" plain="true">提取点款</button>
				<button class="mini-btn" type="disable" size="mini">等待审核</button>
			</view>
			<view class="button-sp" v-if="value.status==5" >
				<button class="mini-btn" type="disable" size="mini" @click="To_review(value.id)" style="margin-right: 10px;">信用评价</button>
			</view>
			</view>
			<!-- 倒计时 -->
		<view class="loadmore">
			<uni-load-more :loadingType="loadingType" :loadingText="loadingText"></uni-load-more>
		</view>
	</scroll-view>
		
		
		
					
		<!-- 任务列表 -->
	</view>
	
</template>

<script> 
	import uniLoadMore from '@/components/uni-load-more.vue';
	import uniCountdown from '../../components/uni-countdown/uni-countdown.vue';
	import {
		mapState,
		mapMutations,
		
	} from 'vuex';
	export default {
	computed: mapState([ 'hasLogin','userInfo']),
	components: {
		uniCountdown,uniLoadMore,
	},
		data(){
			return {
				nowtime:0,
				isactive: 0,	
				scrollLeft: 0,
				task:[],
				/* 加载更多 */
				loadingType: 0,
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				isPosition:false,
				activeClass:'tabactive',
				falseClass:'tabactive-nop',	
				limit:2,
				/* 加载更多 */
				request:true,
			};
		},
		onLoad(){
			
			
			this.nowtime=parseInt(new Date().getTime()/1000) 
			 if(this.hasLogin){	
				uni.request({
					url:`${this.$serverUrl}/task/task`,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					success: (e) => {	
						
						this.task = e.data.order; 
					},
					fail: (e) => {
						console.log('data fail')
					}
				});
			}else{
				uni.navigateTo({
					url:"../login/login"
				})
			}			 
		},
		
		methods:{
			LoadMore(){
				if(this.loadingType !==2){
					this.loadingType = 1;
					if(this.request){
						this.request=false;
						setTimeout(() => {
							this.addData();
						}, 1200);
					}else{
						this.loadingType = 2;
					}
				}	
			},
			
			addData(){
				
				uni.request({
					url: 'http://t2.qingxinedu.cn/api/task/task?limit='+this.limit,
					method: 'GET',
					data: {limit:this.limit},
					success: (res) => {
						const loadData = res.data;
						if(loadData.order.length==0){
							this.loadingType=2;			
						}else{
							
							this.task =this.task.concat(loadData.order) 
							this.limit = this.limit+1;
							this.request = true;
						}
						
					    }
				    });
					
			},
			
			
			activefn(status){
				uni.request({
					url:`${this.$serverUrl}/task/task?status=`+status,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					success: (e) => {	
						this.task = e.data.order; 
					},
					fail: (e) => {
						console.log('data fail')
					}
				});
			},
			
			
			//下单流程
			To_order(id){
				uni.navigateTo({
					url:'order_process?id='+id,
				})
			},
			To_review(id){
				uni.navigateTo({
					url:'order_review?id='+id,
				})
			},
			scroll(e){	
				console.log(111)
					this.isPosition = true;
			},
			//订单取消
			timeup(id){
				uni.request({
					url:`${this.$serverUrl}/task/cancel?id=`+id,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					success: (e) => {	
						
					},
					fail: (e) => {
						
					}
				})
			},
		},
		
	}
</script>

<style>
	
	
		
	.uni-swiper-tab{height:70upx;line-height:70upx;top:0px;}
	.swiper-tab-list{height: 70upx;line-height: 70upx;width: 25%;border-right-color: #555555;}
	
	
	.uni-card-media{height: 10upx;}
	.uni-card-media-text-bottom{margin-top: 25upx;font-size: 25upx;font-weight: bold;}
	.uni-card-media-logo{height: 50upx;width: 50upx;margin: 9upx;}
	
	.stauts-msg{color: #FF0000;text-align: right;margin-left: 60upx;}
	
	.uni-card-content{height: 230upx;display: flex;justify-content:space-around;align-items: center;padding: 15upx;}
	.uni-card-content-inner{padding: 0;width:70%;}
	.uni-card-content-inner text{color: #E80080;padding: 9px;}
	.info-detail{margin-left: 30px;}
	.gpic{height: 180upx; width: 180upx;}
	.footer{padding: 15upx;}
	.footer>image{width:70upx;height: 36upx;margin: 0upx 5upx;}
	
	.content-view{padding: 10upx;font-size: 30upx;color: #007AFF;}


	.button-sp{display: flex;border: none;padding: 2px;}
	.button-sp button{border: 1upx solid #333333;width:150upx;height:60upx;line-height: 60upx;font-size: 20upx;text-align: center;padding: 0px;}
	.cancel{background: #D8D8D8; color: #333333;}
	.To_order{background: #FFB400; color: #FF0000;}
	
	.time{color: #FF0000;}
	.uni-countdown__number{border: none;}
	
	.loadmore {
		height: 35px;
		line-height: 35px;
		text-align: center;
		
		flex-direction: column;
		justify-content: center;
	}
</style>
