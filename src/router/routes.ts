import home from './home'
import todo from './todoItem'

const routes = [
	{
		path:'',
		redirect: '/home',
	},
	...home,
	...todo

];

export default routes;
