// MIT License
// CopyDERECHA (c) 2020 Luis Espino

function reflex_agent(Localidad, state){

   	if (state=="SUCIO") return "LIMPIO";
   	else if (Localidad=="A") return "DERECHA";
   	else if (Localidad=="B") return "IZQUIERDA";
}

function imprimePosicion(Localidad, state, visitas){

	if (state[1] == "SUCIO" && state[2] == "SUCIO" && Localidad == "A"){
		document.getElementById("log").innerHTML+="<br>No. Estado[1]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[0] = 1;
		
	}else if (state[1] == "SUCIO" && state[2] == "SUCIO" && Localidad == "B"){
		document.getElementById("log").innerHTML+="<br>No. Estado[2]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[1] = 2;
		
	}else if (state[1] == "LIMPIO" && state[2] == "SUCIO" && Localidad == "A"){
		document.getElementById("log").innerHTML+="<br>No. Estado[3]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[2] = 3;
		
	}else if (state[1] == "LIMPIO" && state[2] == "SUCIO" && Localidad == "B"){
		document.getElementById("log").innerHTML+="<br>No. Estado[4]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[3] = 4;
		
	}else if (state[1] == "SUCIO" && state[2] == "LIMPIO" && Localidad == "A"){
		document.getElementById("log").innerHTML+="<br>No. Estado[5]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[4] = 5;
		
	}else if (state[1] == "SUCIO" && state[2] == "LIMPIO" && Localidad == "B"){
		document.getElementById("log").innerHTML+="<br>No. Estado[6]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[5] = 6;
		
	}else if (state[1] == "LIMPIO" && state[2] == "LIMPIO" && Localidad == "A"){
		document.getElementById("log").innerHTML+="<br>No. Estado[7]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[6] = 7;
		
	}else if (state[1] == "LIMPIO" && state[2] == "LIMPIO" && Localidad == "B"){
		document.getElementById("log").innerHTML+="<br>No. Estado[8]| ".concat(states[1]).concat("|").concat(states[2]).concat("| Localidad : ").concat(Localidad);
		visitas[7] = 8;
		
	}

	
}

function validaEstados(visitas){
	let tmp = 0;
	for (let i = 1; i < 8; i++) {
		
		if(visitas[i-1] != i){
			return "HECHO";
		}
	 } 
	 
	 document.getElementById("log").innerHTML+="<br>Fueron visitados todos los estados.";
	 return "DONE";

}

function test(states, visitas){		
		
      	var Localidad = states[0];					
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(Localidad, state);
		imprimePosicion(Localidad, states, visitas);      	
      	if (action_result == "LIMPIO"){
        	if (Localidad == "A") states[1] = "LIMPIO";
         	else if (Localidad == "B") states[2] = "LIMPIO";
      	}
      	else if (action_result == "DERECHA") states[0] = "B";
      	else if (action_result == "IZQUIERDA") states[0] = "A";	  

		let aleatorio =  Math.floor((Math.random() * (100-2)) + 1); 
		if (aleatorio < 50 ){
			  if (Localidad == "A"){
				  console.log('SUCIO A : '+ aleatorio);
				  states[1] = "SUCIO"
			  }else{
				  console.log('SUCIO B : '+ aleatorio);	
				  states[2] = "SUCIO"
			  }
		}	  

		if (validaEstados(visitas) != "DONE"){
			setTimeout(function(){ test(states,visitas); }, 1000);
		}
	
}

var states = ["A","SUCIO","SUCIO"];
var visitas = [1,1,1,1,1,1,1,1,1];

test(states,visitas);