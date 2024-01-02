function calcular() {
    var getCarb = document.querySelector('input#quantCarb')
    var quantCarb = Number(getCarb.value)

    var getProt = document.querySelector('input#quantProt')
    var quantProt = Number(getProt.value)

    var getGordTot = document.querySelector('input#quantGordTot')
    var quantGordTot = Number(getGordTot.value)

    var getAçuAdiG = document.querySelector('input#quantAçuAdiG')
    var quantAçuAdiG = Number(getAçuAdiG.value)

    var getAçuAdiML = document.querySelector('input#quantAçuAdiML')
    var quantAçuAdiML = Number(getAçuAdiML.value)

    var getGordSatG = document.querySelector('input#quantGordSatG')
    var quantGordSatG = Number(getGordSatG.value)

    var getGordSatML = document.querySelector('input#quantGordSatML')
    var quantGordSatML = Number(getGordSatML.value)

    var getSodioG = document.querySelector('input#quantSodioG')
    var quantSodioG = Number(getSodioG.value)

    var getSodioML = document.querySelector('input#quantSodioML')
    var quantSodioML = Number(getSodioML.value)

    var getquantPorçG = document.querySelector('input#quantPorçG')
    var quantPorçG = Number(getquantPorçG.value)

    var getquantPorçML = document.querySelector('input#quantPorçML')
    var quantPorçML = Number(getquantPorçML.value)

    var cal = ((quantCarb*4)+(quantGordTot*9)+(quantProt*4))

    var valorAçuAdiG = ((15*quantPorçG) / 100)
    var valorAçuAdiML = ((7.5*quantPorçML) / 100)

    var valorGordSatG = ((6*quantPorçG) / 100)
    var valorGordSatML = ((3*quantPorçML) / 100)

    var valorSodioG = ((600*quantPorçG) / 100)
    var valorSodioML = ((300*quantPorçML) / 100)

    textoResultado.innerHTML = `<strong>O alimento possui ${cal.toFixed(0)} Kcal</strong>`

    if (quantPorçG != 0 && quantPorçML != 0) {
        textoAçuAdi.innerHTML = `<strong>Informe somente uma porção!</strong>`
    } else {
        if (quantAçuAdiG >= valorAçuAdiG && quantAçuAdiG != 0) {
            textoAçuAdi.innerHTML = `<strong>Alta quantidade de Açúcares Adicionados!</strong>`
        } else if (quantAçuAdiG < valorAçuAdiG && quantAçuAdiG != 0) {
            textoAçuAdi.innerHTML = `<strong>Quantidade razoável de Açúcares Adicionados</strong>`
        } else if (quantAçuAdiG == 0 && quantAçuAdiML != 0) {
            if (quantAçuAdiML >= valorAçuAdiML && quantAçuAdiML != 0) {
                textoAçuAdi.innerHTML = `<strong>Alta quantidade Açúcares Adicionados!</strong>`
            } else if (quantAçuAdiML < valorAçuAdiML && quantAçuAdiML != 0) {
                textoAçuAdi.innerHTML = `<strong>Quantidade razoável de Açúcares Adicionados</strong>`
            } else {
                textoAçuAdi.innerHTML = ``
            }
        } else {
            textoAçuAdi.innerHTML = ``
        }

        if (quantGordSatG >= valorGordSatG && quantGordSatG != 0) {
            textoGordSat.innerHTML = `<strong>Alta quantidade de Gorduras Saturadas!</strong>`
        } else if (quantGordSatG < valorGordSatG && quantGordSatG != 0) {
            textoGordSat.innerHTML = `<strong>Quantidade razoável de Gorduras Saturadas</strong>`
        } else if (quantGordSatG == 0 && quantGordSatML != 0) {
            if (quantGordSatML >= valorGordSatML && quantGordSatML != 0) {
                textoGordSat.innerHTML = `<strong>Alta quantidade de Gorduras Saturadas!</strong>`
            } else if (quantGordSatML < valorGordSatML && quantGordSatML != 0) {
                textoGordSat.innerHTML = `<strong>Quantidade razoável de Gorduras Saturadas</strong>`
            } else {
                textoGordSat.innerHTML = ``
            }
        }else {
            textoGordSat.innerHTML = ``
        }    

        if (quantSodioG >= valorSodioG && quantSodioG != 0) {
            textoSodio.innerHTML = `<strong>Alta quantidade de Sódio!</strong>`
        } else if (quantSodioG < valorSodioG && quantSodioG != 0) {
            textoSodio.innerHTML = `<strong>Quantidade razoável de Sódio</strong>`
        } else if (quantSodioG == 0 && quantSodioML != 0) {
            if (quantSodioML >= valorSodioML && quantSodioML != 0) {
                textoSodio.innerHTML = `<strong> Alta quantidade de Sódio!</strong>`
            } else if (quantSodioML < valorSodioML && quantSodioML != 0) {
                textoSodio.innerHTML = `<strong>Quantidade razoável de Sódio</strong>`
            } else {
                textoSodio.innerHTML = ``
            }
        }else {
            textoSodio.innerHTML = ``
        }
    }
}
