$(document).ready(function () {
    $('.pop-close').click(function () {
        $('#kuang3').hide();
        $('.bgPop').hide();

    });
    $('#kuang2 td').click(function () {
        document.getElementsByClassName("bgPop")[0].setAttribute("style","display:block")
        $('#kuang3').show();
    });

})



var objMap={
    id:0,
    name:"线路1",          //路线名字
    spotnum:8,       //设备点数
    specified: true,                  //是否固定
    arrangeable:false,               //是否自由
    desc:"",                        //路线描述
    created_at:"",                 //路线创建时间
    updated_at:"",                //路线修改时间  //这条路线的各个点
    spots:[
        {
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,   //true 查过了   false 未查
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "0",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",   //当前值
                },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: true,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50"
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50"
                    
                    },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50"
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50"
                    
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        data:"50",
                        
                        updated_at: "巡检条目修改时间",
                        },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50",
                    
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        updated_at: "巡检条目修改时间",
                        data:"50",
                        
                        },{
                            id:"1",
                            content: "内容",
                            unit: "位",
                            itemtype: "1",
                            st_min: "23",
                            st_max: "45",
                            al_min: "30",
                            al_max: "40",
                            created_at: "巡检条目创建时间",
                            data:"50",
                            
                            updated_at: "巡检条目修改时间",
                            },{
                                id:"1",
                                content: "内容",
                                unit: "位",
                                itemtype: "1",
                                st_min: "23",
                                st_max: "45",
                                al_min: "30",
                                al_max: "40",
                                created_at: "巡检条目创建时间",
                                data:"50",
                                
                                updated_at: "巡检条目修改时间",
                                },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    data:"50",
                    
                    updated_at: "巡检条目修改时间",
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        data:"50",
                        
                        updated_at: "巡检条目修改时间",
                        },{
                            id:"1",
                            content: "内容",
                            unit: "位",
                            itemtype: "1",
                            st_min: "23",
                            st_max: "45",
                            al_min: "30",
                            al_max: "40",
                            created_at: "巡检条目创建时间",
                            data:"50",
                            
                            updated_at: "巡检条目修改时间",
                            },{
                                id:"1",
                                content: "内容",
                                unit: "位",
                                itemtype: "1",
                                st_min: "23",
                                st_max: "45",
                                al_min: "30",
                                al_max: "40",
                                created_at: "巡检条目创建时间",
                                data:"50",
                                
                                updated_at: "巡检条目修改时间",
                                },{
                                    id:"1",
                                    content: "内容",
                                    unit: "位",
                                    itemtype: "1",
                                    st_min: "23",
                                    st_max: "45",
                                    al_min: "30",
                                    al_max: "40",
                                    created_at: "巡检条目创建时间",
                                    data:"50",
                                    
                                    updated_at: "巡检条目修改时间",
                                    },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: true,
            created_at: "",
            updated_at: "",
            checked:false,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    data:"50",
                    
                    updated_at: "巡检条目修改时间",
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        updated_at: "巡检条目修改时间",
                        data:"50",
                        
                        },{
                            id:"1",
                            content: "内容",
                            unit: "位",
                            itemtype: "1",
                            st_min: "23",
                            st_max: "45",
                            al_min: "30",
                            al_max: "40",
                            created_at: "巡检条目创建时间",
                            updated_at: "巡检条目修改时间",
                            data:"50",                            
                            },{
                                id:"1",
                                content: "内容",
                                unit: "位",
                                itemtype: "1",
                                st_min: "23",
                                st_max: "45",
                                al_min: "30",
                                al_max: "40",
                                created_at: "巡检条目创建时间",
                                updated_at: "巡检条目修改时间",
                                data:"50",                            
                                
                                },{
                                    id:"1",
                                    content: "内容",
                                    unit: "位",
                                    itemtype: "1",
                                    st_min: "23",
                                    st_max: "45",
                                    al_min: "30",
                                    al_max: "40",
                                    created_at: "巡检条目创建时间",
                                    updated_at: "巡检条目修改时间",
                                    data:"50",                            
                                    
                                    },{
                                        id:"1",
                                        content: "内容",
                                        unit: "位",
                                        itemtype: "1",
                                        st_min: "23",
                                        st_max: "45",
                                        al_min: "30",
                                        al_max: "40",
                                        created_at: "巡检条目创建时间",
                                        updated_at: "巡检条目修改时间",
                                        data:"50",                            
                                        
                                        },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: true,
            created_at: "",
            updated_at: "",
            checked:false,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",                            
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50",                            
                    
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        updated_at: "巡检条目修改时间",
                        data:"50",                            
                        
                        },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: true,
            created_at: "",
            updated_at: "",
            checked:false,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",                            
                
                },]
        },            
    ]
}



    
    //按照巡检点数量生成不同路线框图
    
    function creatMap(){  //生成路线框图
        var num=objMap.spotnum;
        var lie;    if(num>=5) lie=5;else lie=num;
        var hang;   hang=Math.ceil(num/5);
        var tab="<table id=\"map\"> "


        for(var i=1;i<=hang;i++)   //生成框
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
    
        for(var h=0;h<num;h++){//奇数行左浮动，偶数行右浮动
            if(Math.ceil((h+1)/5) %2 !=0 ){
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

        for(let i=0;i<objMap.spotnum;i++){
            if(objMap.spots[i].checked==true){
                $("#map td").eq(i).css("background-color","rgba(62, 66, 68, 0.80)")
            }
            else{
                $("#map td").eq(i).css("background-color","none")
            }
        }
    }
    
    function jiantou(num){  //为路线框图添加箭头
        for(var i=0;i<num;i++){
            if(Math.ceil((i+1)/5)%2!=0 && i%10!=4 && i%10!=9){ //奇数行
                document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou.png")
            }
            else if(Math.ceil((i+1)/5)%2==0 && i%10!=4 && i%10!=9 ){//偶数行
                document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou2.png")
                document.getElementsByClassName("jiantou")[i].setAttribute("style","left:-76px;top:-35px")
            }  
            else if(i%10==4 || i%10==9){//指向下一行的交接箭头
                document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou5.png")
                document.getElementsByClassName("jiantou")[i].setAttribute("style","left:0px;top:-9px;width:14%")
            }   
        }
        document.getElementsByClassName("jiantou")[num-1].setAttribute("src","");

    }
    creatMap()
    

    var kuangx;//当前选中的框
    function up(x){  //点击框图，弹出书写框
        //先清空书写框
        var input=document.getElementById("kuang3").getElementsByTagName("input"); 
        for(let j=0;j<input.length;j++){
            input[j].value="";
        }
        //书写框出现，遮掩层出现
        document.getElementById("kuang3").setAttribute("style","display:block");
        document.getElementsByClassName("bgPop")[0].setAttribute("style","display:block");
        
        kuangx=x;

        var seq=kuangx.getAttribute("data-spot-seq"); //当前查看的spot的序号
        $(".creat_new_item").remove();//清除div-item
        for(let n=0;n<objMap.spots[seq].items.length;n++){
            addItem()
        }

        //把objMap的数据输入到书写框里
        $("#spot_name").val(objMap.spots[seq].name)
        $("#spot_desc").val(objMap.spots[seq].desc)
        for(let i=0;i<$(".creat_new_item").length;i++){    
            $(".creat_new_item:eq("+i+") input:eq(0)").val(objMap.spots[seq].items[i].content)
            $(".creat_new_item:eq("+i+") input:eq(1)").val(objMap.spots[seq].items[i].unit)
            $(".creat_new_item:eq("+i+") input:eq(2)").val(objMap.spots[seq].items[i].st_min)
            $(".creat_new_item:eq("+i+") input:eq(3)").val(objMap.spots[seq].items[i].st_max)
            $(".creat_new_item:eq("+i+") input:eq(4)").val(objMap.spots[seq].items[i].al_min)
            $(".creat_new_item:eq("+i+") input:eq(5)").val(objMap.spots[seq].items[i].al_max)
            // $(".creat_new_item:eq("+i+") selct:eq(0)").val(objMap.spots[seq].items[i].itemtype)
            $(".creat_new_item:eq("+i+") div:eq(1)").text(objMap.spots[seq].items[i].data)
            
        }
    }
    
    
    
    
    function addItem(){        
        var model=`<div class="creat_new_item">
                    <input placeholder="巡检条目内容"  readonly="readonly">
                    <input placeholder="单位"  readonly="readonly">
                    <div>
                        <select disabled="true">
                            <option value="true">确认型</option>
                            <option value="false">数值型</option>
                        </select>
                    </div>
                    <div></div>
                    
                    <br>                        
                    <input placeholder="最小标准值" readonly="readonly">
                    <input placeholder="最大标准值" readonly="readonly"><br>
                    <input placeholder="最小警戒值" readonly="readonly">
                    <input placeholder="最大标准值" readonly="readonly"> 
                    </div>
                `
        // document.getElementById("kuang3_items").appendChild(model);
        $("#kuang3_items").append(model)
    }



    function changeObjmap(x){
        objMap=objMap;
        creatMap()
        for(let i=0;i<$("#map span").length;i++){
            $("#map span").text(objMap.spots[i].name)
        }
        $("#now_map").text($(x).text())
    }
    changeObjmap( $("#youce div").eq(0) )