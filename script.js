var input =document.getElementById('inpDiv');
var btn=document.getElementById('btnsub');
var outt=document.getElementById('out');
outt.addEventListener("click",WriteToFile);
btn.addEventListener("click", makeform);

var list=["شماره حساب","حقوق خام","بدهی ها","جریمه","دشت","هزینه نهار","هزینه سیستم","حق بیمه"];
var patternlist=["26","10","10","10","10","10","10","10"]
var xcounter=0;

document.onkeypress = function(evt) {
  if (evt.keyCode == 13) {
   evt.preventDefault();
         btn.click();
  }
};


function makeform()

{
  var h3maker = document.createElement("h3");
  h3maker.innerHTML=document.getElementById('nameinput').value;
      h3maker.setAttribute('maxlength','30');
      h3maker.setAttribute('id',"name"+xcounter.toString());
  input.appendChild(h3maker);
  document.getElementById('nameinput').value="";


  var divmaker = document.createElement("div");
  divmaker.setAttribute('class',' border-black flex border rounded mb-3');
  divmaker.setAttribute('id',"divv"+xcounter);
  input.appendChild(divmaker);
  for (var i = 0; i < list.length; i++) {
  var inputmaker = document.createElement("input");
    inputmaker.setAttribute('type', 'number');
    inputmaker.addEventListener('keyup',calculator);
    inputmaker.setAttribute('id',xcounter.toString()+i.toString());
    inputmaker.setAttribute('maxlength',patternlist[i]);
    inputmaker.setAttribute('class', 'px-2 focus:outline-none border-l w-32 border-black h-12');
    inputmaker.setAttribute('placeholder',list[i]);
    divmaker.appendChild(inputmaker);
  }
  var h4maker=document.createElement("input");
  h4maker.setAttribute('class','text-center h-12 py-3 px-1 w-32')
  h4maker.setAttribute('id',"sum"+xcounter);
  h4maker.setAttribute('readonly',"readonly");
  divmaker.appendChild(h4maker);


  var deletebutton=document.createElement("button");
  deletebutton.innerHTML="حذف";
  deletebutton.setAttribute('dir','ltr');
  deletebutton.setAttribute('class','bg-red-500 rounded-full h-8 p-1 my-auto mr-0 text-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ');
  deletebutton.setAttribute('id',"del"+xcounter);
  divmaker.appendChild(deletebutton);

  var temp =xcounter;
  $('#del'+xcounter).bind("click",function(){
    $('#divv'+temp).attr('deleted','true');
    $('#divv'+temp).hide();
    $('#name'+temp).hide();
  });


    //bigger first input
    document.getElementById(xcounter+"0").setAttribute('style','width:200px !important;');

    //counter div in header
    $("#counterdiv").attr('value',xcounter+1);

xcounter++;
}


var sumlist=[];
var sum=0;
function calculator()
{
  for (var i = 0; i <= xcounter; i++) {
// var sumx=document.getElementById("sum"+i);

    var x1=document.getElementById(i+"1").value;
    var x2=document.getElementById(i+"2").value;
    var x3=document.getElementById(i+"3").value;
    var x4=document.getElementById(i+"4").value;
    var x5=document.getElementById(i+"5").value;
    var x6=document.getElementById(i+"6").value;
    var x7=document.getElementById(i+"7").value;

    sum=x1-x2-x3-1*-x4-x5-x6-x7;
      document.getElementById("sum"+i).value=sum;

      }
}


function WriteToFile()
{
var outterdiv=document.getElementById('outter');
outterdiv.innerHTML="";

  for (var i = 0; i < xcounter; i++) {
    if (!document.getElementById("divv"+i).hasAttribute('deleted')) {

      var rndm=Math.floor(Math.random()*100);
        var h2maker=document.createElement("h2");
        h2maker.setAttribute('dir','ltr');
        h2maker.innerHTML=
document.getElementById("sum"+i).value+","
+document.getElementById(i+"0").value+","
+rndm+","
+document.getElementById("name"+i).innerHTML
        outterdiv.appendChild(h2maker);
        $('#divv'+i).attr('deleted','true');
        $('#divv'+i).hide();
        $('#name'+i).hide();
    }
  }


 }
