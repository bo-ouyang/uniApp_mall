<template>
	<view>
	 <view>
		<text style="color: #FF4000; font-size: 15px;">请给本次交易的商家评价</text>
	</view> 
	
	
		<radio-group @change="radioChange" style="display: flex;flex-direction: row;">
			<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
				<view>
					<radio :value="item.pingjia_type" :checked="index === current" />
				</view>
				<view>{{item.name}}</view>
			</label>
		</radio-group>
	
	 <text>评价内容</text>
	<view class="uni-textarea">
		<textarea @blur="bindTextAreaBlur" auto-height  style="border: 1px solid #B2B2B2;"/>
	</view>
	<view style="">
		<button @click="submit" style="background-color: #FF4000;color: #F7F7F7;font-size:20px;text-align: center;">确认提交</button>
	</view> 
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,	
	} from 'vuex';
	export default {
		computed: mapState([ 'hasLogin','userInfo']),
	data(){
		return {
			
		
		items: [
			{
				pingjia_type: 1,
				name: '差评'
			},
			{
				pingjia_type: 2,
				name: '中评',
				
			},
			{
				pingjia_type: 3,
				name: '好评'
			},
		],
		current: 0,
		id:0,
		content:'',
		pingjia_type:0,
		};
	},
	
	onLoad:function(e){
			this.id = e.id;
	},
	methods: {	
		radioChange:function(evt) {
			this.pingjia_type= evt.target.value;
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
		},
		bindTextAreaBlur: function (content) {
			this.content =content.detail.value,
			console.log(content.detail.value)
		},
		submit(){
			uni.request({
				url:`${this.$serverUrl}/task/order_review?order_id=`+this.id,
				header:{
					"Content-Type": "application/x-www-form-urlencoded",
					"token":this.userInfo.token
				},
				method:"POST",
				data:{
					"pingjia_type":this.pingjia_type,
					"Content":this.content,
					},
				success:(res)=>{
					if(res.data.status==1){
						console.log('content succ')
						/* uni.navigateTo({
							url:`task?status=7`,
						}) */
					}
				}
			})
		},
	},
	
	}
</script>

<style>
</style>
