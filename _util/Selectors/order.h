/*RFI JSon
{
	"Nombre": "CompareOrder",
	'NombreToolBox': 'aplyInCase(=,>,<)',
	"Tipo" : "SistemFnc",
	"title": "Execute the code depending on the comparison",
	"InnerHTML": "
	<div class='lineaDeCodigo blokOnSection' definir='useOrdenV1' originalclass='funcion' originalid='orden' draggable='true' ondragstart='drag_linea(event)'>&#x2329;
 Compare:<div class='parametroDiv'></div> Y <div class='parametroDiv'></div> 
		<div class='tab1'>[if =, do: <div class='parametroDiv changeToBlock' entreComillas='true'></div> ]</div>
		<div class='tab1'>[if &gt;, do: <div class='parametroDiv changeToBlock' entreComillas='true'></div> ]</div>
		<div class='tab1'>[if &lt;, do: <div class='parametroDiv changeToBlock' entreComillas='true'></div> ]</div>&#x232A;</div>"
}
*/

void orden()
{
		signed long x,y;

	x = atol(ptr_param[0]);
	y = atol(ptr_param[1]);
	
	if (x > y)
	{
		//printf(putc_rsp,"%s", ptr_param[3]);
		puts_resp("%s",ptr_param[3]);
	}
	else if (x < y)
	{
		//printf(putc_rsp,"%s", ptr_param[4]);
		puts_resp("%s",ptr_param[4]);
	}
	else
	{
		//printf(putc_rsp,"%s", ptr_param[2]);
		puts_resp("%s",ptr_param[2]);
	}
	
}

doCMDf(orden)
doCMDejec(orden)
inc_Nfnc
