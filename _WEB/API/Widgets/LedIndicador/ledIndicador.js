//RFI TAG:driverName=HTML Widget

/*RFI JSon
{
	'Nombre': 'ledIndicador',
	'NombreToolBox': 'LedIndicador',
	'Tipo' : 'Widget',
	'title': 'Led Indicador',
	'html-tag': 'emic-widget-ledindicador',
}
*/

//	

#setFile plugins/www/header.html
<script type="module" src="/dashboard/.{userName}./.{project}./.{userModule}./JS/ledIndicador.js"> </script>
#unSetFile

#setFile temp/header.html
<script type="module" src="./JS/ledIndicador.js"> </script>
#unSetFile

#setFile wwwroot/JS/ledIndicador.js
#newRFIcode(_WEB/API/Widgets/LedIndicador/plugins/ledIndicador.js,name=)
#unSetFile

/*RFI JSon
{
	'Nombre': 'LedIndicadorSetValue',
	'NombreToolBox': 'LedIndicadorSetValue',
	'Tipo' : 'SistemFnc',
	'title': 'set Text Box value',

	'InnerHTML':"
		<div class='lineaDeCodigo' originalclass='funcion' originalid='LedIndicadorSetValue' draggable='true' ondragstart='drag_linea(event)'>
			LedIndicador.setValue(<div class='parametroDiv'></div> , <div class='parametroDiv'></div>)
		</div>"
}
*/

function LedIndicadorSetValue(LedIndicadorName,value){
	document.getElementById(LedIndicadorName).state = value;
}
