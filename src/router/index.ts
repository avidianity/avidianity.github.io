import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@views/Home.vue';
import About from '@views/About.vue';
import ComingSoon from '@views/ComingSoon.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ComingSoon,
	},
	{
		path: '/work',
		name: 'Work',
		component: ComingSoon,
	},
	{
		path: '/blog',
		name: 'Blog',
		component: ComingSoon,
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ '../views/About.vue'),
	// },
];

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
});
