<template>
	<div style="height: 100vh" class="d-flex align-items-center">
		<div class="mx-auto">
			<i class="fas fa-circle-notch fa-spin fa-3x"></i>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LoadingComponent extends Vue {}
</script>

<style scoped lang="scss"></style>