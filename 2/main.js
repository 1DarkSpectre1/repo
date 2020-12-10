var storagedata = [
	{ id: 1, title: "Стол", vol: 12  },
	{ id: 2, title: "Стул", vol: 300  },
	{ id: 3, title: "Книга", vol: 5 },
	{ id: 4, title: "Самолёт", vol: 2 },
	{ id: 6, title: "Ракета", vol: 12},
	{ id: 5, title: "Звездолёт", vol: 51 }
];
var basket = [
	{ id: 1, title: "Стол", vol: 12  },
	{ id: 2, title: "Стул", vol: 3  },
	{ id: 3, title: "Книга", vol: 5 },
	
	{ id: 6, title: "Ракета", vol: 12},
	{ id: 5, title: "Звездолёт", vol: 51 }
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
		document.getElementById(name).appendChild(createElement(item))
			
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

// функция очищения 
function clear(name) {
	document.getElementById(name).innerHTML = '';
	
}


function createElement(item) {
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
	divItemContainer.id =  item.id;
	divItemContainer.onclick=function(){
		item.vol--;
		ind=true;
		for (var i = 0; i < basket.length; i++) {
				if (basket[i].id==item.id) {
					basket[i].vol++;
					ind=false;
				}
		}
		if (ind) {
			basket[basket.length]=item;
			 basket[basket.length].vol=1;
		}	
		if (item.vol==0) {
			for (var i = 0; i < storagedata.length; i++) {
				if (storagedata[i].id==item.id) {
					delete storagedata[i];
				}
			}	
		}
		
		refresh(storagedata,"storage");
		refresh(basket,"basket");
		return false;
	}
	return divItemContainer;
}
