function calculateBMI(height, weight) {
if( height > 3) 
    
height = height / 100;

return(weight / (height * height)).toFixed(2);
}
console.log(calculateBMI(175, 70)); 
console.log(calculateBMI(1.75, 70)); 
