function validate() {
    if (document.myForm.Name.value == "") {
        alert("please provide your name");
        document.myForm.Name.focus();
    }
}