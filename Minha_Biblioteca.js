//Deixa tudo em minúsculo 
toLowerCase()

//------------------------------------------------------------------------

//Deixa tudo em maiúsculo 
toUpperCase()

//------------------------------------------------------------------------


//Tratamento de erros

try {

    throw new Error()

} catch (error) {

} finally {}

//------------------------------------------------------------------------

//metodo bubble sort
/*
for  ( var  i  =  0 ;  i  ! =  usuarios . comprimento  -  1 ;  i ++ )  {
    for  ( var  j  =  0 ;  j  ! =  usuarios . comprimento  -  1 ;  j ++ )  {
        if  ( usuarios [ j ] . qtTentativas  >  usuarios [ j  +  1 ] . qtTentativas )  {
            var  aux  =  usuarios [ j ]
            usuarios [ j ]  =  usuarios [ j  +  1 ]
            usuarios [ j  +  1 ]  =  aux ;
        }
    }
}*/

//--------------------------------------------------------------------------


// Gera um número aleatório
Math . floor ( Math . random ( )  *  100  +  1 )

//--------------------------------------------------------------------------

//Coloca o numero em formato de dinheiro

.toLocaleString('pt-br',{style:'currency',currency: 'BRL'})