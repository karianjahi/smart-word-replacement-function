const myReplace = (aString, aWord, replacerWord) => {
    let splits = replacerWord.split("").slice(1);
    if (isFirstCharacterUpper(aWord)) {
        splits.unshift(replacerWord[0].toUpperCase());
        replacerWord = splits.join("");
    } else {
        splits.unshift(replacerWord[0].toLowerCase());
        replacerWord = splits.join("");
    }
    return aString.replace(aWord, replacerWord);
};

const isFirstCharacterUpper = (aWord) => {
    return /[A-Z]/.test(aWord[0]);
};

// Tests
console.log(myReplace("Let us go to the store", "store", "mall") === "Let us go to the mall"); // true
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting") === "He is Sitting on the couch");// true
console.log(myReplace("I think we should look up there", "up", "Down") === "I think we should look down there");// true
console.log(myReplace("This has a spellngi error", "spellngi", "spelling") === "This has a spelling error");// true
console.log(myReplace("His name is Tom", "Tom", "john") === "His name is John");// true
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms") === "Let us get back to more Algorithms");// true