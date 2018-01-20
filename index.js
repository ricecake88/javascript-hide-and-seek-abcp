function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget() {
  var target = document.getElementById('nested').querySelector('.target');
  return target;
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lists.length; i++) {
    var li = lists[i].querySelectorAll('li');
    console.log(li);
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML !== undefined)
        li[i].innerHTML = parseInt(li[i].innerHTML)+n;
    }
  }
    
}

function deepestChild() {
  var grandnode = document.querySelector('div#grand-node');
  var deepestChild;
  for (let i = 0; i < grandnode.length; i++) {
    console.log(grandnode[i].querySelector('div'));
  }
  deepestChild = grandnode[i].querySelector('div');
  return deepestChild;
}