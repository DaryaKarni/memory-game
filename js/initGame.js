import { openLiderTable, createLiderTable } from "./liderTable.js";
import {createModalWin, renderCards} from "./renderCards.js";

function initGame(){
  const header = document.createElement('header');
  header.classList.add('header');

  const gameButton = document.createElement('button');
  gameButton.classList.add('button');
  gameButton.dataset.action = 'start-game';
  gameButton.textContent = 'NEW GAME';
  
  const tableButton = document.createElement('button');
  tableButton.classList.add('button');
  tableButton.dataset.action = 'open-table';
  tableButton.textContent = "LIDER'S TABLE";
  
  header.append(gameButton, tableButton);
  document.body.append(header);

  const counter = document.createElement('p');
  counter.classList.add('counter');
  counter.textContent = '0 moves, 0 of 8 pairs';

  const grid = document.createElement('div');
  grid.classList.add('grid');
  document.body.append(counter, grid);

  
  renderCards();
  
  createModalWin();
  
  gameButton.addEventListener('click', () => {
    renderCards();
  });

  createLiderTable();
  
  tableButton.addEventListener('click', () => {
    openLiderTable();
  })
  
}
initGame();