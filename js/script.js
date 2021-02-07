//Создать блок по центру экрана. При нажатии на стрелки – блок смещается в соответствующем направлении. Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.
//1) блок не вываливается за экран
//2) при каждом "врезании" в стенку – блок отпрыгивает на step*2 пикселей в противоположном направлении.
//3) При каждом отпрыгивании – по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды
//
let block = document.querySelector('.block');

const arrowRight = 39,
	  arrowLeft = 37,
	  arrowDown = 40,
	  arrowUp = 38,
	  movingDistance = 20;	  

document.onkeydown = function(event){

	let key = event.keyCode,
		blockLeft = block.style.left === '' ? 0 : parseInt(block.style.left),   
		blockTop = block.style.top === '' ? 0 : parseInt(block.style.top),
		bodyWidth = event.target.clientWidth,
		bodyHieght = event.target.clientHeight,
		blockLeftPosition = block.offsetLeft,
		blockTopPosition = block.offsetTop,
		blockNextPointHorizont = blockLeftPosition+movingDistance+block.clientWidth,
		blockNextPointVertical = blockTopPosition+movingDistance+block.clientHeight;		

	if(key === arrowRight && blockNextPointHorizont<=bodyWidth){//
		block.classList.remove('error');
		block.innerHTML = ``;
 		block.style.left = `${blockLeft+movingDistance}px`; 	
 				 
 	}else if(key === arrowLeft && blockLeftPosition>=movingDistance){//blockNextPointHorizont>=132
 		block.classList.remove('error');
 		block.innerHTML = ``;
    	block.style.left = `${blockLeft-movingDistance}px`;		
		
	}else if(key === arrowDown && blockNextPointVertical<=bodyHieght){
 		block.classList.remove('error');
 		block.innerHTML = ``;
    	block.style.top = `${blockTop+movingDistance}px`;    	
    	
	}else if(key === arrowUp && blockTopPosition>=movingDistance){//blockNextPointVertical>=132
 		block.classList.remove('error');
 		block.innerHTML = ``;
    	block.style.top = `${blockTop-movingDistance}px`;    	
    	    	
	} else {			
 			block.classList.add('error');
 			block.innerHTML = `<<БАБАХ>>`;
 			block.style.left = `${0}px`;
 			block.style.top = `${0}px`;
 		setTimeout(function(){
 			block.innerHTML = ``;
 			block.classList.remove('error');			
 		},2000);
    }     
}
//console.log(blockNextPointVertical);
//console.log(event.target.clientHeight);
//console.dir(block);
//console.log('**********************');
//console.log(blockTopPosition);
//console.log(movingDistance);
//console.dir(block.clientHeight);











//console.log(event);
//console.log(key);
//}else if (key === arrowLeft) {
    //	block.style.left = `${blockLeft-10}px`;
    //}else if (key === arrowDown) {
    //	block.style.top = `${blockTop+10}px`;
    //}else if (key === arrowUp) {
    //	block.style.top = `${blockTop-10}px`;
    //*****************************************
//    if(event.key == "ArrowRight"){        
//        block.style.left = leftBlock +'px';
//        
//        leftBlock++;
//    }
//    if(event.key == "ArrowDown"){    
//        block.style.top = topBlock +'px';
//        
//        topBlock++;
//    }
//    if(event.key == "ArrowLeft"){
//        block.style.right = rightBlock +'px';
//        //block.style.background = "#000000";
//        rightBlock++;
//    }
//    if(event.key == "ArrowUp"){
//        block.style.bottom = buttonBlock +'px';
//        
//        buttonBlock++;
//    }    