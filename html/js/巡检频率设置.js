var obj={
    gepTime:"",
    shiftTime:"", 
    address1:[],
    address2:[]
}
var contacts1arr = new Array(), contacts2arr = new Array();
var li=undefined//当前选中的li
function liClick(x){
    $(x).parent().find(".select").removeClass("select");
    $(x).addClass("select")
    li=x;
}

function add1() {
    //添加到一级报警通讯录
    var man=$("#add_1_man").val()
    var number=$("#add_1_num").val()
    if (man == ""||number=="") {
        alert("不能为空！");
        return;
    }
    var tag = `<li  data-index=${contacts1arr.length}   onclick="liClick(this)" class="normal list-group-item"><span>${man}</span>,<span>${number}</span></li>`;
    $("#address1 ul:eq(0)").append(tag);
    $("#add_1_man").val("")
    $("#add_1_num").val("")
    
    var content={man:man,number:number} //人，号码
    contacts1arr.push(content);
    console.log(contacts1arr)
}

function add2() {
    //添加到二级报警通讯录
    var man=$("#add_2_man").val()
    var number=$("#add_2_num").val()
    if (man == ""||number=="") {
        alert("不能为空！");
        return;
    }
    var tag = `<li data-index=${contacts2arr.length} onclick="liClick(this)" class="normal list-group-item"><span>${man}</span>,<span>${number}</span></li>`;
    $("#address2 ul:eq(0)").append(tag);
    $("#add_2_man").val("")
    $("#add_2_num").val("")
    var content={man:man,number:number} //人，号码
    contacts2arr.push(content);
}

function del1(){  //从一级通讯录删除选中的某条
    var index=$(li).attr("data-index");
    $(li).remove();
    contacts1arr.splice(index,1)
    for (var i=0;i<contacts1arr.length;i++){
        $("#address1 li").eq(i).attr("data-index",i);
    }
}
function del2(){ //从二级通讯录删除选中的某条
    var index=$(li).attr("data-index");
    $(li).remove();
    contacts2arr.splice(index,1)
    for (var i=0;i<contacts2arr.length;i++){
        $("#address2 li").eq(i).attr("data-index",i);
    }
}


function set (){
    obj.gepTime=$("#gap_time").val();
    obj.shiftTime=$("#shift_time").val(); 
    console.log(obj)

    $.ajax({
        type : 'POST',
        url : '.......',
        dataType : "json",
        data : JSON.stringify(obj),    //把json转为String传递给后台        
        success : function(data) {
            alert("提交成功！")
        },
        error:function(){
            alert("提交失败！")
        }
    });
}

$('#accurate_time').jHsDate({
    format:'hh:mm'
});