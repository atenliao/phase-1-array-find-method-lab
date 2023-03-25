// code your solution here

const superbowlWin = ( arr) => {
     const getResult = arr.find((Input)=>{
         return Input.result === 'W'
    })
    if(getResult){
        return getResult.year;
    }else if(getResult === undefined){
        return undefined
    }
   
}