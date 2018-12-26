function liClick(x){
    for(var i=0;i<11;i++){
      $("#menu li").removeClass("looking")
        // document.getElementById('menu').getElementsByTagName("li")[i].classList.remove("looking");           
        }
    $(x).addClass("looking");
}

function addEvent(){
    for(var i=0;i<10;i++){
        document.getElementById('menu').getElementsByTagName("li")[i].setAttribute('onclick','liClick(this)')

    }
}
addEvent();







$(document).on('click','#myTab > li',function(e){
    var oldTab = $("#myTab li.active").removeClass("active").find("a[data-toggle='tab']");
    $(oldTab.attr("data-url")).removeClass("active");
    //设置新的显示tab页
    var newTab = $(this).addClass("active").find("a[data-toggle='tab']");
    $(newTab.attr("data-url")).addClass("active");
    
    refreshTabHistory(false/*isDelete*/,$(this).attr('id').substring(4));
  })
  //手动调用切换到要显示的tab页,当前的action只支持show
  //eg:$("#tab-0 a[data-toggle='tab']").tab("show");
  $.fn.tab = function(action){
    if(action == "show"){
      $(this).parent().click();
    }
  }

  var currentTabId = '';//当前焦点Tab
  //在非左侧菜单栏弹出的tab页也会用到该数据，如common.js中的pageForward函数
  var pageCounter = 0;
  /*
  id:       tab页签的html标签ID属性格式为"tab-"+id，内容容器的html标签ID格式为"tab-content-"+id
  text:     tab页签的显示文本
  url:      打开的iframe的url
  innerTab: 是否是内部弹出页（打开的tab页触发添加新的tab页），默认为undefined/false
  */
  function addTab(text,url,innerTab) {
    //如果某个页面已经打开，则切换到该页显示即可，不会新添加tab页
  

    // if($('#myTab #tab-'+id).length > 0){
    //   $('#myTab  #tab-' + id + ' a').tab('show');
    // }else{
      

      var id=$("#myTab li").length;

      var tab_id = "tab-" + id,

      tab_content_id = "tab-content-"+id;

      //添加tab页签
      $("#myTab > li").removeClass("active");
      $("#myTab").append("<li id='" + tab_id + "' class='active'><a data-toggle='tab' data-url='#"
        + tab_content_id + "'>" + text + "</a>"
        + ("<i class='fa fa-times' onclick='deleteTab(\"" + id + "\")'></i>") + "</li>");
      
      //添加新的内容显示
      $(".tab-content > div").removeClass("active");
      $(".tab-content").append("<div id='"+ tab_content_id +"' class='active'>"
        + "<iframe id='iframepage" + (pageCounter++) + "' name='iframepage" + (pageCounter+1) 
        + "' width='100%' height='100%' frameborder='0' border='0' scrolling='no'  src='" + url + "'></iframe></div>");      
    // }
    //刷新切换tab的历史记录
    refreshTabHistory(false/*isDelete*/,id);
    refreshWidth();
    //重新设置tab页签的宽度
  }
  //参数id为tab的标志，但是并不是tab页的id属性，真正的id属性值是"tab-"+id
  function deleteTab(id){
    var tabJQ = $("#tab-"+id),
    tabContentJQ = $("#tab-content-" + id);    
    
    if(!tabJQ.hasClass("active")){
      tabJQ.remove();
      tabContentJQ.remove();
      refreshTabHistory(true/*isDelete*/,id);
    }else{    
      tabJQ.remove();
      tabContentJQ.remove();
      refreshTabHistory(true/*isDelete*/,id);
      $('#tab-' + currentTabId + ' > a').tab('show');
    }
    refreshWidth();
  }
  //关闭当前tab页的快速方法
  function closeCurrentTab(){
    deleteTab(currentTabId);
  }

  /*
  刷新页签切换历史
  isdelete: 是否是删除tab页签,true:是，false：否
  curTabId：要处理的tab页签的id,tab页签html标签元素的ID属性格式为"tab-"+curTabId
  */
  function refreshTabHistory(isdelete,curTabId){
    if(!refreshTabHistory.histoty){
      //用来记录用户点击tab的历史
      refreshTabHistory.histoty = [];
    }
    var index = 0,
    leng = refreshTabHistory.histoty.length;
    //查找传入的tab页签在历史记录中的位置
    for(; index < leng; index++){
      if(refreshTabHistory.histoty[index] == curTabId){
        break;
      }
    }
    
    //如果是删除页签，直接在历史记录中删除即可，历史记录的其他页签的顺序不变
    if(isdelete){
      refreshTabHistory.histoty.splice(index,1);

    //如果是新增页签，先保证历史记录中没有改页签（有就删掉），然后将新增的页签放在历史记录的最后面（即该页签为最新）
    }else{
      if(index < leng) {
        refreshTabHistory.histoty.splice(index,1);
      }
      refreshTabHistory.histoty.push(curTabId);
    }
    currentTabId = refreshTabHistory.histoty[refreshTabHistory.histoty.length - 1];
  }


  function refreshWidth(){
    var panelWidth = $('#myTab').width() /*可用的宽度     */, 
    
    tabs = $('#myTab > li'),
    tabContentAverageWidth = 0/*tab > a标签的宽度*/,
    minTabAverageWidth = 28//最小宽度,
    zeroContentTabWidth = 28//a标签为0时li的宽度
    aPaddingLeft = 5/*tab > a标签的padding-left默认是10，当averageWidth< 35需要调整*/;
    
    averageWidth = parseInt(panelWidth/(tabs.length),10);// 每个tab可用的宽度

    if(averageWidth >= zeroContentTabWidth){     
      tabContentAverageWidth = averageWidth - zeroContentTabWidth;
      
    /*35 > averageWidth >= 25*/ 
    }else if(averageWidth >= minTabAverageWidth){
      tabContentAverageWidth = 0;
      aPaddingLeft = averageWidth - minTabAverageWidth;
      
    //averageWidth < 25
    }else{
      tabContentAverageWidth = 0;
      aPaddingLeft = 0;
    }
    //tab页签名称元素a标签的宽度和padding-left。这个是在box-sizing:border-box。的情况下
    tabs.find('>a').css({'width':(tabContentAverageWidth-10 + aPaddingLeft),'padding-left':aPaddingLeft});
  }