var tabContents = document.getElementsByClassName("tab-content");
var tabLinks = document.getElementsByClassName("tab-links");
function setTab(tabName) {

    for (var tabLink of tabLinks) {
        tabLink.classList.remove('active-link')
    }
    for (var tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    let requestedTab = document.getElementById(tabName).classList.add('active-tab')
    event.currentTarget.classList.add('active-link')
}