import App from './App.svelte';
import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['Roboto:400,500,700', 'Ubuntu Condensed']
	  }
})


const app = new App({
	target: document.body
});

export default app;