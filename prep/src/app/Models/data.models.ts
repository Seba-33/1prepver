export class Dati {
    data : string
    ora : string
    nome : string
    cognome : string
    indirizzo : string
    telefono : string
    email : string

    constructor(data : string, ora : string, nome : string, cognome : string, indirizzo : string, telefono : string, email : string){
        this.data = data
        this.ora = ora
        this.nome = nome
        this.cognome = cognome
        this.indirizzo = indirizzo
        this.telefono = telefono
        this.email = email
    }
}