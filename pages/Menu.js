export const Menu = () => {
  const section = document.createElement('section');
  section.classList.add('main-menu-section');

  section.innerHTML = `
    <div class="menu">
      <h1>Rock, Paper, Scissors</h1>
      <button id="start-btn" class="btn">start</button>
    </div>
  `;

  return section;
};
