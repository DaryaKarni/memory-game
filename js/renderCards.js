const images = [
  "./assets/apple.jpg", 
  "./assets/bed.jpg", 
  "./assets/chair.jpg",
  "./assets/cup.jpg",
  "./assets/dresser.jpg",
  "./assets/kettle.jpg",
  "./assets/telephone.jpg",
  "./assets/tv.jpg",
  "./assets/apple.jpg", 
  "./assets/bed.jpg", 
  "./assets/chair.jpg",
  "./assets/cup.jpg",
  "./assets/dresser.jpg",
  "./assets/kettle.jpg",
  "./assets/telephone.jpg",
  "./assets/tv.jpg"
];

function randomize(array){
  let arr = [...array];
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let flippedCards = [];
let isBoardLocked = false;
export function renderCards(){
  const arrImages = randomize(images);
  const grid = document.querySelector('.grid');
  const counter = document.querySelector('.counter');
  grid.replaceChildren();
  let moves = 0;
  let pairs = 0;
  counter.textContent = `${moves} moves, ${pairs} of 8 pairs`;
  for(const image of arrImages){
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = image.replace('/assets/', '').replace('.jpg', '');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardImage = document.createElement('img');
    cardImage.src = image;
    cardImage.alt = `${card.dataset.name} card`;
    cardFront.append(cardImage);

    card.append(cardBack, cardFront);
    card.addEventListener('click', () => {
      if(isBoardLocked || card.classList.contains('flipped')){
        return;
      }
        flippedCards.push(card);
        card.classList.add('flipped');
        moves++;
        counter.textContent = `${moves} moves, ${pairs} of 8 pairs`;
        if(flippedCards.length === 2){
          isBoardLocked = true;
          const matched = flippedCards[0].dataset.name === flippedCards[1].dataset.name 
          ? true : false;
          if(matched){
            flippedCards = [];
            isBoardLocked = false;
            pairs++;
            counter.textContent = `${moves} moves, ${pairs} of 8 pairs`;
          } else{
            setTimeout(() => {
              for(let flipped of flippedCards){
                flipped.classList.remove('flipped');
              }
              flippedCards = [];
              isBoardLocked = false;
            }, 1000);
          }
        if(pairs === 8){
          openModalWin();
        }
      }
    })
    grid.append(card);
  }
}

function openModalWin(){
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const winText = document.createElement('p');
  winText.textContent = 'Congratulations on your win!';
  winText.classList.add('win-text');
  const counter = document.querySelector('.counter');
  const counterText = document.createElement('p');
  counterText.textContent = counter.textContent;
  counterText.classList.add('counter-text');
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const buttonNewGame = document.createElement('button');
  buttonNewGame.textContent = 'NEW GAME'
  buttonNewGame.classList.add('button');
  buttonNewGame.addEventListener('click', () => {
    renderCards();
  });

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'CLOSE';
  buttonClose.classList.add('button');
  buttonClose.addEventListener('click', () => {
    document.body.removeChild(modalWrapper);
  });

  buttonsContainer.append(buttonNewGame, buttonClose);
  modal.append(winText, counterText, buttonsContainer);
  modalWrapper.append(modal);
  document.body.append(modalWrapper);

  document.documentElement.classList.add('no-scroll');
}

function startNewGame(){

}