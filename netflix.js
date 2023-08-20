let backgroundImageEl = document.getElementById("backgroundImage");
let signInBtnEl = document.getElementById("signInBtn");
let headingEl = document.getElementById("heading");
let paragraph1El = document.getElementById("paragraph1");
let paragraph2El = document.getElementById("paragraph2");
let dropDownEl = document.getElementById("dropDown");
let getStartedBtnEl = document.getElementById("getStartedBtn");
let bannerSectionEl = document.getElementById('bannerSection');

let whatIsNetFlixEl = document.getElementById("whatIsNetFlix");
let solutionContainerEl = document.getElementById("solutionContainer1");
let whatIsSolutionEl = document.getElementById("whatIsSolution");

let howMuchEl = document.getElementById("howMuch");
let solutionContainer2El = document.getElementById("solutionContainer2");
let howmuchsolEl = document.getElementById("howmuchsol");

let whereCanEl = document.getElementById("whereCan");
let solutionContainer3El = document.getElementById("solutionContainer3");
let whereCanSolEl = document.getElementById("whereCanSol");

let howDoEl = document.getElementById("howDo");
let solutionContainer4El = document.getElementById("solutionContainer4");
let howDoSolEl = document.getElementById("howDoSol");

let whatCanEl = document.getElementById("whatCan");
let solutionContainer5El = document.getElementById("solutionContainer5");
let whatCanSolEl = document.getElementById("whatCanSol");

let isNetflixEl = document.getElementById("isNetflix");
let solutionContainer6El = document.getElementById("solutionContainer6");
let isNetflixSolEl = document.getElementById("isNetflixSol");

let enjoyOnTvEl = document.getElementById("enjoyOnTv");
let watchOnSmartEl = document.getElementById("watchOnSmart");
let DownloadYourEl = document.getElementById("DownloadYour");
let saveYourFavEl = document.getElementById("saveYourFav");
let watchEveryWhereEl = document.getElementById("watchEveryWhere");
let stramUnlimitedEl = document.getElementById("stramUnlimited");
let createProfileEl = document.getElementById("createProfile");
let sendChildrenEl = document.getElementById("sendChildren");

let FrequentlyAskedEl = document.getElementById("FrequentlyAsked");
let whatIsEl = document.getElementById("whatIs");
let howMuchqstnEl = document.getElementById("howMuchqstn");
let whereCanqstnEl = document.getElementById("whereCanqstn");
let howDoqstnEl = document.getElementById("howDoqstn");
let whatCanqstnEl = document.getElementById("whatCanqstn");
let isNetflixqstnEl = document.getElementById("isNetflixqstn");

dropDownEl.addEventListener("change", function(event) {
    if (event.target.value === "Hindi") {
        signInBtnEl.textContent = "साइन इन करें"
        headingEl.textContent = " अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ   ";
        paragraph1El.textContent = " जहां चाहें देखें. जब चाहें कैंसल करें."
        paragraph2El.textContent = " देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रे स डालें.";
        getStartedBtnEl.textContent = "शुरू करो";
        enjoyOnTvEl.textContent = "अपने टीवी पर आनंद लें";
        watchOnSmartEl.textContent = "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";
        DownloadYourEl.textContent = "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें";
        saveYourFavEl.textContent = "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.";
        watchEveryWhereEl.textContent = "हर जगह देखें";
        stramUnlimitedEl.textContent = "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.";
        createProfileEl.textContent = "बच्चों के लिए प्रोफ़ाइल बनाएं";
        sendChildrenEl.textContent = "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.";
        FrequentlyAskedEl.textContent = "अक्सर पूछे जाने वाले सवाल";
        bannerSectionEl.classList.add("hindi-banner-section");

    } else {
        signInBtnEl.textContent = "Sign In";
        headingEl.textContent = "Unlimited movies, TV shows and more";
        paragraph1El.textContent = "Watch anywhere. Cancel anytime.";
        paragraph2El.textContent = "Ready to watch? Enter your email to create or restart your membership.";
        getStartedBtnEl.textContent = "Get Started";
        enjoyOnTvEl.textContent = "Enjoy on your TV";
        watchOnSmartEl.textContent = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.";
        DownloadYourEl.textContent = "Download your shows to watch offline";
        saveYourFavEl.textContent = "Save your favourites easily and always have something to watch.";
        watchEveryWhereEl.textContent = "Watch everywhere";
        stramUnlimitedEl.textContent = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.";
        createProfileEl.textContent = "Create profiles for kids";
        sendChildrenEl.textContent = "Send children on adventures with their favourite characters in a space made just for them—free with your membership.";
        FrequentlyAskedEl.textContent = "Frequently Asked Questions";

        bannerSectionEl.classList.remove("hindi-banner-section");
        bannerSectionEl.classList.add("banner-section");

    }

})

whatIsNetFlixEl.onclick = function() {
    solutionContainerEl.classList.add("qestion-padding");
    whatIsSolutionEl.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
}
howMuchEl.onclick = function() {
    solutionContainerEl.classList.remove("qestion-padding");
    whatIsSolutionEl.textContent = "";
    solutionContainer2El.classList.add("qestion-padding");
    howmuchsolEl.textContent = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts.";
}
whereCanEl.onclick = function() {
    solutionContainer2El.classList.remove("qestion-padding");
    howmuchsolEl.textContent = "";
    solutionContainer3El.classList.add("qestion-padding");
    whereCanSolEl.textContent = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";
}
howDoEl.onclick = function() {
    solutionContainer3El.classList.remove("qestion-padding");
    whereCanSolEl.textContent = "";
    solutionContainer4El.classList.add("qestion-padding");
    howDoSolEl.textContent = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
}
whatCanEl.onclick = function() {
    solutionContainer4El.classList.remove("qestion-padding");
    howDoSolEl.textContent = "";
    solutionContainer5El.classList.add("qestion-padding");
    whatCanSolEl.textContent = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
}
isNetflixEl.onclick = function() {
    solutionContainer5El.classList.remove("qestion-padding");
    whatCanSolEl.textContent = "";
    solutionContainer6El.classList.add("qestion-padding");
    isNetflixSolEl.textContent = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
}




let popupOverlayEl = document.getElementById("popupOverlay");
let closePopupEl = document.getElementById("closePopup");
let loginBtnEl = document.getElementById("loginBtn");
let usernameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");

signInBtnEl.addEventListener("click", function() {
    popupOverlayEl.style.display = "flex";
});

closePopupEl.addEventListener("click", function() {
    popupOverlayEl.style.display = "none";
});

loginBtnEl.addEventListener("click", function() {
    const username = usernameEl.value;
    const password = passwordEl.value;

    // Perform basic login validation
    if (username === "Vinod" && password === "Vinod@9966") {
        // Successful login
        alert("Login successful!");
        popupOverlayEl.style.display = "none";
        // You can also redirect to a dashboard or profile page here
    } else {
        // Failed login
        alert("Invalid username or password. Please try again.");
    }
});