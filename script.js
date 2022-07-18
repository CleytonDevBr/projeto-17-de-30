const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let valueDefault;

btnValue.addEventListener('click', () =>{
  let qrCodeValue = inputValue.value.trim();
  if(!qrCodeValue || qrCodeValue === valueDefault) return;
  valueDefault = qrCodeValue
  btnValue.innerHTML = 'gerando QRcode'
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
 imgQrCode.addEventListener('load',  () =>{
  wrapper.classList.add('active')
  btnValue.innerHTML= 'gerar Qrcode'
 })
})
