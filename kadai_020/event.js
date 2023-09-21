const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log(text);
  }, 2000);
});