var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
    //  sidemenu
var sidemenu = document.getElementById('sidemenu')
function openmenu(){
    sidemenu.style.right ="0"
}
function closemenu(){
    sidemenu.style.right ="-200px"
}
//    google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbykJEzMWUqYPzDJOS_IlHCwbJu6qZ6T0pu_j9HIYA_5w6wJA2AHdHF2y325p4fqxIp4LA/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
/* -->go to the google sheet.
   -->change the sheeet name.
   -->the column's we give a name.The name is same in the inside the tag name.
   -->next click on the "extensions" and inside the extensions click on the "App script".
   -->inside the app script change the title name.
   -->enter the github link.
      (save and run) execution start and completed.
   -->click the right side deploy button-->newdeployment-->who has access(everyone).
   -->then copy another script in the github.then that is paste in the script file.
   -->the deploy give one link.the link is paste in the script.
   (const scriptURL = 'https://script.google.com/macros/s/AKfycbykJEzMWUqYPzDJOS_IlHCwbJu6qZ6T0pu_j9HIYA_5w6wJA2AHdHF2y325p4fqxIp4LA/exec')
   -->the script have one name"submit-to-google-sheet".the name is same in the form name.
    (<form action="" name="submit-to-google-sheet">)
   */
