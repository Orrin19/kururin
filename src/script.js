document.querySelector('img').addEventListener('click', () => {
  document.title = 'YOU GOT KURUKURED!';
  document.body.classList.toggle('got-kurukured');
  const audio1 = new Audio(
    'https://raw.githubusercontent.com/Orrin19/kururin/main/assets/kuru1.mp3'
  );
  const audio2 = new Audio(
    'https://raw.githubusercontent.com/Orrin19/kururin/main/assets/kuru2.mp3'
  );
  setInterval(() => {
    if (Math.floor(Math.random() * 2) == 0) {
      audio1.play();
    } else {
      audio2.play();
    }
  }, 500);
});
