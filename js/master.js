const papan = document.querySelector(".papan");
const p1 = papan.querySelector(".pemain-1");
const p2 = papan.querySelector(".pemain-2");
const skor = papan.querySelector(".papan-skor");
const s1 = skor.querySelector("#skor-1");
const s2 = skor.querySelector("#skor-2");

let x = 1;
let y = 1;

const main = async (e) => {
  if (e.key == "a") {
    return x++;
  }

  if (e.key == "l") {
    return y++;
  }
};

document.addEventListener("keypress", async (e) => {
  main(e);

  let w1 = sessionStorage.getItem("w1");
  let w2 = sessionStorage.getItem("w2");

  if (x > 1 && y > 1) {
    p1.style.marginBottom = x + "vh";
    p2.style.marginBottom = y + "vh";
  }

  if (x == 100 && x > y) {
    alert("Pemain 1 menang");
    sessionStorage.setItem("w1", w1 == null ? 1 : parseInt(w1) + 1);

    location.reload();
  } else if (y == 100 && y > x) {
    alert("Pemain 2 menang");
    sessionStorage.setItem("w2", w2 == null ? 1 : parseInt(w2) + 1);

    location.reload();
  }
});

let w1 = sessionStorage.getItem("w1");
let w2 = sessionStorage.getItem("w2");

s1.innerHTML = w1 == null ? 0 : w1;
s2.innerHTML = w2 == null ? 0 : w2;

// sessionStorage.clear();
