"use strict";

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
}];

function creatGraph2(ob) {
    //生成路线框图

    var lie = 5;
    var hang = ob.length;
    var tab = "<table > \n                <thead><tr><th>\u9001\u68C0\u70B9</th> <th>\u72B6\u6001</th> <th>\u5DE1\u68C0\u503C</th> <th>\u6807\u51C6\u503C</th> <th>\u6545\u969C\u4FE1\u606F\u63CF\u8FF0</th></tr></thead>              \n                ";
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].dian + "</td>";
        tab += "<td>" + ob[i].statu + "</td>";
        tab += "<td>" + ob[i].value + "</td>";
        tab += "<td>" + ob[i].normalValue + "</td>";
        tab += "<td>" + ob[i].describe + "</td>";
        tab += "</tr>";
    }
    tab += "</table>";
    document.getElementById("graph2").innerHTML = tab;
}
creatGraph2(obj);