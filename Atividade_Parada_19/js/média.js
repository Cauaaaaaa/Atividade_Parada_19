function calculo(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;

    var média = (Number(num1) + Number(num2) + Number(num3)) / 3;

    if(média >= 6){
        alert(`Resultado da média: ${média} | Aluno(a) aprovado(a)`)
    }else{
        if(média < 6){
            alert(`Resultado da média: ${média} | Aluno(a) reprovado(a)`)
        }
    }
}