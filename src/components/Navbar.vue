<template>
	<nav class="navbar navbar-expand-md navbar-light bg-light px-4">
		<router-link to="/" exact class="navbar-brand">
			<img
				src="@assets/logo.svg"
				alt="Logo"
				height="30"
				class="d-inline-block align-top text-white"
				loading="lazy"
			/>
		</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<i class="fas fa-bars" style="color: #eeeeee"></i>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<router-link to="/" exact class="nav-item" tag="li">
					<a class="nav-link d-inline-block" href="#">
						Home
						<span class="nav-line"></span>
					</a>
				</router-link>
				<router-link to="/about" class="nav-item" tag="li">
					<a class="nav-link d-inline-block" href="#">
						About
						<span class="nav-line"></span>
					</a>
				</router-link>
				<router-link to="/work" class="nav-item" tag="li">
					<a class="nav-link d-inline-block" href="#">
						Work
						<span class="nav-line"></span>
					</a>
				</router-link>
				<router-link to="/contact" class="nav-item" tag="li">
					<a class="nav-link d-inline-block" href="#">
						Contact
						<span class="nav-line"></span>
					</a>
				</router-link>
				<router-link to="/blog" class="nav-item" tag="li">
					<a class="nav-link d-inline-block" href="#">
						Blog
						<span class="nav-line"></span>
					</a>
				</router-link>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.navbar {
	background-color: #333333 !important;
}

.navbar-toggler {
	border: none;
}

.navbar-toggler:focus {
	outline: none;
}

.nav-link {
	margin-left: 6px;
	margin-right: 6px;
	color: #eeeeee !important;
}

.active .nav-line {
	width: 100%;
}

.nav-item:hover:not(.active) .nav-line {
	width: 100%;
}

.nav-line {
	height: 2px;
	width: 0%;
	display: block;
	background: rgb(224, 224, 224);
	transition: width 0.5s ease-in-out;
}
</style>
