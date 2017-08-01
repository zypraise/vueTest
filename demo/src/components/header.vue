<template>
	<div>
		<h1>共同headerqq</h1>
		<div id="img-back"></div>
		<img :src="img">
		
		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
	import imgs from '../assets/imgs/nature1.jpg';
	
	var vm;
	export default {
		data() {
			return {
				img: imgs,
				swiper:{}
			}
		},
		methods: {
			start: function() {
				vm.swiper = new Swiper('.swiper-container', {
					loop:true,
			        pagination: '.swiper-pagination',
			        paginationClickable: true
			    });
			}
		},
		beforeCreate: function() {
			//组件初始化
			vm = this;
		},
		mounted: function() {
			//data中的数据已经渲染到页面上
			vm.start();
		}
	}
</script>