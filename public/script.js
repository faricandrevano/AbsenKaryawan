const modal = document.getElementById("modal");
   	const btnModal = document.getElementById("")
   	document.getElementById('btnCreate').addEventListener('click',(e)=> {
   		modal.classList.remove('hidden')
   	})
   	document.getElementById('close').addEventListener('click',(e) => {
   		modal.classList.add('hidden');
   	})
const bgLaoder = document.getElementById('loader');

function setDisplay (Value) {
	if(Value) {
		bgLaoder.style.display = 'flex'
	} else {
		bgLaoder.style.display = 'none'
	}
}