(function(){

    // Device Check
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    console.log("Checking device being used to access this web-page...")

    if (isMobile) {
      window.location.replace("https://pittimes.netlify.app/mobile-error")
    };

    // Server Status
    code = 500

    if(code == "500"){
        // IP Confirmation
        fetch('https://api.ipify.org?format=json')
            .then(results => results.json())
            .then(data => console.log(data.ip))
        return
    }

     if(code == "501"){
        // IP Confirmation
        fetch('https://api.ipify.org?format=json')
            .then(results => results.json())
            .then(data => console.log(data.ip))
        window.location.replace("https://pittimes.netlify.app/maintenance")
    }

})()
