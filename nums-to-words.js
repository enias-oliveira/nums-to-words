const unidades = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]
const onzeADezenove = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
const dezenas = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
const centenas = ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]

function numbersToWordsHundred() {

    let output = [...unidades]
    output.push(dezenas[0])
    output = output.concat(onzeADezenove)

    for (let i = 1; i < dezenas.length; i++) {
        let dec = dezenas[i]
        output.push(dec)

        for (let i2 = 0; i2 < unidades.length; i2++) {
            let uni = unidades[i2]
            output.push(`${dec} e ${uni}`)
        }
    }

    return output
}

function numbersToWords() {
    let output = numbersToWordsHundred()
    output.push("cem")

    for (let i=0; i<centenas.length; i++){
        if(i !== 0) {output.push(centenas[i])}

        for (let uni of unidades){
            output.push(`${centenas[i]} e ${uni}`)
        }

        output.push(`${centenas[i]} e ${dezenas[0]}`)

        for (let uni_dec of onzeADezenove){
            output.push(`${centenas[i]} e ${uni_dec}`)
        }

        for (let j=1; j<dezenas.length; j++){
            output.push(`${centenas[i]} e ${dezenas[j]}`)
            for (let uni2 of unidades){
                output.push(`${centenas[i]} e ${dezenas[j]} e ${uni2}`)
            }
        }
    }
    output.push("mil")

    function ArrayDisplay(arr) {
        let newElement = document.createElement("p")
        newElement.textContent = JSON.stringify(arr)
        document.body.appendChild(newElement)
    }

    ArrayDisplay(output)

    return output
}

numbersToWords()


