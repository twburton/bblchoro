
//svg1=document.getElementById('svg1');
svg2=document.getElementById('svg2');
svgcanada=document.getElementById('canada');
svgmexico=document.getElementById('mexico');
svgworld=document.getElementById('world');
legend1=document.getElementById('legend1');
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security
var rowson = document.getElementsByClassName("rowson");
var rowsoff = document.getElementsByClassName("rowsoff");
var rowson2 = document.getElementsByClassName("rowson2");
var rowsoff2 = document.getElementsByClassName("rowsoff2");
//file:///K:/BBL/int_maps/pages/index.html
$("#AK").css('stroke-width', '3');
$("#AL").css('stroke-width', '3');
$("#AZ").css('stroke-width', '3');
$("#AR").css('stroke-width', '3');
$("#CA").css('stroke-width', '3');
$("#CO").css('stroke-width', '3');
$("#CT").css('stroke-width', '3');
$("#DE").css('stroke-width', '3');
$("#FL").css('stroke-width', '3');
$("#GA").css('stroke-width', '3');
$("#HI").css('stroke-width', '3');
$("#ID").css('stroke-width', '3');
$("#IL").css('stroke-width', '3');
$("#IN").css('stroke-width', '3');
$("#IA").css('stroke-width', '3');
$("#KS").css('stroke-width', '3');
$("#KY").css('stroke-width', '3');
$("#LA").css('stroke-width', '3');
$("#ME").css('stroke-width', '3');
$("#MD").css('stroke-width', '3');
$("#MA").css('stroke-width', '3');
$("#MI").css('stroke-width', '3');
$("#MN").css('stroke-width', '3');
$("#MS").css('stroke-width', '3');
$("#MO").css('stroke-width', '3');
$("#MT").css('stroke-width', '3');
$("#NE").css('stroke-width', '3');
$("#NV").css('stroke-width', '3');
$("#NH").css('stroke-width', '3');
$("#NJ").css('stroke-width', '3');
$("#NM").css('stroke-width', '3');
$("#NY").css('stroke-width', '3');
$("#NC").css('stroke-width', '3');
$("#ND").css('stroke-width', '3');
$("#OH").css('stroke-width', '3');
$("#OK").css('stroke-width', '3');
$("#OR").css('stroke-width', '3');
$("#PA").css('stroke-width', '3');
$("#RI").css('stroke-width', '3');
$("#SC").css('stroke-width', '3');
$("#SD").css('stroke-width', '3');
$("#TN").css('stroke-width', '3');
$("#TX").css('stroke-width', '3');
$("#UT").css('stroke-width', '3');
$("#VT").css('stroke-width', '3');
$("#VA").css('stroke-width', '3');
$("#WA").css('stroke-width', '3');
$("#WV").css('stroke-width', '3');
$("#WI").css('stroke-width', '3');
$("#WY").css('stroke-width', '3');
//canada//
$("#AB").css('stroke-width', '3');
$("#BC").css('stroke-width', '3');
$("#MAN").css('stroke-width', '3');
$("#NB").css('stroke-width', '3');
$("#LAB").css('stroke-width', '3');
$("#NS").css('stroke-width', '3');
$("#NT").css('stroke-width', '3');
$("#NU").css('stroke-width', '3');
$("#ONT").css('stroke-width', '3');
$("#PE").css('stroke-width', '3');
$("#PQ").css('stroke-width', '3');
$("#SK").css('stroke-width', '3');
$("#YT").css('stroke-width', '3');
//mexico//
$("#PUEBLA").css('stroke-width', '3');
$("#COLIMA").css('stroke-width', '3');
$("#JALISCO").css('stroke-width', '3');

//svg2.style.display = 'none';
//svg1.style.display = 'none';
svg2.style.display = 'block';
svgcanada.style.display = 'none';
svgworld.style.display = 'none';
svgmexico.style.display = 'none';
$('#chorotitle').text("Map based on birds banded");
function hideselectcanada(){
$("#AB").css('stroke', '');
$("#BC").css('stroke', '');
$("#MAN").css('stroke', '');
$("#NB").css('stroke', '');
$("#LAB").css('stroke', '');
$("#NS").css('stroke', '');
$("#NT").css('stroke', '');
$("#NU").css('stroke', '');
$("#ONT").css('stroke', '');
$("#PE").css('stroke', '');
$("#PQ").css('stroke', '');
$("#SK").css('stroke', '');
$("#YT").css('stroke', '');
}

function hideselect(){

$("#AK").css('stroke', '');
$("#AL").css('stroke', '');
$("#AZ").css('stroke', '');
$("#AR").css('stroke', '');
$("#CA").css('stroke', '');
$("#CO").css('stroke', '');
$("#CT").css('stroke', '');
$("#DE").css('stroke', '');
$("#FL").css('stroke', '');
$("#GA").css('stroke', '');
$("#HI").css('stroke', '');
$("#ID").css('stroke', '');
$("#IL").css('stroke', '');
$("#IN").css('stroke', '');
$("#IA").css('stroke', '');
$("#KS").css('stroke', '');
$("#KY").css('stroke', '');
$("#LA").css('stroke', '');
$("#ME").css('stroke', '');
$("#MD").css('stroke', '');
$("#MA").css('stroke', '');
$("#MI").css('stroke', '');
$("#MN").css('stroke', '');
$("#MS").css('stroke', '');
$("#MO").css('stroke', '');
$("#MT").css('stroke', '');
$("#NE").css('stroke', '');
$("#NV").css('stroke', '');
$("#NH").css('stroke', '');
$("#NJ").css('stroke', '');
$("#NM").css('stroke', '');
$("#NY").css('stroke', '');
$("#NC").css('stroke', '');
$("#ND").css('stroke', '');
$("#OH").css('stroke', '');
$("#OK").css('stroke', '');
$("#OR").css('stroke', '');
$("#PA").css('stroke', '');
$("#RI").css('stroke', '');
$("#SC").css('stroke', '');
$("#SD").css('stroke', '');
$("#TN").css('stroke', '');
$("#TX").css('stroke', '');
$("#UT").css('stroke', '');
$("#VT").css('stroke', '');
$("#VA").css('stroke', '');
$("#WA").css('stroke', '');
$("#WV").css('stroke', '');
$("#WI").css('stroke', '');
$("#WY").css('stroke', '');
//canada//
$("#AB").css('stroke', '');
$("#BC").css('stroke', '');
$("#MAN").css('stroke', '');
$("#NB").css('stroke', '');
$("#LAB").css('stroke', '');
$("#NS").css('stroke', '');
$("#NT").css('stroke', '');
$("#NU").css('stroke', '');
$("#ONT").css('stroke', '');
$("#PE").css('stroke', '');
$("#PQ").css('stroke', '');
$("#SK").css('stroke', '');
$("#YT").css('stroke', '');

}
/*
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function closemodal(){
    $('#myModal').hide();
$('body').removeClass('modal-open');
$('.modal-backdrop').remove();
}

//$('#myBtn').click(function() {
     
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/

$('.header').click(function(){
   $(this).find('span').text(function(_, value){return value=='-'?'+':'-'});
    $(this).nextUntil('tr.header').slideToggle(100, function(){
    });
});

// Convert JSON to CSV & Display CSV
// $('#csv').text(ConvertToCSV(jsonObject));
function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}
function __unshift(array, value){
    key = array_search(value, array);
    if(key) unset(array[key]);
    array_unshift(array, value);  
    return array;
}
function suffix(i) {//unused
		var j = i % 10,
			k = i % 100;
		if (j == 1 && k != 11) {
			return i + "st";
		}
		if (j == 2 && k != 12) {
			return i + "nd";
		}
		if (j == 3 && k != 13) {
			return i + "rd";
		}
		return i + "th";
	}
//hideall();
function resetbutton(){
  hideselect();
  speciesvar = "all";
  yearvar2="2018";
  yearvar="1960";
  ifstateall = true;
  stateid = "all";
  document.getElementById("holder").innerHTML = "";
  document.getElementById("table3").innerHTML = "";
  document.getElementById("table2").innerHTML = "";
  document.getElementById("chorotitle2").innerHTML = "";
  d3.selectAll("#barchart > *").remove(); 
  var select_field = $("#select-state")[0].selectize;
  select_field.clear();
  resetcolors();
}


function switchmaps(){
	if(svg2.style.display == 'none'){
		svg2.style.display = 'block';
		svg1.style.display = 'none';
		$('#chorotitle').text("Banding Choropleth Map");
	}
	else if(svg1.style.display == 'none'){
		svg1.style.display = 'block';
		svg2.style.display = 'none';
		$('#chorotitle').text("Encounter Choropleth Map");
	}
    
}
function togglecanada(){
    
    if(svgcanada.style.display == 'none'){
		svgcanada.style.display = 'block';
		svg2.style.display = 'none';
        svgworld.style.display = 'none';
		document.getElementById("togglemap").value = "United States";
	}
	else if(svgcanada.style.display == 'block'){
		svgcanada.style.display = 'none';
		svg2.style.display = 'block';
        document.getElementById("togglemap").value="Canada";
		//hideselectcanada();
	}
    
}
function toggleworld(){
    
    if(svgworld.style.display == 'none'){
		svgworld.style.display = 'block';
		svg2.style.display = 'none';
        svgcanada.style.display = 'none';
		document.getElementById("togglemap2").value = "World";
	}
	else if(svgworld.style.display == 'block'){
		svgworld.style.display = 'none';
		svg2.style.display = 'block';
        document.getElementById("togglemap2").value="World";
		//hideselectcanada();
	}
    
}
function resetcolors(){
  for (var i = 0; i < arraystates.length; i++) {
      document.getElementById(arraystates[i]).setAttribute("fill", '#cccccc');  
  }
}
var speciesvar="all"
var yearvar="1960"
var yearvar2="2018"
var stateid = ["all"];
var ifstateall = true;
var dict = [];
var rowCells= new Array();
var canadaprov = ['YT','SK','PQ','PE','ONT','AB','BC','MAN','NB','LAB','NT','NU','NS'];
var arraystates=['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY','YT','SK','PQ','PE','ONT','AB','BC','MAN','NB','LAB','NT','NU','NS'];
var codes = {'AK': "Alaska", "AL": "Alabama",'AR': "Arkansas",'AZ': "Arizona",'CA': "California",'CO': "Colorado",'CT': "Connecticut",'DC': "District of COlumbia",'DE': "Delaware",'FL': "Florida",'GA': "Georgia",'HI': "Hawaii",'IA': "Iowa",'ID': "Idaho",'IL': "Illinois",'IN': "Indiana",'KS': "Kansas",'KY': "Kentucky",'LA': "Louisiana",'MA': "Massachusetts",'MD': "Maryland",'ME': "Maine",'MI': "Michigan",'MN': "Minnesota",'MO': "Missouri",'MS': "Mississippi",'MT': "Montana",'NC': "North Carolina",'ND': "North Dakota",'NE': "Nebraska",'NH': "New Hampshire",'NJ': "New Jersey",'NM': "New Mexico",'NV': "Nevada",'NY': "New York",'OH': "Ohio",'OK': "Oklahoma",'OR': "Oregon",'PA': "Pennsylvania",'RI': "Rhode Island",'SC': "South Carolina",'SD': "South Dakota",'TN': "Tennessee",'TX': "Texas",'UT': "Utah",'VA': "Virginia",'VT': "Vermont",'WA': "Washington",'WI': "Wisconsin",'WV': "West Virginia",'WY': "Wyoming",'YT': "Yukon",'SK': "Saskatchewan",'PQ': "Quebec",'PE': "Prince Edward",'ONT': "Ontario",'AB': "Alberta",'BC': "British Columbia",'MAN': "Manitoba",'NB': "New Brunswick",'LAB': "NewFoundland/Labrador",'NT': "Northwest Territories",'NU': "Nunavut",'NS': "Nova Scotia",'US': "United States",'ARG': "Argentina",'BHI': "Bahama Islands",'BELZ': "Belize",'BRMD': "Bermuda",'BRAZ': "Brazil",'BOL': "Bolivia",'CHLE': "Chile",'CAN': "Canada",'COL': "Columbia",'CR': "Costa Rica",'CUBA': "Cuba",'DRP': "Dominican Republic and Haiti",'ECUA': "Ecuador",'ELSA': "El Salvador",'NWT': "Franklin",'FRGU': "French Guiana, Guyana and Suriname",'GUAT': "Guatemala",'HOND': "Honduras",'JMCA': "Jamaica and Cayman Islands",'LANT': "Lesser Antilles",'MEX': "Mexico",'NICA': "Nicaragua",'PAN': "Panama",'PARA': "Paraguay",'PERU': "Peru",'URU': "Uruguay",'VZLA': "Venezuela",'AFR': "Africa",'ANT': "Antarctica",'ASIA': "Asia",'SEA': "At Sea (oceans)",'OCEA': "Oceania",'EUR': "Europe",'GRLD': "Greenland",'USSR': "Russia",'XXXX': "Unknown",'PR': "Puerto Rico"};

 var $select = $(document.getElementById('select-state'));
var selectize = $select[0].selectize;
function countstates(data) {
   
  //console.log(data);
  document.getElementById("chorotitle2").innerHTML = "";
	document.getElementById("table3").innerHTML = "";
    document.getElementById("table2").innerHTML = "";
	document.getElementById("holder").innerHTML = "";
	d3.selectAll("#barchart > *").remove(); 
	
	var dict = [];
	var dictenc = [];
	var dictstateband = [];
	var dictstateenc = [];
	var year1 = [];
	var i=0;
	if (stateid==null){stateid="";}
    
	var speciesvar = $('#myInput').val();
	if(speciesvar==""){
		speciesvar="all";
	}
  var allRows = data.split(/\r?\n|\r/);
 
	//---NOT ALL COUNTRIES---/
	if(stateid!="all"){
		//---Whole Canada---//
        if(stateid=="CAN"){
		
			
		//---ALL Species---///
		if (speciesvar=="all"){
		
	for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(canadaprov.indexOf(rowCells[1].toString()) > -1)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
		}
	if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
		
	ifstateall=false;
   }
	}
   }
   //---NOT ALL Species---///
   if (speciesvar!="all"){
	
   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(canadaprov.indexOf(rowCells[1].toString()) > -1)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		
		year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
			
			year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}
		
		
		if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
	
		 //for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        //table += rowCells[rowCell]; add in all row cells to results?
	ifstateall=false;
   }
      if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
	  if (dictstateband[rowCells[1].toString()] === undefined){
		dictstateband[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstateband[rowCells[1].toString()] !== undefined){
			dictstateband[rowCells[1].toString()]+=Number(rowCells[5]);
		}
		if (dictstateenc[rowCells[1].toString()] === undefined){
		dictstateenc[rowCells[1].toString()]=Number(rowCells[6]);
		}

		if (dictstateenc[rowCells[1].toString()] !== undefined){
			dictstateenc[rowCells[1].toString()]+=Number(rowCells[6]);
		}
   }
   
   
   
	}
   }
	
   }
		
        
		//---WHOLE United States---//
		if(stateid=="US"){
		
			
		//---ALL Species---///
		if (speciesvar=="all"){
		
	for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"].indexOf(rowCells[1].toString()) > -1)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
		}
	if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
		
	ifstateall=false;
   }
	}
   }
   //---NOT ALL Species---///
   if (speciesvar!="all"){
	
   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"].indexOf(rowCells[1].toString()) > -1)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		
		year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
			
			year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}
		
		
		if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
	
		 //for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        //table += rowCells[rowCell]; add in all row cells to results?
	ifstateall=false;
   }
      if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
	  if (dictstateband[rowCells[1].toString()] === undefined){
		dictstateband[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstateband[rowCells[1].toString()] !== undefined){
			dictstateband[rowCells[1].toString()]+=Number(rowCells[5]);
		}
		if (dictstateenc[rowCells[1].toString()] === undefined){
		dictstateenc[rowCells[1].toString()]=Number(rowCells[6]);
		}

		if (dictstateenc[rowCells[1].toString()] !== undefined){
			dictstateenc[rowCells[1].toString()]+=Number(rowCells[6]);
		}
   }
   
   
   
	}
   }
	
   }
		
		//---NOT WHOLE United States---//
		if((stateid!="US")&&(stateid!="CAN")){
		
		//---ALL Species---///
		if (speciesvar=="all"){
	for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(stateid.indexOf(rowCells[1].toString()) > -1)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
		}
		if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
		
	ifstateall=false;
   }
	}
   }
   //---NOT ALL Species---///
   if (speciesvar!="all"){
   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)&&(stateid.indexOf(rowCells[1].toString()) > -1)){//(rowCells[0].toString()==speciesvar)&&
	if (dict[rowCells[0].toString()] === undefined){
		dict[rowCells[0].toString()]=Number(rowCells[5]);
		
		year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}

		if (dict[rowCells[0].toString()] !== undefined){
			dict[rowCells[0].toString()]+=Number(rowCells[5]);
			//console.log(rowCells[5]);
			//console.log("four:"+rowCells[4]); test1
			year1.push({
			birds: Number(rowCells[5]), year: rowCells[4],
			 sortable: true,
			resizeable: true
	});
		}
		
		
		if (dictenc[rowCells[0].toString()] === undefined){
		dictenc[rowCells[0].toString()]=Number(rowCells[6]);
		}

		if (dictenc[rowCells[0].toString()] !== undefined){
			dictenc[rowCells[0].toString()]+=Number(rowCells[6]);
		}
	
		 //for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        //table += rowCells[rowCell]; add in all row cells to results?
	ifstateall=false;
   }
      if ((rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
	  if (dictstateband[rowCells[1].toString()] === undefined){
		dictstateband[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstateband[rowCells[1].toString()] !== undefined){
			dictstateband[rowCells[1].toString()]+=Number(rowCells[5]);
		}
		
		if (dictstateenc[rowCells[1].toString()] === undefined){
		dictstateenc[rowCells[1].toString()]=Number(rowCells[6]);
		}

		if (dictstateenc[rowCells[1].toString()] !== undefined){
			dictstateenc[rowCells[1].toString()]+=Number(rowCells[6]);
		}
   }
   
   
   
	}
   }
	
   }

   }
   //---ALL Countries---/
   if(stateid=="all"){
	   
	   
	   //---ALL Species---//
	   if (speciesvar=="all"){
		
	   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
		if (dictstateband[rowCells[1].toString()] === undefined){
		dictstateband[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstateband[rowCells[1].toString()] !== undefined){
			dictstateband[rowCells[1].toString()]+=Number(rowCells[5]);
		}
		
		if (dictstateenc[rowCells[1].toString()] === undefined){
		dictstateenc[rowCells[1].toString()]=Number(rowCells[6]);
		}

		if (dictstateenc[rowCells[1].toString()] !== undefined){
			dictstateenc[rowCells[1].toString()]+=Number(rowCells[6]);
		}
   }
   }
   }
		//---NOT ALL Species---//
      if (speciesvar!="all"){
		 
	   for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
  
    rowCells = allRows[singleRow].split(',');
   if ((rowCells[0].toString()==speciesvar)&&(rowCells[0].toString()==speciesvar)&&(rowCells[4].toString()>=yearvar)&&(rowCells[4].toString()<=yearvar2)){
	  if (dictstateband[rowCells[1].toString()] === undefined){
		dictstateband[rowCells[1].toString()]=Number(rowCells[5]);
		}

		if (dictstateband[rowCells[1].toString()] !== undefined){
			dictstateband[rowCells[1].toString()]+=Number(rowCells[5]);
		}
		
		if (dictstateenc[rowCells[1].toString()] === undefined){
		dictstateenc[rowCells[1].toString()]=Number(rowCells[6]);
		}

		if (dictstateenc[rowCells[1].toString()] !== undefined){
			dictstateenc[rowCells[1].toString()]+=Number(rowCells[6]);
		}
   }
	   }
	  }
   }
   

const ordered = {};
Object.keys(dict).sort().forEach(function(key) {
  ordered[key] = dict[key];
});
 dict = ordered;
 const ordered2 = {};
Object.keys(dictenc).sort().forEach(function(key) {
  ordered2[key] = dictenc[key];
});
dictenc = ordered2;
const ordered3 = {};
Object.keys(dictstateband).sort().forEach(function(key) {
  ordered3[key] = dictstateband[key];
});
dictstateband = ordered3;
const ordered4 = {};
Object.keys(dictstateenc).sort().forEach(function(key) {
  ordered4[key] = dictstateenc[key];
});
dictstateenc = ordered4;

/*
Object.keys(dictstateband).forEach(function(key) {
    if(
    dictstateband2.push(dictstateband[key]);
}*/
dictstateband2 = {};
  for (var i = 0; i < arraystates.length; i++) {
      if(arraystates[i] in dictstateband){
      dictstateband2[arraystates[i]]=dictstateband[arraystates[i]];
      delete dictstateband[arraystates[i]]
      }
 }
  dictstateenc2 = {};
  for (var i = 0; i < arraystates.length; i++) {
      if(arraystates[i] in dictstateenc){
      dictstateenc2[arraystates[i]]=dictstateenc[arraystates[i]];
      delete dictstateenc[arraystates[i]]
      }
      
 }
 
 
  
  if(ifstateall==true){
      
	   if (speciesvar=="all"){
	$('#chorotitle2').text("Summary of all Data");
	  }
	  if (speciesvar!="all"){
	$('#chorotitle2').text(speciesvar);
	  }
   var table = '<table>';
   table += '<thead>';
   table +='<div class="tooltip">Hover over me';
  table +='<span class="tooltiptext">Tooltip text</span>';
table +='</div>';
   
   
   
  
  
   table += '<tr>';
  table+='<td title="Banded and encounter data" id="heading" colspan="2"><b>US/Canada</b></td>';
  table += '</tr>';
	  table += '</thead>';
table += '<th>';
      table += '<td>';
   table+= "State";
      table += '</td>';
      table += '</th>';
      table += '<th>';
      table += '<td>';
   table+= "Banded    ";
      table += '</td>';
      table += '</th>';
      table += '<th>';
      table += '<td>';
   table+= "Encountered (from any state)";
      table += '</td>';
       table += '</th>';


   
   //table += '<tbody>';
   
Object.keys(dictstateband2).forEach(function(key) {
    table += '<tr class="rowson">';
   table += '<th>';
      table += '<td>';
   table+= key;
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
      bandingnum=dictstateband2[key].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   table+= bandingnum;
      table += '</td>';
   table += '</th>';
    table += '<th>';
       table += '<td>';
       encounternum=dictstateenc2[key].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   table+= encounternum;
      table += '</td>';
   table += '</th>';
   table += '</tr>';
});
table += '<thead>';
 table += '<tr>';
  table+='<td id="heading2" colspan="2"><b>All countries</b></td>'
  table += '</tr>';
	  table += '</thead>';
table += '<th>';
      table += '<td>';
   table+= "Country";
      table += '</td>';
      table += '</th>';
      table += '<th>';
      table += '<td>';
   table+= "Banded    ";
      table += '</td>';
      table += '</th>';
      table += '<th>';
      table += '<td>';
   table+= "Encountered (from any state)";
      table += '</td>';
       table += '</th>';
       
  Object.keys(dictstateband).forEach(function(key) {
  table += '<tr class="rowson2">';
   
   table += '<th>';
      table += '<td>';
   table+= key;
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
      bandingnum2=dictstateband[key].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   table+= bandingnum2;
   
      table += '</td>';
   table += '</th>';
    table += '<th>';
       table += '<td>';
       encounternum2=dictstateenc[key].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   table+= encounternum2;
      table += '</td>';
   table += '</th>';
   table += '</tr>';
    console.log(key, dictstateband[key]);
});
//table += '</tbody>';
  document.getElementById('table2').innerHTML = table
  //$(".content").closest("tr").hide();
  /*
 var lst = document.getElementsByClassName(".content");
    for(var i = 0; i < lst.length; ++i) {
        lst[i].style.display = on ? '' : 'none';
    }*/
/*$('.expandable-row').click(function(e) {
$(this).next('.content').toggle();
//$(this).next('.content').slideToggle();
});*/
/*
table +='<div class="container">'
 
  table +='<div class="panel-group">'
   table +='<div class="panel panel-default">'
   table +='<div class="panel-heading">'
  table += '<h4 class="panel-title">'
  table +='<a data-toggle="collapse" href="#collapse1">Collapsible panel</a>'
   table +='</h4>'
    table +='</div>'
   table += '<div id="collapse1" class="panel-collapse collapse">'
  table +='<div class="panel-body">Panel Body</div>'
   table +='<div class="panel-footer">Panel Footer</div>'
   table +='</div>'
   table +='</div>'
  table +='</div>'
table +='</div>'*/
  }
  if(ifstateall==false){//draw graph if region is specified.
  translatedid="";
       for (var i = 0; i < stateid.length; i++) {
        if(i < stateid.length-1){translatedid +=codes[stateid[i]]+", ";}
        if(i == stateid.length-1){
            if(stateid.length==1){translatedid +=codes[stateid[i]]+"";}
            else{translatedid +="and "+codes[stateid[i]]+".";}
            }
       }
    if(speciesvar!="all"){
	$('#chorotitle2').text(speciesvar+" in "+translatedid);
	  var table2 = '<table>';
	   table2 += '<th>';
   table2+= speciesvar;
   table2+= " - ";
   table2+= stateid;
   table2 += '</th>';
   table2 += '<th>';
   
   Object.keys(dict).forEach(function(key) {
   table2 += '<tbody>';
   table2 += '<tr>';
   table2 += '<th>';
   table2+= "Total: ";
   bandednum=dict[key].toString();
    if (bandednum.length>='4'){
        bandednum=bandednum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");//adds thousands commas
		  }
   table2+= bandednum;
    table2+= " birds banded from "+yearvar+" to "+yearvar2;
   table2 += '</th>';
   table2 += '</tr>';
});
  Object.keys(dict).forEach(function(key) {
   table2 += '<tbody>';
   table2 += '<tr>';
   table2 += '<th>';
   table2+= "Total: ";
    encnum=dictenc[key].toString();
    if (encnum.length>='4'){
		  encnum=encnum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		  }
   table2+= encnum;
    table2+= " birds encountered from "+yearvar+" to "+yearvar2;
   table2 += '</th>';
   table2 += '</tr>';
});
   table2 += '</th>';
	  table2+="</table>";
	  
 //sortedyear1=year1.sort(function(a, b){//-----------------------------------------------------------------------------------
 //   return a.year - b.year;
//});
// 
sortedyear=year1.sort((a,b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0));


var uniq = new Set(sortedyear.map(e => JSON.stringify(e)));

var sortedyear1 = Array.from(uniq).map(e => JSON.parse(e));
  var table = '<table>';
	  table += '<thead>';
   table += '<tr>';
   table += '<th>';
      table += '<td>';
   table+= "Year";
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
   table+= "Banded    "; //----------------------------------------------------------------------------------
      table += '</td>';
   table += '</th>';
    table += '<th>';
      table += '<td>';
   table+= "encounters";
      table += '</td>';
   table += '</th>';
   table += '</tr>';
   table += '</thead>';
  //Object.keys(dictstateband).forEach(function(key) {
	  for (var i = 0; i < sortedyear1.length; i++) {
   //console.log(sortedyear1[i].year);
   //console.log(year1[i]);
   table += '<tbody>';
   table += '<tr>';
   table += '<th>';
   table += '<td>';
   table+= sortedyear1[i].year;
   table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
      sortedyearbirdsnum=sortedyear1[i].birds.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   table+= sortedyearbirdsnum;
      table += '</td>';
   table += '</th>';
   table += '<th>';
   table += '<td>';
   encounternum3=""//dictstateenc[key].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   table+= encounternum3;
    table += '</td>';
   table += '</th>';
   
   table += '</tr>';
    //console.log(key, dictstateband[key]);
      }
//});
document.getElementById('table3').innerHTML = table2
//console.log(year1[1]);
drawbarchart(year1);


	}
	if(speciesvar=="all"){
        translatedid="";
       for (var i = 0; i < stateid.length; i++) {
        if(i < stateid.length-1){translatedid +=codes[stateid[i]]+", ";}
        if(i == stateid.length-1){
            if(stateid.length==1){translatedid +=codes[stateid[i]];}
            else{translatedid +="and "+codes[stateid[i]];}
            }
       }
		$('#chorotitle2').text("All species in "+translatedid);
	  var table = '<table>';
	  table += '<thead>';
   table += '<tr>';
   table += '<th>';
      table += '<td>';
   table+= "Species";
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
   table+= "Banded    ";
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
   table+= "Encountered (from any state)";
      table += '</td>';
   table += '</th>';
   table += '</tr>';
   table += '</thead>';
  Object.keys(dict).forEach(function(key) {
	  
   
   table += '<tbody>';
   table += '<tr>';
   table += '<th>';
      table += '<td>';
   table+= key;
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
   table+= dict[key];
      table += '</td>';
   table += '</th>';
   table += '<th>';
      table += '<td>';
   table+= dictenc[key];
      table += '</td>';
   table += '</th>';
   table += '</tr>';
    //console.log(key, dict[key]);
});
	}
      table += '</tbody>';
   table+="</table>";
document.getElementById('table2').innerHTML = table
ifstateall=true;
  }
 

  
  
$("#heading").click(function() {
      rowscount=rowson.length;
    if ($(".rowson")[0]){
    for (var j = 0; j < rowscount; j++) {
        if (typeof(rowson[0]) != 'undefined') {
        rowson[0].classList.add('rowsoff');
        rowson[0].classList.remove('rowson');
        }
    }
      }
    else if ($(".rowsoff")[0]){
      rowscount=rowsoff.length;
    for (var i = 0; i < rowsoff.length; i++) {
        rowsoff[i].classList.add('rowson');
        rowsoff[i].classList.remove('rowsoff');
    }
    }
     
  });
$("#heading2").click(function() {
      rowscount2=rowson2.length;
    if ($(".rowson2")[0]){
    for (var j = 0; j < rowscount2; j++) {
        if (typeof(rowson2[0]) != 'undefined') {
        rowson2[0].classList.add('rowsoff2');
        rowson2[0].classList.remove('rowson2');
        }
    }
      }
    else if ($(".rowsoff2")[0]){
      rowscount2=rowsoff2.length;
    for (var i = 0; i < rowscount2; i++) {
        rowsoff2[i].classList.add('rowson2');
        rowsoff2[i].classList.remove('rowsoff2');
    }
    }
     
  });
  
  //var colors = ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#2ca25f", "#006d2c"];
  var colors = ["#cccccc", "#ccece6", "#99d8c9", "#66c2a4", "#2ca25f", "#006d2c"];
  
  
  for (var i = 0; i < arraystates.length; i++) {
      document.getElementById(arraystates[i]).setAttribute("fill", colors[0]); 
  }
  dictstateband2color=dictstateband2;
  arrayremove=["GU","MH","PR","PW","VI","AB","ARG","BHI","BELZ","BRMD","BRAZ","BOL","CHLE","CAN","COL","CR","CUBA","DC","DRP","ECUA","ELSA","NWT","FRGU","GUAT","HOND","JMCA","LANT","MEX","NICA","PAN","PARA","PERU","PERU","URU","VZLA","AFR","ASIA","SEA","OCEA","EUR","GRLD","USSR","XXXX","PR","USA","ANT"];
  for (var i = 0; i < arrayremove.length; i++) {
      delete dictstateband2color[arrayremove[i]];
  }
  
  var keys1   = Object.keys(dictstateband2color);
    var lowest = Math.min.apply(null, keys1.map(function(x) { return dictstateband2color[x]} ));
    var highest = Math.max.apply(null, keys1.map(function(x) { return dictstateband2color[x]} ));
    
    Object.keys(dictstateband2color).forEach(function(key) {
        
        if(dictstateband2color[key]==0){
            
            document.getElementById(key).setAttribute("fill", colors[0]); 
        }
        else if(dictstateband2color[key]<highest * 0.2){
            document.getElementById(key).setAttribute("fill", colors[1]); 
        }
        else if(dictstateband2color[key]<highest * 0.4){
            document.getElementById(key).setAttribute("fill", colors[2]); 
        }
        else if(dictstateband2color[key]<highest * 0.6){
            document.getElementById(key).setAttribute("fill", colors[3]); 
        }
        else if(dictstateband2color[key]<highest * 0.8){
            document.getElementById(key).setAttribute("fill", colors[4]); 
        }
        else if(dictstateband2color[key]<=highest){
            document.getElementById(key).setAttribute("fill", colors[5]); 
        }
        
    })
    //console.log(lowest);
    //console.log(highest);
}
function test(){
    
var paths = document.querySelectorAll("path");
var keys   = Object.keys(dictstateband);
var lowest = Math.min.apply(null, keys.map(function(x) { return dictstateband[x]} ));
console.log(d);
Object.keys(dictstateband).forEach(function(key) {
//var d = document.getElementById(key).getAttribute("");
//document.getElementById("<path id>").setAttribute("fill", "red"); 

//console.log(d);
dictstateband[key];
    
for (i = 0; i < paths.length; ++i) {
paths[i].setAttribute('style', 'fill:blue');
}

})
    
}

function drawbarchart(data) {

/*
var values = [
  {birds: 32, year: 'January'},
  {birds: 38, year: 'February'},
  {birds: 47, year: 'March'},
  {birds: 59, year: 'April'},
  {birds: 70, year: 'May'},
  {birds: 80, year: 'June'},
  {birds: 84, year: 'July'},
  {birds: 83, year: 'Auguest'},
  {birds: 76, year: 'September'},
  {birds: 64, year: 'October'},
  {birds: 49, year: 'November'},
  {birds: 37, year: 'December'}
];
*/

var values=[];

values=data;
values.sort(function(a, b){
    return a.year - b.year;
});

var years = values.map(function(t) {
  return t.year
});

var margin = {top: 5, right: 5, bottom: 70, left: 50};
// here, we want the full chart to be 700x200, so we determine
// the width and height by subtracting the margins from those values
var fullWidth = 1100;
var fullHeight = 250;
// the width and height values will be used in the ranges of our scales
var width = fullWidth - margin.right - margin.left;
var height = fullHeight - margin.top - margin.bottom;
var svg = d3.select('#holder').append('svg:svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .attr('id', "barchart")
  // this g is where the bar chart will be drawn
  .append('g')
    // translate it to leave room for the left and top margins
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// x value determined by year
var yearScale = d3.scaleBand()
  .domain(years)
  .range([0, width])
  .paddingInner(0.1);

// the width of the bars is determined by the scale
var bandwidth = yearScale.bandwidth();
// y value determined by birds
var maxTemp = d3.max(values, function(d) { return d.birds; });
//var maxTemp = Number(valuessorted[0]);
var tempScale = d3.scaleLinear()
  .domain([0, maxTemp])
  .range([height, 0])
  .nice();


var xAxis = d3.axisBottom(yearScale);
var yAxis = d3.axisLeft(tempScale);

// draw the axes
svg.append('g')
  .classed('x axis', true)
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis)
  .selectAll("text")
  //
  .attr("transform","translate(12,20) rotate(90)");
 // .attr('transform', 'translate(2,5)')
  
var yAxisEle = svg.append('g')
  .classed('y axis', true)
  .call(yAxis);

// add a label to the yAxis
var yText = yAxisEle.append('text')
  .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .attr('dy', '-2.8em')
  .style('font-size', 14)
  .text('# of birds banded');

var barHolder = svg.append('g')
  .classed('bar-holder', true);

// draw the bars
var bars = barHolder.selectAll('rect.bar')
    .data(values)
  .enter().append('rect')
    .classed('bar', true)
    .attr('x', function(d, i) {
      // the x value is determined using the
      // year of the datum
      return yearScale(d.year)
    })
    .attr('width', bandwidth)
    .attr('y', function(d) {
      // the y position is determined by the datum's temp
      // this value is the top edge of the rectangle
      return tempScale(d.birds);
    })
    .attr('height', function(d) {
      // the bar's height should align it with the base of the chart (y=0)
      return height - tempScale(d.birds);
    });

}
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
var specieslist = ["Tricolored Blackbird","Eastern Meadowlark","Western Meadowlark","Audubon&#39;s Oriole","Altamira Oriole","Black-cowled Oriole","Hooded Oriole","Streak-backed Oriole","Orchard Oriole","Baltimore X Bullock&#39;s Oriole Hybrid","Rusty Blackbird","Brewer&#39;s Blackbird","Great-tailed Grackle","Brambling","Common Chaffinch","Pine Grosbeak","Eurasian Bullfinch","Cassin&#39;s Finch","House Finch","Red Crossbill","Black Rosy-Finch","Brown-capped Rosy-Finch","Hoary Redpoll","American Goldfinch","Lesser Goldfinch","Lawrence&#39;s Goldfinch","Red Siskin","Clark&#39;s Grebe","Red-necked Grebe","Horned Grebe","Least Grebe","Pied-billed Grebe","Yellow-billed Loon","Arctic Loon","Pacific Loon","Red-throated Loon","Atlantic Puffin","Rhinoceros Auklet","Cassin&#39;s Auklet","Parakeet Auklet","Whiskered Auklet","Least Auklet","Long-billed Murrelet","Kittlitz&#39;s Murrelet","Black Guillemot","Pigeon Guillemot","Common Murre","Thick-billed Murre","Razorbill","South Polar Skua","Long-tailed Jaeger","Ivory Gull","Red-legged Kittiwake","Thayer&#39;s Gull","Glaucous-winged Gull","Great Black-backed Gull","Slaty-backed Gull","Western Gull","Herring Gull","California Gull","Unidentified Gull","Band-tailed Gull","Mew Gull","Black-headed Gull","Heermann&#39;s Gull","Bonaparte&#39;s Gull","Little Gull","Ross&#39;s Gull","Gull-billed Tern","Caspian Tern","Royal Tern","Crested Tern","Cayenne Tern","Forster&#39;s Tern","Common Tern","Arctic Tern","Aleutian Tern","Least Tern","California Least Tern","Sooty Tern","White-winged Tern","Brown Noddy","Black Noddy","White Tern","Black-footed Albatross","Short-tailed Albatross","Laysan Albatross","Black-browed Albatross","Northern Fulmar","Cory&#39;s Shearwater","Great Shearwater","Pink-footed Shearwater","Little Shearwater","Townsend&#39;s Shearwater","Newell&#39;s Shearwater","Flesh-footed Shearwater","Buller&#39;s Shearwater","Christmas Shearwater","Black-capped Petrel","Juan Fernandez Petrel","Mottled Petrel","Bonin Petrel","Murphy&#39;s Petrel","Cape Petrel","Fork-tailed Storm-Petrel","Band-rumped Storm-Petrel","Tristram&#39;s Storm-Petrel","Ashy Storm-Petrel","White-faced Storm-Petrel","White-tailed Tropicbird","Red-billed Tropicbird","Masked Booby","Blue-footed Booby","Nazca Booby","Brown Booby","Northern Gannet","Anhinga","Double-crested Cormorant","Guanay Cormorant","Neotropic Cormorant","Pelagic Cormorant","Red-faced Cormorant","American White Pelican","Lesser Frigatebird","Common Merganser","Mallard","Hawaiian Duck","Laysan Duck","Mallard X American Black Duck Hybrid","American Black Duck","Mexican Duck","Eurasian Wigeon","American Wigeon","Falcated Teal","Green-winged Teal","Baikal Teal","Garganey","Unidentified Teal","Cinnamon Teal","Northern Shoveler","White-cheeked Pintail","Wood Duck","Redhead","Greater Scaup","Lesser Scaup","Common Goldeneye","Barrow&#39;s Goldeneye","Bufflehead","Long-tailed Duck","Common Eider","King Eider","White-winged Scoter","Surf Scoter","Ruddy Duck","Blue Goose","Snow X Blue Goose Intergrade","Blue Greater Snow Goose","Greater Snow Goose","Ross&#39;s Goose","Snow X Ross&#39;s Goose Hybrid","Taiga Bean-Goose","Pink-footed Goose","Lesser White-fronted Goose","Other Hybrid Goose","Tule White-fronted Goose","Aleutian Canada Goose","Cackling Goose","Large Canada Goose","Small Canada Goose","Atlantic Brant","Black Brant","Barnacle Goose","Hawaiian Goose","Emperor Goose","Black-bellied Whistling-Duck","West Indian Whistling-Duck","Fulvous Whistling-Duck","Whooper Swan","Whistling Swan","Bewick&#39;s Swan","American Flamingo","Scarlet Ibis","Glossy Ibis","White-faced Ibis","American Bittern","Great White Heron","Great Egret","Snowy Egret","Tricolored Heron","Green Heron","Black-crowned Night-Heron","Yellow-crowned Night-Heron","Sandhill Crane","Limpkin","King Rail","Sora","Black Rail","Purple Gallinule","Hawaiian Gallinule","American Coot","Caribbean Coot","Wilson&#39;s Phalarope","Black-necked Stilt","Eurasian Woodcock","American Woodcock","Wilson&#39;s Snipe","Stilt Sandpiper","Red Knot","Purple Sandpiper","White-rumped Sandpiper","Baird&#39;s Sandpiper","Least Sandpiper","Dunlin","Spoon-billed Sandpiper","Western Sandpiper","Marbled Godwit","Bar-tailed Godwit","Jamaican Elaenia","Jamaican Crow","Brown Trembler","White-eyed Thrush","White-chinned Thrush","Rufous-throated Solitaire","Thick-billed Vireo","Arrowhead Warbler","Bahama Yellowthroat","Jamaican Euphonia","Yellow-shouldered Grassquit","Blue-black Grassquit","Hybrid Passerine","Broad-winged Hawk","Roadside Hawk","Short-tailed Hawk","Common Black Hawk","Rough-legged Hawk","Ferruginous Hawk","Bald Eagle","Gyrfalcon","Peregrine Falcon","Eurasian Kestrel","American Kestrel","Crested Caracara","Barn Owl","Long-eared Owl","Short-eared Owl","Mexican Spotted Owl","Great Gray Owl","Boreal Owl","Northern Saw-whet Owl","Whiskered Screech-Owl","Flammulated Owl","Snowy Owl","Northern Hawk Owl","Burrowing Owl","Elf Owl","Hispaniolan Parakeet","Monk Parakeet","Hispaniolan Parrot","Puerto Rican Parrot","Groove-billed Ani","Puerto Rican Lizard-Cuckoo","Yellow-billed Cuckoo","Black-billed Cuckoo","Belted Kingfisher","Ringed Kingfisher","Hairy Woodpecker","Red-cockaded Woodpecker","Ladder-backed Woodpecker","Nuttall&#39;s Woodpecker","White-headed Woodpecker","Black-backed Woodpecker","American Three-toed Woodpecker","Yellow-bellied Sapsucker","Hybrid Sapsucker","Williamson&#39;s Sapsucker","Pileated Woodpecker","Red-headed Woodpecker","Puerto Rican Woodpecker","Lewis&#39;s Woodpecker","Red-bellied Woodpecker","West Indian Woodpecker","Gila Woodpecker","Flicker Intergrade","Gilded Flicker","Buff-collared Nightjar","Puerto Rican Nightjar","Common Poorwill","Common Nighthawk","Antillean Nighthawk","Black Swift","Vaux&#39;s Swift","White-throated Swift","Blue-throated Hummingbird","Ruby-throated Hummingbird","Rufous Hummingbird","Allen&#39;s Hummingbird","Jamaican Mango","Green Mango","Green-throated Carib","Antillean Crested Hummingbird","Bahama Woodstar","Buff-bellied Hummingbird","Puerto Rican Emerald","Broad-billed Hummingbird","Rose-throated Becard","Fork-tailed Flycatcher","Eastern Kingbird","Thick-billed Kingbird","Loggerhead Kingbird","Tropical Kingbird","Cassin&#39;s Kingbird","Great Crested Flycatcher","Brown-crested Flycatcher","Nutting&#39;s Flycatcher","Dusky-capped Flycatcher","La Sagra&#39;s Flycatcher","Puerto Rican Flycatcher","Stolid Flycatcher","Eastern Phoebe","Say&#39;s Phoebe","Greater Pewee","Western Wood-Pewee","Cuban Pewee","Lesser Antillean Pewee","Hispaniolan Pewee","Pacific-slope Flycatcher","Western Flycatcher","Southwestern Willow Flycatcher","Traill&#39;s Flycatcher","Least Flycatcher","Hammond&#39;s Flycatcher","Buff-breasted Flycatcher","Vermilion Flycatcher","Caribbean Elaenia","Horned Lark","Black-billed Magpie","Yellow-billed Magpie","Blue Jay","Florida Scrub-Jay","Green Jay","Brown Jay","Common Raven","Chihuahuan Raven","White-necked Crow","Tamaulipas Crow","Hawaiian Crow","Clark&#39;s Nutcracker","European Starling","Crested Myna","Hill Myna","Bobolink","Brown-headed Cowbird","Yellow-headed Blackbird","Red-winged Blackbird","Fieldfare","Eyebrowed Thrush","Clay-colored Thrush","Varied Thrush","Aztec Thrush","Bluethroat","Red-flanked Bluetail","Northern Wheatear","Western Bluebird","White-rumped Shama","Hawaii Elepaio","Taiga Flycatcher","Dark-sided Flycatcher","Gray-streaked Flycatcher","Nihoa Finch","Maui Parrotbill","Hawaii Amakihi","Kauai Amakihi","Greater Akialoa","Akiapolaau","Hawaii Creeper","Oahu Alauahio","Akepa","Apapane","Yellow-crowned Bishop","Red-cheeked Cordonbleu","Orange-cheeked Waxbill","Common Waxbill","Bronze Mannikin","Tricolored Munia","Java Sparrow","King Penguin","Gentoo Penguin","Chinstrap Penguin","Victoria Penguin","Macaroni Penguin","Humboldt Penguin","Magellanic Penguin","Royal Albatross","Gray-headed Albatross","Sooty Albatross","Southern Fulmar","Blue Petrel","Dove Prion","Fairy Prion","Antarctic Petrel","White-chinned Petrel","Blue-eyed Cormorant","Lesser Sheathbill","Antarctic Tern","Kerguelen Tern","Hybrid Skua","Brown Skua","Mariana Crow","Micronesian Megapode","White-rumped Swiftlet","Purple-capped Fruit Dove","Polynesian Starling","Cardinal Honeyeater","Rufous Fantail","Micronesian Starling","Black Drongo","Pacific Pigeon","Shy Ground Dove","Micronesian Kingfisher","Antillean Mango","Streamertail","Yellow-bellied Elaenia","Lesser Yellowlegs","Willet","Wandering Tattler","Upland Sandpiper","Buff-breasted Sandpiper","Common Sandpiper","Bristle-thighed Curlew","Northern Lapwing","Black-bellied Plover","European Golden-Plover","Pacific Golden-Plover","Killdeer","Semipalmated Plover","Common Ringed Plover","Lesser Sand-Plover","Wilson&#39;s Plover","Black Turnstone","American Oystercatcher","Black Oystercatcher","Plain Pigeon","Red-billed Pigeon","Scaly-naped Pigeon","African Collared-Dove","Mariana Fruit Dove","Philippine Turtle-Dove","Eurasian Collared-Dove","Zenaida Dove","Caribbean Dove","Common Ground-Dove","Key West Quail-Dove","Ruddy Quail-Dove","Bridled Quail-Dove","Swallow-tailed Kite","Hook-billed Kite","Snail Kite","Northern Harrier","Northern Goshawk","Harris&#39;s Hawk","Red-tailed Hawk","Harlan&#39;s Hawk","Zone-tailed Hawk","White-tailed Hawk","Common Canary","Yellow-fronted Canary","McKay&#39;s Bunting","Rustic Bunting","Little Bunting","Pallas&#39;s Bunting","Lapland Longspur","Smith&#39;s Longspur","Chestnut-collared Longspur","McCown&#39;s Longspur","Savannah Sparrow","Large-billed Sparrow","Baird&#39;s Sparrow","Grasshopper Sparrow","Henslow&#39;s Sparrow","Saltmarsh Sparrow","Nelson&#39;s Sparrow","Seaside Sparrow","Cape Sable Seaside Sparrow","Harris&#39;s Sparrow","Mountain White-crowned Sparrow","Puget Sound White-crowned Sparrow","Gambel&#39;s White-crowned Sparrow","Golden-crowned Sparrow","White-throated Sparrow","Chipping Sparrow","Clay-colored Sparrow","Brewer&#39;s Sparrow","Worthen&#39;s Sparrow","Black-chinned Sparrow","Slate-colored Junco","Unidentified Dark-eyed Junco","Gray-headed Junco","Black-throated Sparrow","Unspecified Sage Sparrow","San Clemente Bell&#39;s Sparrow","Cassin&#39;s Sparrow","Rufous-winged Sparrow","Rufous-crowned Sparrow","Lincoln&#39;s Sparrow","Fox Sparrow","Olive Sparrow","Saffron Finch","Spotted Towhee","California Towhee","Abert&#39;s Towhee","Yellow-billed Cardinal","Northern Cardinal","Rose-breasted Grosbeak","Black-headed Grosbeak","Blue Grosbeak","Indigo Bunting","Indigo X Lazuli Bunting Hybrid","Lazuli Bunting","Varied Bunting","White-collared Seedeater","Puerto Rican Bullfinch","Lesser Antillean Bullfinch","Cuban Grassquit","Yellow-faced Grassquit","Dickcissel","Lark Bunting","Flame-colored Tanager","Scarlet Tanager","Summer Tanager","Western Spindalis","Purple Martin","Cave Swallow","Barn Swallow","Tree Swallow","Bank Swallow","Northern Rough-winged Swallow","Bohemian Waxwing","Northern Shrike","Loggerhead Shrike","Bishop&#39;s Oo","Black-whiskered Vireo","Red-eyed Vireo","Yellow-green Vireo","Warbling Vireo","Yellow-throated Vireo","Plumbeous Vireo","Solitary Vireo","Black-capped Vireo","Bell&#39;s Vireo","Least Bell&#39;s Vireo","Black-and-white Warbler","Prothonotary Warbler","Swainson&#39;s Warbler","Worm-eating Warbler","Lawrence&#39;s Warbler","Nashville Warbler","Orange-crowned Warbler","Colima Warbler","Tropical Parula","Cape May Warbler","Olive Warbler","Yellow Warbler","Black-throated Blue Warbler","Myrtle Warbler","Audubon&#39;s Warbler","Magnolia Warbler","Cerulean Warbler","Elfin-woods Warbler","Bay-breasted Warbler","Blackpoll Warbler","Yellow-throated Warbler","Sutton&#39;s Warbler","Grace&#39;s Warbler","Adelaide&#39;s Warbler","Golden-cheeked Warbler","Black-throated Green Warbler","Townsend&#39;s Warbler","Townsend&#39;s X Hermit Warbler Hybrid","Kirtland&#39;s Warbler","Western Palm Warbler","Yellow Palm Warbler","Prairie Warbler","Northern Waterthrush","Kentucky Warbler","Connecticut Warbler","Common Yellowthroat","Gray-crowned Yellowthroat","Yellow-breasted Chat","Canada Warbler","American Redstart","Painted Redstart","House Sparrow","Eurasian Tree Sparrow","Red-faced Warbler","Rufous-capped Warbler","White Wagtail","Black-backed Wagtail","Pechora Pipit","Olive-backed Pipit","Red-throated Pipit","Sprague&#39;s Pipit","Sage Thrasher","Bahama Mockingbird","Tropical Mockingbird","Long-billed Thrasher","Curve-billed Thrasher","Le Conte&#39;s Thrasher","Pearly-eyed Thrasher","Crissal Thrasher","Cactus Wren","Carolina Wren","Bewick&#39;s Wren","House Wren","Marsh Wren","Brown Creeper","Red-whiskered Bulbul","White-breasted Nuthatch","Brown-headed Nuthatch","Pygmy Nuthatch","Tufted Titmouse","Black-crested Titmouse","Juniper Titmouse","Bridled Titmouse","Varied Tit","Black-capped Chickadee","Hybrid Chickadee","Mountain Chickadee","Gray-headed Chickadee","Boreal Chickadee","Chestnut-backed Chickadee","Red-billed Leiothrix","Hwamei","Orange-billed Nightingale-Thrush","Bushtit","Verdin","Arctic Warbler","Middendorff&#39;s Grasshopper-Warbler","Wood Warbler","Dusky Warbler","Lanceolated Warbler","Ruby-crowned Kinglet","Siberian Accentor","Black-tailed Gnatcatcher","California Gnatcatcher","Omao","Kamao","Olomao","Gray-cheeked Thrush","Bicknell&#39;s Thrush","Unidentified Gray-cheeked/Bicknell&#39;s Thrush","Hermit Thrush","Wood Sandpiper","Gray-tailed Tattler","Ashy-faced Owl","Caribbean Martin","Mallard X American Black Duck Intermediate","Mallard Dominant X American Black Duck Hybrid","Western/Clark&#39;s Grebe","Kauai Elepaio","Common Pauraque","Short-tailed Swift","Costa&#39;s Hummingbird","Lucifer Hummingbird","Glaucous Gull","Magnificent Frigatebird","Other Hybrid Duck","Yellow Rail","White-crowned Pigeon","Black Vulture","Sharp-shinned Hawk","Red-shouldered Hawk","Swainson&#39;s Hawk","Hawaiian Hawk","Golden Eagle","Aplomado Falcon","Osprey","California Spotted Owl","Eastern Screech-Owl","Western Screech-Owl","Black-headed Parakeet","Thick-billed Parrot","Red-crowned Parrot","Orange-winged Parrot","Magnificent Hummingbird","Plain-capped Starthroat","Green Violetear","Black-chinned Hummingbird","Broad-tailed Hummingbird","Bumblebee Hummingbird","Calliope Hummingbird","Green-breasted Mango","Rufous-tailed Hummingbird","Violet-crowned Hummingbird","White-eared Hummingbird","Unidentified Hummingbird","Yellow Bittern","Whiskered Tern","Pin-tailed Snipe","Swinhoe&#39;s Snipe","Long-toed Stint","Marsh Sandpiper","Mariana Common Moorhen","Unidentified Empidonax","Hybrid Hummingbird","Unidentified Dead Bird","Hybrid Towhee","Long-billed Curlew","Cuban Oriole","Bahama Oriole","Puerto Rican Oriole","Hispaniolan Oriole","Sagebrush Sparrow","Bell&#39;s Sparrow","Golden-winged x Blue-winged Warbler Hybrid","Barbuda Warbler","St. Lucia Warbler","Common Tern X Roseate Tern Hybrid","American Black Duck Dominant X Mallard Hybrid","Alder Flycatcher","Streaked Horned Lark","Unidentified Sharp-tailed Sparrow","Unidentified Rufous-sided Towhee","Cassin&#39;s Vireo","Plain Titmouse","Rufa Red Knot","Unknown Yellow-rumped Warbler","Western Grebe","Common Loon","Tufted Puffin","Crested Auklet","Guadalupe Murrelet","Craveri&#39;s Murrelet","Great Skua","Black-legged Kittiwake","Hybrid Gull","Lesser Black-backed Gull","Ring-billed Gull","Franklin&#39;s Gull","Black-winged Petrel","Mallard X Hawaiian Duck Hybrid","Scott&#39;s Oriole","Boat-tailed Grackle","Eared Grebe","Horned Puffin","Marbled Murrelet","Parasitic Jaeger","Yellow-footed Gull","Laughing Gull","Hybrid Tern","Bridled Tern","Hybrid Albatross","Streaked Shearwater","Wedge-tailed Shearwater","Wilson&#39;s Storm-Petrel","Red-footed Booby","Great Frigatebird","Spectacled Eider","Roseate Spoonbill","Reddish Egret","Virginia Rail","Rock Sandpiper","Black-tailed Godwit","Jamaican Oriole","Merlin","Spotted X Barred Owl Hybrid","Northern Pygmy-Owl","Mangrove Cuckoo","Downy Woodpecker","Red-shafted Flicker","Lesser Nighthawk","Western Kingbird","Sulphur-bellied Flycatcher","Cordilleran Flycatcher","Island Scrub-Jay","Fish Crow","Palila","Red Avadavat","Fairy Penguin","Light-mantled Albatross","Ancient Murrelet","Xantus&#39;s Murrelet","Dovekie","Pomarine Jaeger","Magellan Gull","Iceland Gull","Sandwich Tern","Roseate Tern","Interior Least Tern","Gray-backed Tern","Blue-gray Noddy","Shy Albatross","Yellow-nosed Albatross","Manx Shearwater","Black-vented Shearwater","Cook&#39;s Petrel","Phoenix Petrel","Stejneger&#39;s Petrel","Least Storm-Petrel","Brown Pelican","Hooded Merganser","Mottled Duck","Blue-winged Teal","Ring-necked Duck","Harlequin Duck","Black Scoter","Lesser Snow Goose","Canada Goose","Wood Stork","Great Blue Heron","Little Blue Heron","Whooping Crane","Yellow-breasted Crake","Common Gallinule","Hawaiian Stilt","Long-billed Dowitcher","Pectoral Sandpiper","Sanderling","Snowy Plover","Ruddy Turnstone","Spotted Dove","White-throated Ground-Dove","White-tipped Dove","Tahiti Petrel","Buff-banded Rail","Purple Swamphen","Fiji Shrikebill","Jungle Myna","California Condor","Mississippi Kite","Cooper&#39;s Hawk","Spotted Owl","Northern Spotted Owl","Great Horned Owl","Ferruginous Pygmy-Owl","Brown-throated Parakeet","Greater Roadrunner","Elegant Trogon","Puerto Rican Tody","Chuck-will&#39;s-widow","Couch&#39;s Kingbird","Yellow-bellied Flycatcher","Northern Beardless-Tyrannulet","Steller&#39;s Jay","Mexican Jay","Gray Jay","American Crow","White-vented Myna","Shiny Cowbird","Yellow-shouldered Blackbird","Black-vented Oriole","Greater Antillean Grackle","Hawfinch","Common Rosefinch","White-winged Crossbill","Common Redpoll","Belding&#39;s Savannah Sparrow","Florida Grasshopper Sparrow","Dusky Seaside Sparrow","Eastern White-crowned Sparrow","Zonotrichia Sparrow Hybrid","Field Sparrow","Oregon Junco","Yellow-eyed Junco","Five-striped Sparrow","Eastern Towhee","Canyon Towhee","Red-crested Cardinal","Hepatic Tanager","Gray-breasted Martin","Violet-green Swallow","Cedar Waxwing","Kauai Oo","Philadelphia Vireo","White-eyed Vireo","Bananaquit","Blue-winged Warbler","Virginia&#39;s Warbler","Mourning Warbler","Hooded Warbler","Fan-tailed Warbler","Golden-crowned Warbler","American Pipit","Brown Thrasher","California Thrasher","Rock Wren","Winter Wren","Wood Thrush","Swainson&#39;s Thrush","American Robin","Red-legged Thrush","Siberian Rubythroat","Maui Alauahio","Akekee","Lavender Waxbill","African Silverbill","Adelie Penguin","Royal Penguin","African Penguin","Buller&#39;s Albatross","Thin-billed Prion","Snowy Sheathbill","Northern Giant Petrel","Guam Swiftlet","Micronesian Honeyeater","Bridled White-eye","Mariana Swiftlet","Sad Flycatcher","Greater Antillean Elaenia","Orangequit","Puerto Rican Sharp-shinned Hawk","Cherry-head Conure","Hybrid Warbler","Solitary Sandpiper","Whimbrel","Surfbird","Ipswich Sparrow","Lark Sparrow","American Tree Sparrow","Botteri&#39;s Sparrow","Blue Bunting","Phainopepla","Hutton&#39;s Vireo","Lucy&#39;s Warbler","Blackburnian Warbler","Hermit Warbler","Gray Wagtail","Gray Catbird","Sedge Wren","Red-breasted Nuthatch","Millerbird","Black-capped Gnatcatcher","Pacific Wren","Cliff Swallow","Hybrid Nonpasserine","Pacific Reef Heron","Alaska Marbled Murrelet","Scripps&#39;s Murrelet","Tropical Shearwater","California Ridgway&#39;s Rail","Western Snowy Plover","Puerto Rican Plain Pigeon","Eared Dove","Audubon&#39;s Crested Caracara","Western Yellow-billed Cuckoo","Puerto Rican Vireo","Sabine&#39;s Gull","Elegant Tern","Black-naped Tern","Little Tern","Black Tern","Black Skimmer","Wandering Albatross","Waved Albatross","Audubon&#39;s Shearwater","Sooty Shearwater","Short-tailed Shearwater","Hawaiian Petrel","Bulwer&#39;s Petrel","Leach&#39;s Storm-Petrel","Wedge-rumped Storm-Petrel","Black Storm-Petrel","White-throated Storm-Petrel","Red-tailed Tropicbird","Great Cormorant","Brandt&#39;s Cormorant","Red-breasted Merganser","Gadwall","European Green-winged Teal","Northern Pintail","Muscovy Duck","Common Pochard","Canvasback","Tufted Duck","Steller&#39;s Eider","Masked Duck","Greater White-fronted Goose","Black X Atlantic Brant Intergrade","Mute Swan","Trumpeter Swan","White Ibis","Least Bittern","Cattle Egret","Mississippi Sandhill Crane","Clapper Rail","Hawaiian Coot","Red Phalarope","Red-necked Phalarope","American Avocet","Short-billed Dowitcher","Sharp-tailed Sandpiper","Red-necked Stint","Curlew Sandpiper","Semipalmated Sandpiper","Hudsonian Godwit","Greater Yellowlegs","Ruff","Spotted Sandpiper","Eurasian Dotterel","American Golden-Plover","Lesser Golden-Plover","Piping Plover","Mountain Plover","Northern Jacana","Band-tailed Pigeon","Zebra Dove","Mourning Dove","White-winged Dove","Ruddy Ground-Dove","Inca Dove","Turkey Vulture","White-tailed Kite","Puerto Rican Broad-winged Hawk","Gray Hawk","Prairie Falcon","Barred Owl","Puerto Rican Screech-Owl","Orange-fronted Parakeet","Blue-crowned Lorikeet","Smooth-billed Ani","Eared Quetzal","Green Kingfisher","Ivory-billed Woodpecker","Arizona Woodpecker","Red-naped Sapsucker","Red-breasted Sapsucker","Acorn Woodpecker","Golden-fronted Woodpecker","Yellow-shafted Flicker","Eastern Whip-poor-will","Mexican Whip-poor-will","Chimney Swift","Anna&#39;s Hummingbird","Berylline Hummingbird","Scissor-tailed Flycatcher","Gray Kingbird","Great Kiskadee","Ash-throated Flycatcher","Lesser Antillean Flycatcher","Black Phoebe","Olive-sided Flycatcher","Eastern Wood-Pewee","Jamaican Pewee","Acadian Flycatcher","Willow Flycatcher","Dusky Flycatcher","Gray Flycatcher","Greenish Elaenia","Eurasian Skylark","Western Scrub-Jay","Northwestern Crow","Pinyon Jay","Common Myna","Bronzed Cowbird","Tawny-shouldered Blackbird","Spot-breasted Oriole","Baltimore Oriole","Bullock&#39;s Oriole","Common Grackle","Evening Grosbeak","Purple Finch","Gray-crowned Rosy-Finch","European Goldfinch","Oriental Greenfinch","Unidentified Common/Hoary Redpoll","Pine Siskin","Snow Bunting","Gray Bunting","Reed Bunting","Vesper Sparrow","Le Conte&#39;s Sparrow","White-crowned Sparrow","Nuttall&#39;s White-crowned Sparrow","Rufous-collared Sparrow","White-winged Junco","Bachman&#39;s Sparrow","Song Sparrow","Swamp Sparrow","Green-tailed Towhee","Inyo California Towhee","Pyrrhuloxia","Yellow Grosbeak","Painted Bunting","Black-faced Grassquit","Antillean Euphonia","Western Tanager","Puerto Rican Tanager","Bahama Swallow","Brown Shrike","Japanese White-eye","San Clemente Loggerhead Shrike","Blue-headed Vireo","Gray Vireo","Brewster&#39;s Warbler","Golden-winged Warbler","Tennessee Warbler","Northern Parula","Chestnut-sided Warbler","Black-throated Gray Warbler","Pine Warbler","Ovenbird","Louisiana Waterthrush","MacGillivray&#39;s Warbler","Wilson&#39;s Warbler","Slate-throated Redstart","Eastern Yellow Wagtail","American Dipper","Northern Mockingbird","Bendire&#39;s Thrasher","Canyon Wren","Red-vented Bulbul","Oak Titmouse","Carolina Chickadee","Mexican Chickadee","Wrentit","Greater Necklaced Laughingthrush","Japanese Bush-Warbler","Golden-crowned Kinglet","Blue-gray Gnatcatcher","Baja Gnatcatcher","Townsend&#39;s Solitaire","Puaiohi","Veery","Redwing","Dusky Thrush","Rufous-backed Robin","Eastern Bluebird","Hybrid Western/Mountain Bluebird","Mountain Bluebird","Oahu Elepaio","Laysan Finch","Ou","Oahu Amakihi","Anianiau","Nukupuu","Akikiki","Kakawahie","Iiwi","Akohekohe","Poo-uli","Northern Red Bishop","Black-rumped Waxbill","Scaly-breasted Munia","Pin-tailed Whydah","Emperor Penguin","Rockhopper Penguin","Galapagos Penguin","Southern Giant Petrel","Broad-billed Prion","Kerguelen Petrel","Snow Petrel","Gray-backed Storm-Petrel","Southern Black-backed Gull","Tinian Monarch","Nightingale Reed Warbler","Collared Kingfisher","Samoan Starling","Wattled Honeyeater","Golden White-eye","Long-tailed Cuckoo","Many-colored Fruit Dove","Guam Micronesian Kingfisher","Rota White-eye","Jamaican Tody","Southern House Wren","Jamaican Vireo","Olive-capped Warbler","Venezuelan Troupial","Greater Antillean Bullfinch","Yellow-bellied Seedeater","Yuma Ridgway&#39;s Rail","Light-footed Ridgway&#39;s Rail","Jamaican Spindalis","Puerto Rican Spindalis","Hispaniolan Spindalis","Common Greenshank","Common Snipe","Woodhouse&#39;s Scrub-Jay","Cassia Crossbill"];
autocomplete(document.getElementById("myInput"), specieslist);



function successFunction2(data) {//function puts all rows in csv into table

  	
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length-1; singleRow++) {//allRows.length
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
		 
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
		 if ((rowCells[1].toString()==stateid)){
		if (rowCells[0].toString()==stateid)
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
		 }
      }
		 
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
 // $('body').append(table);
  document.getElementById('table2').innerHTML = table
}
 var dropDown = document.getElementById("selectcountry"); 

//window.onload = function(){
//CALIFORNIA
document.getElementById('CA').addEventListener('click', function(ev){
    var statecode = "CA";
if (stateid.indexOf(statecode) > -1) {
    selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'CA');
	$("#CA").css('stroke', '');
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
selectize.addItem(statecode);
document.getElementById(statecode).style.stroke = '#002868';
 //stateid.push("CA");
 }
/*
$.ajax({
  url: 'https://webdev.er.usgs.gov/BBL/int_maps/pages/bbldata.csv',
  dataType: 'text',
dropDown.selectedIndex = 0;}).done(successFunction);
*/

dropDown.selectedIndex = 0;})
document.getElementById('AZ').addEventListener('click', function(ev){
    var statecode = "AZ";
if (stateid.indexOf(statecode) > -1) {
    
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'AZ');
	$("#AZ").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';

 selectize.addItem(statecode);
 //stateid.push("AZ");
 }
dropDown.selectedIndex = 0;})

//TEXAS
document.getElementById('TX').addEventListener('click', function(ev){
var statecode="TX";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'TX');
	$("#TX").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("TX");
 }
dropDown.selectedIndex = 0;})

//NORTH DAKOTA
document.getElementById('ND').addEventListener('click', function(ev){
    var statecode="ND";
	if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'ND');
	$("#ND").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("ND");
 }dropDown.selectedIndex = 0;})

//LOUISIANA
document.getElementById('LA').addEventListener('click', function(ev){
    var statecode="LA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'LA');
	$("#LA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("LA");
 }  dropDown.selectedIndex = 0;})


document.getElementById('AK').addEventListener('click', function(ev){
    var statecode="AK";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'AK');
	$("#AK").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("AK");
 } dropDown.selectedIndex = 0;})

document.getElementById('AL').addEventListener('click', function(ev){
    var statecode="AL";
	if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'AL');
	$("#AL").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("AL");
 } dropDown.selectedIndex = 0;})

document.getElementById('AR').addEventListener('click', function(ev){
    var statecode="AR";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'AR');
	$("#AR").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("AR");
 } dropDown.selectedIndex = 0;})

document.getElementById('CO').addEventListener('click', function(ev){
    var statecode="CO";
	if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'CO');
	$("#CO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("CO");
 }  dropDown.selectedIndex = 0;})
document.getElementById('CT').addEventListener('click', function(ev){
    var statecode="CT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'CT');
	$("#CT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("CT");
 } dropDown.selectedIndex = 0;})
document.getElementById('DE').addEventListener('click', function(ev){
    var statecode="DE";
	if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'DE');
	$("#DE").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("DE");
 } dropDown.selectedIndex = 0;})
document.getElementById('FL').addEventListener('click', function(ev){
    var statecode="FL";
	if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'FL');
	$("#FL").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("FL");
 } dropDown.selectedIndex = 0;})

document.getElementById('GA').addEventListener('click', function(ev){
    var statecode="GA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'GA');
	$("#GA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("GA");
 } dropDown.selectedIndex = 0;})

document.getElementById('HI').addEventListener('click', function(ev){
    var statecode="HI";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'HI');
	$("#HI").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("HI");
 } dropDown.selectedIndex = 0;})
document.getElementById('ID').addEventListener('click', function(ev){
    var statecode="ID";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'ID');
	$("#ID").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("ID");
 } dropDown.selectedIndex = 0;})
document.getElementById('IL').addEventListener('click', function(ev){
    var statecode="IL";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'IL');
	$("#IL").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("IL");
 } dropDown.selectedIndex = 0;})
document.getElementById('IN').addEventListener('click', function(ev){
    var statecode="IN";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'IN');
	$("#IN").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("IN");
 }dropDown.selectedIndex = 0;})
document.getElementById('IA').addEventListener('click', function(ev){
    var statecode="IA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'IA');
	$("#IA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("IA");
 }dropDown.selectedIndex = 0;})
document.getElementById('KS').addEventListener('click', function(ev){
    var statecode="KS";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'KS');
	$("#KS").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("KS");
 }dropDown.selectedIndex = 0;})
document.getElementById('KY').addEventListener('click', function(ev){
    var statecode="KY";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'KY');
	$("#KY").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("KY");
 }dropDown.selectedIndex = 0;})
document.getElementById('ME').addEventListener('click', function(ev){
    var statecode="ME";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'ME');
	$("#ME").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("ME");
 }dropDown.selectedIndex = 0;})
document.getElementById('MD').addEventListener('click', function(ev){
    var statecode="MD";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MD');
	$("#MD").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MD");
 }dropDown.selectedIndex = 0;})
document.getElementById('MA').addEventListener('click', function(ev){
    var statecode="MA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MA');
	$("#MA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MA");
 }dropDown.selectedIndex = 0;})
document.getElementById('MI').addEventListener('click', function(ev){
    var statecode="MI";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MI');
	$("#MI").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MI");
 }dropDown.selectedIndex = 0;})
document.getElementById('MN').addEventListener('click', function(ev){
    var statecode="MN";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MN');
	$("#MN").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MN");
 }dropDown.selectedIndex = 0;})
document.getElementById('MS').addEventListener('click', function(ev){
    var statecode="MS";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MS');
	$("#MS").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MS");
 }dropDown.selectedIndex = 0;})
document.getElementById('MO').addEventListener('click', function(ev){
    var statecode="MO";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MO');
	$("#MO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MO");
 }dropDown.selectedIndex = 0;})
document.getElementById('MT').addEventListener('click', function(ev){
    var statecode="MT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MT');
	$("#MT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MT");
 } dropDown.selectedIndex = 0;})
document.getElementById('NE').addEventListener('click', function(ev){
    var statecode="NE";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NE');
	$("#NE").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NE");
 }dropDown.selectedIndex = 0;})
document.getElementById('NV').addEventListener('click', function(ev){
    var statecode="NV";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NV');
	$("#NV").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NV");
 }dropDown.selectedIndex = 0;})
document.getElementById('NH').addEventListener('click', function(ev){
    var statecode="NH";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NH');
	$("#NH").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NH");
 } dropDown.selectedIndex = 0;})
document.getElementById('NJ').addEventListener('click', function(ev){
    var statecode="NJ";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NJ');
	$("#NJ").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NJ");
 }dropDown.selectedIndex = 0;})
document.getElementById('NM').addEventListener('click', function(ev){
    var statecode="NM";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NM');
	$("#NM").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NM");
 } dropDown.selectedIndex = 0;})
document.getElementById('NY').addEventListener('click', function(ev){
    var statecode="NY";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NY');
	$("#NY").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NY");
 }dropDown.selectedIndex = 0;})
document.getElementById('NC').addEventListener('click', function(ev){
    var statecode="NC";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NC');
	$("#NC").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NC");
 } dropDown.selectedIndex = 0;})
document.getElementById('OH').addEventListener('click', function(ev){
    var statecode="OH";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'OH');
	$("#OH").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("OH");
 }dropDown.selectedIndex = 0;})
document.getElementById('OK').addEventListener('click', function(ev){
    var statecode="OK";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'OK');
	$("#OK").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("OK");
 }dropDown.selectedIndex = 0;})
document.getElementById('OR').addEventListener('click', function(ev){
    var statecode="OR";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'OR');
	$("#OR").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("OR");
 }dropDown.selectedIndex = 0;})
document.getElementById('PA').addEventListener('click', function(ev){
    var statecode="PA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'PA');
	$("#PA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("PA");
 } dropDown.selectedIndex = 0;})
document.getElementById('RI').addEventListener('click', function(ev){
    var statecode="RI";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'RI');
	$("#RI").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("RI");
 } dropDown.selectedIndex = 0;})
document.getElementById('SC').addEventListener('click', function(ev){
    var statecode="SC";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'SC');
	$("#SC").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("SC");
 }dropDown.selectedIndex = 0;})
document.getElementById('SD').addEventListener('click', function(ev){
    var statecode="SD";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'SD');
	$("#SD").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
selectize.addItem(statecode);
 //stateid.push("SD");
 }dropDown.selectedIndex = 0;})
document.getElementById('TN').addEventListener('click', function(ev){
    var statecode="TN";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'TN');
	$("#TN").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("TN");
 }dropDown.selectedIndex = 0;})
document.getElementById('UT').addEventListener('click', function(ev){
    var statecode="UT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'UT');
	$("#UT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("UT");
 }dropDown.selectedIndex = 0;})
document.getElementById('VT').addEventListener('click', function(ev){
    var statecode="VT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'VT');
	$("#VT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("VT");
 }dropDown.selectedIndex = 0;})
document.getElementById('VA').addEventListener('click', function(ev){
    var statecode="VA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'VA');
	$("#VA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("VA");
 }dropDown.selectedIndex = 0;})
document.getElementById('WA').addEventListener('click', function(ev){
    var statecode="WA";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'WA');
	$("#WA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("WA");
 } dropDown.selectedIndex = 0;})
document.getElementById('WV').addEventListener('click', function(ev){
    var statecode="WV";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'WV');
	$("#WV").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("WV");
 }dropDown.selectedIndex = 0;})
document.getElementById('WI').addEventListener('click', function(ev){
    var statecode="WI";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'WI');
	$("#WI").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("WI");
 } dropDown.selectedIndex = 0;})
document.getElementById('WY').addEventListener('click', function(ev){
    var statecode="WY";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'WY');
	$("#WY").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("US") > -1)){
stateid=[];
 }
 if (typeof selectcountryvalue !== 'undefined') {
    
 stateid = stateid.filter(e => e !== selectcountryvalue);
}
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("WY");
 }dropDown.selectedIndex = 0;})

// --------------------------------------CANADA ------------------------------------------//
//----------------------------------------------------------------------------------------//


document.getElementById('AB').addEventListener('click', function(ev){
    var statecode="AB";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'AB');
	$("#AB").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("AB");
 }dropDown.selectedIndex = 0;})
 
document.getElementById('BC').addEventListener('click', function(ev){
    var statecode="BC";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'BC');
	$("#BC").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("BC");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('MAN').addEventListener('click', function(ev){
     var statecode="MAN";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'MAN');
	$("#MAN").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("MAN");
 }dropDown.selectedIndex = 0;})
 
 
 document.getElementById('NB').addEventListener('click', function(ev){
     var statecode="NB";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NB');
	$("#NB").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NB");
 }dropDown.selectedIndex = 0;})
 document.getElementById('LAB').addEventListener('click', function(ev){
     var statecode="LAB";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'LAB');
	$("#LAB").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("LAB");
 }dropDown.selectedIndex = 0;})
 document.getElementById('NS').addEventListener('click', function(ev){
     var statecode="NS";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NS');
	$("#NS").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NS");
 }dropDown.selectedIndex = 0;})
 document.getElementById('NT').addEventListener('click', function(ev){
     var statecode="NT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NT');
	$("#NT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NT");
 }dropDown.selectedIndex = 0;})
document.getElementById('NU').addEventListener('click', function(ev){
    var statecode="NU";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'NU');
	$("#NU").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("NU");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('ONT').addEventListener('click', function(ev){
     var statecode="ONT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'ONT');
	$("#ONT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("ONT");
 }dropDown.selectedIndex = 0;})
  document.getElementById('PE').addEventListener('click', function(ev){
      var statecode="PE";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'PE');
	$("#PE").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("PE");
 }dropDown.selectedIndex = 0;})
document.getElementById('PQ').addEventListener('click', function(ev){
    var statecode="PQ";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'PQ');
	$("#PQ").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("PQ");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('SK').addEventListener('click', function(ev){
     var statecode="SK";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'SK');
	$("#SK").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("SK");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('YT').addEventListener('click', function(ev){
     var statecode="YT";
if (stateid.indexOf(statecode) > -1) {
	selectize.removeItem(statecode);
	//stateid = stateid.filter(e => e !== 'YT');
	$("#YT").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("CAN") > -1)){
stateid=[];
 }
document.getElementById(statecode).style.stroke = '#002868';
 selectize.addItem(statecode);
 //stateid.push("YT");
 }dropDown.selectedIndex = 0;})
 //};
 
 
 ///---Mexico---///
 
 document.getElementById('PUEBLA').addEventListener('click', function(ev){
if (stateid.indexOf("PUEBLA") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'PUEBLA');
	$("#PUEBLA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('PUEBLA').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("PUEBLA");
 }dropDown.selectedIndex = 0;})
  document.getElementById('COLIMA').addEventListener('click', function(ev){
if (stateid.indexOf("COLIMA") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'COLIMA');
	$("#COLIMA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('COLIMA').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("COLIMA");
 }dropDown.selectedIndex = 0;})
  document.getElementById('JALISCO').addEventListener('click', function(ev){
if (stateid.indexOf("JALISCO") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'JALISCO');
	$("#JALISCO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('JALISCO').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("JALISCO");
 }dropDown.selectedIndex = 0;})
 document.getElementById('GUANAJUATO').addEventListener('click', function(ev){
if (stateid.indexOf("GUANAJUATO") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'GUANAJUATO');
	$("#GUANAJUATO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('GUANAJUATO').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("GUANAJUATO");
 }dropDown.selectedIndex = 0;})
 
  document.getElementById('QUERETARO').addEventListener('click', function(ev){
if (stateid.indexOf("QUERETARO") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'QUERETARO');
	$("#QUERETARO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('QUERETARO').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("QUERETARO");
 }dropDown.selectedIndex = 0;})
 
  document.getElementById('YUCATAN').addEventListener('click', function(ev){
if (stateid.indexOf("YUCATAN") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'YUCATAN');
	$("#YUCATAN").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('YUCATAN').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("YUCATAN");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('path7351').addEventListener('click', function(ev){
if (stateid.indexOf("path7351") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'path7351');
	$("#path7351").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('path7351').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("path7351");
 }dropDown.selectedIndex = 0;})
 document.getElementById('SANLUISPOTOSI').addEventListener('click', function(ev){
if (stateid.indexOf("SANLUISPOTOSI") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'SANLUISPOTOSI');
	$("#SANLUISPOTOSI").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('SANLUISPOTOSI').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("SANLUISPOTOSI");
 }dropDown.selectedIndex = 0;}) 
 document.getElementById('AGUASCALIENTES').addEventListener('click', function(ev){
if (stateid.indexOf("AGUASCALIENTES") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'AGUASCALIENTES');
	$("#AGUASCALIENTES").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('AGUASCALIENTES').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("AGUASCALIENTES");
 }dropDown.selectedIndex = 0;})
 document.getElementById('TAMAULIPAS').addEventListener('click', function(ev){
if (stateid.indexOf("TAMAULIPAS") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'TAMAULIPAS');
	$("#TAMAULIPAS").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('TAMAULIPAS').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("TAMAULIPAS");
 }dropDown.selectedIndex = 0;})
  document.getElementById('DURANGO').addEventListener('click', function(ev){
if (stateid.indexOf("DURANGO") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'DURANGO');
	$("#DURANGO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('DURANGO').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("DURANGO");
 }dropDown.selectedIndex = 0;})
 document.getElementById('path7323').addEventListener('click', function(ev){
if (stateid.indexOf("path7323") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'path7323');
	$("#path7323").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('path7323').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("path7323");
 }dropDown.selectedIndex = 0;})
 document.getElementById('NUEVOLEON').addEventListener('click', function(ev){
if (stateid.indexOf("NUEVOLEON") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'NUEVOLEON');
	$("#NUEVOLEON").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('NUEVOLEON').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("NUEVOLEON");
 }dropDown.selectedIndex = 0;})
 document.getElementById('COAHUILA').addEventListener('click', function(ev){
if (stateid.indexOf("COAHUILA") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'COAHUILA');
	$("#COAHUILA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('COAHUILA').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("COAHUILA");
 }dropDown.selectedIndex = 0;})
 document.getElementById('SINALOA').addEventListener('click', function(ev){
if (stateid.indexOf("SINALOA") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'SINALOA');
	$("#SINALOA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('SINALOA').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("SINALOA");
 }dropDown.selectedIndex = 0;})
 document.getElementById('CHIHUAHUA').addEventListener('click', function(ev){
if (stateid.indexOf("CHIHUAHUA") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'CHIHUAHUA');
	$("#CHIHUAHUA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('CHIHUAHUA').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("CHIHUAHUA");
 }dropDown.selectedIndex = 0;})
 document.getElementById('CHIAPAS').addEventListener('click', function(ev){
if (stateid.indexOf("CHIAPAS") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'CHIAPAS');
	$("#CHIAPAS").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('CHIAPAS').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("CHIAPAS");
 }dropDown.selectedIndex = 0;})
 document.getElementById('OAXACA').addEventListener('click', function(ev){
if (stateid.indexOf("OAXACA") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'OAXACA');
	$("#OAXACA").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('OAXACA').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("OAXACA");
 }dropDown.selectedIndex = 0;})
  document.getElementById('GUERRERO').addEventListener('click', function(ev){
if (stateid.indexOf("GUERRERO") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'GUERRERO');
	$("#GUERRERO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('GUERRERO').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("GUERRERO");
 }dropDown.selectedIndex = 0;})
   document.getElementById('TABASCO').addEventListener('click', function(ev){
if (stateid.indexOf("TABASCO") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'TABASCO');
	$("#TABASCO").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('TABASCO').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("TABASCO");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('MICHOACAN').addEventListener('click', function(ev){
if (stateid.indexOf("MICHOACAN") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'MICHOACAN');
	$("#MICHOACAN").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('MICHOACAN').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("MICHOACAN");
 }dropDown.selectedIndex = 0;})
 
 document.getElementById('MORELOS').addEventListener('click', function(ev){
if (stateid.indexOf("MORELOS") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'MORELOS');
	$("#MORELOS").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('MORELOS').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("MORELOS");
 }dropDown.selectedIndex = 0;})
  document.getElementById('MEXICODF').addEventListener('click', function(ev){
if (stateid.indexOf("MEXICODF") > -1) {
	selectize.removeItem("CA");
	//stateid = stateid.filter(e => e !== 'MEXICODF');
	$("#MEXICODF").css('stroke', '');
	if(stateid==""){
		stateid="all";
	}
}
else{
if ((stateid.indexOf("all") > -1)||(stateid.indexOf("MEX") > -1)){
stateid=[];
 }
document.getElementById('MEXICODF').style.stroke = '#002868';
 selectize.addItem("CA");
 //stateid.push("MEXICODF");
 }dropDown.selectedIndex = 0;})
 
 
 
 
 
 
 