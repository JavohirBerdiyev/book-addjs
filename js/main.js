let elForm = document.querySelector('#book-form');
let elBtnGroup = document.querySelector('.btn-group');
let elListGroup = document.querySelector('.list-group');

let title = elForm.querySelector('#title');
let type = elForm.querySelector('#type');

let newArr = [], newList = [];
elForm.addEventListener('submit', function (e) {
  e.preventDefault();
  newArr.forEach(function (val) {
    if (val.title == title.value) {
      title.value = '';
      type.value = '';
    }
  });
  if (title.value != "" && type.value != "") {
    let newObj = {
      title: title.value,
      type: type.value
    }
    newArr.push(newObj);
    title.value = '', type.value = '';
  }
  newList = newArr.map(function (val) {
    return `<li class="list-group-item"> ${val.title} <span class="float-end badge bg-info">${val.type}</span> </li>`
  })
  elListGroup.innerHTML = newList.join('');
});

elBtnGroup.addEventListener('click', function (e) {

  function newFunc(typeone) {
    if (e.target.innerHTML == typeone) {
      let newBadiiy = newArr.filter(function (val) {
        return val.type == typeone;
      });

      newList = newBadiiy.map(function (val) {
        return `<li class="list-group-item"> ${val.title} <span class="float-end badge bg-info">${val.type}</span> </li>`
      });
      elListGroup.innerHTML = newList.join('');
    }
  }
  elBtnGroup.querySelectorAll('button').forEach(function (val) {
    newFunc(val.innerHTML);
  });

  if (e.target.innerHTML == 'All') {
    newList = newArr.map(function (val) {
      return `<li class="list-group-item"> ${val.title} <span class="float-end badge bg-info">${val.type}</span> </li>`
    })
    elListGroup.innerHTML = newList.join('');
  }
})
