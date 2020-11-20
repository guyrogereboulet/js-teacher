// Astrazione

function User (name, altezza) {
    this.name = name;
    this.altezza = altezza;
    this.pesoIdeale = () => {
        return `Peso ideale ${this.CalcolaPesoIdeale()}`;
        

    }


}




