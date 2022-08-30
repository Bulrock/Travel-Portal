console.log('Общая оценка - 125 баллов. Самооценка по выполненным пунктам:\n1) Слайдер изображений в секции destinations (+50 баллов):\n  - на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер конечный (+20 баллов)\n  - три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (кнопка затемняется, если слайдер достиг края) (+20 баллов)\n  - анимации плавного перемещения для слайдера (+10 баллов)\n2) Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап (+50 баллов):\n  - логин попап соответствует верстке его закрытие происходит при клике вне попапа (+25 баллов)\n  - логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (+25 баллов)\n3) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (+25 баллов)\n')

function burgerMenu(selector) {
	let menu = document.querySelector(selector);
	let button = menu.querySelector('.burger-menu-button');
	let links = menu.querySelectorAll('.burger-menu-link');
	let overlay = menu.querySelector('.burger-menu-overlay');
	
	button.addEventListener('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});
	
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener('click',() => toggleMenu());
    }
	overlay.addEventListener('click',() => toggleMenu());

	function toggleMenu(){
		menu.classList.toggle('burger-menu-active');
		
		if (menu.classList.contains('burger-menu-active')) {
 			document.getElementsByTagName("body")[0].style.overflow="hidden";
		} else {
 			document.getElementsByTagName("body")[0].style.overflow="visible";
		}
	}
}

burgerMenu ('.burger-menu');

function loginPopUp(selector, selector1) {
	let loginPopup = document.querySelector(selector);
	let signUpPopup = document.querySelector(selector1);
	let loginbutton = document.getElementById('login-button');
	let loginbutton1 = document.getElementById('account');
	let overlay = document.querySelector('.login-pop-up-overlay');
	let register = document.getElementById('register');
	let login = document.getElementById('log-in');
	
	loginbutton.addEventListener('click', (e) => {
		e.preventDefault();
		showLoginPopup()
		toggleMenu();
	});
	
	loginbutton1.addEventListener('click', (e) => {
		e.preventDefault();
		showLoginPopup()
		toggleMenu();
	});

	register.addEventListener('click', (e) => {
		e.preventDefault();
		showRegisterPopup();
	});

	login.addEventListener('click', (e) => {
		e.preventDefault();
		showLoginPopup();
	});
   
	overlay.addEventListener('click',() => toggleMenu());

	function toggleMenu(){
		loginPopup.classList.toggle('login-pop-up-active');
		signUpPopup.classList.toggle('sign-up-pop-up-active');
		overlay.classList.toggle('active');
		
		if (loginPopup.classList.contains('login-pop-up-active')) {
 			document.getElementsByTagName("body")[0].style.overflow="hidden";
		} else {
 			document.getElementsByTagName("body")[0].style.overflow="visible";
		}
		loginPopup.querySelector('.input-email').value = '';
		loginPopup.querySelector('.input-password').value = '';

		signUpPopup.querySelector('.input-email').value = '';
		signUpPopup.querySelector('.input-password').value = '';
	}

	function showRegisterPopup(){
		loginPopup.style.visibility="hidden";
		signUpPopup.style.visibility="unset";
	}

	function showLoginPopup(){
		signUpPopup.style.visibility="hidden";
		loginPopup.style.visibility="unset";
	}

	function detectSignInButtonPushing(popUpClass) {
		let popup = document.querySelector(popUpClass);
		let signInPopUpButton = popup.querySelector('.sign-in-button');
		signInPopUpButton.addEventListener('click', (e) => {
			e.preventDefault();
			showInputAlert(popup);
		});
	};

	detectSignInButtonPushing('.login-pop-up');
	detectSignInButtonPushing('.sign-up-pop-up');
	
	function showInputAlert(popup) {
		let email = popup.querySelector('.input-email').value;
		let password = popup.querySelector('.input-password').value;
		if (email === null || password === null || email === "" || password === "") {
			alert("FILL IN ALL FIELDS!");
		} else {
			toggleMenu()
			alert("Your E-mail: " + email + "\n" + "Your Password: " + password);
		}
	}
}

loginPopUp ('.login-pop-up', '.sign-up-pop-up');

function switchPhoto() {
	let photos = document.querySelectorAll('.destination');

	for(let i = 0; i < photos.length; i++) {
		photos[i].addEventListener('click', (e) => {
			e.preventDefault();
			togglePhoto(i);
		});
	}
};

let currentDestinationPhotoIndex = 1;

function switchMobilePhotoLeft() {
	let arrowLeft = document.querySelector('.arrow-left-mobile');

	arrowLeft.addEventListener('click', (e) => {
		e.preventDefault();
		togglePhoto(currentDestinationPhotoIndex-1);
	});
};

switchMobilePhotoLeft()
	
function switchMobilePhotoRight() {
	let arrowRight = document.querySelector('.arrow-right-mobile');

	arrowRight.addEventListener('click', (e) => {
		e.preventDefault();
		togglePhoto(currentDestinationPhotoIndex+1);
	});
};

switchMobilePhotoRight()

function togglePhoto(i){
	if(i < 0 || i > 2) {
		return
	};
	currentDestinationPhotoIndex = i;
	var cardWidth = document.querySelector('.destination').clientWidth;
	let containerPhoto = document.querySelector('.popular-destination');
	let gap = cardWidth*0.075;
	var screenWidth = window.innerWidth;
	if(screenWidth <= 390){
		containerPhoto.style.marginLeft = `calc((50% - ${cardWidth*1.5}px - ${gap}px) * ${i})`;
	} else {
		containerPhoto.style.marginLeft = `calc((50% - ${cardWidth*1.5}px - ${gap}px) * ${i} + (1 - ${i}) * ${gap}px)`;
	};
	let scrollItems = document.querySelectorAll('.destination-scroll-item');
	for(let j = 0; j < scrollItems.length; j++){
		if(j === i){
			scrollItems[j].classList.add('active');
		} else {
			scrollItems[j].classList.remove('active');
		};
	};
	let arrowLeft = document.querySelector('.arrow-left-mobile');
	if(i === 0){
		arrowLeft.classList.remove('active');
	} else {
		arrowLeft.classList.add('active');
	}
	let arrowRight = document.querySelector('.arrow-right-mobile');
	if(i === 2){
		arrowRight.classList.remove('active');
	} else {
		arrowRight.classList.add('active');
	}
};

switchPhoto()

window.addEventListener('resize', function(event) {
    resizeStoriesBackground();
	togglePhoto(currentDestinationPhotoIndex);
}, true);

function resizeStoriesBackground() {
    var screenWidth = window.innerWidth;
    var travelStoriesHeight = document.getElementById('travel-stories').clientHeight;
    var backgroundHeight = travelStoriesHeight
    var newBackgroundSize

    if (screenWidth >= 1440)  {
        newBackgroundSize = "unset"
    }
    else if (screenWidth < 1440 && screenWidth >= 1000) {
        backgroundHeight -= 30
        newBackgroundSize = "1440px " + backgroundHeight + "px"
    } 
    else if (screenWidth < 1000 && screenWidth > 390) { 
        backgroundHeight += 10
        var newBackgroundSize = "auto " + backgroundHeight + "px"
    }
    else if (screenWidth <= 390) {  
        backgroundHeight += 18
        var newBackgroundSize = "auto " + backgroundHeight + "px"
    }

    var content = document.querySelector('.content');
    content.style.backgroundSize = newBackgroundSize
}

document.addEventListener("DOMContentLoaded", () => {
    resizeStoriesBackground()
    window.setTimeout(resizeStoriesBackground, 20);
	togglePhoto(currentDestinationPhotoIndex);
});

