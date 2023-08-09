interface Car {
    manufacturer: string,
    model: string

}

function carInfo(car: Car, ...options: object[]) {
    return { car, options }
}

console.log(carInfo({ manufacturer: 'Honda', model: 'Civic' }, { color: 'white', make: '2023', variant: "Vti Oriel", condition: "New" }))
