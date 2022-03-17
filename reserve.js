document.getElementById('submit').addEventListener('click', function(){
document.querySelector('.bg-modal').style.display ='flex';
});

document.getElementById('close').addEventListener('click', function(){
document.querySelector('.bg-modal').style.display ='none';
});

function mConfirm(){
	alert("You have successfully made a reservation");
}

function getValue(){
	var name = document.getElementById('fname').value;
	document.getElementById('name').value = name;
	
	var email = document.getElementById('email').value;
	document.getElementById('eml').value = email;	
	
	var cpNum = document.getElementById('cpnum').value;
	document.getElementById('num').value = cpNum;
	
	var desti = document.getElementById('dest').value;
	document.getElementById('desti').value = desti;
					
	var arr= document.getElementById('arr').value;
	document.getElementById('arv').value = arr;
	
	var depr= document.getElementById('dep').value;
	document.getElementById('depa').value = depr;
	
	var ppl= document.getElementById('peo').value;
	document.getElementById('nop').value = ppl;
	
	var rqst= document.getElementById('req').value;
	document.getElementById('reqs').value = rqst;
}
					
	