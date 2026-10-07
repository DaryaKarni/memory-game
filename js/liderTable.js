
export function createLiderTable(){
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper', 'modal-table');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const table = document.createElement('table');
  table.classList.add('table', 'hidden');
  const thead = document.createElement('thead');
  thead.classList.add('thead')
  const theadTr = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.classList.add('th');
  th1.textContent = 'Place';
  theadTr.append(th1);
  const th2 = document.createElement('th');
  th2.classList.add('th');
  th2.textContent = 'Moves';
  theadTr.append(th2);
  const th3 = document.createElement('th');
  th3.classList.add('th');
  th3.textContent = 'Date';
  theadTr.append(th3);
  thead.append(theadTr);
  table.append(thead);

  const liderTableText = document.createElement('p');
  liderTableText.classList.add('lider-table-text');
  liderTableText.textContent = 'Lider table';
  modal.append(liderTableText);

  const noLidersText = document.createElement('p');
  noLidersText.classList.add('nolider-text');
  modal.append(noLidersText);

  modal.append(table);

  const closeButton = document.createElement('button');
  closeButton.classList.add('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    closeModalTable();
  })
  document.addEventListener('keydown', (e) => {
    if(e.key=== 'Escape'){
      closeModalTable();
    }
  });
  modalWrapper.addEventListener('click', (e) => {
    if(e.target === modalWrapper){
      closeModalTable();
    }
  })
  modal.append(closeButton);
  modalWrapper.append(modal);

  modalWrapper.classList.add('hidden');
  document.body.append(modalWrapper);

  updateLiderTable();
}

export function openLiderTable(){
  const modalWrapper = document.querySelector('.modal-table');
  if(modalWrapper){
     modalWrapper.classList.remove('hidden');
     document.documentElement.classList.add('no-scroll');
  }
}
export function updateLiderTable(){
  const modalWrapper = document.querySelector('.modal-table');
  const modal = modalWrapper.querySelector('.modal');
  const table = modal.querySelector('.table');
  table.replaceChildren(table.firstChild);
  const noLidersText = document.querySelector('.nolider-text');
  if(modalWrapper){
    const liders = JSON.parse(localStorage.getItem('liders')) ? JSON.parse(localStorage.getItem('liders')) :
    null;
    if(!liders){
      noLidersText.textContent = 'No results. Play a game!';
    } else{
      liders.sort((a,b) => {
        if(a.moves !== b.moves){
          return a.moves - b.moves
        }
        return new Date(a.date) - new Date(b.date);
      });
      const slicedLiders = liders.length > 10 ? liders.slice(0, 10) : liders.slice();
      for(const lider of slicedLiders){
        const tr = document.createElement('tr');
        const indexTd = document.createElement('td');
        indexTd.textContent = String(slicedLiders.indexOf(lider) + 1);
        tr.append(indexTd);
        for(let key in lider){
          if(lider.hasOwnProperty(key)){
            const td = document.createElement('td');
            String(lider[key]).replaceAll('-', '.');
            td.textContent = String(lider[key]);
            tr.append(td);
          }
        }
        noLidersText.classList.add('hidden');
        table.classList.remove('hidden');
        table.append(tr);
      }
      
    }
  }
}
function closeModalTable(){
  const modalWrapper = document.querySelector('.modal-table');
  if(modalWrapper){
    modalWrapper.classList.add('hidden');
     document.documentElement.classList.remove('no-scroll');
  }
}