function validate_passwords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8)
    {
        alert("The length of the first password is less than 8 characters.")
    }
    else if (password2.length < 8)
    {
        alert("The length of the first password is less than 8 characters.")
    }
    else if (password1 != password2)
    {
        alert("First password and second password do not match.")
    }
    else
    {
        alert("Passwords are valid and match.")
    }
}