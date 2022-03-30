let toEmoticon = meaning => {

    if (meaning === 'shrug'){
    return '|{"}|';}
    else if (meaning === 'smiley face'){
    return ':)';}
    else if (meaning === 'frowny face'){
    return ':(';}
    else if (meaning === 'winky face'){
    return ';)';}
    else if (meaning === 'heart'){
    return '<3';}
    else {
    return '|(* ~ *)|';
    }
    }
    
    console.log(toEmoticon(“shrug”))
    
    console.log(toEmoticon(“smiley face”))
    
    console.log(toEmoticon(“frowny face”))
    
    console.log(toEmoticon(“winky face”))
    
    console.log(toEmoticon(“heart”))