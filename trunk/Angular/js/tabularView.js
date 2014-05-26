$.noConflict(true);
var treegridData = new Object();
var counterForDropDown = 1;
var isVisited = true;
var filterResult = [1];
var filterResultForcheckBox = [1];
var AGC = [1];
var AGCForcheckBox = [1];
var counterForOrderDropDown = 0;
var counter = 2;
var case31Inputflag = "";



var controls = [
    "<input type='checkbox'  class='check' onchange='checkbox(this)' />",
    "<select  class='combo' style='display: none;' ><option>ASC</option><option>DESC</option></select>",
    "<select class='combo'  style='display: none;' ><option>1</option><option>2</option></select>",      //this is useless .i have handle it on click event of checkbox
    "<input type='checkbox' class='check' onchange='checkbox(this)' />",
    "<select class='hidden' style='display: none;'><option>Count</option><option>Dis. Count</option><option>Min </option><option>Max.</option></select>", // this is also useless .handle it on click event of checkbox
    "",
    "<input type='checkbox'class='check' onchange='checkbox(this)'>",
    "<button class='buttonCntrl' style='width: 25px;height: 20px;float: right;background-color: #C4DCFB;border-radius: 5px;'></button>",
    "<button class='buttonCntrl' style='width: 25px;height: 20px;float: right;background-color: #C4DCFB;border-radius: 5px;'></button>",
    "<button class='buttonCntrl' style='width: 25px;height: 20px;float: right;background-color: #C4DCFB;border-radius: 5px;'></button>",
    "<button class='buttonCntrl' style='width: 25px;height: 20px;float: right;background-color: #C4DCFB;border-radius: 5px;'></button>",
    "<select class='combo'><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option></select>",
    "",
    "<select class='combo'><option>true</option><option>false</option></select>",
    "<select class='combo'><option>true</option><option>false</option></select>",
    "<select class='combo'><option>true</option><option>false</option></select>",
    "<select class='combo'><option>true</option><option>false</option></select>",
    "<input type='color'  style='width: 100%;' />",
    "<button class='buttonCntrl' style='width: 25px;height: 20px;float: right;background-color: #C4DCFB;border-radius: 5px;'></button>",
    "<input type='checkbox' class='check' onchange='checkbox(this)'>",
    "<select class='combo' style='display: none;'><option>None</option><option>Rs</option><option>#</option><option>$</option></select>",
    "<select class='combo'style='display: none;' ><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>",
    "<select class='combo'style='display: none;'><option>true</option><option>false</option></select>",
    "<input type='checkbox' class='check' onchange='checkbox(this)' >",
    "<select class='combo' style='display: none;' ><option>Sequential</option><option>By Value</option></select>",
    "<select class='combo' style='display: none;'><option>Ascending</option><option>Descending</option></select>",
    "",
    "<button class='buttonCntrl' style='width: 25px;height: 20px;float: right;background-color: #C4DCFB;border-radius: 5px;'></button>",
    "<input type='checkbox' class='check' onchange='checkbox(this)'>",
    "<input type='checkbox' class='check'>",
    "<select class='combo' style='display: none;' ><option>Top</option><option>Bottom</option></select>",
    "<input type='number' min='1'  style='display: none;width: 100%' >",
    "<select class='combo'><option>Main report</option></select>",
    "<input type='checkbox' class='check' onchange='checkbox(this)'>",
    "",
    "",
    "<input type='checkbox'  class='check' onchange='checkbox(this)'>",
    "<select class='combo' style='display: none;'><option>None</option><option>Sum</option><option>Distinct Sum</option><option>Count</option><option>Distinct Count</option><option>Average</option><option>Distinct Average</option><option>Max.</option><option>Min.</option></select>",
    "",
    "<input type='checkbox'class='check' onchange='checkbox(this)' >",
    "<input type='color'  style='display: none;width: 100%;' >",
    "<input type='color' style='display: none;width: 100%;' >",
    "<input type='checkbox' class='check' onchange='checkbox(this)'>",
    "<input type='color'  style='display: none;width: 100%;'>",
    "<input type='color'  style='display: none; width: 100%;'>",
    "<select class='combo'><option>None</option><option>Sum</option><option>Distinct Sum</option><option>Count</option><option>Distinct Count</option><option>Average</option><option>Distinct Average</option><option>Max.</option><option>Min.</option></select>"



];
stateobj = new Object();
//this is use for unique ColModel
var counterForColmodel = 1;
var jso = {

    // FORMAT OF THE JSON IS BELOW

    //   level    parent     isLeaf     expanded    loaded

    "total": "1",
    "page": "1",
    "records": "2",
    "rows": [
        { "id": "2", "cell": ["2", "Sorting", "1", "1", "false", "false", "true"] },
        { "id": "3", "cell": ["3", "type", "2", "2", "true", "true", "true"] },
        { "id": "4", "cell": ["3", "Order", "2", "2", "true", "true", "true"] },

        { "id": "5", "cell": ["4", "Aggregation", "1", "1", "false", "false", "true"] },
        { "id": "6", "cell": ["5", "Summary Option", "2", "5", "true", "true", "true"] },//  1,2,2          1,2

        { "id": "7", "cell": ["6", "Highlight", "1", "1", "false", "false", "true"] },
        { "id": "8", "cell": ["7", "Apply To Row", "2", "7", "true", "true", "true"] },
        { "id": "9", "cell": ["7", "<div style='width: 25px;height: 15px;background-color: red;margin-left: 30px;'>  Red</div>", "2", "7", "true", "true", "true"] },
        { "id": "10", "cell": ["7", "<div style='width: 25px;height: 15px;background-color: orange;margin-left: 30px;'>  Orange</div>", "2", "7", "true", "true", "true"] },
        { "id": "11", "cell": ["7", "<div style='width: 25px;height: 15px;background-color: green;margin-left: 30px;'>  Green</div>", "2", "7", "true", "true", "true"] },


        { "id": "12", "cell": ["8", "Font", "1", "1", "false", "false", "true"] },
        { "id": "13", "cell": ["9", "Size", "2", "12", "true", "true", "true"] },
        { "id": "14", "cell": ["9", "Font Family", "2", "12", "true", "true", "true"] },
        { "id": "15", "cell": ["9", "Bold", "2", "12", "true", "true", "true"] },
        { "id": "16", "cell": ["9", "Italic", "2", "12", "true", "true", "true"] },
        { "id": "17", "cell": ["9", "Strikethrough", "2", "12", "true", "true", "true"] },
        { "id": "18", "cell": ["9", "Underline", "2", "12", "true", "true", "true"] },
        { "id": "19", "cell": ["9", "Colour", "2", "12", "true", "true", "true"] },
        { "id": "20", "cell": ["9", "Conditional Font", "2", "12", "true", "true", "true"] },


        { "id": "21", "cell": ["10", "Currency", "1", "1", "false", "false", "true"] },
        { "id": "22", "cell": ["11", "Symbol", "2", "21", "true", "true", "true"] },
        { "id": "23", "cell": ["11", "Decimal", "2", "21", "true", "true", "true"] },
        { "id": "24", "cell": ["11", "Separator", "2", "21", "true", "true", "true"] },


        { "id": "25", "cell": ["12", "Rank", "1", "1", "false", "false", "true"] },
        { "id": "26", "cell": ["13", "Rank Option", "2", "25", "true", "true", "true"] },
        { "id": "27", "cell": ["13", "Rank Sort", "2", "25", "true", "true", "true"] },



        { "id": "28", "cell": ["14", "Advance Options", "1", "1", "false", "false", "true"] },
        { "id": "29", "cell": ["15", "Popup Fields", "2", "28", "true", "true", "true"] },
        { "id": "30", "cell": ["15", "Split", "2", "28", "true", "true", "true"] },
        { "id": "31", "cell": ["15", "Filter Result", "2", "28", "true", "true", "true"] },
        { "id": "32", "cell": ["15", "Type", "2", "28", "true", "true", "true"] },
        { "id": "33", "cell": ["15", "Value", "2", "28", "true", "true", "true"] },


        { "id": "34", "cell": ["16", "Report Filter", "1", "1", "false", "false", "true"] },
        { "id": "35", "cell": ["17", "Filter Aggregation", "2", "34", "true", "true", "true"] },
        { "id": "36", "cell": ["17", "Filter Summary Option", "2", "34", "true", "true", "true"] },

        { "id": "37", "cell": ["18", "Column Formatting", "1", "1", "false", "false", "true"] },
        { "id": "38", "cell": ["19", "Column Separator", "2", "37", "true", "true", "true"] },
        { "id": "39", "cell": ["19", "Summary Option", "2", "37", "true", "true", "true"] },

        { "id": "40", "cell": ["20", "Row Formatting", "1", "1", "false", "false", "true"] },
        { "id": "41", "cell": ["21", "Alternate Row Colour", "2", "40", "true", "true", "true"] },
        { "id": "42", "cell": ["21", "Alternate Row Colour 1", "2", "40", "true", "true", "true"] },
        { "id": "43", "cell": ["21", "Alternate Row Colour 2", "2", "40", "true", "true", "true"] },
        { "id": "44", "cell": ["21", "Row Group", "2", "40", "true", "true", "true"] },
        { "id": "45", "cell": ["21", "Alternate Group Colour 1", "2", "40", "true", "true", "true"] },
        { "id": "46", "cell": ["21", "Alternate Group Colour 2", "2", "40", "true", "true", "true"] },
        { "id": "47", "cell": ["21", "Summary Option", "2", "40", "true", "true", "true"] }






    ]
};
OrignalModel = [];
OrignalName = [];
OrignalModel = [
    { name: 'id', index: 'id', resizable: true, width: 120, sortable: false, hidden: true },
    { name: 'desc', width: 220, sortable: false }];
OrignalName = ["ID", '<span style="color:Tomato">Properties</span>'];

function insertNodes(input,facename,facevalue,state,datatype,width){


    OrignalName.push(input);
    modelObj=new Object();


    modelObj['align']='center';
    modelObj['hidden']=false;
    modelObj['name']=input+counterForColmodel;
    modelObj['resizable']=true;
    modelObj['sortable']=false   ;
    modelObj['title']=true       ;
    modelObj['width']=width         ;
    modelObj['faceName']=facename;
    modelObj['faceValue']=facevalue;
    modelObj['state']=state;
    modelObj['datatype']=datatype;


    OrignalModel.push(modelObj);

    counterForColmodel++;

    for(var i=0;i<jso.rows.length;i++){
        jso.rows[i].cell.splice(jso.rows[i].cell.length-5,0,controls[i]);

    }


    $("#tree").jqGrid('GridUnload') ;

    $("#tree").jqGrid({
        datastr:jso,
        datatype: 'jsonstring',
        colNames: OrignalName,
        colModel: OrignalModel,
        treeGridModel:'adjacency',
        height:'auto',
        //sortable:true,
        sortable : { 
            update: function (perumtation) {
                for (i = 2; i < perumtation.length - 6; i++)
                {
                       alert(OrignalModel[i].name + " Position will change with " + $('#tree').jqGrid('getGridParam', 'colModel')[i].name);
                }
            },
        },
        rowNum: 10000,
        editable:true,
        readonly: false,
        shrinkToFit: false,
       

        //            width:'auto' ,
        treeGrid: true,
        ExpandColumn: 'desc',
        resizeStop: function (newWidth,index) {
            var $grid = $(this.bDiv).find('>div:first>table.ui-jqgrid-btable:first'),
                shrinkToFit = $('#tree').jqGrid('getGridParam', 'shrinkToFit');
            $('#tree').jqGrid('setGridWidth', this.newWidth, shrinkToFit);
           // OrignalModel[index].width = newWidth;
            increaseWidthOfColumnOnResize($('#tree').jqGrid('getGridParam', 'colModel')[index].name, newWidth);
        },
        loadComplete: function () {
            $('th').css("height", "35px");
            $('.tree-plus').parent().parent().css('background-color','#C4DCFB ');
            $('.tree-minus').parent().parent().css('background-color','#C4DCFB ');
            counterForDropDown=1;
            $('button').click(function(ev){
                var el = ev.target;
                if (el.nodeName !== "TD") {
                    el = $(el,this.rows).closest("td");
                }
                var iCol = $(el).index();
                var row = $(el,this.rows).closest("tr.jqgrow");
                var rowId = row[0].id;
                // alert("   col num is  " +iCol +"   row num is   " +rowId);

            });




            var cm = $("#tree").jqGrid("getGridParam", "colModel");
            $("th.ui-th-column").contextMenu('myMenu1', {

                bindings: {

                    caption: function (trigger) {
                        var $th = $(trigger).closest("th");
                        if ($th.length > 0) {
                            //var abc=new AddPerson;
                            var NewCaption = prompt("Please enter your name", "Enter The New Caption");
                            //                                abc.changeCapOfColumn(NewCaption,cm[$th[0].cellIndex].name);
                            $("#tree").jqGrid('setLabel', cm[$th[0].cellIndex].name, NewCaption);


                        }

                    }, removecolumns: function (trigger) {
                        var $th = $(trigger).closest("th");
                        if ($th.length > 0) {
                            for (var i = 2; i < OrignalModel.length; i++) {
                                if (OrignalModel[i].name == cm[$th[0].cellIndex].name) {
                                    $("#tree").jqGrid('hideCol', cm[$th[0].cellIndex].name);
                                    OrignalName.splice(i, 1);
                                    OrignalModel.splice(i, 1);

                                    // counterForColmodel--;
                                }
                            }



                            $th == null;


                        }

                    },
                    addgroups: function (trigger) {
                        var $th = $(trigger).closest("th");
                        if ($th.length > 0) {
                            // It will not work properly due the FREEZE COLUMN code :P

                            groupHeaders(cm[$th[0].cellIndex].name, 2, 'New Group');
                            undelegateEvents();





                            $th == null;


                        }

                    }

                },

                menuStyle: {
                    backgroundColor: '#fcfdfd',
                    border: '1px solid #a6c9e2',
                    maxWidth: '600px', // to be sure
                    width: '100%' // to have good width of the menu
                },
                itemHoverStyle: {
                    border: '1px solid #79b7e7',
                    color: '#1d5987',
                    backgroundColor: '#d0e5f5'
                }
            });
            $("#gview_tree th").click(function (ev) {
                if (ev.ctrlKey == true) {
                    alert("ctrl+click");
                }


            });



        },
        onSelectRow: function (id) {

        }   ,
        onCellSelect:function(rowid,  iCol,  cellcontent, e){

        }     ,
        //   beforeSelectRow is use to disable the highlight the row after clicking
        beforeSelectRow: function(rowid, e) {
            return false;
        }

    });



    $(".ui-jqgrid-titlebar").hide();
    /***********          VERY IMPORTANT          ************/
    //These line are using for freeze columns the DESC in   $("#jqgh_desc")  is a colModel.It can be changed SO if i change
    // this THEN i have to change here too  .
    //the span is define in ColModel do Description

    //        $('span').parent('td').css("position","fixed");
    //        $('span').parent('td').css("width","220px");
    //        $("#jqgh_desc").parent().css("position","fixed");
    //        //$("#jqgh_desc").parent().css("width","220px");

    /***********      END VERY IMPORTANT          ************/





}
function createSmallGrid () {
    $("#tree").jqGrid({
        datastr:jso,
        datatype: 'jsonstring',
        colNames: OrignalName,
        colModel: OrignalModel,
        treeGridModel:'adjacency',
        height:'auto',

        rowNum: 10000,
        editable:true,
        readonly:false,
        treeGrid: true,
        ExpandColumn:'desc'
    });
    $('th').css("height", "35px");
    $('.tree-plus').parent().parent().css('background-color', '#C4DCFB ');
    $('.tree-minus').parent().parent().css('background-color', '#C4DCFB ');

    

    var orgExpandNode = $.fn.jqGrid.expandNode,
        orgCollapseNode = $.fn.jqGrid.collapseNode;
    $.jgrid.extend({
        expandNode : function(rc) {
            //  alert('before expandNode: rowid="' + rc._id_ + '"');
            jso.rows[rc._id_-2].cell[jso.rows[rc._id_-2].cell.length-2]="true";
            return orgExpandNode.call(this, rc);
        },
        collapseNode : function(rc) {
            //alert('before collapseNode: rowid="' + rc._id_ + '", name="' + rc.name + '"');
            jso.rows[rc._id_-2].cell[jso.rows[rc._id_-2].cell.length-2]="false";
            return orgCollapseNode.call(this, rc);
        }
    });

    

    //For Same Sizing of Header And its corresponding Column
    $('.ui-jqgrid-hdiv').css("width",$('#tree').width()+"px");

}  
function groupHeaders(colname,total,text){

    $("#tree").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders:[
            {startColumnName: colname, numberOfColumns: total, titleText: text}
        ]
    });

}
function changeCapOfColumn(text,colModel){

    $("#tree").jqGrid('setLabel', colModel,text);

}
function checkbox(ev){
    var el = ev;

    if (el.nodeName !== "TD") {
        el = $(el,this.rows).closest("td");
    }
    var iCol="";
    iCol = $(el).index();
    var row = $(el,this.rows).closest("tr.jqgrow");
    var rowId = row[0].id;


    var checkerForSelections=0;

    $('input[type="color"]').css("height","15px");

    switch (rowId){


        case "2":
            var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name);
            if(ev.checked==true){
                counterForOrderDropDown++;
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);
                

                var opt='';
                for(var i=1;i<=counterForOrderDropDown;i++){
                    opt=opt+'<option>'+i+'</option>';
                    if(i==counterForDropDown)  {
                        opt =  opt.replace('<option>'+i+'</option>','<option selected>'+i+'</option>')   ;
                    }
                }

                var sele='<select  class="combo">'+opt+'</select>';
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name,sele);
                for(var j=0;j<$("#"+4).find('select').length;j++){
                    if ($("#"+4).find('select')[j].style.getPropertyValue('display')==null){




                        checkerForSelections++;
                        var  abcd=j+1;
                        selection=sele;
                        selection= selection.replace('selected','');
                        // $(selection).children()[j+1]='<option selected>'+checkerForSelections+'</option>';
                        selection=selection.replace('>'+checkerForSelections,' selected >'+checkerForSelections);
                        $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),OrignalModel[j+2].name,selection);

                        // alert($("#"+4).find('select')[j].style.getPropertyValue('display'))
                    }
                }

                jso.rows[rowId - 2].cell[iCol] = jso.rows[rowId - 2].cell[iCol].replace("class='check'", "class='check'  checked");
                jso.rows[rowId - 1].cell[iCol] = jso.rows[rowId - 1].cell[iCol].replace('none', 'inline');
              //  jso.rows[rowId].cell[iCol] = jso.rows[rowId].cell[iCol].replace('none', 'inline');
                counterForDropDown++;
            }
            else{
                counterForOrderDropDown--;
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$(rep).css("display","none")[0].outerHTML);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),iCol,$($('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML)
                jso.rows[rowId - 2].cell[iCol] = jso.rows[rowId - 2].cell[iCol].replace("checked", " ");
                jso.rows[rowId - 1].cell[iCol] = jso.rows[rowId - 1].cell[iCol].replace('inline', 'none');
               // jso.rows[rowId].cell[iCol] = jso.rows[rowId ].cell[iCol].replace('inline', 'none');
                counterForDropDown--;
            }
            break;


        case "5":

            if(ev.checked==true){

                var forVarchar= "<select class='combo' ><option>Count</option><option>Dis. Count</option><option>Min </option><option>Max.</option></select>";
                var forNumeric= "<select class='combo' ><option>Sum</option><option>Dis. Sum</option><option>Count</option><option>Dis. Count</option><option>Average</option><option>Dis. Average</option><option>Min </option><option>Max.</option></select>";
                if(OrignalModel[iCol].datatype=="varchar" ||  OrignalModel[iCol].datatype=="Varchar" ) {


                    $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,forVarchar);

                }
                else{
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,forNumeric);
                }

            }
            else{
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol," ");
            }
            break;


        case "21":
            if(ev.checked==true){
                var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);

                rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);

                rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+3).toString(),OrignalModel[iCol].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+3).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);
            }
            else{
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$($('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),iCol,$($('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+3).toString(),iCol,$($('#tree').jqGrid('getCell',(parseInt(rowId)+3).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);

            }
            break;


        case "25":
            if(OrignalModel[iCol].datatype=="varchar" ||  OrignalModel[iCol].datatype=="Varchar" ){
                ev.disabled="disabled";
                ev.checked=false;
            }
            else{
                if(ev.checked==true){
                    var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name);
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);

                    rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name);
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);
                }
                else{
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$($('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),iCol,$($('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);
                }
            }
            break;


        case "31":


            if(ev.checked==true){

                //                    if(case31Inputflag!=""){
                //                        case31Inputflag.originalEvent.target.checked=false;
                //
                //                    }
                //                    case31Inputflag=ev;
                var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),iCol);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);

                rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),iCol);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),iCol,$(rep).css("display","inline")[0].outerHTML);




                if(filterResult[filterResult.length-1]!=iCol){
                    filterResult.splice(filterResult.length+1,0,iCol)  ;
                    filterResultForcheckBox.splice(filterResultForcheckBox.length+1,0,ev);
                }
                if(filterResult.length>2){


                    filterResultForcheckBox[filterResultForcheckBox.length-2].originalEvent.target.checked=false
                    var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),filterResult[filterResult.length-2]);
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(), filterResult[filterResult.length-2],$(rep).css("display","none")[0].outerHTML);



                    rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(), filterResult[filterResult.length-2]);
                    $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),filterResult[filterResult.length-2],$(rep).css("display","none")[0].outerHTML);
                    break;
                }



            }
            else{
                var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),filterResult[filterResult.length-1]);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(), filterResult[filterResult.length-1],$(rep).css("display","none")[0].outerHTML);



                rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(), filterResult[filterResult.length-1]);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),filterResult[filterResult.length-1],$(rep).css("display","none")[0].outerHTML);

            }
            break;



        case "38":
            if(OrignalModel[iCol].datatype=="varchar" ||  OrignalModel[iCol].datatype=="Varchar" ||  OrignalModel[iCol].datatype=="date" ||  OrignalModel[iCol].datatype=="Date" ) {
                // alert("will not go there! Because datatype will be varchar OR date")   ;
            }
            else{

                if(ev.checked==true){
                    // alert(OrignalModel[iCol].datatype);
                    var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name);

                    $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name,$(rep).css("display","inline")[0].outerHTML);


                }
                else{
                    // $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name,$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name).replace(">"," class='hidden'>"));
                }
            }
            break;



        case "41":
            if(ev.checked==true){


                var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name,$(rep).css("display","inline")[0].outerHTML);

                rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name,$(rep).css("display","inline")[0].outerHTML);
            }
            else{
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name,$($('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name,$($('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name)).css("display","none")[0].outerHTML);

            }
            break;
        case "44":
            var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name);
            $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),OrignalModel[iCol].name,$(rep).css("display","inline")[0].outerHTML);

            rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name);
            $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),OrignalModel[iCol].name,$(rep).css("display","inline")[0].outerHTML);

            if(AGC[AGC.length-1]!=iCol){
                AGC.splice(AGC.length+1,0,iCol)  ;
                AGCForcheckBox.splice(AGCForcheckBox.length+1,0,ev);
            }
            if(AGC.length>2){


                AGCForcheckBox[AGCForcheckBox.length-2].target.checked=false;
                var rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+1).toString(),OrignalModel[ AGC[AGC.length-2]].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+1).toString(),OrignalModel[ AGC[AGC.length-2]].name,$(rep).css("display","none")[0].outerHTML);




                rep=$('#tree').jqGrid('getCell',(parseInt(rowId)+2).toString(),OrignalModel[ AGC[AGC.length-2]].name);
                $("#tree").jqGrid('setCell',(parseInt(rowId)+2).toString(),OrignalModel[ AGC[AGC.length-2]].name,$(rep).css("display","none")[0].outerHTML);
            }


            break;

    }



    ev.stopPropagation();


}
function exportGrid() {
    var table = "tree";
    mya = $("#" + table).getDataIDs(); // Get All IDs
    var data = $("#" + table).getRowData(mya[0]); // Get First row to get the
    // labels
    var colNames = new Array();
    var ii = 0;
    for (var i in data) {
        colNames[ii++] = i;
    } // capture col names

    var html = "<html><head>"
            + "<style script=&quot;css/text&quot;>"
            + "table.tableList_1 th {border:1px solid black; text-align:center; "
            + "vertical-align: middle; padding:5px;}"
            + "table.tableList_1 td {border:1px solid black; text-align: left; vertical-align: top; padding:5px;}"
            + "</style>"
            + "</head>"
            + "<body style=&quot;page:land;&quot;>";


    for (var k = 0; k < colNames.length; k++) {
        html = html + "<th>" + colNames[k] + "</th>";
    }
    html = html + "</tr>"; // Output header with end of line
    for (i = 0; i < mya.length; i++) {
        html = html + "<tr>";
        data = $("#" + table).getRowData(mya[i]); // get each row
        for (var j = 0; j < colNames.length; j++) {
            html = html + "<td>" + data[colNames[j]] + "</td>"; // output each Row as
            // tab delimited
        }
        html = html + "</tr>"; // output each row with end of line
    }
    html = html + "</table></body></html>"; // end of line at the end
    alert(html);
    html = html.replace(/'/g, '&apos;');
    //  var form = "<form name='pdfexportform' action='generategrid' method='post'>";
    //  form = form + "<input type='hidden' name='pdfBuffer' value='" + html + "'>";
    //  form = form + "</form><script>document.pdfexportform.submit();</sc"
    //      + "ript>";
    //  OpenWindow = window.open('', '');
    //  OpenWindow.document.write(form);
    //  OpenWindow.document.close();
}
function increaseWidthOfColumnOnResize(ModelName,newWidth) {
    for (var i = 2; i < OrignalModel.length ;i++){
        if (OrignalModel[i].name == ModelName) {
            OrignalModel[i].width = newWidth;
            i = OrignalModel.length;
        }
    }

}
