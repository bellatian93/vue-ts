const routers = [{
	path: '',
	name: 'home',
	component: () => import(/* webpackChunkName: 'index' */ /* webpackPrefetch: true */ '@/views/Home.vue')
}];

export default routers;
