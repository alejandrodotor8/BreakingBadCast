import './styles/styles.scss';
//if (window.innerWidth >= 600) {
//import(/* webpackChunkName: 'styles-desktop' */ './styles-desktop.scss');
//}
import router from './routes';
//import { registerImage } from './utils/lazy';
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
