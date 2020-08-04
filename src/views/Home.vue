<template>
	<div style="background-color: #f9f9f9;">
		<back-to-top></back-to-top>
		<header class="text-center">
			<div class="container pt-5">
				<img
					src="@assets/500.png"
					alt=""
					class="profile"
					data-aos="fade-right"
					data-aos-duration="1000"
				/>
				<h2
					class="mt-3 title"
					data-aos="fade-left"
					data-aos-duration="1200"
				>
					Hi!
				</h2>
				<h2 class="title" data-aos="fade-left" data-aos-duration="1200">
					I'm John Michael Manlupig.
				</h2>
				<h5 data-aos="fade-left" data-aos-duration="1200">
					Full Stack Web Developer
				</h5>
			</div>
		</header>
		<section class="text-center">
			<h1 :data-aos="fadeLargeRight">Services</h1>
			<div class="container-fluid overflow-hidden">
				<div class="row">
					<div class="col-sm-12 col-lg-4 p-3">
						<div
							class="container service-card"
							:data-aos="fadeLargeRight"
						>
							<img
								src="@assets/platform.svg"
								alt=""
								class="service-card-logo"
							/>
							<h5>Responsive / Cross-Platform</h5>
							<p>
								I make websites and web apps that work on any
								platform and device. Whether you’re viewing it
								on a desktop, phone or tablet. I make sure it
								will look beautiful!
							</p>
						</div>
					</div>
					<div class="col-sm-12 col-lg-4 p-3">
						<div class="container service-card" data-aos="fade-up">
							<img
								src="@assets/data.svg"
								alt=""
								class="service-card-logo"
							/>
							<h5>Front-End Development</h5>
							<p>
								I design and build user interfaces. I primarily
								use VueJS. I also use ReactJS in my other
								projects.
							</p>
						</div>
					</div>
					<div class="col-sm-12 col-lg-4 p-3">
						<div
							class="container service-card"
							:data-aos="fadeLargeLeft"
						>
							<img
								src="@assets/backend.svg"
								alt=""
								class="service-card-logo"
							/>
							<h5>Back-End Development</h5>
							<p>
								I create database designs, data models, REST
								APIs and other back-end related work.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center my-5">
				<router-link to="/about" class="btn btn-primary btn-custom">
					About Me
				</router-link>
			</div>
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
						<div class="text-white">09169258735</div>
						<div class="text-white">
							Lico-an, Barotac Nuevo, Iloilo, Philippines
						</div>
					</div>
					<div class="col-sm-12 col-md-6 large-right py-3">
						<a
							href="https://facebook.com/mekkyinblack"
							class="text-white mx-2"
							target="__blank"
						>
							<i class="fab fa-facebook fa-2x fa-rounded"></i>
						</a>
						<a
							href="https://github.com/avidianity"
							class="text-white mx-2"
							target="__blank"
						>
							<i class="fab fa-github fa-2x fa-rounded"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/john-michael-manlupig-2216651b2/"
							class="text-white mx-2"
							target="__blank"
						>
							<i class="fab fa-linkedin-in fa-2x fa-rounded"></i>
						</a>
					</div>
				</div>
			</footer>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from "jquery";
import BackToTop from "@components/BackToTop.vue";

@Component({
	components: {
		BackToTop,
	},
})
export default class extends Vue {
	windowWidth: number = $(window).width() as number;
	fadeLargeLeft = "fade-up";
	fadeLargeRight = "fade-up";
	created() {
		this.fadeLargeLeft = this.windowWidth < 768 ? "fade-up" : "fade-left";
		this.fadeLargeRight = this.windowWidth < 768 ? "fade-up" : "fade-right";
		$(window).on("resize", (e) => {
			this.windowWidth = $(window).width() as number;
			this.fadeLargeLeft =
				this.windowWidth < 768 ? "fade-up" : "fade-left";
			this.fadeLargeRight =
				this.windowWidth < 768 ? "fade-up" : "fade-right";
		});
	}
}
</script>

<style scoped lang="scss">
body {
	background-color: #f9f9f9;
}

header {
	background-image: url("../assets/bg.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	height: 100%;
	width: 100%;
	padding-top: 1rem;
	color: #fff;
	font-family: "Lato";
	font-weight: 200;
}

section {
	position: absolute;
	top: 108%;
	width: 100%;
	padding-top: 3rem;
}

footer {
	margin-top: 5rem;
	background-color: #292929;
}

.title {
	font-size: 30px;
}

.profile {
	height: 250px;
	width: 250px;
	border-radius: 250px;
	box-shadow: 4px 0px 21px 3px #4f4f4f;
	border: 1px solid #9c9c9c;
}

.service-card {
	border: 2px solid #5f5f5f;
	padding-top: 3rem;
}

.service-card-logo {
	height: 150px;
	width: 150px;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
}

.service-card-logo:hover {
	transform: scale(1.1);
}

.large-left {
	text-align: left;
}

.large-right {
	text-align: left;
}

.btn-custom {
	background-color: #2f80ed;
	border-radius: 25px;
}

.btn-custom:hover {
	background-color: #1166d4;
}

.overflow-hidden {
	overflow: hidden;
}

@media (min-width: 768px) {
	.title {
		font-size: 40px;
	}

	.large-left {
		padding-left: 5rem;
	}

	.large-right {
		padding-right: 5rem;
		text-align: right;
	}

	.service-card {
		height: 400px;
	}
}
</style>
