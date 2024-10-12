let tabLinks=document.querySelectorAll(".tab-links");
let tabContents=document.querySelectorAll(".table-contents");
let sideMenu= document.querySelector("#links");
const msg=document.getElementById("mess");

function opentab(tabname){
    for(let tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for( let tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  
}
function openmenu(){
    sideMenu.style.right="0";
}
function closemenu(){
    sideMenu.style.right="-150px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_BvbctbEWoqKH3SY_mpM6ne17qu_cn-LSnQmkqsr84FsO1jsYmrqB01qa-EfOlUBk/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message));
  });


