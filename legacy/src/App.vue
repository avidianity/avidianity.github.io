<template>
	<div v-cloak>
		<div v-if="loaded">
			<navbar></navbar>
			<router-view></router-view>
		</div>
		<loading v-else></loading>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AOS from 'aos';
import $ from 'jquery';

import Navbar from '@components/Navbar.vue';
import Loading from '@components/Loading.vue';

@Component({
	components: {
		Navbar,
		Loading,
	},
})
export default class AppComponent extends Vue {
	mount = false;
	loads = {
		bg: false,
		backend: false,
		platform: false,
		fb: false,
		data: false,
		profile: false,
	} as { [key: string]: boolean };
	created() {
		const vue = this;
		AOS.init();
		$('<img/>')
			.attr('src', require('@assets/bg.png'))
			.on('load', function() {
				$(this).remove();
				vue.loads.bg = true;
			});
		$('<img/>')
			.attr('src', process.env.VUE_APP_FACEBOOK_PROFILE_URL)
			.on('load', function() {
				$(this).remove();
				vue.loads.fb = true;
			});
		$('<img/>')
			.attr('src', require('@assets/data.svg'))
			.on('load', function() {
				$(this).remove();
				vue.loads.data = true;
			});
		$('<img/>')
			.attr('src', require('@assets/backend.svg'))
			.on('load', function() {
				$(this).remove();
				vue.loads.backend = true;
			});
		$('<img/>')
			.attr('src', require('@assets/platform.svg'))
			.on('load', function() {
				$(this).remove();
				vue.loads.platform = true;
			});
		$('<img/>')
			.attr('src', require('@assets/500.png'))
			.on('load', function() {
				$(this).remove();
				vue.loads.profile = true;
			});
	}
	get loaded() {
		for (const key in this.loads) {
			if (!this.loads[key]) {
				return false;
			}
		}
		return true;
	}
	beforeMount() {
		window.scrollTo(0, 0);
	}
}
</script>

<style lang="scss">
@import '@styles/bootstrap';
</style>
