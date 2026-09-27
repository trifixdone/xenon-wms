// Xenon WMS — paste your Apps Script Web App URL between the quotes (it ends with /exec).
// Both kiosk.html and admin.html read it from here, so you only set it once.
window.XENON_API_URL = "https://script.google.com/macros/s/AKfycbxnamZ64e9cgr4UA1M8GHejgepCPw2c_jKQeycmCuoVKoiWkvcW1P-AZbR7d7Wfs06Q/exec";

// Ignore the placeholder until a real URL is pasted.
if (window.XENON_API_URL.indexOf("PASTE_") === 0) window.XENON_API_URL = "";
