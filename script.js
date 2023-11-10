let add = document.querySelector(`input#add`);
let fim = document.querySelector(`input#fim`);
let txtn = document.querySelector(`input#txtn`);
let lista = document.querySelector(`select#lista`);
let res = document.querySelector(`div#res`);
let valores = [];

const isNumero = (num) => {
  if (Number(num) >= 1 && Number(num) <= 100) {
    return true;
  } else {
    return false;
  }
};

const inLista = (num, lista) => {
  if (lista.indexOf(Number(num)) != -1) {
    return true;
  } else {
    return false;
  }
};

add.addEventListener(`click`, () =>{
    if (isNumero(txtn.value) && !inLista(txtn.value, valores)) {
    valores.push(Number(txtn.value));
    let item = document.createElement(`option`);
    item.text = `Você adicionou o valor ${txtn.value}`;
    lista.appendChild(item);
    res.innerHTML = ``;
  } else {
    alert(`Valor inválido ou já adicionado a lista!`);
  } 
    txtn.value = ``;
    txtn.focus();
});
 
fim.addEventListener(`click`, ()=>{
    if (valores.length === 0) {
    alert(`Adicione um número antes de finalizar!`);
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / total;

    res.innerHTML = ``;
    res.innerHTML = `<h1>Relatório:</h1>`;
    res.innerHTML += `<br><p>Foram adicionados: ${total} números</p>
                          <br><p>A soma de todos os numeros é: ${soma}</p>
                          <br><p>O maior número adicionado foi: ${maior}</p>
                          <br><p>O menor número adicionado foi: ${menor}</p>
                          <br><p>Por fim, a média é de: ${media}</p>`;
  }
});
