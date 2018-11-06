
function addEvent() {
    for (var i = 0; i < $("#map li").length; i++) {
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("onclick", "liClick(this)");
    }
}
addEvent();
function liClick(x) {
    //按巡检路线查找的点选效果
    for (var i = 0; i < $("#map li").length; i++) {
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("style", "color:white");
    }
    x.setAttribute("style", "color:orange");
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

var objMap = {
    id: 0,
    name: "线路1", //路线名字
    spotnum: 8, //设备点数
    specified: true, //是否固定
    arrangeable: false, //是否自由
    desc: "", //路线描述
    created_at: "", //路线创建时间
    updated_at: "", //路线修改时间  //这条路线的各个点
    spots: [{
        id: 1,
        name: "asd",
        desc: "asd",
        tmp: false,
        created_at: "",
        updated_at: "",
        checked: true, //true 查过了   false 未查
        items: [{
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "0",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50", //当前值
            value: true,
            pass: false
        }]
    }, {
        id: 1,
        name: "asd",
        desc: "asd",
        tmp: true,
        created_at: "",
        updated_at: "",
        checked: true,
        items: [{
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            value: false,
            pass: true
        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            value: false,
            pass: true

        }]
    }, {
        id: 1,
        name: "asd",
        desc: "asd",
        tmp: false,
        created_at: "",
        updated_at: "",
        checked: true,
        items: [{
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            value: true,
            pass: true
        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            value: true,
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            data: "50",
            value: false,
            pass: false,
            updated_at: "巡检条目修改时间"
        }]
    }, {
        id: 1,
        name: "asd",
        desc: "asd",
        tmp: false,
        created_at: "",
        updated_at: "",
        checked: true,
        items: [{
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            pass: false

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            value: false,
            pass: true

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            updated_at: "巡检条目修改时间",
            data: "50",
            value: false,
            pass: true

        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            data: "50",
            value: false,
            pass: false,

            updated_at: "巡检条目修改时间"
        }, {
            id: "1",
            content: "内容",
            unit: "位",
            itemtype: "1",
            st_min: "23",
            st_max: "45",
            al_min: "30",
            al_max: "40",
            created_at: "巡检条目创建时间",
            data: "50",
            value: false,
            pass: true,

            updated_at: "巡检条目修改时间"
        }]
    }]
};

function creatGraph1(ob) {
    //生成路线框图

    var lie = 5;
    var hang = ob.length;
    var tab = "<table > \n                <thead><tr><th>\u5E8F\u53F7</th> <th>\u65F6\u95F4</th> <th>\u5DE1\u68C0\u4EBA</th> <th>\u5F02\u5E38\u6458\u8981</th> <th>\u64CD\u4F5C</th></tr></thead>\n              ";
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].num + "</td>";
        tab += "<td>" + ob[i].time + "</td>";
        tab += "<td>" + ob[i].man + "</td>";
        tab += "<td>" + ob[i].digest + "</td>";
        tab += "<td><button onclick=\"chakan2()\">\u67E5\u770B\u8BE6\u60C5</button></td>";
        tab += "</tr>";
    }
    tab += "</table>";
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
        var tab = "<table > \n                    <thead><tr><th>" + spots[j].name + "</th></tr></thead>"; //标题(spot名)

        for (var i = 0; i < spots[j].items.length; i++) {
            tab += "<tr>";
            tab += "<td>" + spots[j].items[i].content + "</td>";

            if (spots[j].items[i].pass == true) {

                if (spots[j].items[i].value == false) {
                    tab += "<td >\u901A\u8FC7</td>";
                } else {
                    tab += "<td>\n                                <div class=\"value value_left \">\u5DE1\u68C0\u503C\uFF1A " + spots[j].items[i].data + "</div>\n                                <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + spots[j].items[i].st_max + " \u8B66\u6212\u503C\uFF1A" + spots[j].items[i].al_max + "</div>\n                            </td>";
                }
            } else {
                if (spots[j].items[i].value == false) {
                    tab += "<td class=\"no_pass\">\u672A\u901A\u8FC7</td>";
                } else {
                    tab += "<td>\n                                <div class=\"value value_left no_pass\">\u5DE1\u68C0\u503C\uFF1A " + spots[j].items[i].data + "</div>\n                                <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + spots[j].items[i].st_max + " \u8B66\u6212\u503C\uFF1A" + spots[j].items[i].al_max + "</div>\n                            </td> ";
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
    var tab = "<table > \n                <thead> <th>\u5DE1\u68C0\u65F6\u95F4</th> <th>\u5DE1\u68C0\u8DEF\u7EBF</th> <th>\u5DE1\u68C0\u4EBA</th> <th>\u8BE6\u60C5</th></tr></thead>\n                ";
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
    var hang = ob.length;
    var tab = "<table > \n                <thead><tr><th>\u65F6\u95F4</th> <th>\u8BBE\u5907</th> <th>\u8BE6\u60C5</th> <th>\u67E5\u770B\u8BE6\u60C5</th> </tr></thead>\n            ";
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].time2 + "</td>";
        tab += "<td>" + ob[i].project + "</td>";
        tab += "<td>" + ob[i].describe + "</td>";
        tab += "<td><button onclick=\"chakan4()\">" + ob[i].breakMessage + "</button></td>";
        tab += "</tr>";
    }
    tab += "</table>";
    document.getElementById("graph4").innerHTML = tab;
}
creatGraph4(obj);

function creatGraph5(ob) {
    //生成路线框图

    var hang = ob.length;
    var tab = "<table > \n                <thead><tr><th>\u5DE1\u68C0\u5185\u5BB9</th> <th>\u5DE1\u68C0\u503C</th></tr></thead>\n            ";
    for (var i = 0; i < hang; i++) {
        tab += "<tr>";
        tab += "<td>" + ob[i].content + "</td>";

        if (ob[i].pass == true) {

            if (ob[i].value == false) {
                tab += "<td >\u901A\u8FC7</td>";
            } else {
                tab += "\n                                <td>\n                                    <div class=\"value value_left \">\u5DE1\u68C0\u503C\uFF1A " + ob[i].data + "</div>\n                                    <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + ob[i].st_max + " \u8B66\u6212\u503C\uFF1A" + ob[i].al_max + "</div>\n                                </td>\n                            ";
            }
        } else {

            if (ob[i].value == false) {
                tab += "<td class=\"no_pass\">\u672A\u901A\u8FC7</td>";
            } else {
                tab += "\n                                <td>\n                                    <div class=\"value value_left no_pass\">\u5DE1\u68C0\u503C\uFF1A " + ob[i].data + "</div>\n                                    <div class=\"value value_right\">\u6807\u51C6\u503C\uFF1A" + ob[i].st_max + " \u8B66\u6212\u503C\uFF1A" + ob[i].al_max + "</div>\n                                </td>\n                            ";
            }
        }
    }
    tab += "</table>";
    document.getElementById("graph5").innerHTML = tab;
}
creatGraph5(objMap.spots[3].items);

function chakan4() {
    document.getElementById("record1").setAttribute("style", "display:none");
    document.getElementById("record4").setAttribute("style", "display:none");
    document.getElementById("record5").setAttribute("style", "display:block");
}



scrollsY(".scrollbox");

