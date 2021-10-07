function oneThroughTwenty() {
  let i=1
  let s=[]  
  while (i<=20) {
    s.push(i)
    i++
  }   
  return s
}
console.log(`A sequencia de numeros é: ${oneThroughTwenty()}`)

function evensToTwenty() {
  let x = []
  for (let i = 2; i <= 20; i+=2) {
    x.push(i)    
  }
  return x
}
console.log(`A sequencia de numeros pares é: ${evensToTwenty()}`)

function oddsToTwenty(){
  let x = []
  for (let i = 1; i <= 20; i+=2) {
    x.push(i)    
  }
  return x
}
console.log(`A sequencia de numeros impares é: ${oddsToTwenty()}`)

function multiplesOfFive() {
  let x = []
  for (let i = 5; i <= 100; i+=5) {
    x.push(i)    
  }
  return x
}
console.log(`A sequencia de numeros multiplos de 5 é: ${multiplesOfFive()}`)

function squareNumbers() {
  let i = 1
  let quadrado = 0
  let x = []
  while (quadrado < 100) {
    quadrado = i**2
    x.push(quadrado)
    i++
  }
  return x
}
console.log(`A sequencia de numeros quadrados perfeitos é: ${squareNumbers()}`)

function countingBackwards() {
  let i=20
  let s=[]  
  while (i>=1) {
    s.push(i)
    i--
  }   
  return s
}
console.log(`A sequencia de numeros de tras pra frente é: ${countingBackwards()}`)

function evenNumbersBackwards() {
  let x = []
  for (let i = 20; i >= 2; i-=2) {
    x.push(i)    
  }
  return x
}
console.log(`A sequencia de numeros pares de tras pra frente é: ${evenNumbersBackwards()}`)

function oddNumbersBackwards() {
  let x = []
  for (let i = 19; i >= 1; i-=2) {
    x.push(i)    
  }
  return x
}
console.log(`A sequencia de numeros impares de tras pra frente é: ${oddNumbersBackwards()}`)

function multiplesOfFiveBackwards() {
  let x = []
  for (let i = 100; i >= 5; i-=5) {
    x.push(i)    
  }
  return x
}
console.log(`A sequencia de numeros multiplos de 5 de tras pra frente é: ${multiplesOfFiveBackwards()}`)

function squareNumbersBackwards(){
  let i = 10
  let quadrado = 100
  let x = []
  while (quadrado > 1) {
    quadrado = i**2
    x.push(quadrado)
    i--
  }
  return x
}
console.log(`A sequencia de numeros quadrados perfeitos de tras pra frente é: ${squareNumbersBackwards()}`)
