


function getAnno() {

    let data = document.getElementById("data");
    let dataSelect = new Date(data.value);
    let anno = dataSelect.getFullYear()
    anno = anno.toString().substring(2);
    return anno
    console.log(anno);
}


function getMese() {
    let data = document.getElementById("data")
    let meseSelect = new Date(data.value);
    let mese = meseSelect.getMonth() + 1;
    const codiceMese = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"]
    switch (mese) {
        case 1:
            mese = codiceMese[0]
            console.log(mese);
            break;
        case 2:
            mese = codiceMese[1]
            console.log(mese);
            break;
        case 3:
            mese = codiceMese[2]
            console.log(mese);
            break;
        case 4:
            mese = codiceMese[3]
            console.log(mese);
            break;
        case 5:
            mese = codiceMese[4]
            console.log(mese);
            break;
        case 6:
            mese = codiceMese[5]
            console.log(mese);
            break;
        case 7:
            mese = codiceMese[6]
            console.log(mese);
            break;
        case 8:
            mese = codiceMese[7]
            console.log(mese);
            break;
        case 9:
            mese = codiceMese[8]
            console.log(mese);
            break;
        case 10:
            mese = codiceMese[9]
            console.log(mese);
            break;
        case 11:
            mese = codiceMese[10]
            console.log(mese);
            break;
        case 12:
            mese = codiceMese[11]
            console.log(mese);
            break;
        case 1:
            mese = codiceMese[12]
            console.log(mese);
            break;
        default:
            break;
    }
    return mese
}
function getAnno() {

    let data = document.getElementById("data");
    let dataSelect = new Date(data.value);
    let anno = dataSelect.getFullYear()
    anno = anno.toString().substring(2);
    return anno
    console.log(anno);
}
function getGiorno() {
    let data = document.getElementById("data");
    let sesso = "M"
    const giornoNascita = new Date(data.value);
    // console.log(giornoNascita);
    let giornoMese = giornoNascita.getDate();
    // console.log(giornoMese);

    if (sesso === "M") {
        if (giornoMese < 10) {
            giorno = "0" + giornoMese
            console.log(giorno);

        } else {
            giorno = giornoMese;
            console.log(giorno);
        }

    } else {
        giorno = giornoMese + 40
        console.log(giorno);
    }
    return giorno;

}
function lunghezzaNome() {


}

function getNome(nome) {



    let nomeToUpper = nome.toLocaleUpperCase()
    let splitNome = nomeToUpper.split("")




    //    filtra le vocali
    let consonanti = splitNome.filter(function (splitNome) {
        return !"AEIOU".includes(splitNome)

    })
    let treConsonanti = consonanti.filter((carattere) => {
        return "ABCDEFGHILMANOPQRSTUVZJWXY".includes(carattere)

           
    })
    if (treConsonanti.length === 3) {
        treConsonanti = treConsonanti.slice(0,3).join("")

    }else{
        treConsonanti = treConsonanti.toSpliced(1, 1).slice(0, 3).join("")
    }

    console.log(treConsonanti);
    return treConsonanti


}
function getCognome(cognome) {



    let nomeToUpper = cognome.toLocaleUpperCase()
    let splitNome = nomeToUpper.split("")
    let vocali = splitNome.filter(function (splitNome) {
        return "AEIOU".includes(splitNome)

    })

    //    filtra le vocali
    let consonanti = splitNome.filter(function (splitNome) {
        return !"AEIOU".includes(splitNome)

    })
    let treConsonanti = consonanti.filter((carattere) => {
        return "ABCDEFGHILMANOPQRSTUVZJWXY".includes(carattere)

    }).slice(0, 3).join("")


    if (treConsonanti < 3) {
        treConsonanti += vocali[0]

    }
    console.log(treConsonanti);
    console.log(vocali);
    return treConsonanti;

}

function genera() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let codFiscNome = getNome(nome);
    let codFiscCognome = getCognome(cognome);

    // let CodFiscGiorno = getGiorno();
    let codfFiscAnno = getAnno();
    let codFiscMese = getMese();
    let codfiscgiorno = getGiorno();
    let codiceFiscale = codFiscCognome + codFiscNome + codfFiscAnno + codFiscMese + codfiscgiorno;

    document.getElementById('CF').innerHTML = codiceFiscale;
}

