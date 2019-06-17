const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Header
let links = document.querySelectorAll('a');
let linkItems = Object.values(siteContent.nav);

for(let i = 0; i < links.length; i++) {
  links[i].textContent = linkItems[i];
};

let nav = document.querySelector('nav');

const blog = document.createElement('a');
blog.textContent = 'Blog';
blog.setAttribute('href', '#');
blog.style.color = "darkolivegreen";

const feedBack = document.createElement('a');
feedBack.textContent = 'Feedback';
feedBack.setAttribute('href', '#');
feedBack.style.color = "darkolivegreen";

nav.prepend(blog);
nav.appendChild(feedBack);

links.forEach(item => item.style.color = "darkolivegreen");

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//CTA
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";


//Main-Content
let contentHeader = document.querySelectorAll('.text-content h4');
let contentHeaderItems = Object.keys(siteContent["main-content"]).filter(item => item.includes('h4'));

let contentText = document.querySelectorAll('.text-content p');
let contentTextItems = Object.keys(siteContent["main-content"]).filter(item => item.includes('content'));

for(let i = 0; i < contentHeader.length; i++) {
  contentHeader[i].textContent = siteContent["main-content"][contentHeaderItems[i]];
  contentText[i].textContent = siteContent["main-content"][contentTextItems[i]];
};

let middleImg = document.querySelector('#middle-img');
middleImg.src = "img/mid-page-accent.jpg";


//Contact
let contactHeader = document.querySelector('.contact h4');
let contactContent = document.querySelectorAll('.contact p');

let contactHeaderItem = siteContent.contact["contact-h4"];
let contactContentItems = Object.values(siteContent.contact);

contactHeader.textContent = contactHeaderItem;
for(let i = 0; i < contactContent.length; i++) {
  contactContent[i].textContent = contactContentItems[i + 1];
};

//Footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
