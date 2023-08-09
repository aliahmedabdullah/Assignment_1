function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized shirt with the following message: \"").concat(message, "\""));
}
// Examples:
make_shirt(); // Large shirt with the default message "I love TypeScript"
make_shirt("medium"); // Medium shirt with the default message "I love TypeScript"
make_shirt("small", "Keep calm and code on."); // Custom-sized shirt with a different message
