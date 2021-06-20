<template>
	<div class="container-fluid py-5">
		<div class="row overflow-hidden">
			<div class="col-sm-12 col-md-4 border-right-lg my-2" :data-aos="fadeLargeRight" data-aos-duration="1200">
				<div class="text-center">
					<img
						:src="profile"
						alt="Profile Picture"
						class="profile"
						title="This profile picture changes automatically when my facebook profile picture is changed."
					/>
				</div>
				<ul class="profile-info">
					<li>
						<i class="fas fa-graduation-cap"></i>
						Studies Bachelor of Science in Information Technology at Iloilo State College Of Fisheries
					</li>
					<li>
						<i class="fas fa-graduation-cap"></i>
						Went to St. Paul School Barotac Nuevo Iloilo Philippines
					</li>
					<li>
						<i class="fas fa-home"></i>
						Lives in Iloilo City, Philippines
					</li>
					<li>
						<i class="fas fa-heart"></i>
						Single
					</li>
					<li>
						<i class="fab fa-instagram"></i>
						<a :href="links.instagram" class="sm-link" target="_blank" rel="noopener noreferrer">
							mekkydigret
						</a>
					</li>
					<li>
						<i class="fab fa-twitter"></i>
						<a :href="links.twitter" class="sm-link" target="_blank" rel="noopener noreferrer">
							avidianity
						</a>
					</li>
					<li>
						<i class="fab fa-soundcloud"></i>
						<a :href="links.soundcloud" class="sm-link" target="_blank" rel="noopener noreferrer">
							avidian
						</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-12 col-md-8 my-2">
				<h1 class="title" :data-aos="fadeLargeLeft" data-aos-duration="1200">
					About
				</h1>
				<p class="paragraph" :data-aos="fadeLargeLeft" data-aos-duration="1200">
					An experienced web developer looking to find work experience or intership in the web development industry. Knowledgeable
					in user interface, testing, developing, and debugging processes. Bringing forth skills in both back-end and front-end
					development, installation, testing, and maintenance of web systems. Equipped with a diverse and promising skill-set.
					Able to effectively self-manage during independent projects as well as collaborate in a team setting.
				</p>
				<p class="paragraph" :data-aos="fadeLargeLeft" data-aos-duration="1200">
					I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught,
					personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
					Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my
					fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to
					entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on
					them.
				</p>
				<p class="paragraph" :data-aos="fadeLargeLeft" data-aos-duration="1200">
					My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast
					learner, able to pick up new skills and juggle different projects and roles with relative ease. I like to develop
					expertise in a number of areas over the course of my life and career.
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class AboutView extends Vue {
	profile: string = process.env.VUE_APP_FACEBOOK_PROFILE_URL;
	links = {
		instagram: process.env.VUE_APP_INSTAGRAM_URL as string,
		twitter: process.env.VUE_APP_TWITTER_URL as string,
		soundcloud: process.env.VUE_APP_SOUNDCLOUD_URL as string,
	};
	windowWidth: number = $(window).width()!;
	fadeLargeLeft = 'fade-up';
	fadeLargeRight = 'fade-up';
	created() {
		this.fadeLargeLeft = this.windowWidth < 768 ? 'fade-up' : 'fade-left';
		this.fadeLargeRight = this.windowWidth < 768 ? 'fade-up' : 'fade-right';
		$(window).on('resize', (e) => {
			this.windowWidth = $(window).width()!;
			this.fadeLargeLeft = this.windowWidth < 768 ? 'fade-up' : 'fade-left';
			this.fadeLargeRight = this.windowWidth < 768 ? 'fade-up' : 'fade-right';
		});
	}
}
</script>

<style scoped lang="scss">
.profile {
	margin: 12px auto;
	height: 150px;
	width: 150px;
	border-radius: 250px;
	box-shadow: 0px 0px 1px 1px #d4d4d4;
	border: 1px solid #9c9c9c;
}

.profile-info {
	list-style-type: none;
}

.profile-info li {
	margin: 10px auto;
}

.profile-info li i {
	margin-right: 6px;
}

.sm-link:hover {
	text-decoration: none;
}

.title {
	font-size: 60px;
	margin-bottom: 6px;
}

.paragraph {
	text-indent: 12px;
	font-size: 18px;
}

.overflow-hidden {
	overflow: hidden;
}

@media (min-width: 768px) {
	.border-right-lg {
		border-bottom: none;
		border-right: 1px solid #dee2e6;
	}
}
</style>
