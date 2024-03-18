// Para agregar un fondo al html como imagen sin moverse (normal, vaya): L-g(0deg, #, #) no-repeat fixed cover 
// Esto funciona con un solo background-image

function textoDia(){
var Hoy = new Date();
var texto; 
if (Hoy.getDate()%17 == 0){
   texto = '🐪🌻🐈 Sin nada qué hacer hdscmae 🐪🌻🐈'
   } else {
if (Hoy.getDate()%17 == 1){
   texto = '🔮🎠💜 Primero que nada buenos días. Le ruego, por favor, que deje en paz esta página. Dedíquese a cosas que sí tiene qué entregar. En serio, cierre esta página. Ólvídese de ella. Adiós. 🔮🎠💜'
   } else {
if (Hoy.getDate()%17 == 2){
   texto = '🍁🦜🌹 AIiooiuiuuuuiiiiooouuuioiououoiuoiuouoouououoiououi wwwuuuuiiiiiiiwuuuuuuuiiiiiii uuuuuuAAAAAAaaaauuuuuuuAAAAAaaauuu iiii iiii  iiii iiii. Ahora, por favor, abandone esta página. 🍁🦜🌹'
   } else {
if (Hoy.getDate()%17 == 3){
   texto = '🌺🌷🌸 "трактор John Deere С двигателями PowerTech ™" 🌺🌷🌸'
   } else {
if (Hoy.getDate()%17 == 4){
   texto = '🐬🐠🐋 Recordatorio de que hoy es [inserte_Día], por lo que no debería estar a la [1:00] dándole mantenimiento a la página (considérese el reloj de 24 horas). ◈ El especial de hoy: Rock Regresivo ◈ Especial de mañana: Rock Agresivo ◈ El de los días siguientes: TERROR y AGONÍA ◈ Viernes: Jamón 🐬🐠🐋'
   } else {
if (Hoy.getDate()%17 == 5){
   texto = '🦢🐇🕊️ Buenos días. Le recordamos que hoy es día [inserte_Día] y, posiblemente, sea horario de clases, por lo que le pedimos amablemente abandonar inmediatamente esta página y se concentre en la clase. Le recordamos también que evite comer een subway (El Sub del día no es muy bueno) 🦢🐇🕊️'
   } else {
if (Hoy.getDate()%17 == 6){
   texto = '🌾🐉🍀 Buenos días. Hoy, por ser martes, hay procesión de animalitos. Pedimos amable y cordialmente guardar la calma. 🐘 🐪 🦕 🦖 🐂 🦙 🐏 🐑 🐎 🐐 🐄 🐅 🐆 🦎 🐓 ‍🐈‍ 🦃 🦚 🦆 🦢 🦩 🦅 🌾🐉🍀'
   } else {
if (Hoy.getDate()%17 == 7){
   texto = '🪓🔪⚔️ OFERTA DEL DÍA: NAVAJAS 2x1 en la compra de UN GANSITO 🪓🔪⚔️'
   } else {
if (Hoy.getDate()%17 == 8){
   texto = '🌼🌻🥀 ATTENTION ALL PLANETS OF THE SOLAR FEDERATION \\ ATTENTION ALL PLANETS OF THE SOLAR FEDERATION 🌼🌻🥀'
   } else {
if (Hoy.getDate()%17 == 9){
   texto = '🐕🐩🦮 Jajjajja perro 🐕🐩🦮'
   } else {
if (Hoy.getDate()%17 == 10){
   texto = '🦆🦅🦉 救命，我家外面有六辆黑色的车窗。 Alexa, 慢慢玩 🦆🦅🦉'
   } else {
if (Hoy.getDate()%17 == 11){
   texto = ' 🀐 A 🀙 L 🀢 A 🀣 V 🀤 E 🀥 R 🀦 G 🀧 A 🀨 '
   } else {
if (Hoy.getDate()%17 == 12){
   texto = '⛲🏰🏯 Ah, qué caray. Otra vez tuvo la mala fortuna de despertar en la mañana. Pero no esté triste, para eso existe esta página. El único lugar al que puede huír y no será será sacado a patadas por comentarios racistas. ⛲🏰🏯'
   } else {
if (Hoy.getDate()%17 == 13){
   texto = '🏞️🌅🌄 Ya hace un día desde que no regresaba a este lugar. El Administrador está muy feliz de verlo de nuevo 🏞️🌅🌄'
   } else {
if (Hoy.getDate()%17 == 14){
   texto = '🎑🌠🎇 Si alguna vez se abre una carpeta de ivestigación en ccontra del Administrador, este no se hace responsable por ningún suceso que haya tenido lugar el día 13 de octubre de 2022 a medianoche. 🎑🌠🎇'
   } else {
if (Hoy.getDate()%17 == 15){
   texto = '🌇🏙️🌁 Toma awa UwU. Uwuwuwuwuuwuu. Pidan tacos OwO. N0 coman waffles UnU. 🌇🏙️🌁'
   } else {
if (Hoy.getDate()%17 == 16){
   texto = 'gvrffe'
  }}}}} }}}}} }}}}} }}
//Hoy.getDate()%n <-> } de cierre n veces // (Hoy.getDate()%n == n-1)
document.write(texto)
}

function correrAnimacion(rootDir, ext2, ext3, disc){
	// console.log(index)
	// console.log(list[index])
	// console.log(list[index][2])
	const alb_1 = "img/p/" + rootDir
	var alb_2 = ""
	var alb_3 = ""
	var disco = "img/turnt/" + "2.png"

	if(ext2===""){
		alb_2 = "img/p/" + "disco-respaldo_2.png"
	} else {
		if (ext2.length<5){
			alb_2 = "img/p/" + rootDir.slice(0, -5) + "2." + ext2
		} else {
			alb_2 = "img/p/" + ext2
		}
	}

	if(ext3===""){
		alb_3 = "img/p/" + rootDir
	} else {
		if (ext3.length<5){
			alb_3 = "img/p/" + rootDir.slice(0, -5) + "3." + ext3
		} else {
			alb_3 = "img/p/" + ext3
		}
	}

	// if(disc===""){
		
	// }

	const imageA = document.createElement('img')
	imageA.src  = alb_2
	document.querySelector('.insertImg').appendChild(imageA )
	imageA.setAttribute("id","disco")

	const imageB = document.createElement('img')
	imageB.src  = disco
	document.querySelector('.insertImg').appendChild(imageB)
	imageB.setAttribute("id","disco_1")

	const flipA = document.createElement('div')
	document.querySelector('.footer_3').appendChild(flipA)
	flipA.setAttribute("class","flip-box")

	const flipB = document.createElement('div')
	document.querySelector('.flip-box').appendChild(flipB)
	flipB.setAttribute("class","flip-box-inner")

	const flipBA = document.createElement('div')
	document.querySelector('.flip-box-inner').appendChild(flipBA)
	flipBA.setAttribute("class","flip-box-front")

	const flipBB = document.createElement('div')
	document.querySelector('.flip-box-inner').appendChild(flipBB)
	flipBB.setAttribute("class","flip-box-back")

	const imageC = document.createElement('img')
	imageC.src  = alb_1
	document.querySelector('.flip-box-front').appendChild(imageC)
	imageC.setAttribute("id","sleeve")

	const imageD = document.createElement('img')
	imageD.src  = alb_3
	document.querySelector('.flip-box-back').appendChild(imageD)
	imageD.setAttribute("id","sleeve")

	document.getElementById("disco").animate([
	  { transform: 'rotate(0deg)' },
	  { transform: 'rotate(359deg)' }
	], {
	  delay: 1000,
	  duration: 1900,
	  iterations: Infinity
	});
	document.getElementById("pluma").animate([
	  { transform: 'rotate(0deg)' },
	  { transform: 'rotate(15deg)' }
	], {
	  duration: 1000,
	  iterations: 1
	});
	document.getElementById("pluma").style.transform = 'rotate(15deg)';
}

function detener(){
var elementA = document.getElementById("disco_1");
var elementB = document.getElementById("disco");
var elementC = document.getElementById("sleeve");
var element = document.getElementById("html");

const flipA = document.querySelector('.flip-box');
const flipB = document.querySelector('.flip-box-inner');
const flipC = document.querySelector('.flip-box-front');
const flipD = document.querySelector('.flip-box-back');

	document.getElementById("disco").animate([
	  { transform: 'rotate(0deg)' },
	  { transform: 'rotate(0deg)' }
	], {
	  duration: 1000,
	  iterations: Infinity
	});
	document.getElementById("pluma").animate([
	  { transform: 'rotate(15deg)' },
	  { transform: 'rotate(0deg)' }
	], {
	  duration: 1000,
	  iterations: 1
	});
	document.getElementById("pluma").style.transform = 'rotate(0deg)';

        elementA.parentNode.removeChild(elementA);
        elementB.parentNode.removeChild(elementB);
        elementC.parentNode.removeChild(elementC);

	document.getElementById('cont1').innerHTML='';
	document.getElementById('cont2').innerHTML='';
	document.getElementById('cont2').style.color = '#011e0d';
	element.style.background = '#011e0d'; // backgroundColor

	var element1 = document.querySelector('.marq');
	element1.style.background = 'crimson'; // backgroundColor
	// element1.style.background = 'none'; // backgroundImage

	flipA.remove();
	flipB.remove();
	flipC.remove();
	flipD.remove();

	document.querySelectorAll('iframe').removeChild();
}

function escribir(b, a){
	document.getElementById('titulos').style.display = 'block'
	document.getElementById('cont1').innerHTML= b;
	document.getElementById('cont2').innerHTML= a;
	// document.getElementById('cont1').style.display = 'block'
	document.getElementById('cont2').style.display = 'block'
}

function color(colorArr){
	var color1 = colorArr[0];
	var color2 = colorArr[1];
	console.log(color2)

	// if(color1===''){
	// 	color1 = "#011e0d";
	// }
	// if(color2===''){
	// 	color2 = "crimson";
	// }

	var bgHtml = document.getElementById("html");
	bgHtml.style.background = color1;
	var bgMarq = document.querySelector('.marq');
	bgMarq.style.background = color2;
	document.getElementById('cont2').style.color = color1;
}

// function color(c) {
// 	var element = document.getElementById("html");
// 	element.style.backgroundColor = c;
//         document.getElementById('cont2').style.color = c;
// }

// function color(c, m) {
// 	var element = document.getElementById("html");
//         var element1 = document.querySelector('.marq');
// 	element.style.backgroundColor = c;
//         element1.style.backgroundColor = m;
//         document.getElementById('cont2').style.color = c;
// }


// function colorGrad(c, m) {
// 	var element = document.getElementById("html");
//         var element1 = document.querySelector('.marq');
// 	element.style.backgroundColor = c;
//         element1.style.backgroundImage = m;
//         document.getElementById('cont2').style.color = c;
// }

/* gggggggggggggggggggggggggg*/

// ['Yes', 'YES', ['Yes_Yes_1.png', 'Yes_The-yes-album_2.png', 'png', ''], ['#3a1117', '#ff9416'], 'iframe_a', 'https://www.youtube.com/embed/WH51jTM5xo8?list=PLoRgLeHX0tkGEuWc_LQLAl3mjWb-GUph9'],
// [autor,nombre,[rootDir,dir2,dir3,disc],[color1,color2],target,link]
/* section class="sec a"
<article>
	<a target="iframe_a" href="
	https://www.youtube.com/embed/WH51jTM5xo8?list=PLoRgLeHX0tkGEuWc_LQLAl3mjWb-GUph9
	" onclick="correrAnimacion('img/p/Yes_The-yes-album_2.png', 'img/p/Yes_Yes_1.png', 'img/p/Yes_Yes_3.png'), escribir('Yes', 'YES'), color('#3a1117', '#ff9416')">
		<img src="img/p/Yes_Yes_1.png" class="portada"/> 
	</a>
</article> */

function act(index){
	const data = list[index];
	const [autor,nombre,[rootDir,dir2,dir3,disc],[color1,color2],target,link] = data;

	console.log(`${index} - ${nombre}`)
	correrAnimacion(rootDir,dir2,dir3,disc)
	escribir(autor,nombre)
	color([color1,color2])
}

function loadWorks(sectionId, dataArray){
    const articles = document.querySelectorAll(`#${sectionId} article`);

    articles.forEach((article, index) => {
        const data = dataArray[index];
        const [autor,nombre,[rootDir,dir2,dir3,disc],[color1,color2],target,link] = data;
        var imgElement = article.querySelector('.portada')
		if(target==="_blank"){
			imgElement = article.querySelector('.portada_alt')
		}

        imgElement.src = `img/p/${rootDir}`;

        article.querySelector('a').onclick = function() {
			console.log(`esta ${index} se manda a act`)
            act(index);
        };
    });
}

function escInf(sectionId, dataArray){
	for (let i=0; i<dataArray.length; i++){
		const article = document.createElement('article');
		const a = document.createElement('a');
		const img = document.createElement('img');
		const seccion = document.querySelector(`#${sectionId}`)

		// console.log(`esta es la ${i} de ${sectionId}`)
		// console.log(`vamos en la ${dataArray[i][0]} - ${dataArray[i][1]}`)
		if (dataArray[i][4]==="_blank"){
			img.classList.add('portada_alt');
		} else {
			img.classList.add('portada');
		}

        const data = dataArray[i];
        const [autor,nombre,[rootDir,dir2,dir3,disc],[color1,color2],target,link] = data;

		a.setAttribute("href",link)
		a.setAttribute("target",target)

		// Construir la estructura del elemento <article>
		a.appendChild(img);
		article.appendChild(a);
		seccion.appendChild(article);
	}

	loadWorks(sectionId, dataArray);
}
