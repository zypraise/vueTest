<template>
	<div>
		<div class="swiper-container gallery-top">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../assets/imgs/nature1.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../assets/imgs/nature2.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../assets/imgs/nature3.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../assets/imgs/nature4.jpg" />
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-white"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
		</div>
		<ol>
			<li v-for="todo in todos">
				<router-link class="todo-link" :to="'/home/' + todo.id">
					<div class="complete" v-if="todo.complete">√</div>
					<div>{{todo.text}}</div>
				</router-link>
			</li>
		</ol>
		<button @click="eClick()">删除</button>
	</div>
</template>

<script>
	import '../assets/styles/view/home.css';
	var vm;
	export default {
		name: 'indexP',
		data() {
			return {
				galleryTop: {},
				todos: []
			}
		},
		methods: {
			start: function() {
				vm.galleryTop = new Swiper('.gallery-top', {
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					spaceBetween: 10,
				});
				axios.get('http://192.168.1.76:3000/todo')
					.then(function(result) {
						vm.todos = result.data;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			eClick: function() {
				vm.todos.pop();
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