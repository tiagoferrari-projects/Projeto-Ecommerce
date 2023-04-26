const SendVerifier = (event) => {
    let input = Array.from(document.querySelectorAll('input'));
    let verifier = Array.from(document.querySelectorAll('.verifier'));
    let verifierSend = document.querySelector('.verifierSend');
    let form = document.querySelector('form');
    let check = true;

    event.preventDefault();

    input.some((element, index) => {
        if (element.value.length === 0) {
            verifier[index].innerHTML = "*Campo Obrigatório*";
            verifierSend.innerHTML = "Campos obrigatórios não preenchidos!";

            verifier[index].style.display = 'block';
            verifierSend.style.display = 'block';
            verifierSend.style.color = 'red';
            check = false;
        }
    })

    if (check) {
        verifierSend.style.display = 'block';
        verifierSend.style.color = "green";
        verifierSend.innerHTML = "Sucesso!";
        form.reset();
    }
    else {
        verifierSend.innerHTML = "Campos obrigatórios não preenchidos!";
    }
}

export default SendVerifier