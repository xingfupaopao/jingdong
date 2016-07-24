window.onload=function(){
/*banner轮播图*/
 var as=getClass("weel1")[0].getElementsByTagName('a');

  console.log(as);
  var bt1s=getClass('bt1')[0].getElementsByTagName('li');
  //console.log(bt1s)
  var index=0;
  var t=setInterval(lunbo,3000)
  function lunbo(){
    index++;
    if(index>as.length-1){
       index=0;
    }
    for(var i=0;i<as.length;i++){
      animate(as[i],{opacity:0},400)
      bt1s[i].className=""
    }
    animate(as[index],{opacity:1},400);
    bt1s[index].className="hot1";
  }
  for(var i=0;i<bt1s.length;i++){
    bt1s[i].ss=i;
    bt1s[i].onmouseover=function(){
      for(var j=0;j<bt1s.length;j++){
         animate(as[j],{opacity:0},400);
          bt1s[j].className="";
      }
       animate(as[this.ss],{opacity:1},400);
          this.className="hot1";
          index=this.ss;
    }
  }
  var wbox=getClass("weel-box1")[0];
  wbox.onmouseover=function(){
    clearInterval(t)
  }
  wbox.onmouseout=function(){
    t=setInterval(lunbo,2000)
  }
  var leftbtn=getClass("btn1-left1")[0];
  var rightbtn=getClass("btn1-right1")[0];
  leftbtn.onclick=function(){
    index--;
      if(index==-1){
        index=as.length-1;
      }
      for(var i=0;i<as.length;i++){
        animate(as[i],{opacity:0});
        bt1s[i].className=""
      }
      animate(as[index],{opacity:1});
      bt1s[index].className="hot1"
  }
  rightbtn.onclick=function(){
  lunbo();
 }
/*head关闭*/
  var head=$(".head-tu-box")[0];
  var guanbi=$(".guanbi")[0];
  guanbi.onclick=function(){
    head.style.display="none";
  }
/*品质生活动画*/
 // var pzsh=getClass('pzsh1t');
 //console.log(pzsh)
  //  for(var i=0;i<pzsh.length;i++){
  //    var mgs=pzsh[i].getElementsByTagName('img')
  //    for(var j=0;j<mgs.length;j++){
  //     //console.log(mgs[j])
  //     donghua(mgs[j]) 
  //    }
  // }
  // function donghua(mgs){
  //    mgs.onmouseover=function(){
  //   animate(mgs,{marginLeft:-10},1000)
  //  }
  //  mgs.onmouseout=function(){
  //   animate(mgs,{marginLeft:0},1000)
  //  }
  //  }
/*选项卡*/ 
  var links=getClass('fzxb-tab');
 
  var divs=getClass('mb-rbox');

  var ass,ds;
  for(var i=0;i<links.length;i++){
    ass=links[i].getElementsByTagName("li");
    //console.log(ass)
    ds=getClass("mb-r",divs[i]);
     //console.log(ds)
    tab(ass,ds);
  }
  //console.log(divs)
  function tab(anniu,rongqi){
      for(var i=0;i<anniu.length;i++){
      anniu[i].aa=i;
      anniu[i].onmouseover=function(){
         for(var j=0;j<rongqi.length;j++){
          rongqi[j].style.display="none";
          anniu[j].className=""
          }
          rongqi[this.aa].style.display="block";
          this.className="btnn";

        }
      }
  }


 function weel(xb){ 
 var btn1=getClass('btn1')[xb];
  //console.log(btn1)
  var btn1left=getClass('btn1-left')[xb];
  var btn1right=getClass('btn1-right')[xb];
  var btns=getClass('btn')[xb].getElementsByTagName('li');
  //console.log(btns)
  //获取按钮
   var weelBox=getClass("weel-box")[xb]; 
  //console.log(weelBox)
  var weel=getClass('weel')[xb];
  var as=getChild(weel)
  // console.log(weel)
 /* var as=weel.getElementsByTagName('a');*/
    //alert(as.length)
  var aw=parseInt(getStyle(as[0],'width'));
    //alert(aw)
  //console.log(boxs)
  as[0].style.left=0;
  var now=0;
  var next=0;
  var zt=setInterval(wf,3000)
  function wf(){
    next++; 
    if(next>as.length-1){
      next=0;
    }
     as[next].style.left=aw+"px"
      animate(as[now],{left:-aw},100);
      animate(as[next],{left:0},100);
      btns[now].className="";
      btns[next].className="hot"
      now=next;
    }
    weelBox.onmouseover=function(){
    clearInterval(zt)
  }
  weelBox.onmouseout=function(){
    zt=setInterval(wf,1000)
  }
  /*左右按钮*/
  btn1right.onclick=function(){
    wf()
  }
   btn1left.onclick=function(){
    next--;
    if(next==-1){
      next=as.length-1;
    }
      as[next].style.left=aw+"px"
      animate(as[now],{left:-aw},100);
      animate(as[next],{left:0},100);
      btns[now].className="";
      btns[next].className="hot"
      now=next;
  }
/*小按钮*/
  for(var i=0;i<btns.length;i++){
  btns[i].qwe=i;
  var flag=true;
  btns[i].onmouseover=function(){
    if(now==this.qwe){
      return;
    }
      flag=false;
      if(this.qwe>now){
      as[this.qwe].style.left=aw+"px"
      animate(as[now],{left:-aw},200); 
      }
      if(this.qwe<now){
      as[this.qwe].style.left=-aw+"px"
      animate(as[now],{left:aw},200); 
      }
     animate(as[this.qwe],{left:0},200,function(){
        flag=true;
      });
      btns[next].className="";
      btns[this.qwe].className="hot"
      now=next=this.qwe;
      }
  }
 }
  for(var i=0;i<12;i++){
    weel(i)
    }
/*侧边栏开始*/
 var car=getClass("over")
  for(var i=0;i<car.length;i++){
       var dow=getClass("cardow",car[i])[0]
       //console.log(dow)
      cb(car[i],dow)
  }
 function cb(car,dow){
    car.onmouseover=function(){
    animate(dow,{left:-57},100)
  }
  car.onmouseout=function(){
    animate(dow,{left:0},100)
  }
  }
/*侧边栏结束*/
/*今日推荐开始*/
  var jrtjWeel=getClass("jrtj-weel")[0];
  //console.log(jrtjWeel)
  var jrtjR=getClass("jrtj-right",jrtjWeel[0]);
  //console.log(jrtjR.length)
  var jrtjRw=parseInt(getStyle(jrtjR[0],'width'));
  //alert(jrtjRw)
  jrtjWeel.style.width=jrtjR.length*jrtjRw+'px';
  var jrbtn=getClass('jrbtn')[0];
  var jrlbtn=getClass('jrbtn-left')[0];
  //console.log(jrlbtn)
  var jrrbtn=getClass('jrbtn-right')[0];
  var jr=0;
  jrrbtn.onclick=function(){
       jr++;
       if(jr>jrtjR.length-1){
        jr=0;
       }
       animate(jrtjWeel,{marginLeft:-jrtjRw*jr},500) 
    }
  jrlbtn.onclick=function(){
       jr--;
       if(jr==-1){
        jr=jrtjR.length-1;
       }
       animate(jrtjWeel,{marginLeft:-jrtjRw*jr},500) 
    }
    
/*今日推荐结束*/
/*天天开始*/
  var ttbox=getClass('tt-box')[0];
  //console.log(ttbox)
  var lis=ttbox.getElementsByTagName('li');
  //alert(lis.length)
  var lih=parseInt(getStyle(lis[0],'height'));
  var tttj=0;
  //alert(liw)

  ttbox.style.height=lis.length*lih+"px";
  var resd=setInterval(rmsd,2000);
  function rmsd(){
  tttj++;
  insertBefore(getLast(ttbox),getFirst(ttbox));
  ttbox.style.marginTop=-lih+"px";
  animate(ttbox,{marginTop:0},500)
  }
  ttbox.onmouseover=function(){
    clearInterval(resd)
  }
  ttbox.onmouseout=function(){
    resd=setInterval(rmsd,2000);
  }
  /*天天结束*/
  /*左侧楼层*/
  var lc=$('.leftlc')[0];
      //console.log(lc)
  var lis=$('li',lc)
  //console.log(lis)


/*head开始*/
function xlk(xlk){
 var headBtn=$('.head-l')[xlk];
// console.log(headBtn)
var headNr=$('.head_bb')[xlk];
var headNrh=parseInt(getStyle(headNr,"height"));
//alert(headNrh)
hover(headBtn,function(){
headNr.style.display="block";
animate(headNr,{height:headNrh},100)
},function(){
  animate(headNr,{height:0},100)
}) 
}
var headBtn=$('.head-l');
for(var i=0;i<headBtn.length;i++){
  xlk(i)
}


/*head结束*/
/*banner右拉框*/
function ylk(ylk){
  var ylkbtn=$(".banner-laa")[ylk];
 //console.log(ylkbtn) 
var ylkNr=$(".b_zlkbox")[ylk];
var ylkNrw=ylkNr.offsetWidth;
//console.log(ylkNrw)
// console.log(ylkNr)
hover(ylkbtn,function(){
  ylkNr.style.display="block";
},function(){
   ylkNr.style.display="none";
})
}
  var ylkbtn=$(".banner-laa");
  for(var i=0;i<ylkbtn.length;i++){
    ylk(i)
  } 






}