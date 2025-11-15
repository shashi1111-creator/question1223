function $(id) {
    return document.getElementById(id);
}

function showLoader() {
    $("loader").style.display = "block";
}

function hideLoader() {
    $("loader").style.display = "none";
}

function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

