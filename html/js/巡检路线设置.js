
    function addEvent(){
        for(var i=0;i<3;i++){
            document.getElementById('kuang1').getElementsByTagName("li")[i].setAttribute('onclick','liClick(this)')
            }
    
        var lxku=document.getElementById("luxianku").getElementsByTagName("li");  
        for(var j=0;j<lxku.length;j++){
            lxku[j].setAttribute('onclick','lxk_click(this)');
            lxku[j].getElementsByTagName("button")[1].setAttribute('onclick','chakan()');
            lxku[j].getElementsByTagName("button")[0].setAttribute('onclick','ku_del(this)');

        }        
    }
    addEvent();

    
    //路线模式的点选效果及所选的type
    var nowMapType=null;//提交到库时使用
    function liClick(x){
        for(var i=0;i<3;i++){
            document.getElementById('kuang1').getElementsByTagName("li")[i].classList.remove("looking");           
            }
        x.classList.add("looking");
        nowMapType=x;
    }
    //路线库的点选效果
    function lxk_click(x){
        var lxku=document.getElementById("luxianku").getElementsByTagName("li");
        console.log(lxku)
        for(var i=0;i<lxku.length;i++){
            lxku[i].setAttribute('style',"background-color:transparent ;transform: translateY(0px);")
        }
        x.setAttribute('style',"background-color: rgba(47, 159, 200, 1);transform: translateY(1px);")
        
    }
    
     

        //按照巡检点数量生成不同路线框图

        


    var num
    function creatMap(){  //生成路线框图
        
        if(document.getElementById("map_num").value==0){
            alert("请输入框图数目")
            return
        }


        num=document.getElementById("map_num").value;
        objMap.num=num;
        var lie;    if(num>=5) lie=5;else lie=num;
        var hang;   hang=Math.ceil(num/5);
        var tab="<table id=\"map\"> "
        
        
        
        for(let i=0;i<objMap.num;i++){
            let objSpot={
            "id": 1,
            "name": "",
            "desc": "",
            "tmp": false,
            "created_at": "",
            "updated_at": "",
            "items": []
            }
            objMap.spots.push(objSpot)
        }





        for(var i=1;i<=hang;i++)
        {
            tab+="<tr>";

            if(i==hang&&num%5!=0){  //最后一行框数    
                lie=num%5;
                }
            for(var j=1;j<=lie;j++)
            {
                tab+="<td><div onclick=\"up(this)\" ><span></span><img class=\"jiantou\"></div></td>";
            }
            tab+="</tr>";
        }           
        tab+="</table>"
        document.getElementById("kuang2").innerHTML=tab;
    
        for(var h=0;h<num;h++){
            if(Math.ceil((h+1)/5) %2 !=0 ){//奇数行左浮动，偶数行右浮动
                document.getElementById("map").getElementsByTagName("td")[h].setAttribute('style','float:left');
            }
            else{
                document.getElementById("map").getElementsByTagName("td")[h].setAttribute('style','float:right');
            }
        }
        for(let h=0;h<document.getElementById("map").getElementsByTagName("div").length;h++){
            document.getElementById("map").getElementsByTagName("div")[h].setAttribute("data-spot-seq",h)//为框图添加序号
        }



        jiantou(num);
    }
    
    function jiantou(num){  //为路线框图添加箭头
        for(var i=0;i<num;i++){
            if(Math.ceil((i+1)/5)%2!=0 && i%10!=4 && i%10!=9){ //奇数行
                document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou.png")
            }
            else if(Math.ceil((i+1)/5)%2==0 && i%10!=4 && i%10!=9 ){//偶数行
                document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou2.png")
                document.getElementsByClassName("jiantou")[i].setAttribute("style","left:-77px;top:-25px")
            }  
            else if(i%10==4 || i%10==9){//指向下一行的交接箭头
                document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou5.png")
                document.getElementsByClassName("jiantou")[i].setAttribute("style","left:0px;top:0px")
            }   
        }
        document.getElementsByClassName("jiantou")[num-1].setAttribute("src","");

    }
    





    var kuangx;//当前选中的框
    function up(x){  //点击框图，弹出书写框
        var input=document.getElementById("kuang3").getElementsByTagName("input");
        for(let j=0;j<input.length;j++){
            input[j].value="";
        }
        document.getElementById("kuang3").setAttribute("style","display:block");
        document.getElementsByClassName("bgPop")[0].setAttribute("style","display:block");
        kuangx=x;
        $("#spot_name").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].name)
        $("#spot_desc").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].desc)
        for(let i=0;i<$(".creat_new_item").length;i++){ 
            
            $(".creat_new_item:eq("+i+") input:eq(0)").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].items[i].content)
            $(".creat_new_item:eq("+i+") input:eq(1)").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].items[i].unit)
            $(".creat_new_item:eq("+i+") input:eq(2)").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].items[i].st_min)
            $(".creat_new_item:eq("+i+") input:eq(3)").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].items[i].st_max)
            $(".creat_new_item:eq("+i+") input:eq(4)").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].items[i].al_min)
            $(".creat_new_item:eq("+i+") input:eq(5)").val(objMap.spots[kuangx.getAttribute("data-spot-seq")].items[i].al_max)
        }
            

    }
    function saveItem(){  //保存数据到spot
        var text="";
        text=text+document.getElementById("spot_name").value;
        kuangx.getElementsByTagName('span')[0].innerHTML=text;
        
        
        for(let i=0;i<=objMap.spots[kuangx.getAttribute("data-spot-seq")].items.length+100;i++){
            objMap.spots[kuangx.getAttribute("data-spot-seq")].items.pop();
        }


        for(let i=0;i<$(".creat_new_item").length;i++){ 
            //各item的数据保存到spot
            let item={};
            item.content=$(".creat_new_item:eq("+i+") input:eq(0)").val()
            item.unit=$(".creat_new_item:eq("+i+") input:eq(1)").val()
            item.itemtype="false"
            item.st_min=$(".creat_new_item:eq("+i+") input:eq(2)").val()
            item.st_max=$(".creat_new_item:eq("+i+") input:eq(3)").val()
            item.al_min=$(".creat_new_item:eq("+i+") input:eq(4)").val()
            item.al_max=$(".creat_new_item:eq("+i+") input:eq(5)").val()
            item.id=i+1
            objMap.spots[kuangx.getAttribute("data-spot-seq")].items.push(item);
        }
        
        objMap.spots[kuangx.getAttribute("data-spot-seq")].name=$("#spot_name").val();
        objMap.spots[kuangx.getAttribute("data-spot-seq")].desc=$("#spot_desc").val();
        objMap.spots[kuangx.getAttribute("data-spot-seq")].id=parseInt(kuangx.getAttribute("data-spot-seq"))+1
    }
    function del(){  //清空某spot         
        var input=document.getElementById("kuang3").getElementsByTagName("input");        
        for(let i=0;i<input.length;i++){
            input[i].value="";
        }//清空kuang3所有输入框
        
        $("#spot_guding select:eq(0)").val("0");
        for(let i=0;i=$(".creat_new_item").length;){
            objMap.spots[kuangx.getAttribute("data-spot-seq")].items.pop()
            $(".creat_new_item:eq(0)").remove()             
        }

    }
    
    var model=document.getElementsByClassName("creat_new_item")[0];
    function addItem(){
        var new_item=model.cloneNode(true);
        document.getElementById("kuang3_items").appendChild(new_item);
        saveItem()
    }
    
    function delItem(x){
        x.parentNode.parentNode.removeChild(x.parentNode);
        saveItem()
    }

    function chakan(){ //查看路线库中的路线的效果
        document.getElementById("kuang1").setAttribute("style","display:none");
        document.getElementById("kuang2").setAttribute("style","display:none");
        document.getElementById("kuang3").setAttribute("style","display:none");
        document.getElementById("kuang4").setAttribute("style","display:block");
        document.getElementById("kuang5").setAttribute("style","display:block");
        document.getElementById("fanhui").setAttribute("style","display:block");    
        document.getElementById("tijiao").setAttribute("style","display:none");            
        
    }
    function fanhui(){   //返回新建路线库页面
        document.getElementById("kuang1").setAttribute("style","display:block");
        document.getElementById("kuang2").setAttribute("style","display:block");
        document.getElementById("kuang3").setAttribute("style","display:none");
        document.getElementById("kuang4").setAttribute("style","display:none");
        document.getElementById("kuang5").setAttribute("style","display:none");
        document.getElementById("fanhui").setAttribute("style","display:none");
        document.getElementById("tijiao").setAttribute("style","display:block");            
        
    }
    function ku_del(x){
        x.parentNode.parentNode.removeChild(x.parentNode);
    }






    
