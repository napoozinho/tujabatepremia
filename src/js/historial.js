const rows = document.getElementsByClassName('row');
const rowsLength = rows.length;
const loadMoreBtn = document.getElementsByClassName('loadMore')[0];


if(rowsLength > 7) {
  hideRows();
  showFirstRows();

  loadMoreBtn.addEventListener('click', loadMore);
}

else {
  hideBtn();
}


function hideRows() {
  for (let i=0; i<rowsLength; i++) {
    rows[i].classList.add('hidden')    
  }
}

function showFirstRows() {
  for (let i=0; i<7; i++) {
    rows[i].classList.remove('hidden')    
  }
}

function getFirstHidden() {
  for (let i=0; i<rowsLength; i++) {
    if (rows[i].classList.contains('hidden')) {
      return i;
    }
  }
}

function allRowsVisible() {
  for (let i=0; i<rowsLength; i++) {
    if(rows[i].classList.contains('hidden')) {
      return false;
    }
  }
  return true;
}

function hideBtn() {
  loadMoreBtn.classList.add('hidden');
}

function loadMore() {
  const max = getFirstHidden() + 6;

  for (let i=getFirstHidden(); i<max; i++) {
    if (rows[i] == undefined) {
      break;
    }
    rows[i].classList.remove('hidden');
  }

  if (allRowsVisible()) {
    hideBtn();
  }
}