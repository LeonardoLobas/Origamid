function validarSenha(senha) {
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasDigit = /\d/;
    const hasSpecialChar = /[@$!%*?&]/;
    const noSequentialNumbers = /^(?!.*(\d{3,}))(?!.*(?:012|123|234|345|456|567|678|789|890))(?!.*(?:987|876|765|654|543|432|321|210))/;

    if (!minLength.test(senha)) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }
    if (!hasUpperCase.test(senha)) {
        return "A senha deve ter pelo menos uma letra maiúscula.";
    }
    if (!hasLowerCase.test(senha)) {
        return "A senha deve ter pelo menos uma letra minúscula.";
    }
    if (!hasDigit.test(senha)) {
        return "A senha deve ter pelo menos um dígito.";
    }
    if (!hasSpecialChar.test(senha)) {
        return "A senha deve ter pelo menos um caractere especial.";
    }
    if (!noSequentialNumbers.test(senha)) {
        return "A senha não pode conter sequências numéricas de três ou mais dígitos consecutivos.";
    }

    return "Senha válida.";
}



// Testando a função
console.log(validarSenha("Senha@123")); // A senha não pode conter sequências numéricas de três ou mais dígitos consecutivos.
console.log(validarSenha("senha123"));  // A senha deve ter pelo menos uma letra maiúscula.
console.log(validarSenha("SENHA123"));  // A senha deve ter pelo menos uma letra minúscula.
console.log(validarSenha("Senha123"));  // A senha deve ter pelo menos um caractere especial.
console.log(validarSenha("Senha@1A"));  // Senha válida.
