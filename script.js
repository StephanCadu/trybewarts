const emailInput = document.querySelector('#email-input');
const passInput = document.querySelector('#pass-input');
const loginBtn = document.querySelector('#login-button');

// Requisito 3:

// Cria consts para efetuar o teste

const emailTest = 'tryber@teste.com';
const passTest = '123456';

// Cria função que verifica o valor do input e retorna um alert

function verifyLogin() {
  if (emailInput.value === emailTest && passInput.value === passTest) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', verifyLogin);

// Requisito 18:

const submitBtn = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');

// Desabilita o botão de submit

submitBtn.disabled = true;

// Cria função que habilita o botão de submit se o checkbox for marcado

function verifyAgree() {
  if (agree.checked) {
    submitBtn.disabled = false;
  }
}

agree.addEventListener('change', verifyAgree);

// Requisito 20:

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function verifyText() {
  counter.innerHTML = textArea.maxLength - textArea.value.length;
}

textArea.addEventListener('keyup', verifyText);

// Requisito 21:

const evalForm = document.querySelector('#evaluation-form');
const formData = document.querySelector('#form-data');

// Seleciona os elementos com os dados necessários

const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const emailF = document.querySelector('#input-email');
const houseF = document.querySelector('#house');

const familyF = document.getElementsByName('family');

function getFamily() {
  for (let i = 0; i < familyF.length; i += 1) {
    if (familyF[i].checked) {
      return familyF[i].value;
    }
  }
}

const subjectsF = document.getElementsByClassName('subject');

function getSubjects() {
  const subjectsResult = [];
  for (let i = 0; i < subjectsF.length; i += 1) {
    if (subjectsF[i].checked) {
      subjectsResult.push(subjectsF[i].value);
    }
  }
  return subjectsResult.join(', ');
}

const avalF = document.getElementsByName('rate');

function getRate() {
  for (let i = 0; i < avalF.length; i += 1) {
    if (avalF[i].checked) {
      return avalF[i].value;
    }
  }
}

// Seleciona os elementos que serão alterados

const nome = document.querySelector('#nome-result');
const email = document.querySelector('#email-result');
const casa = document.querySelector('#casa-result');
const familia = document.querySelector('#familia-result');
const materia = document.querySelector('#materia-result');
const aval = document.querySelector('#aval-result');
const obs = document.querySelector('#obs-result');

// nome.innerHTML = `Nome:${}`;

// Cria função que, ao clicar no botão submit:
// - Coloca display none no evalForm
// - Coloca display flex no formData
// - Transfere os dados dos elementos no evalForm para o formData

submitBtn.addEventListener('click', (event) => {
  evalForm.style.display = 'none';
  event.preventDefault();
  formData.style.display = 'flex';
  nome.innerHTML = `Nome: ${firstName.value} ${lastName.value}`;
  email.innerHTML = `Email: ${emailF.value}`;
  casa.innerHTML = `Casa: ${houseF.value}`;
  familia.innerHTML = `Família: ${getFamily()}`;
  materia.innerHTML = `Matérias: ${getSubjects()}`;
  aval.innerHTML = `Avaliação: ${getRate()}`;
  obs.innerHTML = `Observações: ${textArea.value}`;
});

// p.innerHTML = `
// Nome: ${firstName.value} ${lastName.value}
// Email: ${emailF.value}
// Casa: ${houseF.value}
// Família: ${getFamily()}
// Matérias: ${getSubjects()}
// Avaliação: ${getRate()}
// Observações: ${textArea.value}`

const subjects = document.querySelectorAll('input[class="subjects"]:checked').value;
console.log(subjects);
