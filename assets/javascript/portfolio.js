
 function showPreview(num){
    document.querySelector('#exampleModal').setAttribute("data-toggle", "modal")
    document.querySelector('#exampleModal').setAttribute("data-target","#exampleModal")
    document.querySelector('#exampleModal').setAttribute("style","display: block")
    document.querySelector('#exampleModal').classList.add("show")
    document.body.classList.add("modal-open")
    var appPrev = document.createElement("img");    
    var modal = document.createElement("div");
    modal.classList.add("previewHolder");
    
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
    document.getElementById("exampleModalLabel").innerHTML = appTitles[num];
    document.querySelector('.modal-body').appendChild(modal);
    appPrev.setAttribute("src", imgSrc[num]);
    appPrev.setAttribute("id", "appPreview")
    modal.appendChild(appPrev);
}
var appTitles = ["Pokemon RPG", "Tunedea","Multiplayer RPS", "Gif Finder", "NFL Trivia"];
var imgSrc = ["assets/images/pokemonpreview.png"]
document.getElementById("portfolioButt").addEventListener("click", function(){
    var switchScreen = document.getElementById("switchScreen");
    while (switchScreen.firstChild) {
        switchScreen.removeChild(switchScreen.firstChild);
    }
    var apps = ["Tunedea","Rock Paper Scisscors","Pokemon","Giphy","Trivia"]
    for(i=0;i<apps.length;i++){
    var appIcon = document.createElement("div");
    // var currentScreen = document.getElementById("switchScreen")
    switchScreen.appendChild(appIcon);
    appIcon.className +="app";
    appIcon.className +=" app" + i;
    var appPic= document.createElement("img");
    appPic.className +="appPic";
    appPic.setAttribute("id","appPic" + i);
    appIcon.appendChild(appPic);
}
document.getElementById("appPic0").setAttribute("src", "assets/images/pokeomonicon.jpg");
document.getElementById("appPic1").setAttribute("src","assets/images/tunedeaicon.png");
document.getElementById("appPic2").setAttribute("src","assets/images/rpsicon.png");
document.getElementById("appPic3").setAttribute("src","assets/images/giphyicon.png");
document.getElementById("appPic4").setAttribute("src","assets/images/nflicon.png");



document.querySelector('#homeButt').addEventListener('click', function () {
    var switchScreen = document.getElementById("switchScreen");
    while (switchScreen.firstChild) {
        switchScreen.removeChild(switchScreen.firstChild);
    }
    var brandStatement = document.createElement("p");
    brandStatement.innerHTML = 'User-focused full stack web-developer that specializes in Javascript. Spent the last 5 years honing my technical skills to become a confident programmer, completing my Associates Degree in Computer Programming as well as earning my certificate at DU’s intensive web-development bootcamp program. I keep my head down and don’t stop until the job is done and task is complete. I have 10 years experience in customer service so I am driven to provide an ideal User Experience in my products. I have advanced experience with web development languages including but not limited to HTML, CSS, Javascript, React & MySQL. Being a quick learner made it possible for me to grasp the context of programming language and move on to apply it. My optimistic spirit drives the whole team to excel and perform without hesitation, I strive to succeed with no alternative.';
    switchScreen.appendChild(brandStatement);
})
document.querySelector('.app0').addEventListener('click', function () {
        console.log("clicked");
       showPreview(0);
})
document.querySelector('.app1').addEventListener('click', function () {
        console.log("clicked");
       showPreview(1);
})
document.querySelector('.app2').addEventListener('click', function () {
        console.log("clicked");
       showPreview(2);
})
document.querySelector('.app3').addEventListener('click', function () {
        console.log("clicked");
       showPreview(3);
})
document.querySelector('.app4').addEventListener('click', function () {
        console.log("clicked");
       showPreview(4);
})
})
document.querySelector('#contactButt').addEventListener('click', function () {
    var switchScreen = document.getElementById("switchScreen");
    while (switchScreen.firstChild) {
        switchScreen.removeChild(switchScreen.firstChild);
    }
    var headingContainer = document.createElement("p");
    headingContainer.classList.add("contact-head");
    var heading = document.createElement("h1").innerHTML = "Contact";
    headingContainer.append(heading);
    switchScreen.append(headingContainer);
    
    var FormContainer = document.createElement("form");
    FormContainer.classList.add("FormBox")
    var nameFormContainer = document.createElement("div");
    nameFormContainer.classList.add("form-group");
    var nameFormLabel = document.createElement("label");
    nameFormLabel.setAttribute("for", "name-form");
    nameFormLabel.classList.add("name-label")
    nameFormLabel.innerHTML = "Full Name";
    nameFormContainer.append(nameFormLabel);
    var nameFormInput = document.createElement("input");
    nameFormInput.setAttribute("type", "name");
    nameFormInput.setAttribute("id", "name-form");
    nameFormInput.setAttribute("placeholder", "Your Name");
    nameFormContainer.append(nameFormInput);
    FormContainer.append(nameFormContainer);

    var emailFormContainer = document.createElement("div");
    emailFormContainer.classList.add("form-group");
    var emailFormLabel = document.createElement("label");
    emailFormLabel.classList.add("email-label")
    emailFormLabel.setAttribute("for", "email-form");
    emailFormLabel.innerHTML = "Email Address";
    emailFormContainer.append(emailFormLabel);
    var emailFormInput = document.createElement("input");
    emailFormInput.setAttribute("type", "email");
    emailFormInput.setAttribute("id", "email-form");
    emailFormInput.setAttribute("placeholder", "Your@Email.com");
    emailFormContainer.append(emailFormInput);
    FormContainer.append(emailFormContainer);

    var messageContainer = document.createElement("div");
    messageContainer.classList.add("form-group");
    var messageFormLabel = document.createElement("label");
    messageFormLabel.classList.add("message-label")
    messageFormLabel.setAttribute("for", "textarea1");
    messageFormLabel.classList.add("email-l")
    messageFormLabel.innerHTML = "Message";
    messageContainer.append(messageFormLabel);
    var messageFormInput = document.createElement("textarea");
    messageFormInput.setAttribute("rows", "3");
    messageFormInput.setAttribute("id", "textarea1");
    messageFormInput.setAttribute("placeholder", "Your@Email.com");
    messageContainer.append(messageFormInput);

    FormContainer.append(messageContainer);

    switchScreen.append(FormContainer);
})