function calcularCalorias() {
    const getCarboidratos = document.querySelector('input#quantCarboidratos')
    const quantCarboidratos = Number(getCarboidratos.value)

    const getProteinas = document.querySelector('input#quantProteinas')
    const quantProteinas = Number(getProteinas.value)

    const getGordTotais = document.querySelector('input#quantGordTotais')
    const quantGordTotais = Number(getGordTotais.value)

    const quantCalorias = (quantCarboidratos * 4) + (quantGordTotais * 9) + (quantProteinas * 4)
    resultadoCalorias.innerHTML = `<strong>O alimento possui ${quantCalorias.toFixed(0)} Kcal</strong>`
}


function calcularTeorNutrientes() {
    const getQuantPorcao = document.querySelector('input#quantPorcao')
    const quantPorcao = Number(getQuantPorcao.value)

    if (quantPorcao > 0) {
        const resultadoAcucaresAdicionados = verificarAcucaresAdicionados(quantPorcao)
        const resultadoGordurasSataturadas = verificarGordurasSaturadas(quantPorcao)
        const resultadoSodio = verificarSodio(quantPorcao)

        resultadoTeorAcucaresAdicionados.innerHTML = `<strong>${resultadoAcucaresAdicionados}</strong>`
        resultadoTeorGordurasSaturadas.innerHTML = `<strong>${resultadoGordurasSataturadas}</strong>`
        resultadoTeorSodio.innerHTML = `<strong>${resultadoSodio}</strong>`
    } else {
        resultadoTeorAcucaresAdicionados.innerHTML = `<strong>Quantidade da Porção inválida</strong>`
    }
}


function verificarAcucaresAdicionados(quantPorcao) {
    const getAcucaresAdicionados = document.querySelector('input#quantAcucaresAdicionados')
    const quantAcucaresAdicionados = Number(getAcucaresAdicionados.value)

    const porcaoG = document.querySelector('input#porcaoSolido')
    const porcaoMl = document.querySelector('input#porcaoLiquido')

    if (porcaoG.checked) {
        const limiteAcucaresAdicionadosG = (15 * quantPorcao) / 100

        if (quantAcucaresAdicionados >= limiteAcucaresAdicionadosG) {
            return 'Alta quantidade de Açúcares Adicionados!'
        } else {
            return 'Quantidade razoável de Açúcares Adicionados'
        }
    } else if (porcaoMl.checked) {
        const limiteAcucaresAdicionadosMl = (7.5 * quantPorcao) / 100

        if (quantAcucaresAdicionados >= limiteAcucaresAdicionadosMl) {
            return 'Alta quantidade de Açúcares Adicionados!'
        } else {
            return 'Quantidade razoável de Açúcares Adicionados'
        }
    } else {
        return "Nenhum tipo de porção foi selecionado"
    }
}


function verificarGordurasSaturadas(quantPorcao) {
    const getGordurasSaturadas = document.querySelector('input#quantGordurasSaturadas')
    const quantGordurasSaturadas = Number(getGordurasSaturadas.value)

    const porcaoG = document.querySelector('input#porcaoSolido')
    const porcaoMl = document.querySelector('input#porcaoLiquido')

    if (porcaoG.checked) {
        const limiteGordurasSaturadasG = (6 * quantPorcao) / 100

        if (quantGordurasSaturadas >= limiteGordurasSaturadasG) {
            return 'Alta quantidade de Gorduras Saturadas!'
        } else {
            return 'Quantidade razoável de Gorduras Saturadas'
        }
    } else if (porcaoMl.checked) {
        const limiteGordurasSaturadasMl = (3 * quantPorcao) / 100

        if (quantGordurasSaturadas >= limiteGordurasSaturadasMl) {
            return 'Alta quantidade de Gorduras Saturadas!'
        } else {
            return 'Quantidade razoável de Gorduras Saturadas'
        }
    } else {
        return "Nenhum tipo de porção foi selecionado"
    }
}


function verificarSodio(quantPorcao) {
    const getSodio = document.querySelector('input#quantSodio')
    const quantSodio = Number(getSodio.value)

    const porcaoG = document.querySelector('input#porcaoSolido')
    const porcaoMl = document.querySelector('input#porcaoLiquido')

    if (porcaoG.checked) {
        const limiteSodioG = (600 * quantPorcao) / 100

        if (quantSodio >= limiteSodioG) {
            return 'Alta quantidade de Sódio!'
        } else {
            return 'Quantidade razoável de Sódio'
        }
    } else if (porcaoMl.checked) {
        const limiteSodioMl = (300 * quantPorcao) / 100

        if (quantSodio >= limiteSodioMl) {
            return 'Alta quantidade de Sódio!'
        } else {
            return 'Quantidade razoável de Sódio'
        }
    } else {
        return "Nenhum tipo de porção foi selecionado"
    }
}
