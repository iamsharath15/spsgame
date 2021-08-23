function hc(yourChoice){
    console.log(yourChoice);
    var human, bot;
    human= yourChoice.id;
    bot =numberTo(botRandom());
    console.log('computerChoice', bot);
    results = decide(human,bot);
    console.log(results);
    message =final(results);
    console.log(message);
    sps(yourChoice.id,bot,message);
}
function botRandom(){
    return Math.floor(Math.random()*3);
}
function numberTo(number){
    return['stone','paper','scissors'][number];
}
function decide(yourChoice,computerChoice){
    var data ={
        'stone':{'scissors':1,'stone':0.5,'paper':0},
        'paper':{'stone':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'stone':0}
    };
    var yourScore= data[yourChoice][computerChoice];
    var computerScore= data[computerChoice][yourChoice];
     return [yourScore,computerScore];
}
function final([yourScore,computerScore]){
    if(yourScore===0){
        return {'message': 'you lost!', 'color':'red'};
    }else if (yourScore===0.5){
        return {'message': 'you tied!', 'color':'yellow'};
    }else{
        return{'message':'you won!','color':'green'}
    }
}
function sps(humanimg,botimg,fmsg){
    var imgData ={
        'stone':document.getElementById('stone').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    humanDiv.innerHTML="<img src='"+ imgData[humanimg]+"'height=150 width=150  style='box-shadow:0px 10px 50px blue' display='flex'>"
    msgDiv.innerHTML="<h1 style='color:"+fmsg['color']+";font-size=60px; padding=30px'>" +fmsg['message'] +"</h1>"
    botDiv.innerHTML="<img src='"+ imgData[botimg]+"'height=150 width=150  style='box-shadow:0px 10px 50px red' display='flex'>"
   
    document.getElementById('sps').appendChild(humanDiv);
    document.getElementById('sps').appendChild(msgDiv);
    document.getElementById('sps').appendChild(botDiv);
}


