var rootNode = document.getElementById("root");

function createNewTree(elem,parentNode) {
	let ul = document.createElement('ul');
	ul.classList.add('elem-list');
	for (let i=0; i<elem.length; i++) {
		let li = document.createElement('li');
		let p = document.createElement('p');
		p.innerHTML = elem[i].title;
		li.appendChild(p);
				
		if (elem[i].children) {
			p.classList.add('folder');
			createNewTree(elem[i].children,li);
			createIcon(p,'folder');
		}

		if (!elem[i].folder) {
			createIcon(p,'insert_drive_file');
		}

		if ((elem[i].children === false) || (elem[i].children === null)) {
			let pEmpty = document.createElement('p');
			pEmpty.innerHTML = 'Folder is Empty';
			pEmpty.classList.add('elem-list','empty');
			li.appendChild(pEmpty);
			p.classList.add('folder');
			createIcon(p,'folder');
		}
		ul.appendChild(li);	
	}
	parentNode.appendChild(ul); 
	return ul;
}

function funcToggle(event) {
	var target = event.target.closest('p');

	if (target && target.classList.contains('folder')) {
		target.nextElementSibling.classList.toggle('elem-list');
		if (!target.nextElementSibling.classList.contains('elem-list')) {
		target.children[0].innerHTML = 'folder_open';
		}
		else {
			target.children[0].innerHTML = 'folder';	
		}
	}	
}

function createIcon(elem,innerText) {
	let icon = document.createElement('i');
	icon.classList.add('material-icons');
	icon.innerHTML = innerText;
	elem.insertBefore(icon,elem.firstChild);
}

// Your code goes here

rootNode.appendChild(createNewTree(structure, rootNode));
rootNode.firstElementChild.classList.add('main');
rootNode.addEventListener('click',funcToggle);


