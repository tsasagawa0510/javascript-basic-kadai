const btn = document.getElementById('btn');

console.log(btn);

btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  console.log(text);
  text.textContent = 'ボタンをクリックしました';
});