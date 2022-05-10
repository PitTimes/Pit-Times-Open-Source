const Title = "2022 Round 1-3 Formula 1 Race Highlights"
const StreamTitle = `<div class="tilt"> ${Title} </div>`
const EventTitleLive = `<div class="col-md-25 col-lg-50 d-flex align-items-stretch mb-5 mb-lg-3"> <div class="icon-box35" data-aos="fade-up" data-aos-delay="100"> <h4 class="box1"><a>Live Race Highlights</a></h4> <h4 class="title"><a href="https://pittimes.com/live">${Title}</a></h4> </div> </div>`
const EventTitleOffline = `<div class="col-md-25 col-lg-50 d-flex align-items-stretch mb-5 mb-lg-3"> <div class="icon-box4" data-aos="fade-up" data-aos-delay="100"> <h4 class="title"><a>No Live Events Right Now</a></h4> </div> </div>`

document.getElementsByTagName('StreamTitle')[0].innerHTML = StreamTitle;

const Status = 1

if(Status = 0) {
    document.getElementsByTagName('EventTitle')[0].innerHTML = EventTitleOffline;
}

if(Status = 1) {
    document.getElementsByTagName('EventTitle')[0].innerHTML = EventTitleLive;
}
