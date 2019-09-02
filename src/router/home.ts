const routers = [{
	path: '/home',
	name: 'home',
	component: () => import(/* webpackChunkName: 'index' */ /* webpackPrefetch: true */ '@/views/Home.vue'),
}];

export default routers;
