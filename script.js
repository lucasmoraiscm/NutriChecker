function calcular(){
    let getquantPorçG = document.querySelector('input#quantPorçG')
    let quantPorçG = Number(getquantPorçG.value)

    let getquantPorçML = document.querySelector('input#quantPorçML')
    let quantPorçML = Number(getquantPorçML.value)

    let qtd_calorias = calcular_calorias()
    let resultadoAçuAdi = verificar_acucares_adicionados(quantPorçG, quantPorçML)
    let resultadoGordSat = verificar_gorduras_saturadas(quantPorçG, quantPorçML)
    let resultadoSodio = verificar_sodio(quantPorçG, quantPorçML)

    textoResultado.innerHTML = `<strong>O alimento possui ${qtd_calorias.toFixed(0)} Kcal</strong>`
    textoAçuAdi.innerHTML = `<strong>${resultadoAçuAdi}</strong>`
    textoGordSat.innerHTML = `<strong>${resultadoGordSat}</strong>`
    textoSodio.innerHTML = `<strong>${resultadoSodio}</strong>`
}

function calcular_calorias(){
    let getCarb = document.querySelector('input#quantCarb')
    let quantCarb = Number(getCarb.value)

    let getProt = document.querySelector('input#quantProt')
    let quantProt = Number(getProt.value)

    let getGordTot = document.querySelector('input#quantGordTot')
    let quantGordTot = Number(getGordTot.value)

    return (quantCarb * 4) + (quantGordTot * 9) + (quantProt * 4)
}

function verificar_acucares_adicionados(quantPorçG, quantPorçML){
    let getAçuAdiG = document.querySelector('input#quantAçuAdiG')
    let quantAçuAdiG = Number(getAçuAdiG.value)

    let getAçuAdiML = document.querySelector('input#quantAçuAdiML')
    let quantAçuAdiML = Number(getAçuAdiML.value)

    let limite_acucar_adicionado_g = (15 * quantPorçG) / 100
    let limite_acucar_adicionado_ml = (7.5 * quantPorçML) / 100

    if (quantPorçG > 0 && quantPorçML == 0){
        if (quantAçuAdiG >= limite_acucar_adicionado_g) {
            return 'Alta quantidade de Açúcares Adicionados!'
        }else{
            return 'Quantidade razoável de Açúcares Adicionados'
        }
    }else if (quantPorçG == 0 && quantPorçML > 0){
        if (quantAçuAdiML >= limite_acucar_adicionado_ml) {
            return 'Alta quantidade Açúcares Adicionados!'
        }else{
            return 'Quantidade razoável de Açúcares Adicionados'
        }
    }else{
        return ''
    }
}

function verificar_gorduras_saturadas(quantPorçG, quantPorçML){
    let getGordSatG = document.querySelector('input#quantGordSatG')
    let quantGordSatG = Number(getGordSatG.value)

    let getGordSatML = document.querySelector('input#quantGordSatML')
    let quantGordSatML = Number(getGordSatML.value)

    let limite_gorduras_saturadas_g = (6 * quantPorçG) / 100
    let limite_gorduras_saturadas_ml = (3 * quantPorçML) / 100

    if (quantPorçG > 0 && quantPorçML == 0){
        if (quantGordSatG >= limite_gorduras_saturadas_g) {
            return 'Alta quantidade de Gorduras Saturadas!'
        }else{
            return 'Quantidade razoável de Gorduras Saturadas'
        }
    }else if (quantPorçG == 0 && quantPorçML > 0){
        if (quantGordSatML >= limite_gorduras_saturadas_ml) {
            return 'Alta quantidade Gorduras Saturadas!'
        }else{
            return 'Quantidade razoável de Gorduras Saturadas'
        }
    }else{
        return ''
    }
}

function verificar_sodio(quantPorçG, quantPorçML){
    let getSodioG = document.querySelector('input#quantSodioG')
    let quantSodioG = Number(getSodioG.value)

    let getSodioML = document.querySelector('input#quantSodioML')
    let quantSodioML = Number(getSodioML.value)

    let limite_sodio_g = (600 * quantPorçG) / 100
    let limite_sodio_ml = (300 * quantPorçML) / 100

    if (quantPorçG > 0 && quantPorçML == 0){
        if (quantSodioG >= limite_sodio_g) {
            return 'Alta quantidade de Sódio!'
        }else{
            return 'Quantidade razoável de Sódio'
        }
    }else if (quantPorçG == 0 && quantPorçML > 0){
        if (quantSodioML >= limite_sodio_ml) {
            return 'Alta quantidade Sódio!'
        }else{
            return 'Quantidade razoável de Sódio'
        }
    }else{
        return ''
    }
}
