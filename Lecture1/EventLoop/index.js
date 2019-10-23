setImmediate(()=>console.log('setImmediate()')); //in next iteration
setTimeout(function(){
    console.log('setTimeout()');
},0)
setTimeout (()=>console.log('setTimeout()'),0); //in next iteration, like setImmediate()
/*
1)setTimeout()
2)setImmediate()
*/

setInterval (()=>console.log('setInterval()'),1000); //in next iteration, like setTimeout(*,1000)

process.nextTick(()=>console.log('process.nextTick() call'));

console.log('hi!');
