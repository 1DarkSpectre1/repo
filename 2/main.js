var storagedata = [
	{ id: 1, title: "Стол", vol: 12  },
	{ id: 2, title: "Стул", vol: 300  },
	{ id: 3, title: "Книга", vol: 5 },
	{ id: 4, title: "Самолёт", vol: 2 },
	{ id: 6, title: "Ракета", vol: 12},
	{ id: 5, title: "Звездолёт", vol: 2 }
];
var basket = [

	
];

document.addEventListener("DOMContentLoaded", () => {


	// обработка нажатия на кнопку "сортировать"
	
	document.getElementById("sort_btn").addEventListener("click", () => {
		let sortedData = sortByRating(storagedata);
		refresh(sortedData,"storage");
		 sortedData = sortByRating(basket);
		refresh(sortedData,"basket");
	});

	// обработка нажатия "обновить"
	document.getElementById("refresh_btn").addEventListener("click", () => {
		refresh(storagedata,"storage");
		refresh(basket,"basket");
	});
	

	// первичное отображение данных
	refresh(storagedata,"storage");
	refresh(basket,"basket");
	
	
	
});

// функция обновления данных в контейнере
function refresh(data, name) {
	clear(name)

	data.forEach(item => {
		document.getElementById(name).appendChild(createElement(item,name))
			
	});
	
}


// функция сортировки по количеству
function sortByRating(data) {
	let sortedData = [];
	let sort;

	sortedData = data.slice();//копируем данные

	sortedData.sort((prev, next)=> prev.vol -next.vol);

	

	return sortedData
}
function stbs(item,data1,data2) {
			//добавление к количеству товара и проверка есть ли такой товар в корзине
			for (var i = 0; i < data2.length; i++) {
					if (data2[i].id==item.id) {
						data2[i].vol++;
						ind=false;
					}
			}

			for (var i = 0; i < data1.length; i++) {
				if (data1[i].id== item.id) {
						elemi=i;						//запоминаем номер элемента
				}
			}

			//если товара нет в корзине создаём его
			if (ind) {
				data2[data2.length]=Object.assign({},data1[elemi])//копируем элемент
				data2[data2.length-1].vol=1;
			}


			for (var i = 0; i < data1.length; i++) {

				if (data1[i].id== item.id) {
					data1[i].vol--;			//уменьшаем количство товара
					if (data1[i].vol==0) {	//проверяем есть ли данный товар
						 data1.splice(i,1);	//если его нет то удаляем его из списка
					}
				}
			}
}

// функция очищения 
function clear(name) {
	document.getElementById(name).innerHTML = '';
	
}
function createElement(item,name) {
	// ячейка названия товара
	var divTitle = document.createElement('div');
	divTitle.className = "item-title";
	divTitle.innerHTML = item.title;

	// ячейка количество товара 
	var divVol = document.createElement('div');
	divVol.className = "item-vol";
	divVol.innerHTML = item.vol;


	// строка товара
	var divItemContainer = document.createElement('div');
	divItemContainer.className = "row item disable-selection";
	divItemContainer.appendChild(divTitle);
	divItemContainer.appendChild(divVol);
	if (name=="basket") {
	divItemContainer.id = 'bs_' + item.id;
	}
	else{divItemContainer.id = 'st_' + item.id;}

	divItemContainer.onclick=function(){          //добавление обработчика события клик
		ind=true;
		let elemi;								//ячейка для номера элемента
		if(name=="storage"){
			stbs(item,storagedata,basket);	
		}
		else{
			stbs(item,basket,storagedata);
		}
		
		//обновляем данные
		refresh(storagedata,"storage");
		refresh(basket,"basket");

		return false;
	}
	return divItemContainer;
}
