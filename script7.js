function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbol){
    const lowercasechar = "qwertyuiopasdfghjklzxcvbnm";
    const uppercasechar = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const numberchar = "0123456789";
    const symbolchar = "!@#$%^&*/()_-+="

    let allowedchars = "";
    let passowrd = "";
    if(passwordLength <=0){
        console.log(`password length must be greater than 12`);
    }
    allowedchars +=includeLowercase ? lowercasechar : "";
    allowedchars +=includeUppercase ? uppercasechar : "";
    allowedchars +=includeNumber ? numberchar : "";
    allowedchars +=includeSymbol ? symbolchar : "";
    console.log(allowedchars);
    return '';
}
const passwordLength = 0;
const includeLowercase = false;
const includeUppercase = true;
const includeSymbol = false;
const includeNumber = true;

const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeSymbol,includeNumber)

console.log(`generted passowrd is ${password}`);