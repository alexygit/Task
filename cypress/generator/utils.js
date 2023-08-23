// cypress/generator/utils.js
const timestamp = new Date().getTime();

export function generateRandomEmail() {
  return `user${timestamp}@example.com`;
}

// export function generateRandomPassword() {
//   return `your_random_password${timestamp}`;
// }
