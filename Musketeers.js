const musketeers =['Athos', 'Porthos', 'Aramis'];

for(i=0; i<musketeers.length; i++){
    console.log(musketeers[i]);
}
console.log();

musketeers.push("D'Artagnan");
musketeers.forEach(character =>{
    console.log(`${character}`)
});
console.log();

musketeers.splice(2,1);

let e;
for(e of musketeers){
    console.log(e);
}
console.log();
