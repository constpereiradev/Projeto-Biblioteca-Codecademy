class Media {

    constructor(titulo){

        this._titulo = titulo;
        this._avaliacoes = [];
        this._saiu = false;

    }

    //getters
    get title(){
        return this._titulo;
    }

    get avaliacoes(){
        return this._avaliacoes;
    }

    get saiu (){
        return this._saiu;
    }
    
    //Alternar estádo de check-out

    alterarEstadoCheckOut(){

        this._saiu = !this.saiu; //o contrário de saiu no constructor
    }

    //Adicionando avaliação ate 5

    addAvaliacao(nota){

        if(nota <= 5){

            this._avaliacoes.push(nota);
            console.log(`Nota ${nota} adicionada com sucesso.`);

        } else {

            console.log('A nota não pode ser maior que 5.');

        }

    }
    
    //somando todos os numeros num array e dividindo pelo tamanho do array

    totalAvaliacoes(){

        soma = this._avaliacoes.reduce((acumulador, resultado) => 
        acumulador + this.avaliacoes, 0)
            
            return Math.floor(soma / this._avaliacoes.length)
    }

    set saiu(checkIn){
        this._saiu = checkIn;
    }
}

    //class Livro

class Livro extends Media{
    constructor(autor, titulo, paginas, genero){
        super(titulo);

        this._autor = autor;
        this._titulo = titulo;
        this._paginas = paginas;
        this._genero = genero;
    }

    get autor(){
        return this._autor;
    }

    get titulo(){
        return this._titulo;
    }

    get paginas(){
        return this._paginas;
    }

    get genero(){
        return this._genero;
    }
}

//class Filme

class Filme extends Media{
    constructor(diretor, titulo, tempo, elenco){
    super(titulo);

    this._diretor = diretor;
    this._titulo = titulo;
    this._tempo = tempo;
    this._elenco = elenco;

    }

    get diretor(){
        return this._diretor;
    }

    get tempo(){
        return this._tempo;
    }

    get elenco(){
        return this._elenco;
    }
        
}

//class CD

class CD extends Media{
    constructor(artista, titulo, musicas){
        super(titulo);
        this._artista = artista;
        this._titulo = titulo;
        this._musicas = []
    }

    get artista(){
        return this._artista;
    }

    get musicas(){
        return this._musicas;
    }

    //pegando um array aleatorio de todas as musicas

    arrayMusicas(){

        return this._musicas.sort(() => Math.random() - 0.5);

        /*
            Método .sort():

            Ordena os elementos de uma array e retorna o array.
            A ordenação não é necessariamente estável. 
            A ordem padrão é de acordo com a pontuação de código unicode.


            arr.sort([funcaoDeComparacao]) -> funcaoDeComparacao opcional.
            -> define a ordenação. se omitido, o array será ordenado
            de acorodo com a pontuação de código Unicode.

            Isto é: isso retornará o array em outra ordem.

            Ex:
            var musicas = ['musica 1', 'musica 2', 'musica 3', 'musica 4', 'musica 5'];

            console.log(musicas.sort(() => Math.random() - 0.5));

            Se fosse 1 ao invés de 0.5, o array seria retornado ao contrário.
        
        */ 

    }
}

//Instanciando Livro

const cleanCode = new Livro('Robert C. Martin', 
'Código Limpo: Hablidades práticas do Agile Software',
425, 'Tecnologia');
console.log(cleanCode);

cleanCode.alterarEstadoCheckOut();
console.log(cleanCode.saiu); //true, pois no começo está definidio como false

//Adicionando avaliacoes
cleanCode.addAvaliacao(5); //Mensagem de sucesso
cleanCode.addAvaliacao(6); //Mensagem de erro



//Instanciando Filme
const homemAranha = new Filme('Jon Watts', 'Spider-Man: Homecoming', '2h 13m',
['Tom Holland', 'Michael keaton', 'Zendaya', 'Laura Harrier']);
console.log(homemAranha);


homemAranha.alterarEstadoCheckOut();
console.log(cleanCode.saiu); //true

homemAranha.addAvaliacao(5);



const futureNostalgia = new CD('Dua Lipa', 'Future Nostalgia',
['Future Nostalgia', 'Dont Start Now', 'Cool', 'Physical', 'Levitating',
'Pretty Please', 'Hallucinate', 'Love Again', 'Break My Heart',
'Good in Bed', 'Boys Will Be Boys']);
console.log(futureNostalgia);

futureNostalgia.alterarEstadoCheckOut();
console.log(futureNostalgia.saiu);

futureNostalgia.addAvaliacao(5);

futureNostalgia.arrayMusicas();
