(function(){

    // Device Check
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    console.log("Checking device being used to access this web-page...")

    if (isMobile) {
      window.location.replace("https://pittimes.com/mobile-error")
    };

    // Language Detection
    var language = window.navigator.userLanguage || window.navigator.language;
    console.log(language)

    var list = ["en-US","es-ES","it-IT"]

    if(language == list) {
      if(language == "en-US") {
        return;
      }

      if(language == "es-ES") {
        window.location.replace("https://PitTimes.com/es-es");
      }

      if(language == "it-IT") {
        window.location.replace("https://PitTimes.com/it-it");
      }
    }

    if(!language == list) {
      return;
    }

    // Server Status
    code = 500

    if(code == "500"){

      return;

    }

     if(code == "501"){
        // IP Confirmation
        fetch('https://api.ipify.org?format=json')
            .then(results => results.json())
            .then(data => console.log(data.ip))
        window.location.replace("https://pittimes.com/maintenance")
    }

})()
