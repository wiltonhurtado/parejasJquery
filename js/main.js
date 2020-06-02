$(function() {

   var pare1 = ["", "", "", ""];
     var pare2 = ["", "", "", ""];
var estado1=0;
var estado2=0;
var estado3=0;
var estado4=0;
var estado5=0;
var estado6=0;
var estado7=0;
var estado8=0;
    var correctas=0;
    var incorrectas=0;
var vol=12;
	$("#mario").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
             retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    	$("#hongo").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
            retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    	$("#villano").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
            retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    	$("#dino").animateSprite({
		fps:24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
            retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
 
    	$("#mario2").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
           retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    	$("#hongo2").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
            retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    	$("#villano2").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
           retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
    	$("#dino2").animateSprite({
		fps: 24,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [1,2,3,4,5],
            retorna: [5,4,3,2,1,0],
            fin: [5],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
 

//------------------------
//- Programacion Botones -
//------------------------
    
	$("#mario").on("click",function(){
        if(estado1==0){
        $("#mario").animateSprite('play', 'camina');
        estado1=1;
        pare1[0]="mario";
       
         if( estado2==1 || estado3==1 || estado4==1 || estado5==1 || estado6==1 || estado7==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#mario").animateSprite('play', 'fin'); 
                estado1=2;
                estado5=2;
                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#mario").animateSprite('play', 'retorna');
                  pare1[0]="";
                  pare2[0]="";
                estado1=0;
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                if(estado2==1){
                     $("#hongo").animateSprite('play', 'retorna');
                    estado2=0;
                }
                if(estado3==1){
                     $("#villano").animateSprite('play', 'retorna');
                     estado3=0;
                }
                if(estado4==1){
                     $("#dino").animateSprite('play', 'retorna');
                     estado4=0;
                }
                 if(estado6==1){
                     $("#hongo2").animateSprite('play', 'retorna');
                      estado6=0;
                }
                 if(estado7==1){
                     $("#villano2").animateSprite('play', 'retorna');
                      estado7=0;
                }
                 if(estado8==1){
                     $("#dino2").animateSprite('play', 'retorna');
                      estado8=0;
                }
              
            }
        }
        }
       
    });
    
    	$("#hongo").on("click",function(){
    
        if(estado2==0){
        $("#hongo").animateSprite('play', 'camina');
        estado2=1;
        pare1[0]="hongo";
        
         if( estado1==1 || estado3==1 || estado4==1 || estado5==1 || estado6==1 || estado7==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#hongo").animateSprite('play', 'fin'); 
                  estado2=2;
                estado6=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#hongo").animateSprite('play', 'retorna');
                estado2=0;
                      pare1[0]="";
                  pare2[0]="";
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                    if(estado1==1){
                     $("#mario").animateSprite('play', 'retorna');
                         estado1=0;
                }
                if(estado3==1){
                     $("#villano").animateSprite('play', 'retorna');
                     estado3=0;
                }
                if(estado4==1){
                     $("#dino").animateSprite('play', 'retorna');
                     estado4=0;
                }
                 if(estado5==1){
                     $("#mario2").animateSprite('play', 'retorna');
                      estado5=0;
                }
                 if(estado7==1){
                     $("#villano2").animateSprite('play', 'retorna');
                }
                 if(estado8==1){
                     $("#dino2").animateSprite('play', 'retorna');
                      estado8=0;
                }
             
            }
        }
        }
        
    });
    
    	$("#villano").on("click",function(){
     if(estado3==0){
        $("#villano").animateSprite('play', 'camina');
        estado3=1;
        pare1[0]="villano";
        
         if( estado1==1 || estado2==1 || estado4==1 || estado5==1 || estado6==1 || estado7==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#villano").animateSprite('play', 'fin'); 
                 estado3=2;
                estado7=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#villano").animateSprite('play', 'retorna');
                 estado3=0;
                      pare1[0]="";
                  pare2[0]="";
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                 if(estado1==1){
                     $("#mario").animateSprite('play', 'retorna');
                      estado1=0;
                }
                if(estado2==1){
                     $("#hongo").animateSprite('play', 'retorna');
                     estado2=0;
                }
                
                if(estado4==1){
                     $("#dino").animateSprite('play', 'retorna');
                     estado4=0;
                }
                 if(estado5==1){
                     $("#mario2").animateSprite('play', 'retorna');
                      estado5=0;
                }
                 if(estado6==1){
                     $("#hongo2").animateSprite('play', 'retorna');
                      estado6=0;
                }
               
                 if(estado8==1){
                     $("#dino2").animateSprite('play', 'retorna');
                      estado8=0;
                }
              
            }
        }
     }
    });
    
    	$("#dino").on("click",function(){
    
       if(estado4==0){
        $("#dino").animateSprite('play', 'camina');
        estado4=1;
        pare1[0]="dino";
      
         if( estado2==1 || estado3==1 || estado1==1 || estado5==1 || estado6==1 || estado7==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#dino").animateSprite('play', 'fin'); 
                 estado4=2;
                estado8=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#dino").animateSprite('play', 'retorna');
            estado4=0;
                      pare1[0]="";
                  pare2[0]="";
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                 if(estado1==1){
                     $("#mario").animateSprite('play', 'retorna');
                      estado1=0;
                }
                 if(estado2==1){
                     $("#hongo").animateSprite('play', 'retorna');
                      estado2=0;
                }
                 if(estado3==1){
                     $("#villano").animateSprite('play', 'retorna');
                      estado3=0;
                }
                 if(estado5==1){
                     $("#mario2").animateSprite('play', 'retorna');
                      estado5=0;
                }
                 if(estado6==1){
                      $("#hongo2").animateSprite('play', 'retorna');
                      estado6=0;
                }
                  if(estado7==1){
                      $("#villano2").animateSprite('play', 'retorna');
                       estado7=0;
                }
            
            }
        }
       }
        
    });
    
    
    
    $("#mario2").on("click",function(){
    
        if(estado5==0){
        $("#mario2").animateSprite('play', 'camina');
        estado5=1;
        pare2[0]="mario";
         
         if( estado2==1 || estado3==1 || estado4==1 || estado1==1 || estado6==1 || estado7==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#mario2").animateSprite('play', 'fin'); 
                 estado5=2;
                estado1=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                 $("#mario2").animateSprite('play', 'retorna');
                estado5=0;
                      pare1[0]="";
                  pare2[0]="";
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                if(estado2==1){
                    $("#hongo").animateSprite('play', 'retorna');
                     estado2=0;
                }
                    
                if(estado3==1){
                     $("#villano").animateSprite('play', 'retorna');
                     estado3=0;
                }
                if(estado4==1){
                     $("#dino").animateSprite('play', 'retorna');
                     estado5=0;
                }
                 if(estado6==1){
                     $("#hongo2").animateSprite('play', 'retorna');
                      estado6=0;
                }
                 if(estado7==1){
                     $("#villano2").animateSprite('play', 'retorna');
                      estado7=0;
                }
                 if(estado8==1){
                     $("#dino2").animateSprite('play', 'retorna');
                      estado8=0;
                }
             
                }
               
            }
        }
        
        
    });
    
    	$("#hongo2").on("click",function(){
     if(estado6==0){
        $("#hongo2").animateSprite('play', 'camina');
        estado6=1;
        pare2[0]="hongo";
        
         if( estado2==1 || estado3==1 || estado4==1 || estado5==1 || estado1==1 || estado7==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#hongo2").animateSprite('play', 'fin'); 
                 estado6=2;
                estado2=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#hongo2").animateSprite('play', 'retorna');
           estado6=0;
                      pare1[0]="";
                  pare2[0]="";
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                 if(estado1==1){
                     $("#mario").animateSprite('play', 'retorna');
                      estado1=0;
                }
                if(estado3==1){
                     $("#villano").animateSprite('play', 'retorna');
                     estado3=0;
                }
                if(estado4==1){
                     $("#dino").animateSprite('play', 'retorna');
                     estado4=0;
                }
                 if(estado5==1){
                     $("#mario2").animateSprite('play', 'retorna');
                      estado5=0;
                }
                 if(estado7==1){
                     $("#villano2").animateSprite('play', 'retorna');
                      estado7=0;
                }
                 if(estado8==1){
                     $("#dino2").animateSprite('play', 'retorna');
                      estado8=0;
                }
               
            }
        }
     }
        
    });
    
    	$("#villano2").on("click",function(){
    
       if(estado7==0){
        $("#villano2").animateSprite('play', 'camina');
        estado7=1;
        pare2[0]="villano";
         
         if( estado2==1 || estado3==1 || estado4==1 || estado5==1 || estado6==1 || estado1==1 || estado8==1){
            if(pare1[0]==pare2[0]){
               $("#villano2").animateSprite('play', 'fin');
                 estado7=2;
                estado3=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#villano2").animateSprite('play', 'retorna');
                estado7=0;
                      pare1[0]="";
                  pare2[0]="";
                  incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                 if(estado1==1){
                     $("#mario").animateSprite('play', 'retorna');
                      estado1=0;
                }
                if(estado2==1){
                     $("#hongo").animateSprite('play', 'retorna');
                     estado2=0;
                }
                
                if(estado4==1){
                     $("#dino").animateSprite('play', 'retorna');
                     estado4=0;
                }
                 if(estado5==1){
                     $("#mario2").animateSprite('play', 'retorna');
                      estado5=0;
                }
                 if(estado6==1){
                     $("#hongo2").animateSprite('play', 'retorna');
                      estado6=0;
                }
               
                 if(estado8==1){
                     $("#dino2").animateSprite('play', 'retorna');
                      estado8=0;
                }
             
            }
        }
       }
        
    });
    
    	$("#dino2").on("click",function(){
     if(estado8==0){
        $("#dino2").animateSprite('play', 'camina');
        estado8=1;
        pare2[0]="dino";
       
         if( estado2==1 || estado3==1 || estado4==1 || estado5==1 || estado6==1 || estado7==1 || estado1==1){
            if(pare1[0]==pare2[0]){
               $("#dino2").animateSprite('play', 'fin'); 
                 estado8=2;
                estado4=2;
                                correctas++;
                 $("#mensaje").html("Aciertos:"+correctas);
            }
            else{
                $("#dino2").animateSprite('play', 'retorna');
                estado8=0;
                      pare1[0]="";
                  pare2[0]="";
                                incorrectas++;
                 $("#mensaje2").html("Desaciertos:"+incorrectas);
                 if(estado1==1){
                     $("#mario").animateSprite('play', 'retorna');
                      estado1=0;
                }
                 if(estado2==1){
                     $("#hongo").animateSprite('play', 'retorna');
                      estado2=0;
                }
                 if(estado3==1){
                     $("#villano").animateSprite('play', 'retorna');
                      estado3=0;
                }
                 if(estado5==1){
                     $("#mario2").animateSprite('play', 'retorna');
                      estado5=0;
                }
                 if(estado6==1){
                      $("#hongo2").animateSprite('play', 'retorna');
                      estado6=0;
                }
                  if(estado7==1){
                      $("#villano2").animateSprite('play', 'retorna');
                       estado7=0;
                }
              
            }
        }
     }
        
    });
    
      });


