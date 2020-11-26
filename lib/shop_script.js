"use strict";

// Show/Hide Shop images
var toggleShopDrankImg = function toggleShopDrankImg() {
  var shop_drank_img = document.getElementById("shop_drank_img");
  if (shop_drank_img.style.display === "block") {
    shop_drank_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "block";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_drank";
  }
};
var toggleShopConfisImg = function toggleShopConfisImg() {
  var shop_confisserie_img = document.getElementById("shop_confisserie_img");
  if (shop_confisserie_img.style.display === "block") {
    shop_confisserie_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "block";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_confis";
  }
};
var toggleShopTabakswarenImg = function toggleShopTabakswarenImg() {
  var shop_tabakswaren_img = document.getElementById("shop_tabakswaren_img");
  if (shop_tabakswaren_img.style.display === "block") {
    shop_tabakswaren_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "block";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_tabakswaren";
  }
};
var toggleShopToebehorenImg = function toggleShopToebehorenImg() {
  var shop_toebehoren_img = document.getElementById("shop_toebehoren_img");
  if (shop_toebehoren_img.style.display === "block") {
    shop_toebehoren_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "block";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_toebehoren";
  }
};
var toggleShopVoedingImg = function toggleShopVoedingImg() {
  var shop_voeding_img = document.getElementById("shop_voeding_img");
  if (shop_voeding_img.style.display === "block") {
    shop_voeding_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "block";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_voeding";
  }
};
var toggleShopVersImg = function toggleShopVersImg() {
  var shop_vers_img = document.getElementById("shop_vers_img");
  if (shop_vers_img.style.display === "block") {
    shop_vers_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_vers_img.style.display = "block";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_vers";
  }
};
var toggleShopAllerleiImg = function toggleShopAllerleiImg() {
  var shop_allerlei_img = document.getElementById("shop_allerlei_img");
  if (shop_allerlei_img.style.display === "block") {
    shop_allerlei_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "block";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#shop_allerlei";
  }
};
var toggleGarageHoutImg = function toggleGarageHoutImg() {
  var garage_hout_img = document.getElementById("garage_hout_img");
  if (garage_hout_img.style.display === "block") {
    garage_hout_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "block";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#garage_hout";
  }
};
var toggleGarageKolenImg = function toggleGarageKolenImg() {
  var garage_kolen_img = document.getElementById("garage_kolen_img");
  if (garage_kolen_img.style.display === "block") {
    garage_kolen_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "block";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#garage_kolen";
  }
};
var toggleGaragePelletsImg = function toggleGaragePelletsImg() {
  var garage_pellets_img = document.getElementById("garage_pellets_img");
  if (garage_pellets_img.style.display === "block") {
    garage_pellets_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "block";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#garage_pellets";
  }
};
var toggleGarageGasflessenImg = function toggleGarageGasflessenImg() {
  var garage_gasflessen_img = document.getElementById("garage_gasflessen_img");
  if (garage_gasflessen_img.style.display === "block") {
    garage_gasflessen_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "block";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#garage_gasflessen";
  }
};
var toggleGarageOnderhoudImg = function toggleGarageOnderhoudImg() {
  var garage_onderhoud_img = document.getElementById("garage_onderhoud_img");
  if (garage_onderhoud_img.style.display === "block") {
    garage_onderhoud_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "block";
    garage_olie_img.style.display = "none";

    window.location = "./shop.html#garage_onderhoud";
  }
};
var toggleGarageOlieImg = function toggleGarageOlieImg() {
  var garage_olie_img = document.getElementById("garage_olie_img");
  if (garage_olie_img.style.display === "block") {
    garage_olie_img.style.display = "none";
  } else {
    shop_drank_img.style.display = "none";
    shop_confisserie_img.style.display = "none";
    shop_tabakswaren_img.style.display = "none";
    shop_toebehoren_img.style.display = "none";
    shop_voeding_img.style.display = "none";
    shop_vers_img.style.display = "none";
    shop_allerlei_img.style.display = "none";
    garage_hout_img.style.display = "none";
    garage_kolen_img.style.display = "none";
    garage_pellets_img.style.display = "none";
    garage_gasflessen_img.style.display = "none";
    garage_onderhoud_img.style.display = "none";
    garage_olie_img.style.display = "block";

    window.location = "./shop.html#garage_olie";
  }
};

// Toggle random section to hide all others, toggle it again to hide itself
toggleShopDrankImg();
toggleShopDrankImg();