// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGB2uun6xS2fBDVZIMVtKyf-j0KKsNKRw",
  authDomain: "bo-ri-team.firebaseapp.com",
  databaseURL: "https://bo-ri-team-default-rtdb.firebaseio.com",
  projectId: "bo-ri-team",
  storageBucket: "bo-ri-team.appspot.com",
  messagingSenderId: "39470883610",
  appId: "1:39470883610:web:4e707da44a23d6052042a3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
 
const emailSubmit = document.querySelector('#emailSubmit');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
let nameString = '';
let emailString = '';


emailSubmit.addEventListener('click', async () => {
  let uid = Date.now().toString(36) + Math.random().toString(36);
   if (emailInput.value !== '') {
     if(nameInput.value !== ''){
       nameString = nameInput.value;
      }
      emailString = emailInput.value;
      try {
        await setDoc(doc(db, "emails", uid), {
          name: nameString,
          email: emailString,
          date: Date().toLocaleString(),
         }); 
      } catch (error) {dddddddddd
       console.log(error) 
      }
    }
    document.querySelector('.modal').classList.add('modal-hide')
    document.querySelector('.modal').classList.remove('modal-show')
    document.querySelector('#tint').classList.remove('tint')
    document.querySelector('#page-content').classList.remove('page-content')
 })

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

window.addEventListener('load', () => {
  showPopup()
})

function showPopup() {
  let i = 0
  setInterval(() => {
    i++
    if (i == 3) {
      document.querySelector('.modal').classList.remove('modal-hide')
      document.querySelector('.modal').classList.add('modal-show')
      document.querySelector('#tint').classList.add('tint')
      document.querySelector('#page-content').classList.add('page-content')
    }
  }, 1000);
}

document.querySelector('#modal-close').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('modal-hide')
      document.querySelector('.modal').classList.remove('modal-show')
      document.querySelector('#tint').classList.remove('tint')
      document.querySelector('#page-content').classList.remove('page-content')
})

// document.querySelector('#show-modal').addEventListener('click', () => {
//   document.querySelector('.modal').classList.remove('modal-hide')
//   document.querySelector('.modal').classList.add('modal-show')
//   document.querySelector('#tint').classList.add('tint')
//   document.querySelector('#page-content').classList.add('page-content')
// })


/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


const shortBtn = document.querySelector('#short')
const shortList = document.querySelector('#shortlist')
const onetimelistBtn = document.querySelector('#onetime')
const onetimelist = document.querySelector('#onetimelist')
const longBtn = document.querySelector('#long')
const longList = document.querySelector('#longlist')
let currentActivePricing = ''

shortBtn.addEventListener('click', (e) => {
  if (currentActivePricing == 'shortList') {
    shortList.classList.remove('pricing-list-active')
    console.log('y')
    return
  }
  longList.classList.remove('pricing-list-active')
  onetimelist.classList.remove('pricing-list-active')
  shortList.classList.add('pricing-list-active')
  currentActivePricing = 'shortList'
  console.log(e.target)
})
longBtn.addEventListener('click', (e) => {
  if (currentActivePricing == 'longList') {
    console.log('y')
    longList.classList.remove('pricing-list-active')
    return
  }
  shortList.classList.remove('pricing-list-active')
  onetimelist.classList.remove('pricing-list-active')
  longList.classList.add('pricing-list-active')
  currentActivePricing = 'longList'
  console.log(e.target)
})
onetimelistBtn.addEventListener('click', (e) => {
  if (currentActivePricing == 'oneTime') {
    console.log('y')
    onetimelist.classList.remove('pricing-list-active')
    return
  }
  shortList.classList.remove('pricing-list-active')
  longList.classList.remove('pricing-list-active')
  onetimelist.classList.add('pricing-list-active')
  currentActivePricing = 'oneTime'
  console.log(e.target)
})


const opacityObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('opacity-show')
    } else {
      entry.target.classList.remove('opacity-show')
    }
  })
})

const hiddenOpacity = document.querySelectorAll('.opacity-hidden');
hiddenOpacity.forEach((el) => opacityObserver.observe(el));

const scaleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('scale-show')
    } else {
      entry.target.classList.remove('scale-show')
    }
  })
})

const hiddenScale = document.querySelectorAll('.scale-hidden');
hiddenScale.forEach((el) => scaleObserver.observe(el));

const leftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target)
    if(entry.isIntersecting) {
      entry.target.classList.add('move-left-show')
    } else {
      entry.target.classList.remove('move-left-show')
    }
  })
})

const hiddenLeft = document.querySelectorAll('.move-left-hidden');
hiddenLeft.forEach((el) => leftObserver.observe(el));

const rightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target)
    if(entry.isIntersecting) {
      entry.target.classList.add('move-right-show')
    } else {
      entry.target.classList.remove('move-right-show')
    }
  })
})

const hiddenRight = document.querySelectorAll('.move-right-hidden');
hiddenRight.forEach((el) => rightObserver.observe(el));

