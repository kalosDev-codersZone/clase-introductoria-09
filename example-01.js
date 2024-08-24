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
  getSize() {
    return this.size;
  }
  remove() {
    let current = this.head; //current guarda el primer nodo
    if (current === null) {
      //si la lista enlaza esta vacia
      return "linkedlist is empty";
    }
    if (current.next === null) {
      //si la enlazada tiene un solo nodo
      this.head = null; //eliminando el primer nodo
      this.size--;
      return current.data;
    }
    while (current.next.next !== null) {
      //si el tercer nodo existe entra al while
      current = current.next; //current guarda el segundo nodo
    } //current finaliza el while guardando el segundo nodo
    let aux = current.next.data; //guarda el valor que contiene el tercer nodo
    current.next = null; //eliminando el tercer nodo
    this.size--;
    return aux;
  }
}
const firstLinkendList = new LinkendList();
console.log(firstLinkendList.add(4)); //el parametro es el valor que va tener el primer nodo
console.log(firstLinkendList.add(7));
console.log(firstLinkendList.add(8));
console.log(firstLinkendList.add(9));
console.log(firstLinkendList.add(3));
console.log(firstLinkendList.getSize());
console.log(firstLinkendList.remove());
console.log(firstLinkendList.remove());
console.log(firstLinkendList.remove());
console.log(firstLinkendList.remove());
console.log(firstLinkendList.getSize());
console.log(firstLinkendList);
