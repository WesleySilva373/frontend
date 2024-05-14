const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll("accordion-Header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
/* fim função  mudar de tema  */

accordionHeaders.forEach(header => {
header.addEventListener("click", () => {
   const accordionItem = header.parenteElement;
   const accoddionActive = accordionItem.classList.contains("active");
       
   accoddionActive ? accordionItem.classList.remove("active") : 
   accordionItem.classList.add("active");
  })

 })
/* fim accodion */
menuLinks.forEach(item =>{
  item.addEventListener("click",() => {
 menuLinks.forEach(i => i.classList.remove("active"));
 item.classList.add("active");
  })

})
/* fim menu link */

