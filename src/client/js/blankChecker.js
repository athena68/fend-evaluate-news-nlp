function checkForBlank(inputText) {
    console.log("::: Running checkForBlank :::", inputText);

    if(inputText == "") {
        alert("The input text can not be blank")
        return false;
    }
    return true;
}

export { checkForBlank }
