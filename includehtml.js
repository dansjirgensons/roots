function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

$('head').append('<!-- Primary Meta Tags --> <title>ROOTS — KABK GD Y3B 2022</title> <meta name="title" content="ROOTS — KABK GD Y3B 2022"> <meta name="description" content="ROOTS is a block-long project with third-year graphic design students from the Royal Academy of Art, The Hague. © 2022"> <!-- Open Graph / Facebook --> <meta property="og:type" content="website"> <meta property="og:url" content="http://roots.kabk.nl/"> <meta property="og:title" content="ROOTS — KABK GD Y3B 2022"> <meta property="og:description" content="ROOTS is a block-long project with third-year graphic design students from the Royal Academy of Art, The Hague. © 2022"> <meta property="og:image" content="/assets/roots-preview.png"> <!-- Twitter --> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url" content="http://roots.kabk.nl/"> <meta property="twitter:title" content="ROOTS — KABK GD Y3B 2022"> <meta property="twitter:description" content="ROOTS is a block-long project with third-year graphic design students from the Royal Academy of Art, The Hague. © 2022"> <meta property="twitter:image" content="/assets/roots-preview.png">');