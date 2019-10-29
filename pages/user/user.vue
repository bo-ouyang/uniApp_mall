<template>
	<scroll-view scroll-y class="uni-scroll-view">
		<view class="header" v-bind:class="{'status':isH5Plus}">
			
			<view class="userinfo">
				<view class="face"><image src="../../static/face.jpeg"></image></view>
				<view class="username">{{userinfo.username}}</view>
				<view class="info">
					<text class="integral">余额:{{userinfo.balance}}</text>
					<text class="integral">发布点:{{userinfo.pub_point}}</text>
					<text class="integral">积分:{{userinfo.exp}}</text>
				</view>
			</view>
			<view class="setting"><image src="../../static/setting.png"></image></view>
		</view>
		
		<view class="orders">
			<view class="box">
				<view class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover"  @tap="toOrderType(row.status)">
					<view class="icon"><view class="badge" v-if="sta[row.status]>0">{{sta[row.status]}}</view><image :src="'../../static/HM-PersonalCenter/'+row.icon"></image></view>
					{{row.name}}
				</view>
			</view>
		</view> 
		<view class="list" v-for="(list,list_i) in severList">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(li.url)" v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover"    :key="li.name" >
				<view class="icon"><image :src="'../../static/sever/'+li.icon" ></image></view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/to.png"></image>
			</view>
		</view>
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
				isH5Plus:false,
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				sta:[],
				userinfo:[],
				orderTypeLise:[
					//name-标题 icon-图标 badge-角标
					{name:'待付款',icon:'../../static/l1.png',status:1},
					{name:'待发货',icon:'../../static/l2.png',status:2},
					{name:'待收货',icon:'../../static/l3.png',status:3},
					{name:'待评价',icon:'../../static/l4.png',status:4},
					{name:'退换货',icon:'../../static/l5.png',status:5}
				],
				severList:[
					[
						{name:'绑定买号',icon:'../../static/point.png',url:'../bindAccount/bindAccount_select'
						},
						{name:'买号列表',icon:'../../static/quan.png',url:'../accountList/accountList'
						},
						{name:'认证中心',icon:'../../static/momey.png',url:'../setting/setting'
						},
						{name:'账户安全',icon:'../../static/renw.png',url:'../security/security'
						},
						{name:'客服',icon:'../../static/renw.png',
						}
						
					
						]
				]
			};
		},
		onLoad() {
					if(this.hasLogin){
						uni.request({
							url:`${this.$serverUrl}/home/home?uname=`+this.userInfo.username,
							header:{
								"Content-Type": "application/x-www-form-urlencoded",
								"token":this.userInfo.token
							},
							method:"GET",
							success: (res) => {
								this.userinfo = res.data.uinfo	;
								this.sta = res.data.status;
							}
						})
					}else{
						uni.reLaunch({
							url:"../login/login"
						})
					}
		},
		methods: {
			
			//用户点击订单类型
			toOrderType(status){
				uni.navigateTo({
					url:"../task/task?status="+status,
				})
			},
			//用户点击列表项
			toPage(url){
				uni.navigateTo({
					url:url,
				})
			}
		}
	}
</script>

<style lang="scss">
page{background-color:#fff}
.header{
	&.status{padding-top:var(--status-bar-height);}
	background-color:#ff6364;width:92%;height:30vw;padding:0 4%;display:flex;align-items:center;
	.userinfo{width:90%;display:flex;
		.face{flex-shrink:0;width:15vw;height:15vw;
			image{width:100%;height:100%;border-radius:100%
				}
			}
		}
			
	.info{
		display:flex;flex-flow:wrap;padding-left:5px;float:left;	
	}
	.integral{display:flex;align-items:center;padding:0 10px;height:20px;color:#fff;background-color:rgba(0,0,0,0.1);border-radius:10px;font-size:12px}
	.username{width:100%;color:#fff;font-size:20px}
	.setting{
		flex-shrink:0;width:6vw;height:6vw;
		image{width:100%;height:100%}
	}
}
.hover{background-color:#eee}
.orders{
	background-color:#ff6364;width:92%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + 20px);display:flex;align-items:flex-start;border-radius:0 0 100% 100%;
	.box{
		width:98%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:12px;box-shadow:0px 0px 10px rgba(0,0,0,0.15);margin-bottom:20px;display:flex;align-items:center;justify-content:center;
		.label{
			display:flex;align-items:center;justify-content:center;flex-flow:wrap;width:100%;height:16vw;color:#666666;font-size:13px;
			.icon{
				position:relative;width:7vw;height:7vw;margin:0 1vw;
				.badge{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:10px;color:#fff;display:flex;align-items:center;justify-content:center}
				image{width:7vw;height:7vw}
			}
		}
	}
}
.list{
	width:100%;border-bottom:solid 13px #f1f1f1;
	.li{
		width:92%;height:50px;padding:0 4%;border-bottom:solid 1px #e7e7e7;display:flex;align-items:center;
	&.noborder{border-bottom:0}
		.icon{
			flex-shrink:0;width:25px;height:25px;
			image{width:25px;height:25px}
		}
		.text{padding-left:10px;width:100%;color:#666}
		.to{flex-shrink:0;width:20px;height:20px}
	}
}
</style>
