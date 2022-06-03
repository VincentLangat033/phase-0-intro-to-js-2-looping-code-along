// Code your solutions in this file
// returns an array of thank you messages for each name provided to the function
function writeCards(name){
    let message=[]
    for ( let i=0; i<name.length; i++ ){
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return message;
}
// invokes console.log once for each number, counting down from the number provided to zero
function countDown(name){
    
    while ( name> 0){
        console.log(name)
        name--;
    }
    // logs each number when counting down, starting from the number provided
    console.log(name)
}
