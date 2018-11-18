var li=undefined//当前选中的li
var index//当前选中的li在其父元素的位置
var obj={
    gepTime:"",
    shiftTime:"", 
    address1:[],
    address2:[]
}

function liClick(x){
    $(li).removeClass("select");
    li=x;
    $(li).addClass("select")
    index=$(li).index()
}

function add1() {
    //添加到一级报警通讯录
    var content = $("#add_input1").val();
    if (content == "") {
        alert("不能为空！");
        return;
    }
    var tag = "\n        <li  index=\"" + obj.address1.length + "\" class=\"normal\" onclick=\"liClick(this)\">" + content + "</li>\n    ";
    $("#address1 ul:eq(0)").append(tag);
    obj.address1.push(content);
    $("#add_input1").val("");
    
}

function add2() {
    //添加到二级报警通讯录
    var content = $("#add_input2").val();
    if (content == "") {
        alert("不能为空！");
        return;
    }
    var tag = "\n        <li index=\"" + obj.address2.length + "\" class=\"normal\" onclick=\"liClick(this)\">" + content + "</li>\n    ";
    $("#address2 ul:eq(0)").append(tag);

    obj.address2.push(content);
    $("#add_input2").val("");
    
}

function del1(){  //从一级通讯录删除选中的某条
    $(li).remove();
    obj.address1.splice(index,1)
    scrollsY(".scrollbox");
    
}
function del2(){ //从二级通讯录删除选中的某条
    $(li).remove();
    obj.address2.splice(index,1)
    
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

