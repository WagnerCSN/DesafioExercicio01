let number1=prompt('Digite o primeiro número: ')

let number2=prompt('Digite o segundo número ')

number1 = Number(number1)
number2 = Number(number2)
let add = (number1 + number2)
let sub = (number1 - number2)
let mult = (number1 * number2)
let div = (number1 / number2)
let rest = (number1 % number2)

let evenNumber = (number1 % number2) ==0
let equalNumber = (number1 == number2)


alert(`A soma dos dois números é: ${add}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`A resto da divisão dos dois números é: ${rest}`)

if(evenNumber){
    alert('A soma dos dois números é par: '+add)
}else{
    alert('A soma dos dois números é impar: '+add)
    
}

if(equalNumber){
    alert("Os números inseridos são iguais")
}else{
    alert("Os números inseridos são diferentes")
}