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
    name:$('#map_name').val(),          //路线名字
    spotnum:$('#map_num').val(),       //设备点数
    specified: true,                  //是否固定
    arrangeable:false,               //是否自由
    desc:"",                        //路线描述
    created_at:"",                 //路线创建时间
    updated_at:"",                //路线修改时间
    spots:[                    //这条路线的各个点
    ]
}



function submit(){  //提交入库
    objMap.name=$("#map_name").val()
    objMap.desc=$("#map_desc input:eq(0)").val()
    alert(JSON.stringify(objMap))
    
    $.ajax({
        type : 'POST',
        url : '.......',
        dataType : "json",
        data : JSON.stringify(objMap),    //把json转为String传递给后台        
       
        success : function(data) {
            alert("提交成功！")
        }
    });
        
    fresh()
}//close submit()

var pathLibrary=[]
function fresh(){   //刷新路线库
    for(let i=0;i<$("#luxianku ul:eq(0) li").length;i++){
        $("#luxianku ul:eq(0) li").remove()
    }

    $.ajax({
        type : 'get',
        url : 'http://140.143.183.49/paths/retrieve',
        dataType : "jsonp",
        error : function() {
            alert('发送失败');
        },
        success : function(data) {
            pathLibrary=data
            $("#luxianku li").empty();
            for(let i=0;i<data.length;i++){
                let li=$("<li data-id=\""+data[i].id+"\" onclick=\" lxk_click(this)\"><span>"+data[i].name+"</span><button onclick=\"ku_del(this)\"></button><button onclick=\"chakan()\"></button></li>")
                $("#luxianku ul:eq(0)").append(li)    
            }
            for(let i=0;i<data.length;i++){
                let li=$("<li data-id=\""+data[i].id+"\" onclick=\" lxk_click(this)\"><span>"+data[i].name+"</span><button onclick=\"ku_del(this)\"></button><button onclick=\"chakan()\"></button></li>")
                $("#luxianku ul:eq(0)").append(li)    
            }
            
        }
    });
}
fresh();
