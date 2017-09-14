/*Jack Journal
Дневник человека Джека.
Джек периодически превращается в оборотня и поЭтому он начинает ввести дневник. И с помощью JS и понятия "корреляция" пытается определить причину.
И результатом является употребление на ужин мяса и полнолуние*/

let journal=[];
const addEvent=(events,IMutated)=>{
	journal.push({
		events:events,
		werwolf:IMutated
	})
};
addEvent(["пробежка","каша на завтрак","работа","макароны на обед","работа","смотрю телевизор","мясо на ужин","ночью пол-луны"],false);
addEvent(["пробежка","бутерброд на завтрак","работа","рис на обед","работа","иду гулять","рыба на ужин","ночью пол-луны"],false);
addEvent(["сплю","без завтрака","работа","котлета на обед","работа","играю на гитаре","мясо на ужин","ночью полнолуние"],true);
addEvent(["пробежка","йогурт на завтрак","работа","мясо на обед","работа","сплю","рыба на ужин","ночью пол-луны"],false);
addEvent(["сплю","яичница на завтрак","иду гулять","без обеда","смотрю телевизор","рыба на ужин","ночью полнолуние"],false);
addEvent(["сплю","бутерброд на завтрак","смотрю телевизор","макароны на обед","смотрю телик","мясо на ужин","ночью полнолуние"],true);

/*С помощью таблицы и формулы расчитаем корелляцию для событий "пробежка" и обращение в оборотня.
1. Нет пробежки и нет обращения = 1
2. Если пробежка и нет обращения = 3
3. Нет пробежки и есть обращение = 2
4. Есть пробежка и есть обращение = 0
*/


//проверка действия на наличие в журнале
const testEvent = (event, entry)=>{
	return entry.events.indexOf(event)!=-1; //проверяем наличие действия в массиве. Если событие есть во возвращается true, если события нет то false
}
const phi = (table)=>{
	let a=(table[3]*table[0])-(table[1]*table[2]);
	let b=Math.sqrt((table[1]+table[3])*(table[0]+table[2])*(table[2]+table[3])*(table[0]+table[1]));
	return a/b;
}
//console.log(phi([1,3,2,0]));
//создание таблицы корреляции для определенного действия
const tableFor=(event,journal)=>{
	let table=[0,0,0,0];
	for(i=0; i<journal.length;i++) {
		//console.log(journal[i]);
		let entry=journal[i]; 
		let index=0;
		if(testEvent(event,entry)) { //значение события и текущая запись в журнале передаются в функцию testEvent, которая в свою очередь возращает либо true либо false. Если true то index увеличивается на 1.
			index=index+1;
		} 
		if(entry.werwolf) {
			index=index+2; //если было обращение то index увеличивается на 2;
		}
		table[index]=table[index]+1;
	}
	return table;
} 
//console.log(tableFor("пробежка",journal));

//создание объекта для хранения результатов корреляции
let map={};
const storePhi=(event,phi)=>{
	map[event]=phi; //добавляем в пустой объект свойство event со значением phi
}
storePhi("спал",0.66);
storePhi("ел",0.43)
//console.log(map) //{ 'спал': 0.66, 'ел': 0.43 }
//console.log("спал" in map) //true
//console.log(map["ел"]) //0.66

//вывод результатов из объекта
for (event in map) {
	//console.log("Корреляция для "+event+" составляет: "+map[event])
}

//сбор корреляций
const gatherCorrelation=(journal)=>{
	let phis={};
	for (let i=0;i<journal.length;i++) {
		let events=journal[i].events;
		for (let n=0;n<events.length;n++){
			let event=events[n];
			if(!(event in phis)) {
				phis[event]=phi(tableFor(event,journal));
			}
		}
	}
	return phis
}
const correlation = gatherCorrelation(journal);
for(event in correlation) {
	//console.log(event+": "+correlation[event]);
}

//из вывода видно что самая высокая корреляция у события "ночью полнолуние" и "мясо на ужин". Для проверки зтих событий нужно дописать функцию


//let result=1;

const hex=(n)=>{
	let counter=2;
	let result;
	while((n%counter)==0) {
		//result=n%conter;
		
		console.log(counter);
		counter++;
	}
	return counter
}
//console.log(hex(15));
//console.log("calk "+15%1);

let testk = (x) => {
	let ctr=1;
	while(x==ctr) {
		
		console.log(ctr);
		ctr++;
	}
	return ctr
}