let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Investigo sobre feminicidios en la Republica Mexicana.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();