/* var pathElement = document.getElementById('Layer_1-2'); */



  /* function changeColor() {
var element = document.querySelector('.cls-3');
var styles =window.getComputedStyle(element);  
 console.log(styles);  
 console.log(stylesAfter.fill); 
  } 
   */
  
//  document.getElementById('Layer_1-2').addEventListener('mouseover', function() {
//    changeColor();
//  });

var svgElements = document.querySelectorAll('section#tech-stack svg');
for(var i = 0; i < svgElements.length; i++) {
    console.log(svgElements.length);
     console.log(svgElements[i]); 
    svgElements[i].addEventListener('mouseover', function(e){
        changeColor(this);
    });
    svgElements[i].addEventListener('mouseout', function(e){
        restoreColor(this);
    });
}
// .addEventListener('mouseover', function() {
//    changeColor();
//  });
function restoreColor(selectedSvg) {
    var svgInnerElements = selectedSvg.getElementsByTagName("*");
    for(var i = 0; i < svgInnerElements.length; i++) 
    {
        var element = svgInnerElements[i];
        if(element.style.originalFill && element.style.originalStroke) {
            element.style.fill = element.style.originalFill;
            element.style.stroke = element.style.originalStroke;
        } else if(element.style.originalFill) {
            element.style.fill = element.style.originalFill;
        } else if (element.style.originalStroke) {
            element.style.stroke = element.style.originalStroke;
        }
    }
}
 
function changeColor(selectedSvg)
{
    var svgInnerElements = selectedSvg.getElementsByTagName("*");
    for(var i = 0; i < svgInnerElements.length; i++) 
    {

        var element = svgInnerElements[i];
        var styles =window.getComputedStyle(element);
        // if fill is none we should check stroke
        /*  console.log('Fill:' + styles.fill);
        console.log('Stroke:' + styles.stroke); */ 
      
        if(styles.fill && styles.stroke){
            element.style.originalFill = styles.fill;
            element.style.originalStroke = styles.stroke;
            if(styles.fill !== 'rgb(255, 255, 255)' && styles.stroke !== 'rgb(255, 255, 255)' )
            {
                element.style.fill ='rgb(255, 255, 255)';
                element.style.stroke=  'rgb(255, 255, 255 )';
            }
            else if(styles.fill !== 'rgb(255, 255, 255)' && styles.stroke == 'rgb(255, 255, 255)' )
            {
                element.style.fill ='rgb(255, 255 ,255)';
                element.style.stroke= 'rgb(0 ,0 ,0 )';
            }
            else if(styles.fill == 'rgb(255, 255, 255)'&& styles.stroke !== 'rgb(255, 255, 255)')
            {
                element.style.fill ='rgb(0, 0, 0)';
                element.style.stroke= 'rgb( 255, 255 ,255 )'; 
            }
            else
            { 
                element.style.fill ='rgb(0, 0, 0)';
                element.style.stroke='rgb( 0, 0, 0 )'; 
            }
        } else if(styles.fill ) {
            element.style.originalFill = styles.fill;
            if(styles.fill !== 'rgb(255, 255, 255)') {
                element.style.fill ='rgb(255, 255, 255)' ;
            } else {
                element.style.fill ='rgb(0 , 0 , 0)' ;
            }
        } else if(styles.stroke) {
            element.style.originalStroke = styles.stroke;
            if(styles.stroke !=='rgb(255, 255, 255)')
            {
                element.style.stroke ='rgb(255, 255, 255)' ;
            }
            else{
                element.style.stroke ='rgb(0, 0 , 0 )';
            }
        }
    }

    } 

    
    

 
//   document.getElementById('Layer_1-2').addEventListener('mouseout', function() {
//    changeColor1();
//  });
   


