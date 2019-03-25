"use strict";

var obj = [{
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某",
    xxx: "aaaa"
}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}, {
    num: "2",
    event: "炸了啊",
    map: "电气路线",
    man: "陈某", xxx: "aaaa"

}];

function creatGraph1(ob) {
    //生成路线框图

    var lie = 4;
    var hang = ob.length;
    var tab = `<table id="map" class="table table-hover table-striped" >  <thead><tr><th>时间</th> <th>异常</th> <th>路线</th><th>巡检人</th><th>查看</th></tr></thead>`;
    tab+=`</table><div id='graph1_tab2_box'><table class="table  table-hover table-striped">`;

    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        // tab += "<td>" + ob[i].num + "</td>";
        tab += "<td>" + ob[i].event + "</td>";
        tab += "<td>" + ob[i].map + "</td>";
        tab += "<td>" + ob[i].man + "</td>";
        tab += "<td>" + ob[i].xxx + "</td>";
        tab += "<td><button class=\"btn \" onclick=\"chakan()\"> \u67E5\u770B</button></td>";
        tab += "</tr>";
    }
    tab += "</div></table>";
    document.getElementById("graph1").innerHTML = tab;
}
creatGraph1(obj);

//以下 生成recorf2 ,测试record2 css用


var objMap={
    id:0,
    name:"线路1",          //路线名字
    spotnum:29,       //设备点数
    specified: true,                  //是否固定
    arrangeable:false,               //是否自由
    desc:"",                        //路线描述
    created_at:"",                 //路线创建时间
    updated_at:"",                //路线修改时间  //这条路线的各个点
    spots:[
        {
            id: 1,
            name: "标题标题",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:false,   //true 查过了   false 未查
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

function creatGraph2(spots) {
    var text = "";
    for (var j = 0; j < spots.length; j++) {
        
        var tab = "<table class=\"table table-striped table-hover table-bordered\">\n<thead><tr><th> <span>" + spots[j].name + "</span></th><th></th></tr></thead>"; //标题(spot名)

        for (var i = 0; i < spots[j].items.length; i++) {
            tab += "<tr>";
            tab += "<td>" + spots[j].items[i].content + "</td>";

            if (spots[j].items[i].pass == true) {

                if (spots[j].items[i].value == false) {
                    tab += "<td >\u901A\u8FC7</td>";
                } else {
                    tab += "<td>\n  <div class=\"value value_left \">\u5DE1\u68C0\u503C\uFF1A " + spots[j].items[i].data + "</div>\n                                <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + spots[j].items[i].st_max + " \u8B66\u6212\u503C\uFF1A" + spots[j].items[i].al_max + "</div>\n                            </td>";
                }
            } else {
                if (spots[j].items[i].value == false) {
                    tab += "<td class=\"no_pass\">\u672A\u901A\u8FC7</td>";
                } else {
                    tab += "<td>\n <div class=\"value value_left no_pass\">\u5DE1\u68C0\u503C\uFF1A " + spots[j].items[i].data + "</div>\n                                <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + spots[j].items[i].st_max + " \u8B66\u6212\u503C\uFF1A" + spots[j].items[i].al_max + "</div>\n                            </td> ";
                }
            }
        }
        tab += "</table>";
        text += tab;
    }
    document.getElementById("graph2").innerHTML = text;
}
creatGraph2(objMap.spots);


function creatMap2(){  //生成路线框图
    var num=objMap.spotnum;
    var lie=8;
    var hang;   hang=Math.ceil(num/8);
    var tab="<table id=\"map2\"> "

    for(var i=1;i<=hang;i++)   //生成框
    {
        tab+="<tr>";

        if(i==hang&&num%8!=0){  //最后一行框数    
            lie=num%8;
            }
        for(var j=1;j<=lie;j++)
        {
            tab+="<td><div  style=\" position:relative;     \" >\
            <span class=\"spot_name spot_span\">按时打算大所大所大所大所大所大所大所大所大所多</span> <span class=\"jiantou\"></span><span class=\"spot_time spot_span\">2018.11.27</span>\
            </div></td>";
        }
        tab+="</tr>";
    }           
    tab+="</table>"
    document.getElementById("record2_map").innerHTML=tab;

    for(var h=0;h<num;h++){//奇数行左浮动，偶数行右浮动
        if(Math.ceil((h+1)/8) %2 !=0 ){
            document.getElementById("map2").getElementsByTagName("td")[h].setAttribute('style','float:left');
        }
        else{
            document.getElementById("map2").getElementsByTagName("td")[h].setAttribute('style','float:right');
        }
    }
    for(var h=0;h<document.getElementById("map2").getElementsByTagName("div").length;h++){
        document.getElementById("map2").getElementsByTagName("div")[h].setAttribute("data-spot-seq",h)//为框图添加序号
    }

    jiantou(num);

    for(var i=0;i<objMap.spotnum;i++){
        $("spot_name").eq(i).text(objMap.spots[i].name);
        if(objMap.spots[i].checked==true){
            $("#map2 td").eq(i).addClass("check")
        }
    }
}

function jiantou(num){  //为路线框图添加箭头

    for(var i=0;i<$("#map2 tr").length;i++){
        if((i+1)%2==1){
            $("#map2 tr:eq("+i+") .jiantou").removeClass("jiantou_down jiantou_left jiantou_right");
            $("#map2 tr:eq("+i+") .jiantou").addClass("jiantou_right");
        }else{
            $("#map2 tr:eq("+i+") .jiantou").removeClass("jiantou_down jiantou_left jiantou_right");
            $("#map2 tr:eq("+i+") .jiantou").addClass("jiantou_left");
        }
        $("#map2 tr:eq("+i+") .jiantou").eq(7).css({"left":"0px","top":"-21px"});
        $("#map2 tr:eq("+i+") .jiantou").eq(7).removeClass("jiantou_down jiantou_left jiantou_right");
        $("#map2 tr:eq("+i+") .jiantou").eq(7).addClass("jiantou_down");
    }
    $("#map2 .jiantou").eq(-1).css("display","none");
}
creatMap2()





function chakan() {
    document.getElementById("background").setAttribute("style", "display:none");
    document.getElementById("record2").setAttribute("style", "display:block");
}