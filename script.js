let nomeCarro1 = prompt('Digite o nome do primeiro carro:')
const velocidade1 = prompt(`Digite a velocidade que o primeiro carro está: `)
let nomeCarro2 = prompt('Digite o nome do segundo carro:')
const velocidade2 = prompt(`Digite a velocidade que o segundo carro está: `)

if (velocidade1 > velocidade2) {
    alert(`O ${nomeCarro1} está a ${velocidade1}km/h, e está mais rápido que o ${nomeCarro2}, que está a ${velocidade2}km/h!`)
} else if (velocidade1 < velocidade2) {
    alert(`O ${nomeCarro1} está a ${velocidade1}km/h, e está mais rápido que o ${nomeCarro2}, que está a ${velocidade2}km/h!`)
} else {
    alert(`Tanto ${nomeCarro1} quanto ${nomeCarro2} estão na mesma velocidade de ${velocidade1 || velocidade2}km/h!`)
}