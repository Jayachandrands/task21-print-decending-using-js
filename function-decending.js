let a = 35;
let b = 40;
let c = 30;
function decending(x,y,z){
if(x>y && x>z){
    if(y>z){
        console.log(x,y,z);
    }else{
        console.log(x,z,y);
    }
}if(y>z && y>x){
    if(x>z){
        console.log(y,x,z);
    }else{
        console.log(y,z,x);
    }
}if(z>x && z>y){
    if(x>y){
        console.log(z,x,y);
    }else{
        console.log(z,y,x);
    }
}
}
let result = decending(a,b,c);