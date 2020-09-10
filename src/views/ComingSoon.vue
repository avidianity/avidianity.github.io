<template>
	<div class="d-flex full-height align-items-center">
		<div class="mx-auto text-center">
			<h1>Coming soon! :)</h1>
			<button class="btn btn-dark btn-sm" @click.prevent.stop="back()">
				Go Back
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ComingSoonComponent extends Vue {
	back() {
		this.$router.go(-1);
	}
}
</script>

<style scoped lang="scss">
.full-height {
	height: 100vh;
}
</style>