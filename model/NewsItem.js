class NewsItem {
    constructor(props){
        this.titulo = props.titulo;
        this.autores = props.autores;
        this.site = props.site;
        this.data = props.data;
    }
    get titulo(){
        return this.titulo;
    }

    get autores(){
        return this.autores;
    }

    get site(){
        return this.site;
    }


    get data(){
        return this.data
    }
}