//desarrollar un programa para sumar dos numeros en diferentes sistemas de numeracion posicional
//123 en base 4 mas 132 en base 4 (2-10)
//crear un archivo html
//ingresar la base de numeracion
//ingresar los numeros en la base respectiva
//mediante un boton realizo la suma
//validar si los numeros ingresados son correctos  error: 125 en base 4
//si los numeros ingresados son correctos se imprime la suma
//caso contrario no se imprime la suma
//imprimo los resultados en un input de salida
//123 en base 4 mas 132 en base 4
//forma correcta de sumar es dederecha a izquierda
//empezamos sumando 3 en base 4 mas 2 en base 4 es igual a 11 en base 4
//la cifra de la derecha se coloca como resultado y la cifra de la izquierda pasa a la siguiente suma
//en una primera linkedlist guardo las cifras 1-2-3 como nodos
//en una segunda linkedlist guardo las cifras 1-3-2 como nodos
//l1: h->n1->n2->n3 l1: h->3->2->1
//l2: h->n1->n2->n3 l2: h->2->3->1
//123 en un array [1,2,3]
//123+132 =   1021 [1,0,2,1]
//135 en base 4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkendList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.size++;
      return node;
    }
    let current = this.head; // current guarda el primer nodo
    while (current.next) {
      //entra al while si existe un tercer nodo
      //entra al while si existe un segundo nodo
      current = current.next; //current guarda el tercer nodo
    } //finaliza el bucle guardando dentro de current el tercer nodo
    current.next = node; //añadiendo un cuarto nodo a la lista enlazada
    this.size++;
    return node;
  }
  fromArray(values) {
    values.reverse().forEach((item) => {
      this.add(item);
    });
  }
  removeAll() {
    this.head = null;
  }
}

const firstLinkedList = new LinkendList();
const secondLinkedList = new LinkendList();

function sum(base, l1, l2) {
  let listOne = l1.head;
  let listTwo = l2.head;
  const array = [];
  let carry = 0;
  while (listOne !== null || listTwo !== null) {
    let v1 = 0;
    let v2 = 0;
    if (listOne !== null) {
      v1 = listOne.data;
    }
    if (listTwo !== null) {
      v2 = listTwo.data;
    }
    let suma = Number(v1) + Number(v2) + carry; //sumando las cifras del extremo derecho
    carry = Math.floor(suma / base); //1
    suma = suma % base;
    array.unshift(suma);
    if (listOne !== null) {
      listOne = listOne.next;
    }
    if (listTwo !== null) {
      listTwo = listTwo.next;
    }
  }
  if (carry !== 0) {
    array.unshift(carry);
  }
  return array;
}
function print() {
  const inputBase = Number(base.value);
  const arrayOne = one.value.split(""); //123 se convierte en [1,2,3]
  const arrayTwo = two.value.split(""); //132 se convierte en [1,3,2]
  firstLinkedList.removeAll();
  secondLinkedList.removeAll();
  firstLinkedList.fromArray(arrayOne);
  secondLinkedList.fromArray(arrayTwo);
  let resultArray = sum(inputBase, firstLinkedList, secondLinkedList);
  output.value = resultArray.join("");
}
function validate() {
  const maxDigit = Number(base.value);
  const firstNumber = one.value;
  const secondNumber = two.value;
  const regexPattern = `^[1-${maxDigit - 1}][0-${maxDigit - 1}]*$`;
  const dynamicRegex = new RegExp(regexPattern);

  if (
    dynamicRegex.test(firstNumber) &&
    dynamicRegex.test(secondNumber) === true
  ) {
    print();
    return;
  }
  output.value = "";
}
