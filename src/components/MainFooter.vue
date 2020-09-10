<template>
	<footer class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-6 large-left py-3">
				<div class="text-white">
					&copy; John Michael Manlupig - 2020
				</div>
				<a
					href="mailto:manlupigjohnmichael@gmail.com"
					class="text-white"
				>
					manlupigjohnmichael@gmail.com
				</a>
				<a href="tel:+639169258735" class="text-white d-block"
					>09169258735</a
				>
				<div class="text-white">
					Lico-an, Barotac Nuevo, Iloilo, Philippines
				</div>
			</div>
			<div class="col-sm-12 col-md-6 large-right py-3">
				<a
					:href="links.facebook"
					class="text-white mx-2"
					target="__blank"
				>
					<i class="fab fa-facebook fa-2x fa-rounded"></i>
				</a>
				<a
					:href="links.github"
					class="text-white mx-2"
					target="__blank"
				>
					<i class="fab fa-github fa-2x fa-rounded"></i>
				</a>
				<a
					:href="links.linkedIn"
					class="text-white mx-2"
					target="__blank"
				>
					<i class="fab fa-linkedin-in fa-2x fa-rounded"></i>
				</a>
				<a
					:href="links.instagram"
					class="text-white mx-2"
					target="__blank"
				>
					<i class="fab fa-instagram fa-2x fa-rounded"></i>
				</a>
				<a
					:href="links.twitter"
					class="text-white mx-2"
					target="__blank"
				>
					<i class="fab fa-twitter fa-2x fa-rounded"></i>
				</a>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainFooterComponent extends Vue {
	links = {
		facebook: process.env.VUE_APP_FACEBOOK_URL as string,
		github: process.env.VUE_APP_GITHUB_URL as string,
		linkedIn: process.env.VUE_APP_LINKEDIN_URL as string,
		twitter: process.env.VUE_APP_TWITTER_URL as string,
		instagram: process.env.VUE_APP_INSTAGRAM_URL as string,
	};
}
</script>

<style scoped lang="scss">
footer {
	margin-top: 5rem;
	background-color: #292929;
}

.large-left {
	text-align: left;
}

.large-right {
	text-align: left;
}

@media (min-width: 768px) {
	.large-left {
		padding-left: 5rem;
	}

	.large-right {
		padding-right: 5rem;
		text-align: right;
	}
}
</style>