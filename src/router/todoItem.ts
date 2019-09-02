const routers = [{
	name: 'todoItem',
	path: '/todoItem',
	component: () => import(/* webpackChunkName: 'index' */ /* webpackPrefetch: true */ '@/views/todoItem/todoItem.vue'),
}];

export default routers;
