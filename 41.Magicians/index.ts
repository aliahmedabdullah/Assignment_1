const magicians: string[] = ["Ali", "Ahmed", "Abdullah", "Usman"]

function show_magicians(magiciansNames: string[]): void {
    for (const magician of magiciansNames) {
        console.log(magician);
    }
}

show_magicians(magicians)