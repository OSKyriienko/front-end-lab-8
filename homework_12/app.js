// Your code goes here
let root = document.getElementById('root');

let thumbnails = createThumbnails();
let thumbnailsUrl = location.href;
//location.hash = '';

window.addEventListener('hashchange', function() {
if (location.hash) {
	let model = location.hash.slice(1);
		for (let i=0; i<tanks.length;i++) {
			if (tanks[i].model.replace(/ /g,'-') === model) {
				root.replaceChild(createTankDetails(tanks[i]),root.firstChild,);
			}	
		}	
}
else {
	location.href = thumbnailsUrl;
}		
});
 
function createThumbnails() {	
	let wrapper = document.createElement('div');
	wrapper.classList.add('thumbnails');
	root.appendChild(wrapper);
	let caption = document.createElement('h1');
	caption.textContent = 'Most popular tanks';
	wrapper.appendChild(caption);
	let wrapperTanks = document.createElement('div');
	wrapperTanks.classList.add('wrapper-tanks');
	wrapper.appendChild(wrapperTanks);
	tanks.forEach(function createTank(elem) {
		let tank = document.createElement('div');
		tank.classList.add('tank');
		wrapperTanks.appendChild(tank);
		let tankImg = document.createElement('img');
		tankImg.src = elem.preview;	
		tankImg.title = 'Click to details';
		tankImg.classList.add('tank-img');
		tank.appendChild(tankImg);
		let tankTitle = document.createElement('div');
		tankTitle.classList.add('tank-title');
		tank.appendChild(tankTitle);
		let tankFlag = document.createElement('img');
		tankFlag.src = elem.country_image;
		tankFlag.title = elem.country;
		tankFlag.classList.add('tank-flag');
		tankTitle.appendChild(tankFlag);
		let tankLevel = document.createElement('span');
		tankLevel.textContent = elem.level;
		tankLevel.classList.add('tank-level');
		tankTitle.appendChild(tankLevel);
		let tankModel = document.createElement('span');
		tankModel.textContent = elem.model;
		tankModel.classList.add('tank-model');
		tankTitle.appendChild(tankModel);
		tank.addEventListener('click', function() {
			location.hash = elem.model.replace(/ /g,'-');
		});
	});	
	return wrapper;
}

function createTankDetails(elem) {
	let wrapper = document.createElement('div');
	wrapper.classList.add('tank-details');
	root.appendChild(wrapper);
	let tankName = document.createElement('div');
	tankName.classList.add('tank-name');
	wrapper.appendChild(tankName);
	let tankFlag = document.createElement('img');
	tankFlag.title = elem.country;
	tankFlag.src = elem.country_image;
	tankName.appendChild(tankFlag);		
	let tankModel = document.createElement('span');
	tankModel.textContent = elem.model;
	tankModel.classList.add('tank-details-model');
	tankName.appendChild(tankModel);
	let tankLevel = document.createElement('span');
	tankLevel.textContent = ' (level ' + elem.level + ')';
	tankName.appendChild(tankLevel);

	let wrapperFlex = document.createElement('div');
	wrapperFlex.classList.add('tank-info');
	wrapper.appendChild(wrapperFlex);
	let tankPreview = document.createElement('div');
	tankPreview.classList.add('tank-preview');
	wrapperFlex.appendChild(tankPreview);
	let preview = document.createElement('p');
	preview.textContent = 'Preview';
	tankPreview.appendChild(preview);
	let tankImg = document.createElement('img');
	tankImg.src = elem.preview;
	tankPreview.appendChild(tankImg);
	let info = document.createElement('div');	
	wrapperFlex.appendChild(info);
	info.classList.add('info');
	let caption1 = document.createElement('p');
	caption1.textContent = 'Characteristic';
	info.appendChild(caption1);
	let table = document.createElement('table');
	table.classList.add('table');
	for (let key in elem.details) {
		let tr = document.createElement('tr');
		table.appendChild(tr);
		let td1 = document.createElement('td');
		td1.classList.add('td-name');
		td1.appendChild(document.createTextNode(key));
		tr.appendChild(td1);
		let td2 = document.createElement('td');
		td2.appendChild(document.createTextNode(elem.details[key]));
		tr.appendChild(td2);		
	};
	info.appendChild(table);
	let linkBack = document.createElement('p');
	linkBack.textContent = 'Back to list view';
	linkBack.classList.add('link-back');
	wrapper.appendChild(linkBack);
	linkBack.addEventListener('click',function() {
		location.hash = '';
	});
	return wrapper;
}