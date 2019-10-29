<template>
	<view class="">
		<view class="uni-card"  style="background: #F1F1F1;">
					<image :src="info.gpic" class="gpic"></image>
			
			<view class="uni-card-content-inner">
				<view class="info-detail">掌柜/店铺名 : <text class="price">{{info.sname}}</text></view>
				<view class="info-detail">下单价格 : <text class="price">¥{{info.price}}</text></view>
			</view>
	</view>
	 <uni-steps :data="list2" direction="column" :active="active"></uni-steps> 
	
	<form @submit="formSubmit" >
	<view class="demo_list" v-if="other_opts">
		
		<text style="display: block; font-size: 20px; color: #FF0000;border-bottom: #FF0000 solid 2px;">搜索流程</text>
		
	<view class="demo" v-if="other_opts.is_hbsj" v-for=" (time) in other_opts.hbsj">
		<text>货比{{time}}家图片</text>
		<block v-if="hbsj" >
			
			<image :src="hbsj" class="image" mode="widthFix"></image>
		</block>
		<block v-else>
			<view class="uni-hello-addfile" @click="chooseImage('hbsj')">+ 选择图片</view>
		</block>
	</view>
	<view class="demo" v-if="other_opts.is_collect">
		<text>收藏店铺图片</text>
		<block v-if="collect">
			
			<image :src="collect" class="image" mode="widthFix"></image>
		</block>
		<block v-else>
			<view class="uni-hello-addfile" @click="chooseImage('collect')">+ 选择图片</view>
		</block>
	</view>
	
	<view class="demo" v-if="other_opts.is_page_down">
		<text>浏览店铺图片</text>
		<block v-if="page_down">
			
			<image :src="page_down" class="image" mode="widthFix"></image>
		</block>
		<block v-else>
			<view class="uni-hello-addfile" @click="chooseImage('page_down')">+ 选择图片</view>
		</block>
	</view>
	<view class="demo" v-if="other_opts.view_product">
		<text>浏览店铺商品图片</text>
		<block v-if="view_product">
			
			<image :src="view_product" class="image" mode="widthFix"></image>
			
		</block>
		<block v-else>
			<view class="uni-hello-addfile" @click="chooseImage('view_product')">+ 选择图片</view>
		</block>
	</view>
	
	</view>
	
	<view class="foot">
	<text style="display: block; font-size: 20px; color: #FF0000;border-bottom: #FF0000 solid 2px;">已付款填写订单号</text>
	<view style="display: flex;height: 30px;line-height: 30px;padding: 7px;">
		
		<text style="display: inline-block;">实际支付价格</text>
		<text style="margin-left: 15px; color: #FF0000;">¥{{info.price}}</text>
	</view>
	
	<view style="padding: 5px;">
		<view  style="font-size: 15px;color: #FF0000;">输入订单号</view>
		<view class="with-fun">
			<input class="uni-input" placeholder="" type="number" @input="clearInput" name="sn"  style="border: #888888 outset 1px;"/>
			<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
		</view>
	</view>
	</view>
	
	
	
	<view class="uni-btn-v">
                    <button formType="submit" style="width: 100%;color: #FF0000;background: #FC6420;">已付款,提交订单</button>
               
        </view>
	</form>
	
	</view>
</template>

<script>
	import uniSteps from '../../components/uni-steps/uni-steps.vue'
	import {
		mapState,
		mapMutations,	
	} from 'vuex';
	
	export default{
		components: {
			uniSteps
		},
		computed: mapState([ 'hasLogin','userInfo']),
	data(){
		return{
			active:1,
			showClearIcon: false,
			obj:{},
			id:0,
			info:[],
			other_opts:[],
			collect:'',
			hbsj:'',
			page_down:'',
			view_product:'',
			list2: [
			{
				title: '搜索宝贝',
				
			}, 
			{
				title: '找到宝贝后先货比,在按照商家要求完成下单',
				
			}, 
			{
				title: '买家签收',
				
			}, 
			{
				title: '交易完成',
				
			},
				]
		}
	},
	
	onLoad:function(e){
		this.id = e.id;
			uni.request({
				url:`${this.$serverUrl}/task/order_process?id=`+e.id,
				header:{
					"Content-Type": "application/x-www-form-urlencoded",
					"token":this.userInfo.token
				},
				method:"GET",
				success:(res)=>{
					this.info = res.data
					this.other_opts = res.data.other_opts
				}
			})
	
		
	},
	onUnload() {
		this.collect = '';
	},
	methods:{
		clearIcon: function() {
			this.inputClearValue = '';
			this.showClearIcon = false;
		},
		clearInput: function(event) {
			this.inputClearValue = event.target.value;
			if (event.target.value.length > 0) {
				this.showClearIcon = true;
			} else {
				this.showClearIcon = false;
			}
		},
		chooseImage:function(opts) {
			
			uni.chooseImage({
				
				count: 1,
				sizeType: ['compressed','original'],
				sourceType: ['album'],
				success: (res) => {
					   const tempFilePaths = res.tempFilePaths[0]
					
					
					uni.uploadFile({
						header:{
							"token":this.userInfo.token
						},
						url: 'http://t2.qingxinedu.cn/api/task/upload',
						filePath: tempFilePaths,
						fileType: 'image',
						name: 'file',
						success: (e) => {
							
							var data = JSON.parse(e.data)
							
							if(data.status===1){
								
									if(opts=='hbsj'){
										this.hbsj = data.path
										this.obj.hbsj = data.path
									}else if(opts=='collect'){
										this.collect = data.path
										this.obj.collect = data.path
									}else if(opts=='page_down'){
										this.page_down = data.path
										this.obj.page_down = data.path
									}else if(opts=='view_product'){
										this.view_product = data.path
										this.obj.view_product = data.path
									}
									
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									
									/* if(this.image_list==[]){
										this.image_list[opts]  = data.path;
										this.obj[opts] = data.path
									}else{
										this.image_list[opts] = this.image_list.concat(data.path)
										this.obj.opt = data.path
									} */
										console.log(this.obj)
							}
							
						},
						fail: (err) => {
							console.log('uploadImage fail', err);
							uni.showModal({
								content: err.errMsg,
								showCancel: false
							});
						}
					});
				},
				fail: (err) => {
					console.log('chooseImage fail', err)
				}
			})
			
		},
		 formSubmit: function(e) {
			var data = e.detail.value;	
			 uni.request({
				 header:{
				 	"Content-Type": "application/x-www-form-urlencoded",
				 	"token":this.userInfo.token
				 },
			 	url:`${this.$serverUrl}/task/order_view?id=`+this.id,
				data:{
					"process_content":JSON.stringify(this.obj),
					"sn":data.sn,
					},
				method:"POST",
				success: (res) => {
					if(res.data.status==1){
						uni.reLaunch({
							url:"task"
						})
					}
				}
			 })
            
        },
	},
	}
</script>

<style>
	.uni-card{display: flex; height: 150px;}
	.uni-card image{height: 150px;width: 150px;border: none;}
	.image {
		width: 100%;
	}
	
	.demo {
		background: #FFF;
		padding: 50upx;
	}
</style>
