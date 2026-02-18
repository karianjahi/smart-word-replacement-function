# 🧠 Smart Word Replacement Function

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen)

A lightweight ✨ JavaScript utility that replaces a word in a string
**while preserving the original word's capitalization style**.

------------------------------------------------------------------------

## 🚀 Features

-   🔤 Smart capitalization handling
-   🧩 Simple and reusable function
-   🧪 Built-in test cases
-   ⚡ Zero dependencies

------------------------------------------------------------------------

## 📦 Implementation

``` js
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
```

------------------------------------------------------------------------

## 🧠 How It Works

1.  Checks whether the first character of the target word is uppercase.
2.  Adjusts the first letter of the replacement word accordingly.
3.  Replaces the word inside the string using `String.replace()`.

------------------------------------------------------------------------

## 🧪 Example Tests

``` js
console.log(myReplace("Let us go to the store", "store", "mall"));
// → "Let us go to the mall"

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// → "He is Sitting on the couch"

console.log(myReplace("His name is Tom", "Tom", "john"));
// → "His name is John"
```

All included tests return ✅ `true`.

------------------------------------------------------------------------

## 📂 Project Structure

    smart-word-replacement-function/
    │
    ├── script.js      # Core implementation
    ├── README.md      # Documentation
    └── .gitignore

------------------------------------------------------------------------

## 📌 Use Cases

-   Text processors ✍️\
-   Search & replace utilities 🔎\
-   NLP preprocessing 🧠\
-   Coding practice exercises 💻

------------------------------------------------------------------------

## ⚠️ Notes

-   Replaces only the **first occurrence** of the word.
-   Matching is **case-sensitive**.
-   Does not use regex global flags.

------------------------------------------------------------------------

## 📝 License

MIT © 2026

------------------------------------------------------------------------

⭐ If you find this useful, consider starring the repository!