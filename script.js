let Status1 = document.getElementById('result') ;

function BMI(weight,height){
    let result = weight / (height*height);
    return result;
}
console.log(BMI());
function Status (BMI) {
    if(BMI < 18.5){
        Status1.style.color = 'orange'
        return `لديك نقص في الوزن`;
}
    else if(BMI>=18.5 && BMI<25){
        Status1.style.color = 'green'
        return ` وزنك صحي` ;
    }
    else if(BMI>=25){
        Status1.style.color = 'red'
        return `لديك زيادة في الوزن`;
    } else {
        return `error`;
    }
}
function calculate (){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = BMI(weight,height);
    let desc = Status(bmi)
    let div = document.getElementById('result')
    div.innerText = bmi + " ==> "   + desc;
}
