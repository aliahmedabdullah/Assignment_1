function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the following message: "${message}"`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "This is not the desired one");
