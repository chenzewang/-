
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
    var tab = "<table id=\"map\"> \n <thead><tr><th>NFC\u7F16\u53F7</th> <th>\u5DE1\u68C0\u533A\u57DF\u540D\u79F0</th> <th>mac</th> <th>\u5220\u9664</th> <th>\u6FC0\u6D3B</th> </tr></thead>\n            ";
        tab+="</table><div id='graph1_tab2_box'><table>";
        
    
    for (var i = 0; i < hang; i++) {
        if (ob[i].active == false) {
            tab += "<tr class=\"tr_noactive\">";
            tab += "<td>" + ob[i].num + "</td>";
            tab += "<td>" + ob[i].place + "</td>";
            tab += "<td>" + ob[i].tag + "</td>";
            tab += "<td><button>\u5220\u9664</button></td>";
            tab += "<td><button class=\"but_noactive\">\u6FC0\u6D3B</button></td>";
            tab += "</tr>";
        } else {
            tab += "<tr class=\"tr_active\">";
            tab += "<td>" + ob[i].num + "</td>";
            tab += "<td>" + ob[i].place + "</td>";
            tab += "<td>" + ob[i].tag + "</td>";
            tab += "<td><button>\u5220\u9664</button></td>";
            tab += "<td><button class=\"but_active\">\u53D6\u6D88\u6FC0\u6D3B</button></td>";
            tab += "</tr>";
        }
    }
    tab += "</div></table>";
    document.getElementById("graph1").innerHTML = tab;
}
creatMap(obj);