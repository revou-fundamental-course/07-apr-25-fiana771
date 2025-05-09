

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    if (name == "" ||  birthDate == "" || gender == "" || messages =="") {
        alert("Please enter your name");
        return false;
    }
    
    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName('banner-img');

    // Check if indexBanner is greater than the length of the bannerList
    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    // Hide banner with looping
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = 'display: none';
    }

    // Show the banner
    bannerList[indexBanner].style = 'display: block';
}

showBanner();

// Set interval to change the banner every 3 seconds
setInterval(() => {
    nextBanner();
}, 3000);
// Function to toggle the menu

