const {edGalho, edFolha} = require('./arrays');

function juntaListas (lista1, lista2){
    let listafinal =[];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista1[posicaoAtualLista2];
        console.log("lista 1",produtoAtualLista1)
        console.log("lista 2",produtoAtualLista2)


        if (produtoAtualLista1.preco < produtoAtualLista2.preco){
            listafinal[atual] = produtoAtualizadaLista1;
            posicaoAtualLista1++;
        }else {
            listafinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        console.log("Lista Final", listafinal[atual])
        atual++;
    }
    return listafinal;
}
console.log(juntaListas(edGalho,edFolha));
 