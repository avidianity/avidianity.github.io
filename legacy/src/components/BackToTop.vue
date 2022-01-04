<template>
	<img
		src="@assets/backtotop.svg"
		alt=""
		class="back-to-top"
		@click.prevent.stop="scrollToTop()"
		title="Scroll to top"
	/>
</template>

<script lang="ts">
import $ from "jquery";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
	scrollToTop() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}
}
</script>

<style scoped lang="scss">
.back-to-top {
	position: fixed;
	height: 35px;
	width: 35px;
	bottom: 1rem;
	right: 2rem;
	cursor: pointer;
	z-index: 9999;
}
</style>