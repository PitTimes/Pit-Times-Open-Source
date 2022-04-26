

(function() {

    //Race ID(s)

    var Miami = "34983"

    var ID = Miami

    //Live Standings Status

    var live = 402

    if (live == "400") {
        return;
    }

    if (live == "401") {
        window.location.replace(`https://pittimes.netlify.app/live=${ID}=online`);
    }

    if (live == "402") {
        window.location.replace(`https://pittimes.netlify.app/live=${ID}=offline`);
    }

    //Live Refresh
    setTimeout(function () { 
        location.reload();
    }, 60 * 1000);

    
})()