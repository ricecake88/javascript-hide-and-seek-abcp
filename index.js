function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget() {
  var target = document.getElementById('nested').querySelector('.target');
  return target;
}

function increaseRankBy(n) {
  var lists = document.querySelector('ul.ranked-list');
  var li = document.querySelectorAll('li');
  console.log(li);
  for (let i = 0; i < li.length; i++) {
    if (li[i].innerText !== undefined)
      li[i].innerText = parseInt(li[i].innerText)+n;
  }
    
}

function deepestChild() {
  var grandnode = document.querySelector('div#grand-node');
  var children = grandnode.children()
  for (let i = grandnodeDIVS[0]; i < grandnodeDIVS.length; i++) {
    
  }
  return child;
}