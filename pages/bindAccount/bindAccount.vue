<template>
	<div>
		
		<form @submit="formSubmit" @reset="formReset">
			
			<view class="section">
				<view class="section__title">买号名</view>
				<input name="name"  />
			</view>
			<view class="section section_gap">
				<view class="section__title">性别</view>
				<radio-group name="sex">
				<label>
					<radio value="0" />男</label>
				<label>
					<radio value="1" />女</label>
				</radio-group>
			</view>
			<view class="section">
				<view class="section__title">年龄</view>
				<input name="age"  />
			</view>
			<view class="btn-area">
				<button formType="submit">Submit</button>
			</view>
		</form>
		
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: mapState([ 'hasLogin','userInfo']),
		data(){
			return {
				id:0,
				
			};
		},
		onLoad:function(e){
			this.id = e.id;
		},
		methods:{
			
			formSubmit: function(e) { 
				
				var data = e.detail.value;
				
			uni.request({
				url:`${this.$serverUrl}/home/bind_lost?scid=`+this.id,
				header:{
					"Content-Type": "application/x-www-form-urlencoded",
					"token":this.userInfo.token
				},
				method:"POST",
				data:{name:data.name,age:data.age,sex:data.sex}
			});
        },
			
		}
	}
</script>

<style>
	
	
</style>
