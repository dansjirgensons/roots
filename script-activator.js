includeHTML();

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});


$('head').append('<!-- Primary Meta Tags --> <title>ROOTS — KABK GD Y3B 2022</title> <meta name="title" content="ROOTS — KABK GD Y3B 2022"> <meta name="description" content="ROOTS is a block-long project with third-year graphic design students from the Royal Academy of Art, The Hague. © 2022"> <!-- Open Graph / Facebook --> <meta property="og:type" content="website"> <meta property="og:url" content="http://roots.kabk.nl/"> <meta property="og:title" content="ROOTS — KABK GD Y3B 2022"> <meta property="og:description" content="ROOTS is a block-long project with third-year graphic design students from the Royal Academy of Art, The Hague. © 2022"> <meta property="og:image" content="/assets/roots-preview.png"> <!-- Twitter --> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url" content="http://roots.kabk.nl/"> <meta property="twitter:title" content="ROOTS — KABK GD Y3B 2022"> <meta property="twitter:description" content="ROOTS is a block-long project with third-year graphic design students from the Royal Academy of Art, The Hague. © 2022"> <meta property="twitter:image" content="/assets/roots-preview.png">');