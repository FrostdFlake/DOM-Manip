// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},];
//ALAB
const mainEl = document.querySelector("main");
mainEl.style.setProperty("background-color", "var(--main-bg)");
const headOne = document.createElement("h1");
headOne.textContent = "DOM Manipulation";
mainEl.appendChild(headOne);
mainEl.classList.add("flex-ctr");
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.setProperty("background-color", "var(--top-menu-bg)");
topMenuEl.classList.add("flex-around");

for (let i in menuLinks){
    const arr = document.createElement("a");
    arr.textContent = menuLinks[i].text;
    topMenuEl.appendChild(arr);};

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor="var(--sub-menu-bg)";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
subMenuEl.classList.add("flex-around");

//R-ALAB
console.log(topMenuLinks)
const topMenuLinks = topMenuEl.querySelectorAll("a");
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach((link) => {
    const submenuLink = document.createElement("a");
    submenuLink.href = link.href;
    submenuLink.textContent = link.text;
    subMenuEl.appendChild(submenuLink);
  });}
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName === "A") {
    const clickedLink = event.target;
    const clickedLinkText = clickedLink.textContent;
    if (clickedLink.classList.contains("active")) {
      clickedLink.classList.remove("active");
      subMenuEl.style.top = "0";
    } else {
      topMenuLinks.forEach((link) => {
        if (link !== clickedLink) {
          link.classList.remove("active");
        }
      });
      clickedLink.classList.add("active");
      const clickedLinkObject = menuLinks.find((link) => link.text === clickedLinkText);
      if (clickedLinkObject && clickedLinkObject.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubmenu(clickedLinkObject.subLinks);
      } else {
        subMenuEl.style.top = "0";
      }}}});
      //Part 5 defeated me.