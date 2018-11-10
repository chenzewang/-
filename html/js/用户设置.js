

document.getElementById("add").onclick = function () {
    document.getElementById("add_div").setAttribute("style", "display:block");
};

document.getElementsByClassName("pop-close")[0].onclick = function () {
    document.getElementById("add_div").setAttribute("style", "display:none");
};

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
    var tab = "<table id=\"map\"> \n                <thead><tr><th><input type=\"checkbox\"  /> <span class=\"x\"></></th> <th>\u59D3\u540D</th> <th>\u5DE5\u53F7</th> <th>\u4E13\u4E1A</th> <th>\u6743\u9650</th><th>\u7167\u7247</th> <th>\u529F\u80FD</th> </tr></thead>\n            ";
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td><input type=\"checkbox\"  /></td>";
        tab += "<td>" + ob[i].place + "</td>";
        tab += "<td>" + ob[i].statu + "</td>";
        tab += "<td>" + ob[i].active + "</td>";
        tab += "<td>" + ob[i].describe + "</td>";
        tab += "<td><button>\u67E5\u770B</button></td>";
        tab += "<td><button>\u529F\u80FD</button></td>";
        tab += "</tr>";
    }
    tab += "</table>";
    document.getElementById("graph").innerHTML = tab;
}
creatMap(obj);

$("#map thead input[type='checkbox']").click(function () {
    $("#map input[type='checkbox']").attr("checked", "true");
});
$("#map thead .x").click(function () {
    $("#map input[type='checkbox']").removeAttr("checked");
});