// Code your solutions in this file
function writeCards(name){
    let message=[]
    for ( let i=0; i<name.length; i++ ){
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return message;
}
function countDown(name){
    
    while ( name> 0){
        console.log(name)
        name--;
    }
    console.log(name)
}
