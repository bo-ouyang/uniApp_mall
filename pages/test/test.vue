<template>

	<view class="uni-tab-bar" >
		<view v-show="!isscroll">
			
			<view class="uni-navbar-header">
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666"></uni-icon>
					<input type="search" placeholder="搜索" />
				</view>
				<view class="scan">
					<uni-icon type="scan" size="22" color="#666666"></uni-icon>
				</view>
			</view>
			
		
		<view class="page-section swiper" >
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red">A</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		
		</view>
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 :data-current="index" @tap="tapTab">{{tab.name}}</view>
		</scroll-view>
		<view class="uni-input-group"><text>价值</text> <text class="test">&#xe600;</text> </view>
		
		
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)" @scroll="scrollfn">
					
					<view class="uni-product-list">
						<view class="uni-product" v-for="(newsitem,index2) in news.data" :key="index2">
							<view class="image-view">
								<image class="uni-product-image" :src="newsitem.image_url"></image>
							</view>
							
							<view class="uni-product-title">{{newsitem.title}}</view>
							
							<view class="uni-product-price">
								<text class="uni-product-price-original">￥{{newsitem.comment_count}}</text>
								<text class="uni-product-tip">{{newsitem.datetime}}</text>
							</view>
							
						</view>
					</view>
					
					<view class="uni-tab-bar-loading">
						<uni-load-more :loadingType="news.loadingType" :contentText="loadingText"></uni-load-more>
					</view>
				</scroll-view>
		
	</view>

</template>

<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	import uniIcon from '@/components/uni-icon.vue';
	export default {
		components: {
			uniLoadMore,
			uniIcon
		},
		data() {
			return {
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				isscroll:false,
				title: 'swiper',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				data0: {
					"datetime": "40分钟前",
					"article_type": 0,
					"title": "uni-app行业峰会频频亮相，开发者反响热烈!",
					"source": "DCloud",
					"comment_count": 639,
					"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
				},
				data1: {
					"datetime": "一天前",
					"article_type": 1,
					"title": "DCloud完成B2轮融资，uni-app震撼发布!",
					"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
					"source": "DCloud",
					"comment_count": 11395
				},
				data2: {
					"datetime": "一天前",
					"article_type": 2,
					"title": "中国技术界小奇迹：HBuilder开发者突破200万",
					"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
					"source": "DCloud",
					"comment_count": 11395
				},
				data4: {
					"datetime": "2小时前",
					"article_type": 4,
					"title": "uni-app 支持原生小程序自定义组件，更开放、更自由",
					"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
					"source": "DCloud",
					"comment_count": 69
				},
				data3: {
					"article_type": 3,
					"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
					"datetime": "5分钟前",
					"title": "uni-app 支持使用 npm 安装第三方包，生态更趋丰富",
					"source": "DCloud",
					"comment_count": 11
				},
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: '历史',
					id: 'lishi'
				}, {
					name: '本地',
					id: 'bendi'
				}],
				news:[]
			}
		},
		onLoad: function() {
			this.newsitems = this.randomfn()
			this.news=this.newsitems[0]
			
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/template/tabbar/detail/detail?data=' + e.title
				})
			},
			close(index1, index2) {
				uni.showModal({
					content: '是否删除本条信息？',
					success: (res) => {
						if (res.confirm) {
							this.newsitems[index1].data.splice(index2, 1);
						}
					}
				})
			},
			loadMore(e) {
				this.newsitems[e].loadingType = 1;
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingType = 2;
					return;
				}
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].data.push(this['data' + Math.floor(Math.random() * 5)]);
				}
				this.newsitems[e].loadingType = 1;
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				if (this.tabIndex === e.target.dataset.current) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = e.target.dataset.current
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingType: 0,
						data: []
					};
					for (let j = 1; j <= 10; j++) {
						aryItem.data.push(this['data' + Math.floor(Math.random() * 5)]);
					}
					ary.push(aryItem);
				}
				return ary;
			},
			scrollfn(e){
				this.isscroll=e.detail.scrollTop>10
				console.log(e.detail.scrollTop)
				
			}
		}
	}
</script>

<style>
.uni-navbar-header{display: flex;justify-content: space-around;}
.uni-navbar-header>.scan{line-height:46px !important;}
.input-view {
		width: 80%;
		display: flex;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap:nowrap;
		margin:7px 0;
		line-height:30px;
	}
	
	.input-view .uni-icon{
		line-height:34px !important;
	}
	.input-view .input-placeholder{
		line-height:30px !important;
	}

	.input-view .input {
		height:30px;
		line-height:30px;
		width:94%;
		padding: 0 3%;
	}

.uni-swiper-tab{height: 30px;line-height: 30px;border: none;}

.uni-tab-bar .active{border-bottom: 1px solid #007AFF;}
	.swiper {
		height: 300upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}
	

@font-face {
        font-family: 'iconfont';
        src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
    }
    .test {
		font-size: 40upx;
        font-family: iconfont;
		color: #007AFF;
    }
</style>
