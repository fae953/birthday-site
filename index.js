document.addEventListener("DOMContentLoaded", function () {
  const link0 = document.getElementById("yes");
  if (link0) {
    yes.addEventListener("click", function () {
      window.location.href = "first.html";
    });
  }

  const link1 = document.getElementById("link-1");
  if (link1) {
    link1.addEventListener("click", function () {
      window.location.href = "second.html";
    });
  }

  const link2 = document.getElementById("link-2");
  if (link2) {
    link2.addEventListener("click", function () {
      window.location.href = "third.html";
    });
  }

  const link3 = document.getElementById("link-3");
  if (link3) {
    link3.addEventListener("click", function () {
      window.location.href = "fourth.html";
    });
  }

  const photos = document.querySelectorAll(".photo");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalVideo = document.getElementById("modal-video");
  const modalCaption = document.getElementById("modal-caption");

  photos.forEach((photo) => {
    photo.addEventListener("click", () => {
      const img = photo.querySelector("img");
      const video = photo.querySelector("video");
      const caption = photo.querySelector(".caption");

      modal.style.display = "flex";
      modalCaption.textContent = caption.textContent;

      if (img) {
        modalImg.src = img.src;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
      }

      if (video) {
        modalVideo.src = video.src;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.play();
      }
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
  });
});

const No = document.getElementById("no");
const popup = document.getElementById("cutePopup");

No.addEventListener("click", () => {
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
});
