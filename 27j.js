a=["тиква",30]




$(document).ready(function(){
    $("#click").click(function(){
        localStorage.setItem('MYcat',a.push('Гарбуз'));
        localStorage.setItem('MYcat',a.push("30грн"));
        
        console.log(a);
    });
    });





$(document).ready(function(){
    $("#click1").click(function(){
        localStorage.setItem('MYcat',a.push('пс5'));
        localStorage.setItem('MYcat',a.push("30000грн"));
        
        console.log(a);
    });
    });

$(document).ready(function(){
    $("#click2").click(function(){
        localStorage.setItem('MYcat',a.push('помідор'));
        localStorage.setItem('MYcat',a.push("3грн"));
        
        console.log(a);
    });
    });





function fun(){
    const aa = localStorage.getItem("MYcat");
    console.log(aa)
    for (i=0;i<aa.length;i++){
        console.log(aa[i])
        
        
        const para = document.createElement("p");
        para.innerText = aa[i]+'     '+aa[i+1];
        document.body.appendChild(para);
        i++
    };
};
