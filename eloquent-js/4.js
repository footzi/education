//метод fotEach
const arr=[1,2,3];
arr.forEach(function(i){
	//console.log(arr[i])
});

const transparent=(f)=>{
	return ()=>{
		return f.apply(arguments)	
	}
	console.log("аргумееты: "+arguments+"длинна: "+arguments.length);
}
transparent(5,10)

//JSON
const data=[
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
];
const string=JSON.stringify(data); //преобразование в строку
//console.log(JSON.stringify(data));
//console.log(JSON.parse(string)) //преобразвание в значение
//console.log(data.length) // кол-во людей

//функция фильтрации по году рождения(ввывод рожденных после 1900 и до 1700)
//собственное решение
const filter =(data)=>{
	let array=[];
	for(let i=0;i<data.length;i++) {
		if((data[i].born>1900)||(data[i].born<1700)) {
			array.push(data[i].name);
		}
	}
	return array;
}
//console.log(filter(data));

//решение из книги
const filterBook=(data,test)=>{
	let array=[];
	for(let i=0;i<data.length;i++) {
		if(test(data[i])) {
			array.push(data[i].name);
		}
	}
	return array;
}
// console.log(filterBook(data,(person)=>{
// 	return person.born>1900 || person.born<1700
// }))

//фильтрация с помощью стандартного метода filter;
/*console.log(data.filter((person)=>{
	return person.mother==null
}))

//преобразование с помощью map
const underFifty=data.filter((person)=>{
	return person.died-person.born<50
})
console.log(underFifty.map((person)=>{
	return person.name
}));*/

//функция reduce складывание элементов массива
//свой вариант
const reduce1 = (arr)=>{
	for(let i=0;i<arr.length;i++) {
		console.log(arr[i]);
	}
};
console.log(reduce1([1,2,3,4]))