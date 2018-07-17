
window.onload=myScroll;//文档加载完毕后加载滚动条函数

function myScroll() {
    //兼容性，edge不支持documentElement，chrome不支持body
    var beforeScrollTop = document.documentElement.scrollTop+document.body.scrollTop;//第一次获取导航条起始位置
    var nav=document.getElementsByTagName("nav")[0];//获取导航条
    var topHeight=document.getElementById("top").clientHeight;//获取首页图的高度
    if(beforeScrollTop<=topHeight){
        nav.style.backgroundColor="rgba(37, 36, 36, 0.9)";
    }else{
        nav.style.backgroundColor="#778899";
    }
    nav.style.top="0px";
    window.addEventListener("scroll", function() {
        //兼容性，edge不支持documentElement，chrome不支持body
        var afterScrollTop =document.documentElement.scrollTop+document.body.scrollTop;//获取监听事件发生后的位置
        
        var delta = afterScrollTop - beforeScrollTop;//计算是向下还是向上

        if(afterScrollTop>=topHeight){
            if(delta===0){
                return false;
            }else if(delta>0){//向下
                nav.style.top="-50px";
            }else{
                nav.style.top="0";
            }
            nav.style.backgroundColor="#778899";
        }else{
            nav.style.backgroundColor="rgba(37, 36, 36, 0.9)";
        }
        beforeScrollTop = afterScrollTop;//将当前的导航条位置作为下一次的起始位置
    }, false);
}


//搜索框监听
document.getElementById("search_input").addEventListener("click",function(event){
    var temp=event.target;
    temp.style.width="180px";
})

document.getElementById("search_input").addEventListener("blur",function(event){
    var temp=event.target;
    temp.style.width="80px";
})

//头像旋转监听
var a=Array("me","me_min_1");
var i=0;
while (i<2) {
    document.getElementById(a[i]).addEventListener("mouseover",function(event){
    var temp=event.target;
    temp.style.transform="rotate(15deg)";
    })

    document.getElementById(a[i]).addEventListener("mouseout",function(event){
        var temp=event.target;
        temp.style.transform="rotate(0deg)";
    })
    i++;
}

//下拉导航监听