import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import About from '@views/About.vue';
import Work from '@views/Work.vue';
import Contact from '@views/Contact.vue';
import ComingSoon from '@views/ComingSoon.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "home" */ '@views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '@views/About.vue'),
	},
	{
		path: '/work',
		name: 'Work',
		component: () =>
			import(/* webpackChunkName: "work" */ '@views/Work.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "contact" */ '@views/Contact.vue'),
	},
	{
		path: '/blog',
		name: 'Blog',
		component: ComingSoon,
	},
];

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
});
