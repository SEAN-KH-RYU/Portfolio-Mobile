function init() {
    console.log("mobile java script start")
}
/* Instantiate the popup on DOMReady, and enhance its contents */
$(function popup() {
    console.log("popup-outside-page script start")
    $("#popup-outside-page").enhanceWithin().popup();
});