let body                        = document.querySelector ('body')
let main                        = document.createElement ('main')
let header                      = document.createElement ('nav')
let logo                        = document.createElement ('p')
let loja                        = document.createElement ('div')
let secaoCompra                 = document.createElement ('section')

let secaoCarrinho               = document.createElement ('section')

let cardsProdutos               = document.createElement ('ul')

// carrinho
let topo                        = document.createElement ('div')
let infoNome                    = document.createElement ('p')
let infoPreco                   = document.createElement ('p')
let itensCarrinho               = document.createElement ('ul')

let soma                        = document.createElement ('div')
let somaInfo                    = document.createElement ('p')
let somaValor                   = document.createElement ('p')
let finalizar                   = document.createElement ('button')



header.className            = 'header'
logo.innerText              = 'LOJA'
secaoCompra.className       = 'listaProdutos'
secaoCarrinho.className     = 'listaCompras'
loja.className              = 'loja'
cardsProdutos.className     = 'cards'

// carrinho
topo.className              = 'info'
infoNome.innerText          = 'ITEM'
infoPreco.innerText         = 'VALOR'
soma.className              = 'info'
somaInfo.innerText          = 'TOTAL'

finalizar.innerText         = 'Finalizar compra'

body.append(main)
main.append(header, loja)
header.append(logo)
loja.append(secaoCompra, secaoCarrinho)
secaoCompra.append(cardsProdutos)

// carrinho
secaoCarrinho.append(topo, itensCarrinho, soma, finalizar)
topo.append(infoNome, infoPreco)
// itensCarrinho.append(itemComprado)
soma.append(somaInfo, somaValor)


function listandoMercadoria(valor){
for(let i = 0; i < valor.length; i++){
    produto = valor[i]

    card = montarCard(produto)
    cardsProdutos.append(card)
}
}
listandoMercadoria(mercadoria)

function montarCard(valor){
    id                      = valor.id
    nome                    = valor.nome
    preco                   = valor.preco

    li                      = document.createElement ('li')
    img                     = document.createElement ('img')
    produtoText             = document.createElement ('div')
    produtoNome             = document.createElement ('h2')
    produtoComprar          = document.createElement ('button')

    img.src                 = './img/no-image.png'
    img.alt                 = nome
    produtoNome.innerText   = nome
    produtoComprar.innerText = preco 
    produtoComprar.id       = id

    li.append(img, produtoText)
    produtoText.append(produtoNome, produtoComprar)

    return li
}

function ListaDeCompra(valor){
itensCarrinho.innerText = "" 
for(let i = 0; i < carrinhoDeCompra.length; i++){
let item = carrinhoDeCompra[i]

itemComprado = listarCompra(item)
itensCarrinho.append(itemComprado)

}
somandoValor(valor)
}
console.log(ListaDeCompra(mercadoria))

function listarCompra (valor){
    itemId                  = valor.id
    itemNome                = valor.nome
    itemValor               = valor.preco
 
    let itemI                       = document.createElement ('li')
    let itemX                       = document.createElement ('p')
    let itemY                       = document.createElement ('p')
    
    itemX.innerText             = itemNome
    itemY.innerText             = `R$ ${itemValor}`

    itemI.append(itemX, itemY)

    return itemI
}

// ADICIONANDO ITENS AO CARRINHO

let click           = document.querySelector('.cards')

click.addEventListener('click', enviarCarrinho)

function enviarCarrinho(event){
    let clickOrigem = event.target
    if(clickOrigem.tagName == "BUTTON"){

        btnId = clickOrigem.id

        let produtoEscolhido = mercadoria.find(function(produtoEscolhido){
            if(produtoEscolhido.id == btnId){
                return produtoEscolhido
            }
        })
        levarCarrinho(produtoEscolhido)
        // console.log(clickOrigem)
    }
}

function levarCarrinho(valor){
    if(valor !== undefined){
        carrinhoDeCompra.push(valor)
        ListaDeCompra(carrinhoDeCompra)
        // listandoCompra(carrinhoDeCompra)
        // carrinho.splice([i])
    }
    
}

function somandoValor(valor){
    // somaValor.innerText         = 'R$ 00,00'
    let valorDaCompra = 0
    for(let i = 0; i < carrinhoDeCompra.length; i++){
        numero = valor[i].preco
        valorDaCompra +=  Number.parseFloat(numero)
        // Number.parseFloat(numero)
        console.log(numero)
    }
    somaValor.innerText = `R$ ${valorDaCompra}`.replace(".",",")
    // console.log(valorDaCompra)
    // console.log(numero)
    // console.log(carrinhoDeCompra[0].preco)
}



// function somando(valor){
//     valorTotal = document.querySelector('.valor')
//     let precoTotal = 0
//     // let precoString = precoTotal.toString()
//     for(let x = 0; x < valor.length; x++){
//         numero = valor[x].preco
//         precoTotal += Number(numero)
//     }
//     valorTotal.innerText = `R$ ${precoTotal}`.replace(".",",")

// }
