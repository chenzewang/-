
function addEvent() {
    for (var i = 0; i < $("#map li").length; i++) {
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("onclick", "liClick(this)");
    }
}
addEvent();
function liClick(x) {
    //按巡检路线查找的点选效果
    // for (var i = 0; i < $("#map li").length; i++) {
        // document.getElementById("map").getElementsByTagName("li")[i].setAttribute("style", "color:white");
        $("#map li").removeClass("select")
    // }
    $(x).addClass("select");
}
function breakMessage() {
    document.getElementById("breakMessage").setAttribute("style", "display:block");
}

function searchByOther() {
    var record = document.getElementsByClassName("record");
    for (var i = 0; i < record.length; i++) {
        record[i].setAttribute("style", "display:none");
    }

    document.getElementById("record3").setAttribute("style", "display:block");
}

function searchByEqu() {
    var record = document.getElementsByClassName("record");
    for (var i = 0; i < record.length; i++) {
        record[i].setAttribute("style", "display:none");
    }
    document.getElementById("record4").setAttribute("style", "display:block");
}

var obj = [{
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}, {
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}, {
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}, {
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}, {
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}, {
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}, {
    num: "1",
    time: "20180911",
    man: "陈某",
    digest: "还行还行",
    dian: "1",
    statu: "无状态",
    value: "1000000",
    normalValue: "还行",
    breakMessage: "还行",
    describe: "还行",
    project: "锅炉",
    time1: "20180610",
    time2: "20180612"
}];

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
            name: "asd",
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

function creatGraph1(ob) {
    //生成路线框图

    var lie = 5;
    var hang = ob.length;
    var tab = "<table class=\"table \" >\n<thead><tr><th>\u5E8F\u53F7</th> <th>\u65F6\u95F4</th> <th>\u5DE1\u68C0\u4EBA</th> <th>\u5F02\u5E38\u6458\u8981</th> <th>\u64CD\u4F5C</th></tr></thead>\n ";
    tab += "</table>";
    
    tab += "<div id='graph1_table2_box'><table class=\"table table-hover table-striped\">\n";

    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].num + "</td>";
        tab += "<td>" + ob[i].time + "</td>";
        tab += "<td>" + ob[i].man + "</td>";
        tab += "<td>" + ob[i].digest + "</td>";
        tab += "<td><button class=\" btn\" onclick=\"chakan2()\">\u67E5\u770B\u8BE6\u60C5</button></td>";
        tab += "</tr>";
    }
    
    tab += "</div></table>";
    document.getElementById("graph1").innerHTML = tab;
}
creatGraph1(obj);

function chakan1() {
    document.getElementById("record1").setAttribute("style", "display:none");
    document.getElementById("record2").setAttribute("style", "display:block");
}

function creatGraph2(spots) {
    var text = "";
    for (var j = 0; j < spots.length; j++) {
        
        var tab = "<table  class=\" table table-bordered table-hover table-striped\" >\n<thead><tr><th> <span>" + spots[j].name + "</span></th><th></th></tr></thead>"; //标题(spot名)

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

function chakan2() {
    document.getElementById("record1").setAttribute("style", "display:none");
    document.getElementById("record4").setAttribute("style", "display:none");
    document.getElementById("record2").setAttribute("style", "display:block");
}

function creatGraph3(ob) {
    //生成路线框图

    var lie = 5;
    var hang = ob.length;
    var tab = "<table class=\" table  table-hover table-striped\"> \n<thead> <th>\u5DE1\u68C0\u65F6\u95F4</th> <th>\u5DE1\u68C0\u8DEF\u7EBF</th> <th>\u5DE1\u68C0\u4EBA</th> <th>\u8BE6\u60C5</th></tr></thead>\n                ";
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].des + "</td>";
        tab += "<td>" + ob[i].project + "</td>";
        tab += "<td>" + ob[i].digest + "</td>";
        tab += "<td>" + ob[i].describe + "</td>";
        tab += "</tr>";
    }
    tab += "</table>";
    document.getElementById("graph3").innerHTML = tab;
}
creatGraph3(obj);



function creatGraph4(ob) {
    //生成路线框图

    var lie = 7;
    var hang = ob.length-1;
    var tab = "<table class=\" table table-hover table-striped \"> \n <thead><tr><th>\u65F6\u95F4</th> <th>\u8BBE\u5907</th> <th>\u8BE6\u60C5</th> <th>\u67E5\u770B\u8BE6\u60C5</th> </tr></thead>\n            ";
    for (var i = 0; i < hang-1; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].time2 + "</td>";
        tab += "<td>" + ob[i].project + "</td>";
        tab += "<td>" + ob[i].describe + "</td>";
        tab += "<td><button class=\" btn\" onclick=\"chakan4()\">" + ob[i].breakMessage + "</button></td>";
        tab += "</tr>";
    }
    tab += "</table>";
    document.getElementById("graph4").innerHTML = tab;
}
creatGraph4(obj);

function creatGraph5(ob) {

    var hang = ob.length;
    var tab = `<table class="table">
                <thead><tr>
                <th>\u5DE1\u68C0\u5185\u5BB9</th> 
                <th>\u5DE1\u68C0\u503C</th></tr>
                </thead> </table> `
    
    tab+=`<div id='graph5_table2_box'><table class=" table  table-bordered table-hover table-striped">`
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].content + "</td>";

        if (ob[i].pass == true) {

            if (ob[i].value == false) {
                tab += "<td >\u901A\u8FC7</td>";
            } else {
                tab += "\n<td>\n<div class=\"value value_left \">\u5DE1\u68C0\u503C\uFF1A " + ob[i].data + "</div>\n                                    <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + ob[i].st_max + " \u8B66\u6212\u503C\uFF1A" + ob[i].al_max + "</div>\n                                </td>\n                            ";
            }
        } else {

            if (ob[i].value == false) {
                tab += "<td class=\"no_pass warning\">\u672A\u901A\u8FC7</td>";
            } else {
                tab += "\n                                <td>\n                                    <div class=\"value value_left no_pass\">\u5DE1\u68C0\u503C\uFF1A " + ob[i].data + "</div>\n<div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + ob[i].st_max + " \u8B66\u6212\u503C\uFF1A" + ob[i].al_max + "</div>\n                                </td>\n                            ";
            }
        }
    }
    tab += "</div></table>";
    document.getElementById("graph5").innerHTML = tab;
}
creatGraph5(objMap.spots[1].items);

function chakan4() {
    document.getElementById("record1").setAttribute("style", "display:none");
    document.getElementById("record4").setAttribute("style", "display:none");
    document.getElementById("record5").setAttribute("style", "display:block");
}





function creatMap(){  //生成路线框图
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
        $("#map2 tr:eq("+i+") .jiantou").eq(7).css({"left":"0px","top":"-20px"});
        $("#map2 tr:eq("+i+") .jiantou").eq(7).removeClass("jiantou_down jiantou_left jiantou_right");
        $("#map2 tr:eq("+i+") .jiantou").eq(7).addClass("jiantou_down");
    }
    $("#map2 .jiantou").eq(-1).css("display","none");
}
creatMap()