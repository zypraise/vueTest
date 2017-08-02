<template>
	<div id="about">
		<h1>{{text}}</h1>
	</div>
</template>
<script>
	var vm;
	import '../assets/styles/view/about.css';
	export default {
		data() {
			return {
				text: '221aa'
			}
		},
		methods: {
			start:function(){
				axios.get('http://192.168.1.76:3000/getList')
				  .then(function (result) {
				    console.log(result.data);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
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