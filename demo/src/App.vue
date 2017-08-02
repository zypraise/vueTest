<!--App.vue是项目入口文件。-->
<template>
	<div id="app">
		<header-tab></header-tab>
		
		<div>
			<router-view></router-view>
		</div>
		<footer-tab></footer-tab>
	</div>
</template>

<script>
	import HeaderTab from './components/header.vue';
	import FooterTab from './components/footer.vue';
	var vm;
	export default {
		name: 'app',
		data() {
			return {
			}
		},
		components: {
			HeaderTab,
			FooterTab
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