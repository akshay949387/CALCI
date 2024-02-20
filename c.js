let b=document.querySelector('button')
let number=document.querySelector('.num')
let btn1=document.querySelector('.btn1')
let btn2=document.querySelector('.btn2')
let btn3=document.querySelector('.btn3')
let btn4=document.querySelector('.btn4')
let btn5=document.querySelector('.btn5')
let btn6=document.querySelector('.btn6')
let btn7=document.querySelector('.btn7')
let btn8=document.querySelector('.btn8')
let btn9=document.querySelector('.btn9')
let btn0=document.querySelector('.btn0')
let btn00=document.querySelector('.btn00')
let add=document.querySelector('.op1')
let subtract=document.querySelector('.op2')
let multiply=document.querySelector('.op3')
let divide=document.querySelector('.op4')
let clear=document.querySelector('.op5')
let ans=document.querySelector('.op6')
let backspace=document.querySelector('.bs')

let h=document.querySelector('.numb')
let s=""
let data=0
let a=[0]

clear.addEventListener('click',()=>{
    s=''
    h.textContent='0'
    a=[]
})
backspace.addEventListener('click',()=>{
    k=''
    for(i=0;i<s.length-1;i++)
    {
        k=k+s[i]
    }
    s=k
    h.textContent=s
    a[0]=a[0]-a[0]%10
    a[0]=a[0]/10
    console.log(a,s)
    if(s.length==0)
    {
        h.textContent='0'
    }

})


ans.addEventListener('click',()=>{
    if(s.length==2)
    {
        
    }
    i=a.length-1
    n=s.length
    if(s[n-1]=='-')
    {
        m=a.length
        a[m-1]=a[m]*-1
        s.pop()
    }
    while (i>-1)
    {
        if(a[i]=='*')
        {
            k=a[i+1]*a[i-1]
            a.splice(i-1,3,k)
        }
        else if(a[i]=='/')
        {
            k=a[i+1]/a[i-1]
            a.splice(i-1,3,k)
        }
        i=i-1
        n=a.length
        console.log(a)
    }
    i=a.length-1
    while (i>-1)
    {
        
        if(a[i]=='-')
        {
            k=a[i+1]-a[i-1]
            a.splice(i-1,3,k)
        }
        i=i-1
        n=a.length
        console.log(a)
    }
    i=a.length-1
    while (i>-1)
    {
        
        if(a[i]=='+')
        {
            k=a[i+1]+a[i-1]
            a.splice(i-1,3,k)
        }
        i=i-1
        n=a.length
        console.log(a)
    }
    if(a[0]==NaN)
    {
        h.textContent='0'
        s=''
        a[0]=0
    }
    else
    {
        h.textContent=a[0]
        s=a[0]
    }

    
})
add.addEventListener('click',()=>{
    if(s.length!=0){
        l=s.length
        if(s[l-1]=='+' ||s[l-1]=='-' ||s[l-1]=='/' ||s[l-1]=='*' ){}
        else{
    s=s+'+'
    h.textContent=s
    a.unshift(0,'+')
    console.log(a)
    }}
})
subtract.addEventListener('click',()=>{
    if(s.length!=0){
    l=s.length
        if(s[l-1]=='+' ||s[l-1]=='-' ||s[l-1]=='/' ||s[l-1]=='*' ){}
        else{
    s=s+'-'
    h.textContent=s;
    a.unshift(0,'-')
    console.log(a)
        }}
    else{
    s=s+'-'
    h.textContent=s;
    a.unshift(0,'-')
    console.log(a)
    }
})
multiply.addEventListener('click',()=>{
    if(s.length!=0){
        l=s.length
        if(s[l-1]=='+' ||s[l-1]=='-' ||s[l-1]=='/' ||s[l-1]=='*' ){}
        else{
    s=s+'*'
    h.textContent=s
    a.unshift(0,'*')
    console.log(a)
    }}
})
divide.addEventListener('click',()=>{
    if(s.length!=0){
        l=s.length
        if(s[l-1]=='+' ||s[l-1]=='-' ||s[l-1]=='/' ||s[l-1]=='*' ){}
        else{
    s=s+'/'
    h.textContent=s
    a.unshift(0,'/');
    console.log(a)
    }}
})

btn1.addEventListener("click",()=>{
    s=s+'1'
    h.textContent=s
    a[0]=a[0]*10+1
})
btn2.addEventListener("click",()=>{
    s=s+'2'
    h.textContent=s
    a[0]=a[0]*10+2
})
btn3.addEventListener("click",()=>{
    s=s+'3'
    h.textContent=s
    a[0]=a[0]*10+3
})
btn4.addEventListener("click",()=>{
    s=s+'4'
    h.textContent=s
    a[0]=a[0]*10+4
})
btn5.addEventListener("click",()=>{
    s=s+'5'
    h.textContent=s
    a[0]=a[0]*10+5
})
btn6.addEventListener("click",()=>{
    s=s+'6'
    h.textContent=s
    a[0]=a[0]*10+6
})
btn7.addEventListener("click",()=>{
    s=s+'7'
    h.textContent=s
    a[0]=a[0]*10+7
})
btn8.addEventListener("click",()=>{
    s=s+'8'
    h.textContent=s
    a[0]=a[0]*10+8
})
btn9.addEventListener("click",()=>{
    s=s+'9'
    h.textContent=s
    a[0]=a[0]*10+9
    console.log(a)
})
btn0.addEventListener("click",()=>{
    if(s.length!=0){
    s=s+'0'
    h.textContent=s
    a[0]=a[0]*10+0
    console.log(a)
    }
})
btn00.addEventListener("click",()=>{
    if (s.length!=0){
    s=s+'00'
    h.textContent=s
    a[0]=a[0]*100+0
    console.log(a)
    }
})





























// let parentdiv=document.querySelector(".num")
// let para=document.createElement('p')
// number.appendChild(para)
// para.textContent="hi iam akshay"
// for(let i=0;i<10;i++)
// {
//     let h=document.querySelector('h4')
//     let bu=document.querySelector('button')
//     bu.textContent=i
//     console.log(i)
//     number.appendChild(bu)
//     h.textContent=i
//     number.appendChild(h)
//     // let bu=document.createElement('button')
//     // bu.textContent=i
//     // number.appendChild(bu)
// }