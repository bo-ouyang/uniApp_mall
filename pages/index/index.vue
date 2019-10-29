<template>

<view  class="uni-tab-bar" >
	<!-- - -->
	<view v-show="!isscroll">
			<!-- 头部导航 -->
			<uni-nav-bar color="#333333" background-color="#FFFFFF" fixed="false" right-icon="scan" @click-left="showCity"
			 @click-right="scan">
				<block slot="left">
					<view class="city">
						<uni-icon type="home" color="#333333" size="26"></uni-icon>
					</view>
				</block>
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666"></uni-icon>
					<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
				</view>
			</uni-nav-bar>
			<!-- 头部导航 -->
			
			<!-- 海报 -->
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item"><image src="../../static/01.png" mode="aspectFit"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/02.png" mode="aspectFit"></image></view>
				</swiper-item>
			</swiper>
			<!-- 海报 -->
		
		<!-- /* 滚动消息 */ -->
			<view class="uni-swiper-msg">
				<view class="uni-swiper-msg-icon1">
					<image src="../../static/report.png" mode="aspectFit"></image>
				</view>
				<swiper vertical="true" autoplay="true" circular="true" interval="3000" class="msg">
					<swiper-item v-for="(item, index) in msg" :key="index">
						<navigator>{{item}}</navigator>
					</swiper-item>
				</swiper>
			</view>
		<!-- /* 滚动消息 */ -->
		
	</view>
	<!-- - -->
	
		<!-- 分类导航 -->
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x  >
			<view v-for="(tab,index) in tabBars"  class="swiper-tab-list"  @click="tapTab(tab.cate_id)">
			 {{tab.cate_name}}
			 </view>
		</scroll-view>
		<!-- 分类导航 -->
		
		<!-- 子集导航 -->
	 	<view class="subnav" >
			<view @tap="activefn(0)" :class="{active2:isactive==0}">
				<text>综合</text>
			</view>
			<view @tap="activefn(1,isup1)" :class="{active2:isactive==1}">
				<text>新品</text>
			    <text v-show="isup1==1" class="test">&#xe60d;</text>
			    <text v-show="isup1==-1" class="test">&#xe60c;</text>
			</view>
			<view @tap="activefn(2,isup2)" :class="{active2:isactive==2}">
				<text>折扣</text>
				<text v-show="isup2==2" class="test">&#xe60d;</text>
			    <text v-show="isup2==-2" class="test">&#xe60c;</text>
			</view>
			<view @tap="activefn(3,isup3)" :class="{active2:isactive==3}">
				<text>推荐</text>
				<text v-show="isup3==3" class="test">&#xe60d;</text>
			    <text v-show="isup3==-3" class="test">&#xe60c;</text>
			</view>
		</view> 
		<!-- 子集导航 -->
		
		
			<!--商品-->	
				<scroll-view  class="list" scroll-y @scrolltolower="LoadMore" @scroll="scrollyfn">
						
					<view class="uni-product-list">
						<!-- 产品列表 -->
						<view class="uni-product "  v-for="(newsitem,key,index) in newsitems" >
							
							<navigator :url="'../item/item?id='+newsitem.goods_id">
								<view class="image-view">
									<image class="uni-product-image" :src="newsitem.goods_image" ></image>
								</view>
							</navigator>
							<view class="uni-product-title">{{newsitem.goods_name}}</view>
							<view class="uni-product-des">
								<text v-if="newsitem.scid===1" class="test taobao">&#xe607;</text>
								<text v-if="newsitem.scid===2" class="test jingdong">&#xe607;</text>
								<!-- <text v-if="newsitem.ordertype==='1'" class="test pc">&#xe71f;</text>
								<text v-if="newsitem.ordertype==='2'" class="test pc">&#xe71f;</text> -->
								<!-- <text class="name">{{newsitem.username}}</text> -->
										<!-- <image v-if="newsitem.scid===1"  src="../../static/taobao.png"></image>
										<image v-if="newsitem.scid===2"  src="../../static/jigndong.png"></image>
										<image v-if="newsitem.ordertype==='1'"  src="../../static/diannao.png"></image>
										<image v-if="newsitem.ordertype==='2'"  src="../../static/shouji.png"></image>	 -->
								
									<!-- <image v-if="newsitem.lev==='1'" src="../../static/vip.png"></image> -->
								<text class="uni-product-price-original">￥{{newsitem.original_price}}</text>
							</view>
							
							
							<view class="uni-product-price">
								
							</view>
						<view class="btn">
							<button type="primary" size="mini" plain="true">抢此任务</button>
						</view>
						</view>
							
					</view>
						
						
					<view class="uni-tab-bar-loading">
						<uni-load-more :loadingType="loadingType" :loadingText="loadingText"></uni-load-more>
					</view>
				</scroll-view>
		
		
			<!--商品-->
		
</view>
	
	
	
	
</template>


<script>
	
	import uniNavBar from '../../components/uni-nav-bar.vue';
	import uniIcon from '../../components/uni-icon.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
	export default {
		computed: mapState([ 'hasLogin','userInfo']),
		components: {
			uniNavBar,
			uniIcon,
			uniLoadMore,
		},
		
		data() {
			return {
				/* 导航控制 */
				isup1:1,
				isup2:2,
				isup3:3,
				isactive: 0,
				/* 导航控制 */
				/* 导航定位 */
				
			
				isscroll:false,
				
				/* 海报控制 */
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				/* 海报控制 */
				
				/* 加载更多 */
				loadingType: 0,
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				/* 加载更多 */
					
					//滚动消息
					msg : [
						'在淘宝天猫区发布了1条(10份)试用活动',
						'在淘宝天猫区发布了1条任务',
						'完成试用返还担保金和红包奖励,编号:07192**** ',
						'购买[一年皇冠VIP会员卡]充值卡，扣费1000.00元 ',
						'账户余额充值，单号：R07172****',
						'在淘宝天猫区发布了1条(2份)试用活动',
						'在淘宝天猫区发布了1条任务',
					],
				newsitems:[],//商品信息
				tabBars:[
					{
						cate_name: '全部',
						cate_id: '0'
					},
				],
				limit:2,
				request:true,
			}
			
		},
		
		
		onLoad() {
			//console.log(this.$api)
			this.$api.home({}).then((res)=>{
				console.log(res)
				res = res.data
				this.tabBars = this.tabBars.concat(res.category)
				this.newsitems = res.goods
				//console.log(res.category)
			}).catch((err)=>{
				
			})
			
			/* uni.request({
				url:"http://t2.qingxinedu.cn/api/index/index",
				dataType:'text',
				header:{
					"Content-Type": "application/x-www-form-urlencoded",
					
				},
				method:"GET",
				success: (res) => {//请求成功后返回的数据
					//console.log(this.userInfo)
					const data = JSON.parse(res.data);
					this.tabBars = this.tabBars.concat(JSON.parse(data.cate));
					this.newsitems = data.data;
				}
			}); */
		
		},
		
		
		
		
		methods: {
			LoadMore(){
				if(this.loadingType !==2){
					this.loadingType = 1;
					if(this.request){
						this.request=false;
						setTimeout(() => {
							this.addData();
						}, 1200);
					}
				}	
			},
			addData(){
				
				uni.request({
					url: 'http://t2.qingxinedu.cn/api/index/index',
					method: 'GET',
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						
					},
					data: {limit:this.limit},
					success: (res) => {
						const loadData = res.data;
						if(loadData.data.length==0){
							this.loadingType=2;			
						}else{
							this.newsitems =this.newsitems.concat(loadData.data) 
							this.limit = this.limit+1;
							this.request = true;
						}
						
					    }
				    });
					
			},
			//导航控制
			tapTab(index){
				uni.navigateTo({
					url:"../info/info?cid="+index,
				})
					
			},
			/* 滑动定位及加载更多 */
			
		
			/* 滑动定位及加载更多 */
			
			//子分类控制
			activefn(n,isup=1) {
				this.isactive = n
				if(isup==1||isup==-1){
					this.isup1=-isup
					this.sort('new',this.isup1)
				}else if(isup==2||isup==-2){
					this.isup2=-isup
					this.sort('bargain',this.isup2)
				}else if(isup==3||isup==-3){
					this.isup3=-isup
					this.sort('recommend',this.isup3)
				}else if(n==0){
					this.sort('gooods_id',1)
				}
			},
			sort(field,sort){
				this.$api.home({order:field,sort:sort}).then((ret)=>{
					this.newsitems = res.data.goods;
				}).catch()
			},
			
			
			scrollyfn(e){		
				this.isscroll=e.detail.scrollTop>10
				//console.log(e.detail.scrollTop)
			},
			
		}
	}
</script>

<style>
	
	
			
			
			
			
	.uni-tab-bar .active {
		border-bottom: 2px solid #007AFF;
	}

	
			
			.input-view {
				width: 92%;
				display: flex;
				background-color: #e7e7e7;
				height: 30px;
				border-radius: 15px;
				padding: 0 4%;
				flex-wrap: nowrap;
				margin: 7px 0;
				line-height: 30px;
			}
			.input-view .uni-icon{
				line-height:30px !important;
			}
			.input-view .input {height:30px;line-height:30px;width:94%;padding: 0 3%;
			}
			
			 .swiper {
				height: 280upx;
				width: 100%;
			}
			.swiper-item {
				display: block;
				height: 280upx;
				line-height: 280upx;
				text-align: center;
			} 
			.swiper image{height: 280upx;width: 100%;}
			/* 滚动消息 */
			.uni-swiper-msg{display: flex;align-content: center;}
			.uni-swiper-msg-icon1{flex: 1;}
			.uni-swiper-msg-icon1>image{width: 122upx; height: 56upx;}
		    .msg {margin: 5px 0px 10px 0px;}
			/* 滚动消息 */
			.uni-swiper-msg-icon1{margin:5px 10px 0 0 }
			.uni-swiper-msg{display: flex;align-content: center;}
			
			
			
			
			
			/* .uni-tab-bar uni-view{line-height: 32px;} */
			
		
		
		.list{overflow: hidden;overflow:auto; }
		.uni-product-des{display: flex;align-content: center;margin: 0upx 2upx;}
		.uni-product-des image{width: 50upx;height: 50upx;padding: 0upx;}
		.scid image{ margin-right: 15upx;}
		.name {color: red;margin: 0upx 20upx;}
		.uni-product-des {
			display: flex;
			
			justify-content: space-around;
			align-content: center;
			
		}
		.uni-product-des text{
			height: 80upx;
			line-height: 80upx;
		}
		
		.taobao {
			font-size: 48upx;
			color: #FC6420;
		}
		
		.pc,.mobile {
			font-size: 52upx;
			color: #2FBBFF;
		}
		
		.price {
			color: #FF4000;
		}
		.btn>button {
			border: 1px solid #FF4000 !important;
			color: #FF4000 !important;
			width: 300upx;
		}
		.subnav {
			display: flex;
			min-height:30px;
			justify-content: space-around;
			border-bottom: 1px solid #c8c7cc;
			align-content: center;
			 position: ; 
			top: 36px;
			z-index: 9999;
			width: 100%;
			background: #F4F5F6;
		}
		
		.subnav text {
			font-size: 30upx;
			color: #6D6D72;
		}
		
		.subnav .active2 text{
			color: #ff4000
		}
		@font-face {
		    font-family: 'iconfont';
		    src: url('https://at.alicdn.com/t/font_1020925_z58f6eyrzlk.ttf') format('truetype');
		}
		.test {
		    font-family: iconfont;
		}
			
			
	
		.uni-product-price-original{color: red; font-size: 15px;}
		@font-face {
		    font-family: 'iconfont';
		    src: url('https://at.alicdn.com/t/font_1020925_q2iaxorjot.ttf') format('truetype');
		}
		.test {
		    font-family: iconfont;
		}
		.loadmore {
			height: 70px;
			width: 750px;
			flex-direction: column;
			justify-content: center;
		}
		
		.loadmore-text {
			font-size: 30px;
			text-align: center;
			color: #999999;
		}
</style>
