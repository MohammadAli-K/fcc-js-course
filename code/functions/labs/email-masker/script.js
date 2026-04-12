function maskEmail(email) {
  let userName = email.split('@')[0];
  let domainName = email.split('@')[1];
  let firstChar = userName.charAt(0);
  let lastChar = userName.charAt(userName.length - 1);

  let maskLetter = '*';
  let totalChar = maskLetter.repeat(userName.length - 2);

  return firstChar + totalChar + lastChar + '@' + domainName;
}

let email = 'apple.pie@example.com';
console.log(maskEmail(email));
