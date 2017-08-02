<template>
	<div>{{id}}</div>
</template>

<script>
	var vm;
	export default {
		data() {
			return {
				id:vm.$route.params.id
			}
		},
		methods: {
			start: function() {
				alert(vm.id)
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