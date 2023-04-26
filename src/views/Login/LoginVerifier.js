const LoginVerifier = (element) => {
    let verifierSend = document.querySelector('.verifierSend');

    if (element.target.value.trim().length === 0) {
        element.target.style.borderColor = "red";

        verifierSend.style.color = "red";
        verifierSend.innerHTML = "Campos obrigatórios não preenchidos!"
        verifierSend.style.display = "block";
        element.target.parentElement.lastElementChild.style.display = 'block';
        element.target.parentElement.lastElementChild.innerHTML = '*Campo obrigatório!';

    } else {
        element.target.style.borderColor = "#7A7A7A";
        verifierSend.style.display = "none";
        console.log(element.target.parentElement.lastElementChild)
        element.target.parentElement.lastElementChild.style.display = 'none';
    }
}

export default LoginVerifier;