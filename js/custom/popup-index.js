let loginBtn = document.querySelector('#login'),
    signinBtn = document.querySelector('#signin'),
    body = document.body,
    header = document.querySelector('header');

loginBtn.addEventListener('click', e => {
    // container popup
    createContainerPopUp(body, header);
    // popup
    createPopUp(containerPopupElement);
    // form popup
    let form = document.createElement('form');
    form.className = "form form-connexion";
    form.innerHTML = '<input type="text" name="login">';
    form.innerHTML = '<input type="password" name="password">';
    loginPopup.appendChild(form);


    // containerPopup.addEventListener('click', e => {
    //     e.preventDefault();
    //     containerPopup.className = "popup animated fadeOut";
    //     setTimeout(function(){body.removeChild(containerPopup);}, 2000);
    // });
});

// signin.addEventListener('click', e => {
//     // container popup
//     createPopUp(body, header);
//     // popup
//
// });

function createContainerPopUp(parent, nextChild){
    let containerPopup = document.createElement('div');
    containerPopup.className = "popup-container animated fadeIn";
    containerPopup.id = "container-popup";
    parent.insertBefore(containerPopup, nextChild);
    var containerPopupElement = document.querySelector('#container-popup');
    return containerPopupElement;
}
function createPopUp(parent){
    var popup = document.createElement('div');
    popup.className = "popup-content animated fadeIn";
    popup.id = "popup";
    parent.appendChild(popup);
    var popupElement = document.querySelector('#popup');
}
