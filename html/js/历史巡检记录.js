function addEvent(){
    for(var i=0;i<3;i++){
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("onclick","liClick(this)")
    }
}
addEvent();
function liClick(x){  //按巡检路线查找的点选效果
    for(var i=0;i<3;i++){
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("style","color:white");
    }
    x.setAttribute("style","color:orange");

}
function breakMessage(){
    document.getElementById("breakMessage").setAttribute("style","display:block")
}


function searchByOther(){
    var record=document.getElementsByClassName("record")
    for(var i=0;i<record.length;i++){
        record[i].setAttribute("style","display:none")
    }
    console.log("执行了searchByOther()")
    
    document.getElementById("record3").setAttribute("style","display:block")   
}

function searchByEqu(){
    var record=document.getElementsByClassName("record")
    for(var i=0;i<record.length;i++){
        record[i].setAttribute("style","display:none")
    }
    console.log("执行了searchByEqu()")
    document.getElementById("record4").setAttribute("style","display:block")   
}



var vm=new Vue({
    el:"#graph1",
    data:{
        newRecord:{
            num:"1",
            time:"20180610",
            man:"余某",
            digest:"还行",
        },
        recordLib:[{
            num:"2",
            time:"20180611",
            man:"陈某",
            digest:"多处破损",
        },{
            num:"3",
            time:"20180612",
            man:"毛某",
            digest:"损坏",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        },{
            num:"4",
            time:"20180613",
            man:"唐某",
            digest:"完好",
        }
        ]
    },//end data
    methods:{
        
        lookDetial:function(index){
            document.getElementById("record1").setAttribute("style","display:none")
            document.getElementById("record2").setAttribute("style","display:block")
            
        },
    }
})




var vm2=new Vue({
    el:"#graph2",
    data:{
        newRecord:{
            dian:"1",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },
        record2Lib:[{
            dian:"1",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },{
            dian:"2",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },{
            dian:"3",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },{
            dian:"4",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },{
            dian:"5",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },{
            dian:"6",
            statu:"20180610",
            value:"余某",
            normalValue:"还行",
            describe:"还行",
        },
        ]
    },//end data
    methods:{
        
        lookDetial:function(index){
            document.getElementById("record3").setAttribute("style","display:none")
            document.getElementById("record2").setAttribute("style","display:block")
            
        },
        
    }
})


var vm3=new Vue({
    el:"#graph3",
    data:{
        newRecord:{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },
        record3Lib:[{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },{
            num:"1",
            man:"20180610",
            map:"余某",
            time:"还行",
        },
        ]
    },//end data
    methods:{
        
        lookDetial:function(index){
            document.getElementById("record3").setAttribute("style","display:none")
            document.getElementById("record2").setAttribute("style","display:block")
            
        },
    }
})



    
var vm3=new Vue({
    el:"#graph4",
    data:{
        newRecord:{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },
        record4Lib:[{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },{
            num:"1",
            project:"锅炉",
            time1:"20180610",
            time2:"20180612",
            breakMessage:"还行",
            normalValue:"不错",
            statu:"损坏",
        },
        ]
    },//end data
    methods:{
        
        lookBreakMessage:function(index){
            document.getElementById("record4").setAttribute("style","display:none")
            document.getElementById("record5").setAttribute("style","display:block")
        },
    }
})




