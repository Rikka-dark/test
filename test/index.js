var opt = {
    name:"Amy",
    name2: this.name,
    name3: this,
    say:function(){
        return this.name;
    },
    say2:function(){
        setTimeout(function(){
            console.log(this);
        })
    },
    say3:function(){
        setTimeout(() => {
            console.log(this.name);
        })
    }
}

console.log(opt.name2); // undefined //1. 这里打印出什么？
console.log(opt.say()); //Amy //2. 这里打印出什么？
opt.say2(); //3. 这里打印出什么？
opt.say3(); //4. 这里打印出什么？