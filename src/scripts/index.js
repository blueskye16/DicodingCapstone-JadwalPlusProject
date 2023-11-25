import App from './App';
import '../styles/index.css';
// import '../styles/login&regis/style.css';
// import '../styles/login&regis/responsive.css';

const root = document.getElementById('root');
const app = new App({ root });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
