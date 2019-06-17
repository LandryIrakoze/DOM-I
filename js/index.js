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

//    Nav
const navContainer = document.querySelector('nav');
const navItems = document.querySelectorAll('nav a');
const navItemData = Object.values(siteContent.nav);

for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = navItemData[i];
}

//    New Nav Items
let blog = document.createElement('a');
let shop = document.createElement('a');

blog.href = '#';
shop.href = '#';

blog.textContent = 'Blog';
shop.textContent = 'Shop';

blog.style.color = 'green';
shop.style.color = 'green';

navContainer.appendChild(blog);
navContainer.appendChild(shop);

navItems.forEach(item => item.style.color = 'green');

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//    Images
const ctaImg = document.querySelector('#cta-img');
ctaImg.alt = 'Image of a code snippet.';
ctaImg.src = 'img/header-img.png';

const middleImg = document.querySelector('#middle-img');
middleImg.alt = 'Image of code snippets across the screen';
middleImg.src = 'img/mid-page-accent.jpg';

//    CTA
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

//    Content
const contentHead = document.querySelectorAll('.text-content h4');
const contentHeadData = Object.keys(siteContent["main-content"]).filter(item => item.includes('h4'));

const contentText = document.querySelectorAll('.text-content p');
const contentTextData = Object.keys(siteContent["main-content"]).filter(item => item.includes('content'));

for(let i = 0; i < contentHead.length; i++) {
  contentHead[i].textContent = siteContent["main-content"][contentHeadData[i]];
  contentText[i].textContent = siteContent["main-content"][contentTextData[i]];
}

//    Contact
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactContent = document.querySelectorAll('.contact p');
const contactContentData = Object.values(siteContent.contact).filter(item => !item.includes('Contact'));

for(let i = 0; i < contactContentData.length; i++) {
  contactContent[i].textContent = contactContentData[i]; 
}

//    Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;
