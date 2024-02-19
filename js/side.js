function GetValues(){
    let userInput = document.getElementById("userInput").value;
    let word = userInput.trim();

    if(!ValidateInput(word)){
        alert("Please, enter a word or sentence");
        return;
    }

    document.getElementById("resultHeader").classList.remove("invisible");
    let result = document.getElementById("textResult");

    if(IsPalindrome(word)){
        result.innerHTML = `Seccess: <span class="fw-bold text-danger">${word}</span> is a Palindrome!`;
        return;    
    }

    result.innerHTML = `Fail: <span class="fw-bold text-danger">${word}</span> is not a Palindrome!`;

}

function ValidateInput(word){
    if(word.length === 0) return false;
    return true;
}

function IsPalindrome(word){
    if(word.length == 1) return true;
    let reversedWord = ReverseStringRecursively(word);
    return reversedWord == word;

}

function ReverseStringRecursively(word){
    if(word.length == 1) return word;
    return  ReverseStringRecursively(word.substring(1)) + word[0];
}

