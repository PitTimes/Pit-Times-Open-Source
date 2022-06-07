// Replace Function
var replace = (arr, oldVal, newVal) => (arr[arr.indexOf(oldVal)] = newVal, arr)

//Team Colors
var FerrariC = '#F91536'
var RedBullC = '#3671C6'
var MercedesC = '#6CD3BF'
var McLarenC = '#F58020'
var RomeoC = '#C92D4B'
var AlpineC = '#2293D1'
var HaasC = '#B6BABD'
var AlphatauriC = '#00293F'
var AstonC = '#156E48'
var WilliamsC = '#0093C9'

// Record Wins
var WP1 = ['Lewis','Hamilton',MercedesC,'McLaren/Mercedes',103,"0"]
var WP2 = ['Micheal','Schumacher',MercedesC,'McLaren/Mercedes',91,"GapEX"]
var WP3 = ['Sebastian','Vettel',AstonC,'Red Bull Racing/Ferrari/Aston Martin',53,"GapEX"]

// Consecutive Wins
var CWP1 = ['Sebastian','Vettel',RedBullC,'Red Bull Racing',9,"0"]
var CWP2 = ['Alberto','Ascari',FerrariC,'Ferrari',7,"GapEX"]
var CWP3 = ['Micheal','Schumacher',FerrariC,'Ferrari',7,"GapEX"]

// Record Wins Gap Calc
var Gap = WP1[4] - WP2[4]
var RepGap = replace(WP2, "GapEX", Gap)
// Record Wins Gap Calc
var Gap = WP2[4] - WP3[4]
var RepGap = replace(WP3, "GapEX", Gap)

// Consecutive Wins Gap Calc
var Gap = CWP1[4] - CWP2[4]
var RepGap = replace(CWP2, "GapEX", Gap)
// Consecutive Wins Gap Calc
var Gap = CWP2[4] - CWP3[4]
var RepGap = replace(CWP3, "GapEX", Gap)

// Win Record
var PWP1 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${WP1[2]}; color: ${WP1[2]}; border-radius: 2px;">|</span> <span class="name">${WP1[0]} <strong>${WP1[1]}</strong></span> <span class="d-team">${WP1[3]}</span> <span class="points" style="width: 65px;">${WP1[4]} Wins</span> <span class="gap" style="width: 95px;">GAP: ${WP1[5]} Wins</span> </a> </div>`
var PWP2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">2nd</span> <span class="team-border" style="background: ${WP2[2]}; color: ${WP2[2]}; border-radius: 2px;">|</span> <span class="name">${WP2[0]} <strong>${WP2[1]}</strong></span> <span class="d-team">${WP2[3]}</span> <span class="points" style="width: 65px;">${WP2[4]} Wins</span> <span class="gap" style="width: 95px;">GAP: ${WP2[5]} Wins</span> </a> </div>`
var PWP3 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">3rd</span> <span class="team-border" style="background: ${WP3[2]}; color: ${WP3[2]}; border-radius: 2px;">|</span> <span class="name">${WP3[0]} <strong>${WP3[1]}</strong></span> <span class="d-team">${WP3[3]}</span> <span class="points" style="width: 65px;">${WP3[4]} Wins</span> <span class="gap" style="width: 95px;">GAP: ${WP3[5]} Wins</span> </a> </div>`

// Consecutive Wins
var CPWP1 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">1st</span> <span class="team-border" style="background: ${CWP1[2]}; color: ${CWP1[2]}; border-radius: 2px;">|</span> <span class="name">${CWP1[0]} <strong>${CWP1[1]}</strong></span> <span class="d-team">${CWP1[3]}</span> <span class="points" style="width: 65px;">${CWP1[4]} Wins</span> <span class="gap" style="width: 95px;">GAP: ${CWP1[5]} Wins</span> </a> </div>`
var CPWP2 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">2nd</span> <span class="team-border" style="background: ${CWP2[2]}; color: ${CWP2[2]}; border-radius: 2px;">|</span> <span class="name">${CWP2[0]} <strong>${CWP2[1]}</strong></span> <span class="d-team">${CWP2[3]}</span> <span class="points" style="width: 65px;">${CWP2[4]} Wins</span> <span class="gap" style="width: 95px;">GAP: ${CWP2[5]} Wins</span> </a> </div>`
var CPWP3 = `<div class="col-md-50 d-flex align-items-stretch"> <a class="icon-box1"> <span class="rank">3rd</span> <span class="team-border" style="background: ${CWP3[2]}; color: ${CWP3[2]}; border-radius: 2px;">|</span> <span class="name">${CWP3[0]} <strong>${CWP3[1]}</strong></span> <span class="d-team">${CWP3[3]}</span> <span class="points" style="width: 65px;">${CWP3[4]} Wins</span> <span class="gap" style="width: 95px;">GAP: ${CWP3[5]} Wins</span> </a> </div>`

var content = `<div class="title2"> <h1>All-Time Wins Leaderboard<t>.</t><br></h1> <h2>Up-to-date Formula 1 Standings for All-Time Wins</h2> <P1> ${PWP1} </P1> <P2> ${PWP2} </P2> <P3> ${PWP3} </P3></div><div class="title2"> <h1>Consecutive Wins Leaderboard<t>.</t><br></h1> <h2>Up-to-date Formula 1 Standings for Most Consecutive Wins</h2> <P1> ${CPWP1} </P1> <P2> ${CPWP2} </P2> <P3> ${CPWP3} </P3></div>`
document.getElementsByTagName("Choice")[0].innerHTML = content
