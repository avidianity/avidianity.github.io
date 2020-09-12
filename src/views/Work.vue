<template>
	<div>
		<back-to-top></back-to-top>
		<div class="container-fluid py-5 overflow-hidden">
			<h1 class="title" data-aos="fade-right" data-aos-duration="900">
				Work
			</h1>
			<div data-aos="fade-right" data-aos-duration="900">
				<h5>Note:</h5>
				<p class="mb-1">
					I have several other projects as well but I'm currently not
					able to host it because I'm only using a free tier account
					in heroku. You can check them out at my GitHub profile,
					install and try them out for yourself.
				</p>
			</div>
			<div class="card-group">
				<div
					class="card shadow"
					:data-aos="fadeLargeRight"
					data-aos-duration="900"
				>
					<img
						class="card-img-top"
						src="@assets/campuskid.png"
						alt="CampusKid Preview"
					/>
					<div class="card-body">
						<h5 class="card-title">CampusKid</h5>
						<h5 class="card-title">
							<i class="fab fa-laravel"></i>
							<i class="fab fa-vuejs"></i>
							<i class="fab fa-sass"></i>
							<i class="fab fa-bootstrap"></i>
							<i class="fas fa-database"></i>
						</h5>
						<p class="card-text">
							A web application similar to Google Classrooms or
							Edmodo.
						</p>
					</div>
					<div class="card-footer">
						<div class="card-text">
							<a
								href="http://campuskid.herokuapp.com"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary btn-flat btn-sm"
								style="margin: 4px"
							>
								<i class="fas fa-eye"></i>
								Preview
							</a>
							<a
								href="http://github.com/avidianity/campuskid"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-dark btn-flat btn-sm"
							>
								<i class="fab fa-github"></i>
								Source
							</a>
						</div>
					</div>
				</div>
				<div
					class="card shadow"
					data-aos="fade-up"
					data-aos-duration="900"
				>
					<img
						class="card-img-top"
						src="@assets/fmgm.png"
						alt="CampusKid Preview"
					/>
					<div class="card-body">
						<h5 class="card-title">FMGM</h5>
						<h5 class="card-title">
							<i class="fab fa-laravel"></i>
							<i class="fab fa-vuejs"></i>
							<i class="fab fa-angular"></i>
							<i class="fab fa-react"></i>
							<i class="fab fa-sass"></i>
							<i class="fab fa-bootstrap"></i>
							<i class="fas fa-database"></i>
						</h5>
						<p class="card-text">
							A web application similar to Facebook's Messenger
							but with Gaming Platform features such as updates,
							postings and profiles.
						</p>
						<p class="card-text">User side was made with VueJS.</p>
						<p class="card-text">
							Platform side was made with Angular.
						</p>
						<p class="card-text">
							It also has a mobile application made in
							React-Native.
						</p>
					</div>
					<div class="card-footer">
						<div class="card-text">
							<a
								href="http://app-fmgm.herokuapp.com/user"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary btn-flat btn-sm"
								style="margin: 4px"
							>
								<i class="fas fa-eye"></i>
								Preview
							</a>
							<a
								href="http://github.com/avidianity/fmgm"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-dark btn-flat btn-sm"
							>
								<i class="fab fa-github"></i>
								Source
							</a>
						</div>
					</div>
				</div>
				<div
					class="card shadow"
					:data-aos="fadeLargeLeft"
					data-aos-duration="900"
				>
					<img
						class="card-img-top"
						src="@assets/bpls.png"
						alt="CampusKid Preview"
					/>
					<div class="card-body">
						<h5 class="card-title">
							Business Permit Licensing System
						</h5>
						<h5 class="card-title">
							<i class="fab fa-php"></i>
							<i class="fab fa-bootstrap"></i>
							<i class="fas fa-database"></i>
						</h5>
						<p class="card-text">
							A web application for applying new or renewal of
							business permits and licenses.
						</p>
					</div>
					<div class="card-footer">
						<div class="card-text">
							<a
								href="http://bpls.herokuapp.com"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary btn-flat btn-sm"
								style="margin: 4px"
							>
								<i class="fas fa-eye"></i>
								Preview
							</a>
							<a
								href="http://github.com/avidianity/bpls"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-dark btn-flat btn-sm"
							>
								<i class="fab fa-github"></i>
								Source
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<main-footer></main-footer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import $ from "jquery";

import BackToTop from "@components/BackToTop.vue";
import MainFooter from "@components/MainFooter.vue";

@Component({
	components: {
		BackToTop,
		MainFooter,
	},
})
export default class WorkView extends Vue {
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
.card {
	margin: 1.5rem;
}

.card-title > i {
	margin-left: 2px;
	margin-right: 2px;
}

.title {
	font-size: 60px;
	margin-bottom: 6px;
}

.overflow-hidden {
	overflow: hidden;
}
</style>
