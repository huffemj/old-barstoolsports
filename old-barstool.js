// ==UserScript==
// @name       Old Barstoolsports
// @description   Makes barstool as close to the old version and better fixes
// @copyright     2015+ huffemj
// @author        huffemj
// @version       1.0
// @include    http://*.barstoolsports.com/*
// ==/UserScript==

// Header Color
// $("header, .bslocale").css({"background": "#e4e4e4"});

/**
* Remove the barstool locale text and BG
*/
$(".bslocale").remove();

/**
* Change the logo's and BG per site
*/
var url  = document.URL;
var $logoImg = $(".mainLogo");

if (url.indexOf("boston") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.iowa.barstoolsports.com/wp-content/themes/barstoolsports/img/logo-boston.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool.png)"});
} else if (url.indexOf("newyork") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.iowa.barstoolsports.com/wp-content/themes/barstoolsports/img/logo-nyc.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool.png)"});
} else if (url.indexOf("chicago") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.iowa.barstoolsports.com/wp-content/themes/barstoolsports/img/logo-chicago.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool_chicago.png)"});
} else if (url.indexOf("philadelphia") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.iowa.barstoolsports.com/wp-content/themes/barstoolsports/img/logo-philly.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool_philly.png)"});
} else if (url.indexOf("iowa") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.iowa.barstoolsports.com/wp-content/themes/barstoolsports/img/logo-iowa.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool_iowa.png)"});
} else if (url.indexOf("dmv") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.iowa.barstoolsports.com/wp-content/themes/barstoolsports/img/logo-dmv.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool_dmv.png)"});
} else if (url.indexOf("barstoolu") !== -1) {
  $logoImg.attr("src", "http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.barstoolu.barstoolsports.com/wp-content/themes/barstoolu/img/logo.png");
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool.png)"});
} else if (url.indexOf("tv.barstoolsports.com") !== -1) {
  console.log("do nothing");
} else {
  $("body").css({"background": "url(http://wac.9ebf.edgecastcdn.net/809EBF/ec-origin.boston.barstoolsports.com/wp-content/themes/barstoolsports/img/bg_stool.png)"});
}

/**
* Display the comments by default and remove show/hide button
*/
$("#mcomments").removeAttr("id");
$(".show_comments").remove();
$(".comments-area").show();
