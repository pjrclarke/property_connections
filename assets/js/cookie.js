document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies");

    acceptCookiesBtn.addEventListener("click", function() {
        localStorage.setItem("cookie_consent", "true");
        cookieBanner.style.display = "none";
    });

    if (localStorage.getItem("cookie_consent") === "true") {
        cookieBanner.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const analyticsCheckbox = document.getElementById("analytics-checkbox");
    const marketingCheckbox = document.getElementById("marketing-checkbox");
    const savePreferencesBtn = document.getElementById("save-preferences");

   
    const savedAnalyticsPreference = localStorage.getItem("analyticsPreference");
    const savedMarketingPreference = localStorage.getItem("marketingPreference");

    if (savedAnalyticsPreference === "false") {
        analyticsCheckbox.checked = false;
    }

    if (savedMarketingPreference === "false") {
        marketingCheckbox.checked = false;
    }

    savePreferencesBtn.addEventListener("click", function() {
     
        localStorage.setItem("analyticsPreference", analyticsCheckbox.checked);
        localStorage.setItem("marketingPreference", marketingCheckbox.checked);
        alert("Preferences saved!");
    });
});
   
document.addEventListener("DOMContentLoaded", function() {
   

    $('#open-preferences').click(function() {
        $('#preferencesModal').modal('show');
        $('#cookie-banner').addClass('d-none'); 
    });

    $('#accept-cookies').click(function() {
        
        document.cookie = "cookie_consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        $('#cookie-banner').addClass('d-none'); 
        $('#preferencesModal').modal('hide'); 
    });

 
    function savePreferences() {
        $('#preferencesModal').modal('hide');
    }

    $('#save-preferences').click(savePreferences);
});
