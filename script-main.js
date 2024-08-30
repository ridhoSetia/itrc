const achiev0 = document.querySelector(".achiev0");
const achiev1 = document.querySelector(".achiev1");
const achiev2 = document.querySelector(".achiev2");
const achiev3 = document.querySelector(".achiev3");

const listItems = document.querySelectorAll(".list_chapter li");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Menghapus kelas "active" dari semua elemen li
    listItems.forEach((li) => {
      li.classList.remove("active");
    });

    // Menambahkan kelas "active" ke elemen yang diklik
    item.classList.add("active");
  });
});

let detailAchievement = document.querySelector(
  ".achievement_detail .detail_divisi"
);
achiev0.onclick = () => {
  document.body.classList.add("close");
  achievement_detail.classList.add("open");
  achievement_detail.style.width = "74vw";
  detailAchievement.innerHTML = `
    <div class="heading_detail">
    <div class="title">
      <h1><mark>Achievement 2020</mark></h1>
    </div>
  </div>
  <div class="achiev_list">
  <div class="achiev">
    <img src="img/achievement_cover1.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Juara Favorit</mark> Medicraft Pada Event Mulawarman
        Medical Fair 2020
      </h3>
      <p>M. Rafli Nur Fathan dan Iqbal Fahrozi</p>
    </div>
  </div>
  </div>`;
};
achiev1.onclick = () => {
  document.body.classList.add("close");
  achievement_detail.classList.add("open");
  detailAchievement.innerHTML = `
  <div class="heading_detail">
  <div class="title">
    <h1><mark>Achievement 2021</mark></h1>
  </div>
</div>
  <div class="achiev_list">
  <div class="achiev">
    <img src="img/prestasi4.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Finalis</mark> Poster tingkat provinsi Kaltim Kaltara OSAGI 2021
      </h3>
      <p>Afrisya Hardianto P</p>
    </div>
  </div>
  <div class="achiev">
    <img src="img/prestasi3.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Finalis</mark> Poster tingkat provinsi Kaltim Kaltara OSAGI 2021
      </h3>
      <p>Rayhan Alfin D</p>
    </div>
  </div>
  <div class="achiev">
    <img src="img/prestasi5.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Finalis</mark> Poster UGM tingkat Nasional 2021
      </h3>
      <p>Najwa Aisha Z, Rika Saputri, dan Siti Kumala M</p>
    </div>
  </div>
  <div class="achiev">
    <img src="img/prestasi1.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Juara 1</mark> Kompetisi Poster Pekan Fisika XX 2021
      </h3>
      <p>M. Rafli Nur Fathan dan Iqbal Fahrozi</p>
    </div>
  </div>
  <div class="achiev">
    <img src="img/prestasi2.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Juara 2</mark> Kompetisi Poster Pekan Fisika XX 2021
      </h3>
      <p>Najwa Aisha Z dan Rika Saputri</p>
    </div>
  </div>
</div>
  `;
};

achiev2.onclick = () => {
  document.body.classList.add("close");
  achievement_detail.classList.add("open");
  detailAchievement.innerHTML = `
    <div class="heading_detail">
    <div class="title">
      <h1><mark>Achievement 2022</mark></h1>
    </div>
  </div>
    <div class="achiev_list">
    <div class="achiev">
      <img src="img/achievement_cover2.png" alt="logo " />
      <div class="achiev_text">
        <h3>
          <mark>Juara 1</mark>
          kompetisi Poster Matematika ITK 2022
        </h3>
        <p>Arinda Zhafira S, Sania, dan Fira</p>
      </div>
    </div>
    <div class="achiev">
    <img src="img/prestasi6.jpg" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Finalis</mark> kompetisi Duta Pelajar Sadar Hukum
        tingkat Kabupaten 2022
      </h3>
      <p>M. Nazriel Satriyani</p>
    </div>
  </div>
    <div class="achiev">
      <img src="img/prestasi6.jpg" alt="logo " />
      <div class="achiev_text">
        <h3>
          <mark>Juara 2</mark> kompetisi Duta Pelajar Sadar Hukum
          tingkat Kabupaten 2022
        </h3>
        <p>Faris Fadillah</p>
      </div>
    </div>
    <div class="achiev">
      <img src="img/prestasi7.png" alt="logo " />
      <div class="achiev_text">
        <h3>
          <mark>Juara 1</mark> kompetisi Karya Tulis Ilmiah Pekan Fisika tingkat Provinsi 2022 
        </h3>
        <p>Ridho Setiawan</p>
      </div>
    </div>
  </div>`;
};

achiev3.onclick = () => {
  document.body.classList.add("close");
  achievement_detail.classList.add("open");
  detailAchievement.innerHTML = `
  <div class="heading_detail">
  <div class="title">
    <h1><mark>Achievement 2023</mark></h1>
  </div>
</div>
  <div class="achiev_list">
  <div class="achiev">
    <img src="img/achievement_cover3.png" alt="logo " />
    <div class="achiev_text">
      <h3>
        <mark>Juara 2</mark>
        kompetisi Poster Pekan Fisika 2023
      </h3>
      <p>Sofia Novebri Gittalia dan Riani</p>
    </div>
  </div>
  <div class="achiev">
  <img src="img/prestasi8.jpg" alt="logo " />
  <div class="achiev_text">
    <h3>
      <mark>Finalis</mark> kompetisi Poster IMPACT ITK 2023
    </h3>
    <p>Sofia Novebri Gittalia</p>
  </div>
</div>
<div class="achiev">
<img src="img/prestasi10.jpg" alt="logo " />
<div class="achiev_text">
  <h3>
    <mark>OSN Informatika</mark> tingkat Provinsi 2023 
  </h3>
  <p>M. Nafiz Safaraz dan Sofia Novebri Gittalia</p>
</div>
</div>
  <div class="achiev">
  <img src="img/prestasi9.jpg" alt="logo " />
  <div class="achiev_text">
    <h3>
      <mark>Finalis</mark> kompetisi Duta Pelajar Sadar Hukum
      tingkat Kabupaten 2023
    </h3>
    <p>Ridho Setiawan</p>
  </div>
</div>
  <div class="achiev">
  <img src="img/prestasi11.jpg" alt="logo " />
  <div class="achiev_text">
    <h3>
      <mark>30 Besar MYRES</mark> tingkat Nasional 2023 
    </h3>
    <p>Andi Azzumar Azra dan Amin Thohari</p>
  </div>
</div>
</div>`;
};

const boxChapter = document.querySelector(".box_chapter");
const wrapperChapter = document.querySelector('.chapt')
const chapter1 = document.querySelector(".c1");
const chapter2 = document.querySelector(".c2");
const chapter3 = document.querySelector(".c3");

chapter1.onclick = () => {
  wrapperChapter.classList.add("hide");
  setTimeout(() => {
    boxChapter.innerHTML = `
      <h2 class="judul">Hari Pertama Kita Bertemu</h2>
      <img src="img/history1.jpeg" />
      <p>
        Hari yang membuatku semangat untuk mulai pergi bersekolah, kita
        bertemu setiap hari, berbincang setiap hari, namun sayangnya itu
        hanya cerita sementara, kini kita asing karena akhir cerita.
      </p>`;
    wrapperChapter.classList.remove("hide");
  }, 500);
};

chapter2.onclick = () => {
  wrapperChapter.classList.add("hide");
  setTimeout(() => {
    boxChapter.innerHTML = `
      <h2 class="judul">Hari Kedua kita Bertemu</h2>
      <img src="img/history2.jpeg" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsum necessitatibus, architecto perferendis enim minima sit animi iure eligendi modi, unde quisquam vitae! Vel unde nostrum quod ipsam, harum maiores?
      </p>`;
    wrapperChapter.classList.remove("hide");
  }, 500);
};

chapter3.onclick = () => {
  wrapperChapter.classList.add("hide");
  setTimeout(() => {
    boxChapter.innerHTML = `
      <h2 class="judul">Hari Ketiga kita Bertemu</h2>
      <img src="img/history3.jpeg" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quo incidunt odio, illo earum excepturi molestias, pariatur suscipit iure dolor impedit cupiditate ipsum? Unde neque ratione corporis, illum eius non.
      </p>`;
    wrapperChapter.classList.remove("hide");
  }, 500);
};


let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
