// password and passConfirm

function validatePassword()
{
    let pass1 = document.getElementById("pass");
    let pass2 = document.getElementById("passConfirm");

    if(pass1.value !== pass2.value)
    {
        let warning = document.createElement("p");
        pass1.setCustomValidity("Passwords do not match");
        pass2.setCustomValidity("Passwords do not match");
        return false;
    }
    else
    {
        pass1.setCustomValidity("");
        pass2.setCustomValidity("");
        return true;
    }
}