import ExComponent from './ex-component';

declare const window :any;

const components : any = {
	ExComponent
};

const install : any = function (Vue : any) {
	if (install.installed) { return false; }
	install.installed = true;
	Object.keys(components).forEach(component => Vue.component(component, components[component]));
};

const API = {
	install,
	...components
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default API;
