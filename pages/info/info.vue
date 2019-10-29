<template>
	
<scroll-view @scrolltolower="LoadMore" upper-threshold="100px" scroll-y="true" class="uni-scroll-view" @scrolltoupper="top"	@scroll="scro">
	
	<view class="head" style="position: fixed;top:0px;">
<!-- 		<uni-icon type="back" size="30" style="margin-left: 10px; color: #000000;" @click="back"></uni-icon>
 -->		<text>{{newsitems.title}}</text>
	</view>
	<!-- 子集导航 -->
	<view class="subnav" style="position: fixed;top:29.5px;">
		<view @tap="activefn(0)" :class="{active2:isactive==0}">
			<text>综合</text>
		</view>
		<view @tap="activefn(1,isup1)" :class="{active2:isactive==1}">
			<text>价值</text>
		    <text v-show="isup1==1" class="test">&#xe60d;</text>
		    <text v-show="isup1==-1" class="test">&#xe60c;</text>
		</view>
		<view @tap="activefn(2,isup2)" :class="{active2:isactive==2}">
			<text>发布点</text>
			<text v-show="isup2==2" class="test">&#xe60d;</text>
		    <text v-show="isup2==-2" class="test">&#xe60c;</text>
		</view>
		<view @tap="activefn(3,isup3)" :class="{active2:isactive==3}">
			<text>最新</text>
			<text v-show="isup3==3" class="test">&#xe60d;</text>
		    <text v-show="isup3==-3" class="test">&#xe60c;</text>
		</view>
	</view>
	<!-- 子集导航 -->
	
		
			<scroll-view  class="list" scroll-y @scrolltolower="LoadMore" @scroll="scrollyfn">
					
				<view class="uni-product-list">
					<!-- 产品列表 -->
					<view class="uni-product "  v-for="(newsitem,key,index) in newsitems" >
						
						<navigator :url="'../item/item?id='+newsitem.id">
							<view class="image-view">
								<image class="uni-product-image" :src="newsitem.gpic" ></image>
							</view>
						</navigator>
						<view class="uni-product-title">{{newsitem.gname}}</view>
						<view class="uni-product-des">
							<text v-if="newsitem.scid===1" class="test taobao">&#xe607;</text>
							<text v-if="newsitem.scid===2" class="test jingdong">&#xe607;</text>
							<text v-if="newsitem.ordertype==='1'" class="test pc">&#xe71f;</text>
							<text v-if="newsitem.ordertype==='2'" class="test pc">&#xe71f;</text> 
							<text class="name">{{newsitem.username}}</text>
									<!-- <image v-if="newsitem.scid===1"  src="../../static/taobao.png"></image>
									<image v-if="newsitem.scid===2"  src="../../static/jigndong.png"></image>
									<image v-if="newsitem.ordertype==='1'"  src="../../static/diannao.png"></image>
									<image v-if="newsitem.ordertype==='2'"  src="../../static/shouji.png"></image>	 -->
							
								<!-- <image v-if="newsitem.lev==='1'" src="../../static/vip.png"></image> -->
							<text class="uni-product-price-original">￥{{newsitem.price}}</text>
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
		
		
</scroll-view>
</template>

<script>
	import uniSegmentedControl from '../../components/uni-segmented-control.vue';
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
			uniSegmentedControl
		},
		onLoad:function(e){
			
				uni.request({
					url:`${this.$serverUrl}/index/index?cid=`+e.cid,
					header:{
						"Content-Type": "application/x-www-form-urlencoded",
						"token":this.userInfo.token
					},
					method:"GET",
					success:(res)=>{
						//const data =  JSON.parse(res.data);
						if(this.newsitems.length<=10){
							this.loadingType = 2;
						}
						this.cid=e.cid,
						this.newsitems = res.data.data;
					}
				})
			
			
		},
		
		data() {
			return {
				isup1:1,
				isup2:3,
				isup3:5,
				isclick:0,
				isscroll: false,
				isactive: 0,
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				loadingType: 0,
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				isPosition:false,
				activeClass:'tabactive',
				falseClass:'tabactive-nop',	
				newsitems:[],
				cid:0,
				limit:2,
				request:true,
			};
		},
		
		methods:{
			addData(){
				uni.request({
					url: 'http://t2.qingxinedu.cn/api/index/index',
					method: 'GET',
					data: {},
					success: (res) => {
						//console.log(res.data);
						const loadData = res.data;
						this.newsitems =this.newsitems.concat(loadData.data) 
					    }
				    });
					const maxLength = this.newsitems.length
					
					if (this.newsitems.length >maxLength) {
						this.loadingType=2;
						return;
					}
			},
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
			//分类控制
			activefn(n,isup=1) {
				this.isactive = n
				if(isup==1||isup==-1){
					this.isup1=-isup
					this.sort(this.cid,this.isup1)
				}else if(isup==2||isup==-2){
					this.isup2=-isup
					this.sort(this.cid,this.isup2)
				}else if(isup==3||isup==-3){
					this.isup3=-isup
					this.sort(this.cid,this.isup3)
				}
			},
			sort(cid,sort_id){
				uni.request({
					url:"http://t2.qingxinedu.cn/api/index/index?cid="+cid+'&order='+sort_id,
					method:"GET",
					success: res=>{
						this.newsitems = res.data.data;
					}
				})
			},
			scro(e){	
				console.log(111)
				if(e.detail.scrollTop > 250){
					this.isPosition = true;
				}
			},
			top(){
				this.isPosition =false;
			},
			
			back(){
				uni.reLaunch({
					url:"../index/index"
				});
			}
		},
		
	}
</script>

<style>
	
	.activeClass{position: fixed;}
	.falseClass{position: none;}
	.head{text-align: center;font-style: normal;height: 30px;
		top:0px;
		z-index: 9999;
		width: 100%;
		background: #F4F5F6;
		color: #FF0000;
		font-size: 17px;}
	
			.swiper {
				height: 1000upx;
				width: 100%;
			}

			
			
			uni-button {
				margin-top: 2px;
				font-size: 16upx;
				width: 100%;
				border: #FF4000 solid 1px !important;
				color: #FF4000 !important;
			}
			
			.der{display: flex;}
			.uni-product-price-original{color: red; font-size: 15px;}
			@font-face {
	        font-family: 'iconfont';
	        src: url('https://at.alicdn.com/t/font_1020925_q2iaxorjot.ttf') format('truetype');
	    }
	    .test {
	        font-family: iconfont;
	    }
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
				/* position: fixed; */
				top:30px;
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

</style>
