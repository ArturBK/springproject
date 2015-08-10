
// Function para abrir janela da chave estrangeira
function janelachaveestrangeira(nome_janela, esquerda, topo, largura, altura, endereco, filtrooculto )  
{
    popup = popup = window.open(endereco+'?filtrooculto='+filtrooculto, nome_janela,"toolbar=0,scrollbars=1,location=0,directories=0,copyhistory=0,status=1,menubar=0,resizable=1,width="+largura+",height="+altura+",z-lock,screenX=90,screenY=100, Left="+esquerda+", Top="+topo); 
} 

// copia do original
function janelachaveestrangeira1(nome_janela, esquerda, topo, largura, altura, maxlinhas, endereco, filtrooculto )  
{
    popup = popup = window.open(endereco+'?chaveestrangeira=sim&maxlinhas='+maxlinhas+'&filtrooculto='+filtrooculto, nome_janela,"toolbar=0,scrollbars=1,location=0,directories=0,copyhistory=0,status=1,menubar=0,resizable=1,width="+largura+",height="+altura+",z-lock,screenX=90,screenY=100, Left="+esquerda+", Top="+topo); 
} 
// Function para recarregar opções de campos list/menu para chave estrangeira
function janelareloadcampo(objeto, origem, campochave, campodescricao, campodescricao2)  
{
	var nome_janela = "reload";
	endereco = "../s_reloadchaveestrangeira?objeto="+objeto+"&origem="+origem+"&campochave="+campochave+"&campodescricao="+campodescricao+"&campodescricao2="+campodescricao2;
   popup = popup = window.open(endereco, nome_janela,"toolbar=0,scrollbars=1,location=0,directories=0,copyhistory=0,status=1,menubar=0,resizable=1,width=10,height=10,z-lock,screenX=90,screenY=100, Left=5000, Top=5000"); 
} 

// Para acicionar as opções em um objeto list/menu
function addOption(theSel, theText, theValue)
{ 
   
	if(theValue!=0)
	{ 
		var newOpt = new Option(theText, theValue);
		var selLength = theSel.length;
		theSel.options[selLength] = newOpt;
		
	}
}



// Para excluir as opções em um objeto list/menu
function deleteoptions(theSel)
{	
   selLength = theSel.length;
   for(i=selLength-1; i>0; i--)
   {
  	 theSel.options[i] = null;
   }
}

function Imprimir()
{
	parent.focus();
	parent.print();
}

function verificaemail(email) 
{       var achou_ponto=false;
        var achou_arroba=false;
        var achou_caracter=false;
        for (var i=0; i<email.length; i++) 
		{       if (email.charAt(i)=="@") achou_arroba=true;
                else if (email.charAt(i)==".") achou_ponto=true;
                else if (email.charAt(i)!=" ") achou_caracter=true;
        }
        return (achou_ponto & achou_arroba & achou_caracter);
}

function isNumeric(valor)
{
      if( valor == parseFloat(valor).toString()){
         return 1;
      }
      else {
         return 0;
      }
}

function cgc(pcgc)
 {
       // verifica o tamanho
  pcgc = pcgc.replace(".","");
  pcgc = pcgc.replace(".","");	
  pcgc = pcgc.replace("/","");	 
  pcgc = pcgc.replace("-","");	 

 if (pcgc.length != 14) {
  sim=false;
  alert ("Tamanho Invalido de CGC"); 
  return false;
  }
 else {sim=true}

  if (sim )  // verifica se e numero
  {
  for (i=0;((i<=(pcgc.length-1))&& sim); i++)
  {
   val = pcgc.charAt(i)
       // alert (val)
   if
((val!="9")&&(val!="0")&&(val!="1")&&(val!="2")&&(val!="3")&&(val!="4") &&
(val!="5")&&(val!="6")&&(val!="7")&&(val!="8")) {sim=false}
   }
   if (sim)  // se for numero continua
   {
    m2 = 2
    soma1 = 0
    soma2 = 0
    for (i=11;i>=0;i--)
    {
     val = eval(pcgc.charAt(i))
       // alert ("Valor do Val: "+val)
     m1 = m2
  if (m2<9) { m2 = m2+1}
  else {m2 = 2}
  soma1 = soma1 + (val * m1)
  soma2 = soma2 + (val * m2)
    }  // fim do for de soma

  soma1 = soma1 % 11
  if (soma1 < 2) {  d1 = 0}
   else { d1 = 11- soma1}

     soma2 = (soma2 + (2 * d1)) % 11
  if (soma2 < 2) { d2 = 0}
   else { d2 = 11- soma2}
        // alert (d1)
       // alert (d2)
    if ((d1==pcgc.charAt(12)) && (d2==pcgc.charAt(13)))
   {  return true;}
   else { alert("Valor invalido de CCG"); return false; }
   }
 }
 }

function cpf(numero)
{
var soma = 0
var resultado1 = 0
var resultado2 = 0

numero = numero.replace(".","")
numero = numero.replace(".","")
numero = numero.replace("-","")

soma = 10 * parseInt(numero.substr(0,1)) + 9 * parseInt(numero.substr(1,1)) + 8 * parseInt(numero.substr(2,1)) + 7 * parseInt(numero.substr(3,1)) + 6 * parseInt(numero.substr(4,1)) + 5 * parseInt(numero.substr(5,1)) + 4 * parseInt(numero.substr(6,1)) + 3 * parseInt(numero.substr(7,1)) + 2 * parseInt(numero.substr(8,1))

soma = soma -(11 * parseInt(soma / 11))

if (soma == 0 || soma == 1)
	resultado1 = 0;
else
	resultado1 = 11 - soma;

if (resultado1 == parseInt(numero.substr(9,1)))
{

	soma = parseInt(numero.substr(0,1)) * 11 + parseInt(numero.substr(1,1)) * 10 + parseInt(numero.substr(2,1)) * 9 + parseInt(numero.substr(3,1)) * 8 + parseInt(numero.substr(4,1)) * 7 + parseInt(numero.substr(5,1)) * 6 + parseInt(numero.substr(6,1)) * 5 + parseInt(numero.substr(7,1)) * 4 + parseInt(numero.substr(8,1)) * 3 + parseInt(numero.substr(9,1)) * 2

	soma = soma -(11 * parseInt(soma / 11))
	
	if (soma == 0 || soma == 1)
		resultado2 = 0;
	else
		resultado2 = 11 - soma;
	
	if (resultado2 == parseInt(numero.substr(10,1)))
	{
		return true;
	}
	else
	{
		alert("CPF Inválido");
		return false;
	}
}
else 
{
	alert("CPF Inválido");
	return false;
}
}

function emailCheck (emailStr) {

	var checkTLD=1;
	var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
	var emailPat=/^(.+)@(.+)$/;
	var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
	var validChars="\[^\\s" + specialChars + "\]";
	var quotedUser="(\"[^\"]*\")";
	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
	var atom=validChars + '+';
	var word="(" + atom + "|" + quotedUser + ")";
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
	var matchArray=emailStr.match(emailPat);

	if (matchArray==null) {
	
	alert("O endereço de e-mail está incorreto, digite novamente.");
	return false;
	}
	
	var user=matchArray[1];
	var domain=matchArray[2];
	
	for (i=0; i<user.length; i++) {
	if (user.charCodeAt(i)>127) {
	alert("O usuário possui caracteres inválidos.");
	return false;
	   }
	}
	for (i=0; i<domain.length; i++) {
	if (domain.charCodeAt(i)>127) {
	alert("O domínio possui caracteres inválidos.");
	return false;
	   }
	}
	
	if (user.match(userPat)==null) {
	
	alert("Usuário parece não ser válido!");
	return false;
	}
	
	var IPArray=domain.match(ipDomainPat);
	if (IPArray!=null) {
	
	for (var i=1;i<=4;i++) {
	if (IPArray[i]>255) {
	alert("IP destino é inválido!");
	return false;
	   }
	}
	return true;
	}
	 
	var atomPat=new RegExp("^" + atom + "$");
	var domArr=domain.split(".");
	var len=domArr.length;
	for (i=0;i<len;i++) {
	if (domArr[i].search(atomPat)==-1) {
	alert("O domínio parece não ser válido!");
	return false;
	   }
	}
	
	if (checkTLD && domArr[domArr.length-1].length!=2 && 
	domArr[domArr.length-1].search(knownDomsPat)==-1) {
	alert("O domínio parece não ser válido!");
	return false;
	}
	
	if (len<2) {
	alert("O domínio parece não ser válido!");
	return false;
	}
	
	return true;
}


// principal.php

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function Go(){return}


// classificados/inserir.php

function setColor(el, bg) {
  if (el.style) el.style.backgroundColor = bg;
}

function count(){

	aux = document.form2.oferta.value;
	
	if (aux.length <= 240) { 
		document.form2.oferta.value = aux;
	}else{
		document.form2.oferta.value = aux.substring(0, 239);
	}
}

function sonumero(mobjeto, e)
{
	
	var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
	//alert (keyCode)
	//alert(e.Which);
	// e.which  para Firefox    
 	// e.keyCode para IE
	if ((e.which == 8) || (keyCode == 8)) { return true; } // BackSpace
	if ((e.which == 9) || (keyCode == 9))  { return true; } // TAB
	if ((e.which == 0) || (keyCode == 0))  { return true; } // TAB
	if ((e.which == 13) || (keyCode == 13))  { return true; } // enter
	if ((e.which == 41) || (keyCode == 41))  { return false; } // )
	if ((e.which == 40) || (keyCode == 40))  { return false; } // (
	if ((e.which == 42) || (keyCode == 42))  { return false; } // *
	if ((e.which == 43) || (keyCode == 43))  { return false; } // +
	if ((e.which == 36) || (keyCode == 36))  { return false; } // $
   var carac = String.fromCharCode(e.which);
   if (carac <= ' ')
     carac = String.fromCharCode(keyCode);

//alert(carac);
   caracteres = '0123456789'; 
   if (caracteres.search(carac)!=-1)  
		 return true; 

   return false;
}   

function sonumero_virgula(mobjeto, e)
{
	
	var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
	//alert (keyCode)
	//alert(e.Which);
	// e.which  para Firefox    
 	// e.keyCode para IE
	if ((e.which == 8) || (keyCode == 8)) { return true; } // BackSpace
	if ((e.which == 9) || (keyCode == 9))  { return true; } // TAB
	if ((e.which == 0) || (keyCode == 0))  { return true; } // TAB
   var carac = String.fromCharCode(e.which);
   if (carac <= ' ')
     carac = String.fromCharCode(keyCode);

    //alert(carac);
   caracteres = '0123456789'; 
   if (caracteres.search(carac)!=-1)  
		 return true; 

   return false;
}  

function Mascara(formato, objeto, e) 
{ 
   //campo = eval (objeto); 
   campo = objeto;
   var keypress = String.fromCharCode(e.which);
   if (keypress <= ' ')
       keypress = String.fromCharCode(e.keyCode);

		if (formato=='MESANO') 
		{ 
			caracteres = '01234567890'; 
			separacoes = 1; 
			separacao1 = '/'; 
			conjuntos = 2; 
			conjunto1 = 2; 
			conjunto2 = 4; 
			if ((caracteres.search(keypress)!=-1) && campo.value.length < (conjunto1 + conjunto2 + 1)) 
			{ 
				if (campo.value.length == conjunto1) 
					campo.value = campo.value + separacao1; 
			} 
			else 
				event.returnValue = false; 
			} 
}


function mascara_data(objeto, data, e)
{ 
				// e.which  para Firefox    
 				// e.keyCode para IE
				if ((e.which == 8) || (e.keyCode == 8)) { return true; } // BackSpace
				if ((e.which == 9) || (e.keyCode == 9))  { return true; } // TAB
				if ((e.which == 0) || (e.keyCode == 0))  { return true; } // TAB
       
              var mydata = ''; 
              mydata = mydata + data; 
              if (mydata.length == 2){ 
                  mydata = mydata + '/'; 
                  objeto.value = mydata; 
              } 
              if (mydata.length == 5){ 
                  mydata = mydata + '/'; 
                  objeto.value = mydata; 
              } 
             // if (mydata.length == 10){ 
             //     verifica_data(objeto, objeto.value); 
             // } 
} 
           
function verifica_data ( objeto, data  ) 
{ 
            if (data <= '')
					return true;
		   situacao = ""; 
		   var tam = data.length;
		   if (tam != 10) {
  				  situacao = "falsa"; 
           }


			dia = (data.substring(0,2)); 
            mes = (data.substring(3,5)); 
            ano = (data.substring(6,10)); 				
			
			if (dia.indexOf("/") != -1 ){
				situacao = "falsa"; 
			}

			if (mes.indexOf("/") != -1 ){
				situacao = "falsa"; 
			}
	        
 			if (ano == "" ) { 
                situacao = "falsa"; 
            } 
            // verifica o dia valido para cada mes 
            if ((dia < 01)||(dia < 01 || dia > 30) && (  mes == 04 || mes == 06 || mes == 09 || mes == 11 ) || dia > 31) { 
                situacao = "falsa"; 
            } 

            // verifica se o mes e valido 
            if (mes < 01 || mes > 12 ) { 
                situacao = "falsa"; 
            } 

            // verifica se e ano bissexto 
            if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4)))) { 
                situacao = "falsa"; 
            } 
    
            if (data == "") { 
                situacao = "falsa"; 
            } 
    
            if (situacao == "falsa") { 
                alert("Data inválida. Use o formato (dd/mm/aaaa)."); 
					 objeto.value = '';
                	objeto.focus(); 
					return false;
            } 
				return true;
} 


function mascara_hora(objeto, hora, e)
{ 
				// e.which  para Firefox    
 				// e.keyCode para IE
				if ((e.which == 8) || (e.keyCode == 8)) { return true; } // BackSpace
				if ((e.which == 9) || (e.keyCode == 9))  { return true; } // TAB
				if ((e.which == 0) || (e.keyCode == 0))  { return true; } // TAB
          
			    var myhora = ''; 
              myhora = myhora + hora; 
              if (myhora.length == 2){ 
                  myhora = myhora + ':'; 
                  objeto.value = myhora; 
              } 
              //if (myhora.length == 5){ 
              //    verifica_hora(objeto.value); 
              //} 
} 
           
function verifica_hora(objeto, hora)
{ 
              hrs = (hora.substring(0,2)); 
              min = (hora.substring(3,5)); 
              
              //alert('hrs '+ hrs); 
             // alert('min '+ min); 
               
              situacao = ""; 
              // verifica data e hora 
              if ((hrs < 00 ) || (hrs > 23) || ( min < 00) ||( min > 59)){ 
                  situacao = "falsa"; 
              } 
               
              if (hora == "") { 
                  situacao = "falsa"; 
              } 

              if (situacao == "falsa") { 
                  alert("Hora inválida!"); 
                  objeto.focus(); 
                   return false;
              } 
      		 return true;
 } 


// Ao dar enter em um campo, submeter o formulário
function enter_submit(mobjeto, mevento, frm)
{
  if (mevento.keyCode == 13)
  { 
	 frm.submit();
	 return false; 
  }
  return true; 
} 

// Ao dar enter em um campo, seta o foco no objfocus
function enter_proximo(mobjeto, mevento, objfocus)
{
  if (mevento.keyCode == 13)
  { 
	 objfocus.focus();
	 return false; 
  }
  return true; 
}   

function formatadata(obj, tecla)
{
   if (tecla.keyCode == 8)
      return true; 
   var continuar = false;	  
   if ((tecla.keyCode >= 48) && (tecla.keyCode <= 57)) { continuar = true; }
   if ((tecla.keyCode >= 96) && (tecla.keyCode <= 105)) { continuar = true; }
   if ((tecla.keyCode == 46) || (tecla.keyCode == 8)) { continuar = true; }
   if (continuar == false)
     return false;

   vlr = obj.value;
   vlr2 = "";
   vlr = vlr.replace("/","");
   vlr = vlr.replace("/","");
   vlr2 = vlr2 + vlr.substr(0,2);
   if (vlr.length >= 2) 
     vlr2 = vlr2 + "/";
   vlr2 = vlr2 + vlr.substr(2,2);
   if (vlr.length >= 4) 
     vlr2 = vlr2 +"/";
   vlr2 = vlr2 + vlr.substr(4,4);
   obj.value = vlr2;
   return true;
} 
function formatacep(obj, tecla)
{
   if (tecla.keyCode == 8)
      return true; 
   var continuar = false;	  
   if ((tecla.keyCode >= 48) && (tecla.keyCode <= 57)) { continuar = true; }
   if ((tecla.keyCode >= 96) && (tecla.keyCode <= 105)) { continuar = true; }
   if ((tecla.keyCode == 46) || (tecla.keyCode == 8)) { continuar = true; }
   if (continuar == false)
     return false;
	  
   vlr = obj.value;
   vlr2 = "";
   vlr = vlr.replace("-","");
   vlr2 = vlr2 + vlr.substr(0,5);
   if (vlr.length >= 5) 
     vlr2 = vlr2 + "-";
   vlr2 = vlr2 + vlr.substr(5,3);
   obj.value = vlr2;
   return true;
} 
function formatacnpj(obj, tecla)
{
   if (tecla.keyCode == 8)
      return true; 
   var continuar = false;	  
   if ((tecla.keyCode >= 48) && (tecla.keyCode <= 57)) { continuar = true; }
   if ((tecla.keyCode >= 96) && (tecla.keyCode <= 105)) { continuar = true; }
   if ((tecla.keyCode == 46) || (tecla.keyCode == 8)) { continuar = true; }
   if (continuar == false)
     return false;
	  
   vlr = obj.value;
   vlr2 = "";
   vlr = vlr.replace(".","");
   vlr = vlr.replace(".","");
   vlr = vlr.replace(".","");
   vlr = vlr.replace("/","");
   vlr = vlr.replace("-","");
   vlr2 = vlr2 + vlr.substr(0,2);
   if (vlr.length >= 2) 
     vlr2 = vlr2 + ".";
   vlr2 = vlr2 + vlr.substr(2,3);
   if (vlr.length >= 5) 
     vlr2 = vlr2 +".";
   vlr2 = vlr2 + vlr.substr(5,3);
   if (vlr.length >= 8) 
     vlr2 = vlr2 +"/";
   vlr2 = vlr2 + vlr.substr(8,4);
   if (vlr.length >= 12) 
     vlr2 = vlr2 +"-";
   vlr2 = vlr2 + vlr.substr(12,2);
   obj.value = vlr2;
   return true;
} 
function formatacpf(obj, tecla)
{
   if (tecla.keyCode == 8)
      return true; 
   var continuar = false;	  
   if ((tecla.keyCode >= 48) && (tecla.keyCode <= 57)) { continuar = true; }
   if ((tecla.keyCode >= 96) && (tecla.keyCode <= 105)) { continuar = true; }
   if ((tecla.keyCode == 46) || (tecla.keyCode == 8)) { continuar = true; }
   if (continuar == false)
     return false;
	  
   vlr = obj.value;
   vlr2 = "";
   vlr = vlr.replace(".","");
   vlr = vlr.replace(".","");
   vlr = vlr.replace(".","");
   vlr = vlr.replace("-","");
   vlr = vlr.replace("-","");
   vlr2 = vlr2 + vlr.substr(0,3);
   if (vlr.length >= 3) 
     vlr2 = vlr2 + ".";
   vlr2 = vlr2 + vlr.substr(3,3);
   if (vlr.length >= 6) 
     vlr2 = vlr2 +".";
   vlr2 = vlr2 + vlr.substr(6,3);
   if (vlr.length >= 9) 
     vlr2 = vlr2 +"-";
   vlr2 = vlr2 + vlr.substr(9,2);
   obj.value = vlr2;
   return true;
} 

// -------------------------------
function datapadrao()
{
  var now = new Date(); 
  var mName = now.getMonth() + 1;
  var dName = now.getDay() + 1;
  var dayNr = now.getDate();
  if(dayNr==1) dayNr = "01";
  if(dayNr==2) dayNr = "02";
  if(dayNr==3) dayNr = "03";
  if(dayNr==4) dayNr = "04";
  if(dayNr==5) dayNr = "05";
  if(dayNr==6) dayNr = "06";
  if(dayNr==7) dayNr = "07";
  if(dayNr==8) dayNr = "08";
  if(dayNr==9) dayNr = "09";

  var yearNr=now.getYear();
  var nHours = now.getHours();
  if(dName==1) Day = "Domingo";
  if(dName==2) Day = "Segunda-feira";
  if(dName==3) Day = "Ter&ccedil;a-feira";
  if(dName==4) Day = "Quarta-feira";
  if(dName==5) Day = "Quinta-feira";
  if(dName==6) Day = "Sexta-feira";
  if(dName==7) Day = "s&aacute;bado";
  if(mName==1) Mes = "01";
  if(mName==2) Mes = "02";
  if(mName==3) Mes = "03";
  if(mName==4) Mes = "04";
  if(mName==5) Mes = "05";
  if(mName==6) Mes = "06";
  if(mName==7) Mes = "07";
  if(mName==8) Mes = "08";
  if(mName==9) Mes = "09";
  if(mName==10) Mes = "10";
  if(mName==11) Mes = "11";
  if(mName==12) Mes = "12";
  
  if(yearNr < 2000) Year = 1900 + yearNr;
  else Year = yearNr;
  if((nHours < 12) && (nHours >= 5)) {Saudacao = "Bom dia.";}
  if((nHours >= 12) && (nHours < 19)) {Saudacao = "Boa tarde.";}
  if((nHours >= 19) && (nHours < 24)) {Saudacao = "Boa noite.";}
  if((nHours >= 0) && (nHours < 5)) {Saudacao = "Boa madrugada.";}
  var todaysDate =(Day + ", " + dayNr + "/" + Mes + "/" + Year) ;
  var saudar = Saudacao + " Seja bem-vindo!";
  return todaysDate +". "+ saudar;
}

 //formata data
function handleDATA(f, e) 
{
	var mask = "dd/mm/aaaa";
	var code = (document.all) ? e.keyCode : e.which;
	if (e.shiftKey || e.ctrlKey) return false;
	if (code == 8 || code == 9 || code == 13 || code == 46) return true;
	if (!f.maxLength) f.maxLength = 8;
	if (f.maxLength <= f.value.length) return false;
	if (code == 96) code = 48;
	if (code > 95 && code <106) 
	{
		code = code - 48;
	}
	if (code > 47 && code < 58) 
	{
		var nextChar = String.fromCharCode(code);
		var idx = (f.value.length)% mask.length;
		var charMask = mask.charAt(idx);
		if ( charMask != 'd' && charMask != 'm' && charMask != 'a')
		f.value+= charMask;
		f.value+=nextChar;
	}
	return false;
}
// ----------------------
// Testa se os dígitos são numéricos
function allDigits(str){ 
   return inValidCharSet(str,"0123456789"); 
} 
// ----------------------------------
// 
function inValidCharSet(str,charset){ 
   var result = true; 
   for (var i=0;i<str.length;i++) 
      if (charset.indexOf(str.substr(i,1))<0) { 
         result = false; 
         break; 
      } 
    
   return result; 
} 

 //formata hora
function handleHORA(f, e) 
{
	var mask = "dd:mm:aa";
	var code = (document.all) ? e.keyCode : e.which;
	if (e.shiftKey || e.ctrlKey) return false;
	if (code == 8 || code == 9 || code == 13 || code == 46) return true;
	if (!f.maxLength) f.maxLength = 8;
	if (f.maxLength <= f.value.length) return false;
	if (code == 96) code = 48;
	if (code > 95 && code <106) 
	{
		code = code - 48;
	}
	if (code > 47 && code < 58) 
	{
		var nextChar = String.fromCharCode(code);
		var idx = (f.value.length)% mask.length;
		var charMask = mask.charAt(idx);
		if ( charMask != 'd' && charMask != 'm' && charMask != 'a')
		f.value+= charMask;
		f.value+=nextChar;
	}
	return false;
}

// ------------------------------------
// Recebe o campo e o label e testa se está preenchido
function campoRequerido(formField,fieldLabel)
{ 
   var res = true; 
   if (formField.value == ""){ 
      alert('O campo "' + fieldLabel +'" deve ser preenchido.'); 
      formField.focus(); 
      res = false; 
   } 
   if (formField.value == "NULL"){ 
      alert('O campo "' + fieldLabel +'" deve ser preenchido.'); 
      formField.focus(); 
      res = false; 
   } 
   if (formField.value == "null"){ 
      alert('O campo "' + fieldLabel +'" deve ser preenchido.'); 
      formField.focus(); 
      res = false; 
   } 

   return res; 
} 
// ------------------------------------
// Valida objetos do tipo radio button
function valida_radio_button(formField,fieldLabel)
{
	// set var radio_choice to false
	var radio_choice = false;
	// Loop from zero to the one minus the number of radio button selections
	for (counter = 0; counter < formField.length; counter++)
	{
		// If a radio button has been selected it will return true
		// (If not it will return false)
		if (formField[counter].checked)
		radio_choice = true; 
	}
	if (!radio_choice)
	{
		// If there were no selections made display an alert box 
		alert('Selecione uma opção para "' + fieldLabel +'" !'); 
        formField.focus(); 
		return (false);
	}
	return (true);
}
// ---------------------------------------
// Validar datas
function validaData(formField, fieldLabel, required) 
{ 
   var result = true; 
   if (required && !campoRequerido(formField,fieldLabel)) 
      result = false; 
   if (result) 
   { 
      var elems = formField.value.split("/"); 
      result = (elems.length == 3); // should be three components 
      if (result) 
      { 
         var day = parseFloat(elems[0]); 
         var month = parseFloat(elems[1]); 
         var year = parseFloat(elems[2]); 
         result = allDigits(elems[0]) && allDigits(elems[1]) && allDigits(elems[2]) && 
         (day > 0) && (day < 32) && (month > 0) && (month < 13) && 
         (elems[0].length == 2) && (elems[1].length == 2) && (elems[2].length == 4) && 
         (((day < 30) && (month == 2)) || ((day < 32) && (month != 2))) && 
         (((day < 31) && (month == 4)) || ((day < 32) && (month != 4))) && 
         (((day < 31) && (month == 6)) || ((day < 32) && (month != 6))) && 
         (((day < 31) && (month == 9)) || ((day < 32) && (month != 9))) && 
         (((day < 31) && (month == 11)) || ((day < 32) && (month != 11))); 
      } 
      if (!result)
	  { 
         alert('A data deve ter o formato dd/mm/aaaa para o campo "' + fieldLabel +'".'); 
         formField.focus(); 
      } 
      return result; 
   }
   else
     return result;
} 

function TABEnter(oEvent){
  var oEvent = (oEvent)? oEvent : event;
  var oTarget =(oEvent.target)? oEvent.target : oEvent.srcElement;
  if(oEvent.keyCode==13)
    oEvent.keyCode = 9;
  if(oTarget.type=="text" && oEvent.keyCode==13)
    //return false;
    oEvent.keyCode = 9;
  if (oTarget.type=="radio" && oEvent.keyCode==13)
    oEvent.keyCode = 9;
}

function numdias(mes,ano) {
  			if((mes<8 && mes%2==1) || (mes>7 && mes%2==0)) return 31;
  			if(mes!=2) return 30;
  			if(ano%4==0) return 29;
  			return 28;
		}
 // executado para somar dias
 function somadias(data, dias) {
 		data=data.split('/');
 		diafuturo=parseInt(data[0])+dias;
 		mes=parseInt(data[1]);
 		ano=parseInt(data[2]);
 		while(diafuturo>numdias(mes,ano)) {
     		diafuturo-=numdias(mes,ano);
     		mes++;
     	if(mes>12) {
         	mes=1;
         	ano++;
     	}
		}
        if(diafuturo<10) diafuturo='0'+diafuturo;
        if(mes<10) mes='0'+mes;

        return diafuturo+"/"+mes+"/"+ano;
     }

function mascara_hora(objeto, hora, e)
{ 
				// e.which  para Firefox    
 				// e.keyCode para IE
				if ((e.which == 8) || (e.keyCode == 8)) { return true; } // BackSpace
				if ((e.which == 9) || (e.keyCode == 9))  { return true; } // TAB
				if ((e.which == 0) || (e.keyCode == 0))  { return true; } // TAB
          
			    var myhora = ''; 
              myhora = myhora + hora; 
              if (myhora.length == 2){ 
                  myhora = myhora + ':'; 
                  objeto.value = myhora; 
              } 
              //if (myhora.length == 5){ 
              //    verifica_hora(objeto.value); 
              //} 
} 

function VerificaData(campo, digData)
{
	if (digData.length > 0) {
			var bissexto = 0;
			var data = digData;
			var tam = data.length;
			if (tam == 10)
			{
				var dia = data.substr(0,2)
				var mes = data.substr(3,2)
				var ano = data.substr(6,4)
				if ((ano > 1900)||(ano < 2100))
				{
					switch (mes)
					{
						case '01':
						case '03':
						case '05':
						case '07':
						case '08':
						case '10':
						case '12':
							if  (dia <= 31)
							{
								return true;
							}
							break
						
						case '04':        
						case '06':
						case '09':
						case '11':
							if  (dia <= 30)
							{
								return true;
							}
							break
						case '02':
							/* Validando ano Bissexto / fevereiro / dia */
							if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0))
							{
								bissexto = 1;
							}
							if ((bissexto == 1) && (dia <= 29))
							{
								return true;                
							}
							if ((bissexto != 1) && (dia <= 28))
							{
								return true;
							}            
							break                        
					}
				}
			}    
			alert("A Data "+data+" é inválida!");
			campo.focus();
			return false;
	 }
}