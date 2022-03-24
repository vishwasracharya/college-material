const siteFullURL = window.location.href;
function btnActive() {
    if (siteFullURL.includes("/about")) {
        document.getElementsByClassName("tab")[1].classList.add("tab-active");
    } else {
        document.getElementsByClassName("tab")[0].classList.add("tab-active");
    }
}
btnActive();