interface person{
    name:string
    age:number
    gender:string // optional property, can be undefined or null.
}

const students: person[]=[
    {name:"Ali",age:20,gender:"M"},
    {name:"Ahmed",age:21,gender:"M"},
    {name:"Abdullah",age:22,gender:"M"},
]

console.log(students)