import { colors } from './constants';

const generateSecretCode = (): string[] => {
  const codeLength = 4;
  const code = [];
  for (let i = 0; i < codeLength; i++) {
    code.push(colors[Math.floor(Math.random() * colors.length)]);
  }
  console.log(code, 'secret code');
  return code;
};

export default generateSecretCode;
