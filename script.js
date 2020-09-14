console.log('It\'s Working');
let theme = localStorage.getItem('theme');
if(theme == null){
	setTheme('Light');
}
else{
	setTheme(theme);
}
let themeDots = document.getElementsByClassName('theme-dots');

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option Clicked:', mode);
		setTheme(mode);
	});
}
function setTheme(mode){
	if(mode == 'Light'){
		document.getElementById('theme-style').href = 'default.css';
	}
	if(mode == 'Blue'){
		document.getElementById('theme-style').href = 'blue.css';
	}
	if(mode == 'Green'){
		document.getElementById('theme-style').href = 'green.css';
	}
	if(mode == 'Purple'){
		document.getElementById('theme-style').href = 'purple.css';
	}
	localStorage.setItem('theme', mode);
}