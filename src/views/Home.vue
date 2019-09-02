<template>
	<div class="home">
		<div id="nav">
			<router-link to="/">首页</router-link>
		</div>
		<div class="my-com">
			<router-link to="/todoItem">代办任务</router-link>
			|
			<router-link to="/img">上传图片</router-link>
			|
			<router-link to="/">Home</router-link>
			|
		</div>
	</div>
</template>

<style lang="less">
	#nav .my-com {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	.my-com {
		margin-top: 1rem;
	}
</style>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		components : {}
	})
	export default class Home extends Vue {

	}
</script>
