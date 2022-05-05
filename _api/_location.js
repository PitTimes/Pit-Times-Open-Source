(function(){

    code = 500
    
    if(code == "500"){
        fetch('https://api.ipify.org?format=json')
            .then(results => results.json())
            .then(data => console.log(data.ip))
        return
    }
    
     if(code == "501"){
        window.location.replace("https://pittimes.netlify.app/maintenance")
        fetch('https://api.ipify.org?format=json')
            .then(results => results.json())
            .then(data => console.log(data.ip))
    }
    
})()