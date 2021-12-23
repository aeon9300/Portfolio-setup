const hamburgerMenu = document.getElementById('hamNenu');
hamburgerMenu.addEventListener('click', () => {
  document.getElementById('side-bar').style.width = '100%';
});

const closeNavBlock = document.getElementById('closeNav');
closeNavBlock.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const openNavlink = document.getElementById('portfolio');
openNavlink.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const openlinkAbout = document.getElementById('about');
openlinkAbout.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const openlinkContact = document.getElementById('contact');
openlinkContact.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

//  popup window mobile//

const popUpblack = document.createElement('div');
popUpblack.id = 'popupid';
popUpblack.className = 'popupclass';
document.body.appendChild(popUpblack);

const popUp = document.createElement('div');
popUp.id = 'content';
popUp.className = 'note';
popUpblack.appendChild(popUp);

const popTextdiv = document.createElement('div');
popTextdiv.id = 'poptest';
popTextdiv.className = 'poptesty';
popUp.appendChild(popTextdiv);

const popupTitle = document.createElement('h3');
popupTitle.textContent = 'Multi Post Stories';
popupTitle.id = 'popuptitleid';
popupTitle.className = 'poptitleclass';
popTextdiv.appendChild(popupTitle);

const closeicon = document.createElement('img');
closeicon.src = 'image/close.svg';
closeicon.id = 'closeiconid';
closeicon.className = 'closeiconclass';
popTextdiv.appendChild(closeicon);

const imageTextblock = document.createElement('div');
imageTextblock.id = 'imagetxtid';
imageTextblock.className = 'imagetxtclass';
popUp.appendChild(imageTextblock);

const list = document.createElement('ul');
list.id = 'listing';
list.className = 'listing';
imageTextblock.appendChild(list);

const listchild1 = document.createElement('li');
listchild1.textContent = 'html';
listchild1.id = 'bam';
listchild1.className = 'bambam';
list.appendChild(listchild1);

const listchild2 = document.createElement('li');
listchild2.textContent = 'bootstrap';
listchild2.id = 'blam';
listchild2.className = 'banban';
list.appendChild(listchild2);

const listchild3 = document.createElement('li');
listchild3.textContent = 'Ruby on rails';
listchild3.id = 'lone';
listchild3.className = 'lome';
list.appendChild(listchild3);

const image = document.createElement('img');
image.src = 'image/mobile-plain.png';
image.id = 'placement';
image.className = 'placemenImage';
imageTextblock.appendChild(image);

const popupText = document.createElement('p');
popupText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
popupText.id = 'ipsum';
popupText.className = 'lorem';
imageTextblock.appendChild(popupText);

const buttonblock = document.createElement('div');
buttonblock.id = 'blank';
buttonblock.className = 'create';
popUp.appendChild(buttonblock);

const buttonone = document.createElement('button');
buttonone.textContent = 'See Live';
buttonone.id = 'orange';
buttonone.className = 'orang';
buttonblock.appendChild(buttonone);

const icon = document.createElement('img');
icon.src = 'image/icon-see.svg';
icon.id = 'load';
icon.className = 'loader';
buttonone.appendChild(icon);

const btn = document.createElement('button');
btn.textContent = 'see source';
btn.id = 'path';
btn.className = 'patten';
buttonblock.appendChild(btn);

const icons = document.createElement('img');
icons.src = 'image/second-icon.png';
icons.id = 'network';
icons.className = 'transfer';
btn.appendChild(icons);

const popUpWindowArray = [];
popUpWindowArray.push(popUpblack);
popUpWindowArray.push(popUp);
popUpWindowArray.push(popTextdiv);
popUpWindowArray.push(imageTextblock);
popUpWindowArray.push(list);
popUpWindowArray.push(buttonblock);

const popUpImageArr = [];
popUpImageArr.push(closeicon);
popUpImageArr.push(image);
popUpImageArr.push(icon);
popUpImageArr.push(icons);

const ButtonArr = [];
ButtonArr.push(buttonone);
ButtonArr.push(btn);

ButtonArr[0].onclick = function redirecting() {
  window.location.href = 'https://oluwajuwon8.github.io/Portfolio-Project/';
};

ButtonArr[1].onclick = function redirect() {
  window.location.href = 'https://github.com/oluwajuwon8/Portfolio-Project';
};

const textArray = [];
textArray.push(popupTitle);
textArray.push(popupText);

const popUpWindowObject = {};
popUpWindowObject.htmlelement = popUpWindowArray;
popUpWindowObject.images = popUpImageArr;
popUpWindowObject.button = ButtonArr;
popUpWindowObject.Text = textArray;

const popUpmenu = document.getElementById('popupid');
const buttonTag = document.getElementById('projects1');
const projectLink1 = document.getElementById('projects2');
const projectLink2 = document.getElementById('projects3');
const projectLink3 = document.getElementById('projects4');
const projectLink4 = document.getElementById('projects5');
const projectLink5 = document.getElementById('projects6');
const projectLink6 = document.getElementById('projects7');

const projectArr = [];
projectArr.push(popUpmenu);
projectArr.push(buttonTag);
projectArr.push(projectLink1);
projectArr.push(projectLink2);
projectArr.push(projectLink3);
projectArr.push(projectLink4);
projectArr.push(projectLink5);
projectArr.push(projectLink6);

document.querySelector('#closeiconid').addEventListener('click', () => {
  document.querySelector('.popupclass').style.display = 'none';
});

projectArr[1].onclick = function popUpWindow() {
  popUpmenu.style.display = 'block';
};

projectArr[2].onclick = function popUpWindow1() {
  popUpmenu.style.display = 'block';
};

projectArr[3].onclick = function popUpWindow2() {
  popUpmenu.style.display = 'block';
};

projectArr[4].onclick = function popUpWindow3() {
  popUpmenu.style.display = 'block';
};

projectArr[5].onclick = function popUpWindow4() {
  popUpmenu.style.display = 'block';
};

projectArr[6].onclick = function popUpWindow5() {
  popUpmenu.style.display = 'block';
};

projectArr[7].onclick = function popUpWindow6() {
  popUpmenu.style.display = 'block';
};

// desktop popup //

const popupBlockDesktop = document.createElement('div');
popupBlockDesktop.id = 'popupDivDesktop';
popupBlockDesktop.className = 'popupBlocDesktop';
document.body.appendChild(popupBlockDesktop);

const blockDesk = document.createElement('div');
blockDesk.id = 'blockDesktop';
blockDesk.className = 'blockDesktop';
popupBlockDesktop.appendChild(blockDesk);

const textImageBlock = document.createElement('div');
textImageBlock.id = 'textImage';
textImageBlock.className = 'textImageclas';
blockDesk.appendChild(textImageBlock);

const textTitleDesktop = document.createElement('h3');
textTitleDesktop.id = 'textTitleDesk';
textTitleDesktop.className = 'textTitleDeskclas';
textTitleDesktop.textContent = 'Keeping track of hundreds  of components website';
textImageBlock.appendChild(textTitleDesktop);

const closePopupWindow = document.createElement('img');
closePopupWindow.id = 'closePopup';
closePopupWindow.className = 'closePopupclas';
closePopupWindow.src = 'image/close.svg';
textImageBlock.appendChild(closePopupWindow);

const listDesktop = document.createElement('ul');
listDesktop.id = 'listDesktop';
listDesktop.className = 'listDesktop';
blockDesk.appendChild(listDesktop);

const itemUlDesktop = document.createElement('li');
itemUlDesktop.textContent = 'html';
itemUlDesktop.className = 'itemDesktop listOneDesk';
listDesktop.appendChild(itemUlDesktop);

const secondUlDesktop = document.createElement('li');
secondUlDesktop.textContent = 'Bootstrap';
secondUlDesktop.className = 'itemDesktop listwoDesk';
listDesktop.appendChild(secondUlDesktop);

const thirdUlDesktop = document.createElement('li');
thirdUlDesktop.textContent = 'Ruby on rails';
thirdUlDesktop.className = 'itemDesktop listhreeDesk';
listDesktop.appendChild(thirdUlDesktop);

const imageBlockDesktop = document.createElement('div');
imageBlockDesktop.id = 'desktopimageid';
imageBlockDesktop.className = 'desktopimageclas';
blockDesk.appendChild(imageBlockDesktop);

const pictureScreen = document.createElement('img');
pictureScreen.src = 'image/Snapshoot.png';
pictureScreen.className = 'pictureScreenclass';
imageBlockDesktop.appendChild(pictureScreen);

const textsBlockDesktop = document.createElement('div');
textsBlockDesktop.className = 'textsBlockDeskclas';
imageBlockDesktop.appendChild(textsBlockDesktop);

const popUpTextDesk = document.createElement('p');
popUpTextDesk.className = 'deskmaintext';
popUpTextDesk.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
textsBlockDesktop.appendChild(popUpTextDesk);

const buttonDesktop = document.createElement('div');
buttonDesktop.id = 'buttonDesktop';
buttonDesktop.className = 'buttonDesktopclas';
textsBlockDesktop.appendChild(buttonDesktop);

const buttonOneDesk = document.createElement('button');
buttonOneDesk.id = 'buttonOneDeskid';
buttonOneDesk.className = 'buttonOneDeskclas';
buttonOneDesk.textContent = 'See Live';
buttonDesktop.appendChild(buttonOneDesk);

const buttonimgageDesktop = document.createElement('img');
buttonimgageDesktop.src = 'image/arrow.svg';
buttonimgageDesktop.className = 'imageDesktopbtn';
buttonOneDesk.appendChild(buttonimgageDesktop);

const buttonTwoDesk = document.createElement('button');
buttonTwoDesk.id = 'buttonTwoDeskid';
buttonTwoDesk.className = 'buttonTwoDeskclas';
buttonTwoDesk.textContent = 'See Source';
buttonDesktop.appendChild(buttonTwoDesk);

const buttonimgTwoDesk = document.createElement('img');
buttonimgTwoDesk.src = 'image/githubpopup.svg';
buttonimgTwoDesk.className = 'imageDeskbutton';
buttonTwoDesk.appendChild(buttonimgTwoDesk);

const arrayDesktop = [];
arrayDesktop.push(popupBlockDesktop);
arrayDesktop.push(blockDesk);
arrayDesktop.push(textImageBlock);
arrayDesktop.push(listDesktop);
arrayDesktop.push(imageBlockDesktop);
arrayDesktop.push(textsBlockDesktop);
arrayDesktop.push(buttonDesktop);

const popUpImagArrDesk = [];
popUpImagArrDesk.push(closePopupWindow);
popUpImagArrDesk.push(pictureScreen);
popUpImagArrDesk.push(buttonimgageDesktop);
popUpImagArrDesk.push(buttonimgTwoDesk);

const arrayDesktopButton = [];
arrayDesktopButton.push(buttonOneDesk);
arrayDesktopButton.push(buttonTwoDesk);

arrayDesktopButton[0].onclick = function redirectionLive() {
  window.location.href = 'https://aeon9300.github.io/Portfolio-setup/';
};

arrayDesktopButton[1].onclick = function redirection() {
  window.location.href = 'https://github.com/aeon9300/Portfolio-setup';
};

const textArrDesktop = [];
textArrDesktop.push(textTitleDesktop);
textArrDesktop.push(popUpTextDesk);

popUpWindowObject.htmlcontainers = arrayDesktop;
popUpWindowObject.desktopimage = popUpImagArrDesk;
popUpWindowObject.desktopbutton = arrayDesktopButton;
popUpWindowObject.desktoptext = textArrDesktop;

const popUpmenuDesk = document.getElementById('popupid');
const buttonTagDesk = document.getElementById('projects1');
const projectLinkDesk1 = document.getElementById('projects2');
const projectLinkDesk2 = document.getElementById('projects3');
const projectLinkDesk3 = document.getElementById('projects4');
const projectLinkDesk4 = document.getElementById('projects5');
const projectLinkDesk5 = document.getElementById('projects6');
const projectLinkDesk6 = document.getElementById('projects7');

const projectDeskArr = [];
projectDeskArr.push(popUpmenuDesk);
projectDeskArr.push(buttonTagDesk);
projectDeskArr.push(projectLinkDesk1);
projectDeskArr.push(projectLinkDesk2);
projectDeskArr.push(projectLinkDesk3);
projectDeskArr.push(projectLinkDesk4);
projectDeskArr.push(projectLinkDesk5);
projectDeskArr.push(projectLinkDesk6);

document.querySelector('.closePopupclas').addEventListener('click', () => {
  document.querySelector('.popupBlocDesktop').style.display = 'none';
});

projectDeskArr[1].onclick = function popUpWindowDesk() {
  popUpmenuDesk.style.display = 'block';
};

projectDeskArr[2].onclick = function popUpWindowDesk1() {
  popUpmenuDesk.style.display = 'block';
};

projectDeskArr[3].onclick = function popUpWindowDesk2() {
  popUpmenuDesk.style.display = 'block';
};

projectDeskArr[4].onclick = function popUpWindowDesk3() {
  popUpmenuDesk.style.display = 'block';
};

projectDeskArr[5].onclick = function popUpWindowDesk4() {
  popUpmenuDesk.style.display = 'block';
};

projectDeskArr[6].onclick = function popUpWindowDesk5() {
  popUpmenuDesk.style.display = 'block';
};

projectDeskArr[7].onclick = function popUpWindowDesk6() {
  popUpmenuDesk.style.display = 'block';
};