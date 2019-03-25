$(document).ready(function () {
    // $("#detail_power_select").click(function () {
    //     $("#detail_power_option").show()
    //     return false;
    // });
    // $(document).on('click',':not(.detail_power_select)',function(){
    //     $("#detail_power_option").hide();
    // })

    // $("#add_select").click(function () {
    //     $("#add_option").show()
    //     return false;
    // });
    // $(document).on('click',':not(#add_select)',function(){
    //     $("#add_option").hide();
    // })




})
// document.getElementById("add").onclick = function () {
//     document.getElementById("add_div").setAttribute("style", "display:block");
// };

// document.getElementsByClassName("pop-close")[0].onclick = function () {
//     document.getElementById("add_div").setAttribute("style", "display:none");
// };

function chakan() {
    document.getElementById("background").setAttribute("style", "display:none");
    document.getElementById("record").setAttribute("style", "display:block");
}

var obj = [{
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: false
}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: false

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}, {
    num: "2",
    place: "20180611",
    tag: "陈某",
    statu: "多处破损",
    xy: "(12,54)",
    describe: "看起来还行应该没坏",
    active: true

}];


function creatMap(ob) {
    //生成路线框图

    var lie = 6;
    var hang = ob.length;
    var tab = "<table class=\"table\">  <thead><tr><th>选择</th> <th>姓名</th> <th>工号</th> <th>专业</th> <th>权限</th><th>照片</th> </tr></thead>";
        tab+="</table><div id='grapg_table2_box'><table id=\"map\" class=\"table table-condensed table-hover table-striped\" >"
    
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td><input type=\"checkbox\"  /></td>";
        tab += "<td>" + ob[i].place + "</td>";
        tab += "<td>" + ob[i].statu + "</td>";
        tab += "<td>" + ob[i].active + "</td>";
        tab += "<td>" + ob[i].describe + "</td>";
        tab += "<td><button class=\"btn\">\u67E5\u770B</button></td>";
        // tab += "<td><button>\u529F\u80FD</button></td>";
        tab += "</tr>";
    }
    tab += "</table></div>";
    document.getElementById("graph").innerHTML = tab;
}
creatMap(obj);

// $("#graph thead input[type='checkbox']").click(function () {
//     if($("#map input[type='checkbox']").eq(0).attr("checked")){
//         $("#graph thead input[type='checkbox']").prop('checked',false);
//     }else{
//         $("#graph thead input[type='checkbox']").prop('checked',true);
//     }
//     console.log($("#map thead input[type='checkbox']").eq(0).attr("checked"))
//     // $("#map input[type='checkbox']").attr("checked", "true");
//     // console.log($("#map input[type='checkbox']").attr("checked"))
// });
// $("#graph thead .x").click(function () {
//     $("#map input[type='checkbox']").removeAttr("checked");
// });



// function detailPowerClick(x){
//     for(var i=0;i<2;i++){
//         $("#detail_power_option li").removeClass("looking");   
//         }
//     $(x).addClass("looking");
//     $("#user_right").eq(0).text( $(x).text() );
//     $("#user_right").eq(0).attr("value",$(x).attr("value"))
// }







// function addPowerClick(x){
//     for(var i=0;i<2;i++){
//         $("#add_option li").removeClass("looking");   
//         }
//     $(x).addClass("looking");
//     $("#add_select span").eq(0).text( $(x).text() );
//     $("#add_select span").eq(0).attr("value",$(x).attr("value"))
// }