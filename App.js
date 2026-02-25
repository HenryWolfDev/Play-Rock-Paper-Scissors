import { createStore } from './state/store.js';
import { Menu } from './pages/Menu.js';

const App = () => {
  const store = createStore({
    currentPage: 'menu',
  });

  const render = () => {
    const state = store.getState();
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (state.currentPage === 'menu') {
      app.appendChild(Menu());
    }
  };
  store.subscribe(render);

  render();
};

App();
