<template>
	<div id="header">
		<img src="../assets/imgs/logo.png" />
		<div class="link">
			<router-link to="/home">首页</router-link>
			<router-link to="/about">关于</router-link>
		</div>
		<h1>共同header</h1>
		
	</div>
</template>
<script>
	
	var vm;
	export default {
		data() {
			return {
			}
		},
		methods: {
			start: function() {
			}
		},
		beforeCreate: function() {
			vm = this;
		},
		mounted: function() {
			vm.start();
		}
	}
</script>