/*window.addEventListener("load", ()=>{
    let obj = document.body.appendChild(document.createElement("button"));
    obj.id = "123";
    obj.innerHTML = "Noob";
    obj.style.color="red";
    obj.onclick = ()=>{console.log('lol');}
})*/

var game = false;
let ctx;
let x = 10;
let y = 10;
let speed = 2;
let size = 10;
let keys = {};
let pellets = [];
for (let i = 0; i < 100; i++) {
    let pelletSize = Math.random() * 50;
    pellets.push([Math.random() * window.innerWidth, Math.random() * window.innerHeight,pelletSize,pelletSize,pelletSize]);
}
window.addEventListener("keydown",(e)=>{keys[e.key]=true;});
window.addEventListener("keyup",(e)=>{keys[e.key]=false;});

window.addEventListener('load', ()=> {
    let win = document.getElementById('win');
    ctx = win.getContext('2d');
    game = true;
    
    setInterval(function(){
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        for(let key in keys)if(keys[key]){
            if(key=="s"){
                y += speed;
            }
            if(key=="w"){
                y -= speed;
            }
            if (key == 'd') {
                x += speed;
            }
            if (key == 'a') {
                x -= speed;
            }
        }
        ctx.fillStyle = "orange";
        ctx.clearRect(0, 0, win.width, win.height);
        ctx.fillRect(x, y, size, size);

        ctx.fillStyle = "lime";
        for(let i=0;i<pellets.length;i++){
            if(pellets[i]) {
            ctx.fillRect(pellets[i][0], pellets[i][1], pellets[i][2], pellets[i][3]);

            if (x < pellets[i][0] + pellets[i][2] && x+size > pellets[i][0] && y < pellets[i][1] + pellets[i][3] && y+size > pellets[i][1]) {
                if (size > pellets[i][4]) {
                    size += pellets[i][4]/10;
                    delete pellets[i];
                }
                else if (pellets[i][4] /size > 1.5) {
                    document.location.reload();
                }
            }
            }
        }
        
    },10);

    /*setInterval(function() {
        let pelletSize = Math.random() * size;
        pellets.push([Math.random() * window.innerWidth, Math.random() * window.innerHeight,pelletSize,pelletSize,pelletSize]);
    },1000)*/
})
