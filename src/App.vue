<template>
	<div v-cloak>
		<navbar></navbar>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AOS from "aos";

import Navbar from "@components/Navbar.vue";

@Component({
	components: {
		Navbar,
	},
})
export default class AppComponent extends Vue {
	mount = false;
	created() {
		AOS.init();
	}
	beforeMount() {
		window.scrollTo(0, 0);
	}
}
</script>

<style lang="scss">
@import "@styles/bootstrap";
</style>
