# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js
vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
}
fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

# var 
* é global e poderá funcionar fora de um escopo de bloco
```js
console.log('> existe x antes do bloco? ', x)
{
    var x = 0
}
console.log('> existe x antes do bloco? ', x)
```

# let e const 
* const e let são locais e só funcionam no esocpo onde foi criada
```js
console.log('> existe x antes do bloco? ', y)
{
    let y = 0
}
console.log('> existe x antes do bloco? ', y)
```