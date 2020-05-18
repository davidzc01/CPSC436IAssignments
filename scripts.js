const initMessagesJSON = '[{"msg":"test message 1","liked": false}, {"msg": "test message 2","liked": true}]';

function loadNavBar() {
  document.getElementById('nav-menu').innerHTML =
  '<a href="index.html">Home</a>'
  + ' | '
  + '<a href="about.html">About</a>';
}

function loadInitMessage() {
  const initMessages = JSON.parse(initMessagesJSON);
  const delBtn = '<button onclick="deleteMessage(this.parentNode);">Delete</button>';
  document.getElementById('message-list').innerHTML = initMessages.reduce((acc, curr) => {
    acc = acc + createInitMsg(curr);
    return acc
  }, '');
}

function createInitMsg({msg, liked}) {
  const likeText = liked ? 'Liked' : 'Like';
  return `<li>${msg} <button onclick="updateLikeBtn(this);">${likeText}</button><button onclick="deleteMessage(this.parentNode);">Delete</button></li>`
}

function initHomePage() {
  loadNavBar();
  loadInitMessage();
}

function addNewMessage(message) {
  const ul = document.getElementById('message-list');
  const li = document.createElement('li');
  const delBtn = document.createElement("button");
  const likeBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  likeBtn.innerHTML = "Like";
  li.appendChild(document.createTextNode(message + ' '));
  li.appendChild(likeBtn);
  li.appendChild(delBtn);
  ul.appendChild(li);
  delBtn.addEventListener ("click", function() {
    deleteMessage(li);
  });
  likeBtn.addEventListener ("click", function() {
    updateLikeBtn(likeBtn);
  });
}

function deleteAllMessages() {
  document.getElementById('message-list').innerHTML = '';
}

function deleteMessage(element) {
  element.parentNode.removeChild(element);
}

function updateLikeBtn(btn) {
  if(btn.innerHTML === 'Like') {
    btn.innerHTML = 'Liked'
  } else {
    btn.innerHTML = 'Like'
  }
}