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
                tab+="<td><div onclick=\"up(this)\"  style=\" position:relative;     \" >\
                <span class=\"spot_name\"></span> <img class=\"jiantou\"><span class=\"spot_time\">2018.11.27</span>\
                </div></td>";
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
        for(var h=0;h<document.getElementById("map").getElementsByTagName("div").length;h++){
            document.getElementById("map").getElementsByTagName("div")[h].setAttribute("data-spot-seq",h)//为框图添加序号
        }

        jiantou(num);

        for(var i=0;i<objMap.spotnum;i++){
            if(objMap.spots[i].checked==true){
                $("#map td").eq(i).addClass("check")
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
        for(var j=0;j<input.length;j++){
            input[j].value="";
        }
        //书写框出现，遮掩层出现
        document.getElementById("kuang3").setAttribute("style","display:block");
        document.getElementsByClassName("bgPop")[0].setAttribute("style","display:block");
        
        kuangx=x;

        var seq=kuangx.getAttribute("data-spot-seq"); //当前查看的spot的序号
        $(".creat_new_item").remove();//清除div-item
        for(var n=0;n<objMap.spots[seq].items.length;n++){
            addItem()
        }

        //把objMap的数据输入到书写框里
        $("#spot_name").val(objMap.spots[seq].name)
        $("#spot_desc").val(objMap.spots[seq].desc)
        for(var i=0;i<$(".creat_new_item").length;i++){    
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
    
    
    
    function addItem() {
        var model = "<div class=\"creat_new_item\">\n <input placeholder=\"\u5DE1\u68C0\u6761\u76EE\u5185\u5BB9\"  readonly=\"readonly\">\n  <input placeholder=\"\u5355\u4F4D\"  readonly=\"readonly\">\n <div>\n   <select disabled=\"true\">\n  <option value=\"true\">\u786E\u8BA4\u578B</option>\n  <option value=\"false\">\u6570\u503C\u578B</option>\n   </select>\n   </div>\n  <div></div>\n   \n  <br>                        \n                    <input placeholder=\"\u6700\u5C0F\u6807\u51C6\u503C\" readonly=\"readonly\">\n                    <input placeholder=\"\u6700\u5927\u6807\u51C6\u503C\" readonly=\"readonly\"><br>\n                    <input placeholder=\"\u6700\u5C0F\u8B66\u6212\u503C\" readonly=\"readonly\">\n                    <input placeholder=\"\u6700\u5927\u6807\u51C6\u503C\" readonly=\"readonly\"> \n                    </div>\n                ";
        $("#kuang3_items").append(model);
    }

    function changeObjmap(x){
        objMap=objMap;
        creatMap()
        for(var i=0;i<$(".spot_name").length;i++){
            $(".spot_name").eq(i).text(objMap.spots[i].name)
        }
        $("#now_map").text($(x).text())
    }
    changeObjmap( $("#youce>div div").eq(0) )







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

    function creatGraph1(ob) {
        //生成路线框图
    
        var lie = 5;
        var hang = ob.length;
        var tab = "<table >\n<thead><tr><th>巡检路线</th> <th>巡检时间</th> <th>巡检人</th> <th>查看</th> <th>完成</th></tr></thead>\n ";
        tab += "</table>";
        
        tab += "<div id='graph1_table2_box'><table >\n";
    
        for (var i = 0; i < hang; i++) {
            tab += "<tr>";
            tab += "<td>" + ob[i].num + "</td>";
            tab += "<td>" + ob[i].time + "</td>";
            tab += "<td>" + ob[i].man + "</td>";
            tab += "<td><button onclick=\"chakan2()\">查看</button></td>";
            tab += "<td><button onclick=\"chakan2()\">完成</button></td>";
            tab += "</tr>";
        }
        
        tab += "</div></table>";
        document.getElementById("graph1").innerHTML = tab;
    }
    creatGraph1(obj);