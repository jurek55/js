window.onload=start;

var haslo="";
var kategoria="";
var dlugosc=0;
var pudlo=0;
var fanfara=new Audio("sounds/fanfare2.wav");
var szklo= new Audio("sounds/glass_shatter_c.wav");
var haslo1 = "";

function przygotuj_haslo()
{
haslo=document.getElementById("zmienna").value;
kategoria=document.getElementById("kategoria").value;
haslo=haslo.toUpperCase();
dlugosc=haslo.length;
	for (i=0; i<dlugosc; i++)
		if (haslo.charAt(i)==" ") haslo1=haslo1+" ";
		else haslo1=haslo1+"-";
}
function odslon_haslo()
{
	document.getElementById("haslo").innerHTML=haslo;
}	
function wypisz_haslo()
{
document.getElementById("haslo").innerHTML=haslo1;
document.getElementById("kategoria1").innerHTML="kategoria: "+kategoria;
}

var litery = new Array(35);

litery[1]="A";
litery[2]="Ą";
litery[3]="B";
litery[4]="C";
litery[5]="Ć";
litery[6]="D";
litery[7]="E";
litery[8]="Ę";
litery[9]="F";
litery[10]="G";
litery[11]="H";
litery[12]="I";
litery[13]="J";
litery[14]="K";
litery[15]="L";
litery[16]="Ł";
litery[17]="M";
litery[18]="N";
litery[19]="Ń";
litery[20]="O";
litery[21]="Ó";
litery[22]="P";
litery[23]="Q";
litery[24]="R";
litery[25]="S";
litery[26]="Ś";
litery[27]="T";
litery[28]="U";
litery[29]="V";
litery[30]="W";
litery[31]="X";
litery[32]="Y";
litery[33]="Z";
litery[34]="Ź";
litery[35]="Ż";
function przekieruj()
{
	location.href="autor.html";
}

function start()
{
	przygotuj_haslo();
	wypisz_haslo();
	var tresc_diva="";
	
	for (i=1; i<=35; i++)
	{
	
	var nazwa="lit"+i;
	tresc_diva=tresc_diva+'<div class="litera" id="'+nazwa+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
	if (i%5==0) tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
	
	}
	document.getElementById("keyboard").innerHTML=tresc_diva;
	
	var text='<div class="footer" id="autor" onclick="przekieruj()">O autorze</div><div class="footer" id="losowanie" onclick="location.reload()">Losowanie nowego hasła</div><div class="footer" id="pokaz" onclick="odslon_haslo()">Pokaz hasło</div>';
		document.getElementById("footer1").innerHTML=text;
}

String.prototype.Ustaw_znak=function(miejsce, znak)
{
	
	if (miejsce>this.length-1) return this.toString();
	else return this.substr(0, miejsce)+znak+this.substr(miejsce+1);
	
}
function sprawdz(nr)
{
	var trafienie=false;
	for (i=0; i<=dlugosc; i++)
	{
		if (haslo.charAt(i)==litery[nr]) 
		{
		haslo1=haslo1.Ustaw_znak(i, litery[nr]);
		
		trafienie=true;
		}
	var nazwa="lit"+nr;
	}
	
	if (trafienie==true)
	{
		document.getElementById(nazwa).style.background="green";
		document.getElementById(nazwa).onclick="none";
		document.getElementById(nazwa).style.cursor="default";
		wypisz_haslo();
		if (haslo==haslo1)
		{for (i=0; i<35; i++)
		{
			var x=document.getElementsByClassName("litera");
			var y=document.getElementsByClassName("litera");
			var z=document.getElementsByClassName("litera");
			x[i].onclick="none";
			y[i].style.cursor="default";
			z[i].style.background="gray";
		
		}fanfara.play();
		document.getElementById("picture").innerHTML='<img src="img/szu12.png">';
		}
			
	} else 
	{
		
		pudlo++;
		
		document.getElementById("picture").innerHTML='<img src="img/szu'+pudlo+'.png">';
		document.getElementById(nazwa).style.background="red";
		document.getElementById(nazwa).onclick="none";
		document.getElementById(nazwa).style.cursor="default";
		
		if (pudlo>=11) 
		{
		
		for (i=0; i<35; i++)
		{
			var x=document.getElementsByClassName("litera");
			var y=document.getElementsByClassName("litera");
			var z=document.getElementsByClassName("litera");
			x[i].onclick="none";
			y[i].style.cursor="default";
			z[i].style.background="gray";
		
		}szklo.play();
		
		}
	}
}






