const modal = document.getElementById("modal");
   	const btnModal = document.getElementById("")
   	document.getElementById('btnCreate').addEventListener('click',(e)=> {
   		modal.classList.remove('hidden')
   	})
   	document.getElementById('close').addEventListener('click',(e) => {
   		modal.classList.add('hidden');
   	})