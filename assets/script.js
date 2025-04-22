alert("Welcome to the One Direction Multimedia Page! Enjoy the vibes!");

document.addEventListener("DOMContentLoaded", function () {
  const judulVideo = document.getElementById("judulVideo");
  const judulAudio = document.getElementById("judulAudio");
  const judulFoto = document.getElementById("judulFoto");

  // Judul Video
  judulVideo.addEventListener("click", function () {
    alert("Ini video One Direction!");
  });

  // Judul Audio
  judulAudio.addEventListener("click", function () {
    alert("Ini audio One Direction!");
  });

  // Judul Galeri Foto
  judulFoto.addEventListener("click", function () {
    alert("Ini galeri foto One Direction!");
  });
});
