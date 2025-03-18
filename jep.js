/* jep.js - JavaScript Email Protection (JEP) */

function jep_link(domain, user) {
    // Create email string
    let email = `${user}@${domain}`;
    
    // Obfuscate each character using HTML entity codes
    let encodedEmail = "";
    for (let i = 0; i < email.length; i++) {
        encodedEmail += `&#${email.charCodeAt(i)};`;
    }

    // Insert the obfuscated email link into the DOM
    document.write(`<a href="mailto:${email}">${encodedEmail}</a>`);
}
