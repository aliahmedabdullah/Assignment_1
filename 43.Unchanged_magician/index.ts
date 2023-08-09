function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];

  for (const magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }

  return greatMagicians;
}

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}


const magicianNames: string[] = ["Ali", "Ahmed", "Abdullah", "Usman"];
const greatMagicianNames: string[] = make_great([...magicianNames]);



show_magicians(magicianNames);
console.log("=======================================================");

show_magicians(greatMagicianNames);
