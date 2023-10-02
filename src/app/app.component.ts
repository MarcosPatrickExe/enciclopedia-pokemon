import { 
    AfterContentInit, 
    Component, 
    OnChanges, 
    OnDestroy, 
    OnInit, 
    DoCheck, 
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked,
    ViewChild, 
    ElementRef, 
    TemplateRef} from '@angular/core';
// importando o decorator "@Component"

 
// O decorator "@Component" eh responsavel por fornecer informacoes 
// sobre o componente para que o compilador possa ler
@Component({
    selector: 'app-root', // "app-root" eh um seletor que faz referebcia a tag <app-root> la no "index.html"
    templateUrl: './app.component.html', // aponta para o arquivo html do componente
    styleUrls: ['./app.component.scss'] // aponta para o arquivo de estilo do componente
})
export class AppComponent implements OnInit, OnChanges, // DoCheck,
                         AfterContentInit, AfterContentChecked,
                        AfterViewInit, AfterViewChecked, OnDestroy {

    cursos: string[]; //declarando o atributo
    pokemonUrlImage: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png";
    messageOfViewPokemonComponente :string ="";
    typeSelected ?: string;

    //declarando e inicializando atributo
    title :string = "introducao-angular";
    title2 : string = 'Esse eh um titulo escrito da classe AppComponent'; // texto que ira aparecer na tela inicial
    nomeSite: string = 'http://loiane.training';  //declarando e inicializando atributo
    public closePokeView :boolean= false;

   
    @ViewChild('elementRefVar') //fazendo referencia a variavel que armazena a referencia do elemento 'input' dentro do DOM
    valueInputField :ElementRef | null = null;

/*
    @ViewChild('templateRef')
    templateReference :TemplateRef<string> | null = null;
*/

    constructor(){
        this.cursos = ['Java', 'Python' ,'PHP', 'JavaScript'];
    }

    // alterando a imagem do pokemon de acordo com o numero da pokédex q eh digitado
    public changePokemon( pokemonPokedexNumber :string) :void{
        this.pokemonUrlImage= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemonPokedexNumber }.png`;
    }

    // esse metodo so eh executado quando o componente seletor "view-pokemon" emite um evento do tipo "imgHover"
    public pokemonFocused( evento : any ) :void{
        this.messageOfViewPokemonComponente = (Object.getOwnPropertyNames(evento).length ==1) ? evento.message : evento;
    }

   
    ngOnInit() :void{
        this.log("ngOnInt"); // ngOnInit eh mais indicado para componente sem input properties
    }

    ngOnChanges() :void{ // ngOnChanges eh mais indicado pra quando se usar input properties/property bind [property]=""
        this.log("onChanges");
    }
/*
    ngDoCheck() :void{
        this.log("ngDoCheck");
    }
*/
    ngAfterContentChecked() :void{
        this.log("ngAfterContentChecked");
    }

    ngAfterViewChecked() :void{
        this.log("ngAfterViewChecked");
        console.log("value of input: "+this.valueInputField?.nativeElement.value);
    }

    ngAfterContentInit() :void{
        this.log("ngAfterContentInit");
    }    

    ngOnDestroy() :void{
        this.log("ngOnDestroy");
    }

    ngAfterViewInit() :void {
        this.log("ngAfterViewInit");
        console.log("no elemento atual chamado ngAfterViewInit");
    }

    private log(hook: string) :void {
        console.log(hook);
    }
}
