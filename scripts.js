const amt = document.getElementById('amount');
const ple = document.getElementById('people');

const button = document.querySelectorAll('Button');
let tip;
let tipEach;
button.forEach((item) => {
  item.addEventListener('click', (choice) => {
    // console.log(item.getAttribute('id'));
    let ch = item.getAttribute('id');
    if (ch === 'os') {
      console.log('outstanding');
      tip = (amt.value * 30) / 100;
    } else if (ch === 'good') {
      console.log('good');
      tip = (amt.value * 25) / 100;
    } else if (ch === 'ok') {
      console.log('ok');
      tip = (amt.value * 15) / 100;
    } else if (ch === 'bad') {
      console.log('Bad');
      tip = (amt.value * 10) / 100;
    } else {
      console.log('tbl');
      tip = (amt.value * 5) / 100;
    }
    tipEach = tip / ple.value;
    console.log(tipEach);
    const share = document.getElementById('tip-share');
    share.innerHTML = `Tip share for each one :${tipEach}`;
  });
});
