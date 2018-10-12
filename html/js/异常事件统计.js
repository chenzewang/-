


var obj=[{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
    xxx:"aaaa"
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
}]


function creatMap(ob){  //生成路线框图
   
    var lie=4;    
    var hang=ob.length;  
    var tab=`<table id=\"map\"> 
            <thead><tr><th>序号</th> <th>时间</th> <th>事件</th> <th>路线</th><th>巡检人</th><th>查看</th></tr></thead>
        `
    for(var i=0;i<hang;i++)   
    {
        tab+="<tr>";
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].event}</td>`;
                tab+=`<td>${ob[i].map}</td>`;
                tab+=`<td>${ob[i].man}</td>`;
                tab+=`<td>${ob[i].xxx}</td>`;
                tab+=`<td><button onclick="chakan()"> 查看</button></td>`;
        tab+="</tr>";
    }           
    tab+="</table>"
    document.getElementById("graph1").innerHTML=tab;
}
creatMap(obj);



//以下 测试record2 css用





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
                value:true,
                pass:false,
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
                data:"50",
                value:false,
                pass:true,
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
                    value:false,
                    pass:true,
                    
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
                value:true,
                pass:true,
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
                    value:true,
                    pass:false,
                    
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
                        value:false,     
                        pass:false,                        
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
                pass:false,
                
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
                    pass:false,
                    
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
                        pass:false,
                        
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
                            pass:false,
                            
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
                                pass:false,
                                
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
                                    pass:false,
                                    
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
                                        pass:false,
                                        
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
                                            pass:false,
                                            
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
                                                pass:false,
                                                
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
                                                    pass:false,
                                                    
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
                                                        pass:false,
                                                        
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
                                                            pass:false,
                                                            
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
                    value:false,
                    pass:true,
                    
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
                        value:false,
                        pass:true,
                        
                        
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
                            value:false,
                            pass:false,
                            
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
                                value:false,
                                pass:true,
                                
                                updated_at: "巡检条目修改时间",
                                },]
        }           
    ]
}



function creatGraph2(spots){  
    var text="";
    for(let j=0;j<spots.length;j++){
        let tab=`<table > 
                    <thead><tr><th>${spots[j].name}</th></tr></thead>`  //标题(spot名)
            
            for(let i=0;i<spots[j].items.length;i++)   
            {
            tab+="<tr>";
                tab+=`<td>${spots[j].items[i].content}</td>`;

                if(spots[j].items[i].pass==true){
                    
                    if(spots[j].items[i].value==false){
                        tab+=`<td >通过</td>`;                    
                    }else{
                        tab+=`<td>
                                <div class="value value_left ">巡检值： ${spots[j].items[i].data}</div>
                                <div class="value value_right">标准值：${spots[j].items[i].st_max} 警戒值：${spots[j].items[i].al_max}</div>
                            </td>`        
                    }
                }else{ 
                    if(spots[j].items[i].value==false){
                        tab+=`<td class="no_pass">未通过</td>`;                    
                    }else{
                        tab+=`<td>
                                <div class="value value_left no_pass">巡检值： ${spots[j].items[i].data}</div>
                                <div class="value value_right">标准值：${spots[j].items[i].st_max} 警戒值：${spots[j].items[i].al_max}</div>
                            </td> `
                    }
                    }   
            } 
            tab+="</table>"
        text+=tab
    }
     document.getElementById("graph2").innerHTML=text;
 }
 creatGraph2(objMap.spots);

function chakan(){
    document.getElementById("background").setAttribute("style","display:none")
    document.getElementById("record2").setAttribute("style","display:block")
}

