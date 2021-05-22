function showPreview(){
    var htmlCode = document.getElementById("html").value,
        cssCode = "<style>" + document.getElementById("css").value + "</style>",
        jsCode = "<script>" + document.getElementById("js").value + "</script>";

    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
}