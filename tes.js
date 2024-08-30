AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section");

  // Fungsi untuk menentukan tautan menu yang aktif berdasarkan posisi halaman
  function setActiveLink() {
    let currentScroll = window.scrollY;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100; // Sesuaikan dengan posisi yang diinginkan

      if (currentScroll >= sectionTop) {
        const id = section.getAttribute("id");

        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Panggil fungsi setActiveLink saat menggulir halaman
  window.addEventListener("scroll", setActiveLink);

  // Panggil setActiveLink untuk menetapkan tautan aktif saat halaman dimuat
  setActiveLink();
});

const hamburgerMenu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbarA = document.querySelectorAll(".navbar a");
const bx = document.querySelector(".bx");

hamburgerMenu.onclick = () => {
  navbar.classList.toggle("open");
  navbar.classList.add("beforeOpen");
  document.querySelector(".logo").classList.toggle("open");
  bx.classList.toggle("bx-x");
  setTimeout(() => {
    navbarA.forEach((a) => {
      a.classList.toggle("open");
    });
  }, 100);
};

window.onscroll = () => {
  navbar.classList.remove("open");
  document.querySelector(".logo").classList.remove("open");
  bx.classList.remove("bx-x");
  setTimeout(() => {
    navbarA.forEach((a) => {
      a.classList.remove("open");
    });
  }, 100);
};

document.querySelector(".btn").onclick = () => {
  document.querySelector(".video").style.display = "flex";
  document.querySelector(".video video").play();
};
const divisiDetail = document.querySelector(".divisi_detail");
const achievement_detail = document.querySelector('.achievement_detail')
const close = document.querySelectorAll(".fa-times");
close.forEach((close) => {
  close.onclick = () => {
    document.querySelector(".video").style.display = "none";
    document.querySelector(".video video").pause();
    divisiDetail.classList.remove("open");
    document.body.classList.remove("close");
    achievement_detail.classList.remove("open");
  };
});

let detailDivisi = document.querySelector(".divisi_detail .detail_divisi");
const gsDetail = document.querySelector(".gs_detail");
const aiDetail = document.querySelector(".ai_detail");
const adsDetail = document.querySelector(".ads_detail");
const inforDetail = document.querySelector(".infor_detail");

gsDetail.onclick = () => {
  divisiDetail.classList.add("open");
  document.body.classList.add("close");
  detailDivisi.innerHTML = `
  <div class="heading_detail">
          <img src="img/gs_master.png" alt="logo Gs Master" />
          <div class="title">
            <h1><mark>GS Master</mark></h1>
            <p>
              Divisi GS Master (Game Software Master) merupakan salah satu
              divisi dalam ITRC yang mempelajari dan membahas pembuatan game
            </p>
            <h3>1 🏆 Trophy</h3>
          </div>
        </div>
        <h2><mark>Alat Tempur GS Master</mark></h2>
        <div class="tools_list">
          <div class="tools">
            <img src="img/ren'py.jpeg" alt="logo " />
            <div class="tools_text">
              <h3>Ren'Py</h3>
              <p>Game engine yang digunakan untuk membuat game visual novel</p>
            </div>
          </div>
          <div class="tools">
            <img src="img/vscode.jpeg" alt="logo " />
            <div class="tools_text">
              <h3>VS Code</h3>
              <p>Code editor yang biasa digunakan dalam menulis kode program</p>
            </div>
          </div>
          <div class="tools">
            <img src="img/rpg_maker.jpg" alt="logo " />
            <div class="tools_text">
              <h3>RPG Maker MZ</h3>
              <p>Game engine yang digunakan untuk membuat game rpg pixel</p>
            </div>
          </div>
        </div>
        <h2><mark>Karya Divisi GS Master</mark></h2>
        <div class="produk_list">
          <div class="produk">
            <img src="img/sicakung.jpeg" alt="sicakung" />
            <div class="produk_text">
              <h3>SICAKUNG</h3>
              <p>
                SICAKUNG (Mitigasi Bencana Lingkungan), merupakan board game
                karya
                <mark>Faris Fadillah</mark> dan berhasil mendapat
                <mark>Juara 2</mark> dalam kompetisi Duta Pelajar Sadar Hukum
                tingkat Kabupaten 2022
              </p>
              <button><a href="">Mainkan di Perpustakan</a></button>
            </div>
          </div>
          <div class="produk">
            <img src="img/logo_jedug.png" alt="cover jedug" />
            <div class="produk_text">
              <h3>JEDUG</h3>
              <p>
                JEDUG (Jerat Pendengung), merupakan game visual novel karya
                <mark>M. Nazriel Satriyani</mark> dan berhasil menembus
                <mark>finalis</mark> dalam kompetisi Duta Pelajar Sadar Hukum
                tingkat Kabupaten 2022
              </p>
              <button>
                <a
                  href="https://drive.google.com/drive/folders/1WzDF2R13Qr--OuWMlUqG6RxcHmUarESD?usp=sharing"
                  >Link Download PC</a
                >
              </button>
              <button>
                <a
                  href="https://drive.google.com/drive/folders/13XVk5qM4DRZNvl2WjVUGwA4rE1Ac6R25?usp=sharing"
                  >Link Download Android</a
                >
              </button>
            </div>
          </div>
          <div class="produk">
            <img src="img/logo_adita.png" alt="cover adita" />
            <div class="produk_text">
              <h3>ADITA</h3>
              <p>
                ADITA (Akad Dagang Islam Kita), game Rpg Pixel karya
                <mark>Andi Azzumar Azra dan Amin Thohari</mark>, yang berhasil
                menembus <mark>30 besar</mark> dalam kompetisi MYRES tingkat
                Nasional 2023
              </p>
              <button>
                <a
                  href="https://adita-itrc.itch.io/adita-akad-dagang-islam-kita"
                  target="_blank"
                  >Mainkan</a
                >
              </button>
            </div>
          </div>
          <div class="produk">
            <img class="only_logo" src="img/taman_logo.png" alt="logo taman" />
            <div class="produk_text">
              <h3>TAMAN</h3>
              <p>
                TAMAN (Tangga Pertemanan Anti Bullying), merupakan Web Game
                karya
                <mark>Ridho Setiawan</mark> dan berhasil menembus
                <mark>finalis</mark> dalam kompetisi Duta Pelajar Sadar Hukum
                tingkat Kabupaten 2023
              </p>
              <button>
                <a href="https://www.taman.man2kukar.sch.id" target="_blank"
                  >Mainkan</a
                >
              </button>
            </div>
          </div>
          <div class="produk">
            <img
              class="only_logo fix"
              src="img/utakes_logo.png"
              alt="logo utakes"
            />
            <div class="produk_text">
              <h3>UTAKES</h3>
              <p>
                UTAKES (Ular Tangga Kesehatan), merupakan Web Game karya
                <mark>Ridho Setiawan</mark>, hasil modifikasi dan evaluasi pada Web Game
                TAMAN
              </p>
              <button>
                <a href="https://www.utakes.man2kukar.sch.id" target="_blank"
                  >Mainkan</a
                >
              </button>
            </div>
          </div>
          <div class="produk">
            <img src="img/test.png" alt="cover jurnal" />
            <div class="produk_text">
              <h3>Jurnal Sang Epidemiolog</h3>
              <p>
                Jurnal Sang Epidemiolog, merupakan game rpg karya Diandra Naufal
                dan Al Hajj yang menceritakan tentang cara mengatasi penyakit
                DBD
              </p>
              <button><a href="">Mainkan</a></button>
            </div>
          </div>
          <div class="produk">
            <img src="img/test.png" alt="cover dalam tubuhku" />
            <div class="produk_text">
              <h3>Dalam Tubuhku</h3>
              <button><a href="">Coba</a></button>
            </div>
          </div>
        </div>`;
};

aiDetail.onclick = () => {
  divisiDetail.classList.add("open");
  document.body.classList.add("close");
  detailDivisi.innerHTML = `
<div class="heading_detail">
  <img src="img/ai_robotic.png" alt="logo AI Robotic" />
  <div class="title">
    <h1><mark>AI Robotic</mark></h1>
    <p>
      Divisi AI Robotic merupakan salah satu divisi
      dalam ITRC yang mempelajari dan membahas dunia IOT
    </p>
    <h3>1 🏆 Trophy</h3>
  </div>
</div>
<h2><mark>Alat Tempur AI Robotic</mark></h2>
<div class="tools_list">
  <div class="tools">
    <img class="arduino" src="img/arduino.png" alt="logo " />
    <div class="tools_text">
      <h3>Arduino</h3>
      <p>Pengendali mikro dengan papan tunggal yang berfungsi dalam proyek perangkat lunak open source. Fungsi utama dari Arduino untuk memudahkan penggunaan elektronik dalam berbagai bidang.</p>
    </div>
  </div>
  <div class="tools">
    <img src="img/vscode.jpeg" alt="logo " />
    <div class="tools_text">
      <h3>VS Code</h3>
      <p>Code editor yang biasa digunakan dalam menulis kode program</p>
    </div>
  </div>
  <div class="tools">
    <img src="img/tinkercad.png" alt="logo " />
    <div class="tools_text">
      <h3>Tinkercad</h3>
      <p>Web yang biasa digunakan untuk membuat simulasi elektronika</p>
    </div>
  </div>
</div>
<h2><mark>Karya Divisi AI Robotic</mark></h2>
<div class="produk_list">
  <div class="produk">
    <img src="img/lcgo.jpeg" alt="lcgo" />
    <div class="produk_text">
      <h3>LCGO</h3>
      <p>
        LCGO, merupakan robot sistem pintu otomatis sensor cahaya karya
        <mark>M. Fauzil dan M. Arya Satya</mark> yang diikutkan dalam kompetisi
        <mark>MRC</mark> 
      </p>
      <button><a>Mainkan di Perpustakan</a></button>
    </div>
  </div>
  <div class="produk">
  <img class="only_logo s" src="img/SAMA.png" alt="Logo SAMA" />
  <div class="produk_text">
    <h3>SAMA</h3>
    <p>
      SAMA (Sahabat Anak Madrasah), merupakan Web Konseling karya 
      <mark>Ridho Setiawan dengan arahan Pak Bekti</mark> dan berhasil mendapat
      <mark>Juara 1</mark> dalam kompetisi Karya Tulis Ilmiah Pekan Fisika tingkat Provinsi 2022 
    </p>
    <button><a href="www.sama.man2kukar.sch.id">Kunjungi</a></button>
  </div>
</div>
</div>`;
};

adsDetail.onclick = () => {
  divisiDetail.classList.add("open");
  document.body.classList.add("close");
  detailDivisi.innerHTML = `
  <div class="heading_detail">
  <img src="img/ads_creator.png" alt="logo Ads Creator" />
  <div class="title">
    <h1><mark>Ads Creator</mark></h1>
    <p>
      Divisi Ads Creator merupakan salah satu divisi
      dalam ITRC yang mempelajari dan membahas animating, ilustrating, dan desain
    </p>
    <h3>5 🏆 Trophy</h3>
  </div>
</div>
<h2><mark>Alat Tempur Ads Creator</mark></h2>
<div class="tools_list">
  <div class="tools">
    <img src="img/flipaclip.png" alt="logo " />
    <div class="tools_text">
      <h3>FlipaClip</h3>
      <p>Aplikasi yang biasa digunakan dalam pembuatan animasi frame by frame</p>
    </div>
  </div>
  <div class="tools">
    <img class="only_logo" src="img/ibispaint.jpeg" alt="logo " />
    <div class="tools_text">
      <h3>Ibis Paint</h3>
      <p>Aplikasi yang biasa digunakan untuk menggambar dan desain</p>
    </div>
  </div>
  <div class="tools">
    <img src="img/coreldraw.jpeg" alt="logo " />
    <div class="tools_text">
      <h3>Corel Draw</h3>
      <p>Aplikasi yang biasa digunakan dalam melakukan desain yang membutuhkan detail tinggi</p>
    </div>
  </div>
</div>
<h2><mark>Karya Divisi Ads Creator</mark></h2>
<div class="karya_list">
<div class="karya">
<img class="poster" src="img/poster9.png" alt="poster 9" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Arinda Zhafira S dan Emiliya Yusmani</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster10.png" alt="poster 10" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>M. Rafli Nur Fathan dan Iqbal Fahrozi</mark> mendapat <mark>Juara Favorit</mark> pada Medicraft Event Mulawarman Medical Fair 2020
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster12.png" alt="poster 12" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Afrisya Hardianto P dan M. Rafli Nur F</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster13.png" alt="poster 13" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Fiqhi Rhivano A dan Rika Saputri</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster14.png" alt="poster 14" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Afrisya Hardianto P</mark> berhasil <mark>menembus Finalis</mark> tingkat provinsi
    Kaltim Kaltara OSAGI 2021
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster15.png" alt="poster 15" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Rayhan Alfin D</mark> berhasil <mark>menembus Finalis</mark> tingkat provinsi
    Kaltim Kaltara OSAGI 2021
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster16.png" alt="poster 16" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark> Rayhan Alfin D </mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster17.png" alt="poster 17" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Afrisya Hardianto P</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster18.png" alt="poster 18" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Iqbal Fahrozi dan M. Rafli Nur Fathan</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster19.png" alt="poster 19" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Afrisya Hardianto P dan Rika Saputri</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster20.png" alt="poster 20" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Najwa Aisha Z, Rika Saputri, dan Siti Kumala M</mark> berhasil <mark>menembus Finalis</mark> Poster UGM tingkat nasional
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster21.png" alt="poster 21" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Afrisya Hardianto P dan Zahra Aulia N</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster22.png" alt="poster 22" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Iqbal Fahrozi dan M. Rafli Nur Fathan</mark> mendapat <mark>Juara 1</mark> Kompetisi Poster Pekan Fisika 2021
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster23.png" alt="poster 23" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Najwa Aisha Z dan Rika Saputri</mark> mendapat <mark>Juara 2</mark> Kompetisi Poster Pekan Fisika 2021
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster24.jpg" alt="poster 24" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Faris Fadillah dan Rayhan Alfin D</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster1.jpeg" alt="poster 1" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Ridho Setiawan</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster2.jpeg" alt="poster 2" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Ridho Setiawan</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster4.jpeg" alt="poster 4" />
<div class="karya_text">
<p>
  Poster karya, 
  <mark>Sofia Novebri Gittalia, Cemong, dan Fira</mark>
</p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster3.jpeg" alt="poster 3" />
<div class="karya_text">
  <p>
    Poster karya, 
    <mark>Ridho Setiawan</mark>
  </p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster5.jpeg" alt="poster 5" />
<div class="karya_text">
<p>
Poster karya, 
<mark>Arinda Zhafira S, Sania, dan Fira</mark> mendapat <mark>juara 1</mark> dalam
kompetisi Poster Matematika ITK 2022
</p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster6.jpeg" alt="poster 6" />
<div class="karya_text">
<p>
Poster karya, 
<mark>Sofia Novebri Gittalia dan Riani</mark> mendapat <mark>juara 2</mark> dalam kompetisi Poster Pekan Fisika Unmul 2023
</p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster7.jpeg" alt="poster 7" />
<div class="karya_text">
<p>
Poster karya, 
<mark>M. Fauzil dan Cinta Kanesia Putri</mark></p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster8.jpeg" alt="poster 8" />
<div class="karya_text">
<p>
Poster karya, 
<mark>Sofia Novebri Gittalia</mark> berhasil <mark>menembus Finalis</mark> pada kompetisi Poster IMPACT ITK 2023
</p>
</div>
</div>
<div class="karya">
<img class="poster" src="img/poster11.jpeg" alt="poster 11" />
<div class="karya_text">
<p>
Poster karya, 
<mark>Sofia Novebri Gittalia dan Salsabilla Azzahra</mark>
</p>
</div>
</div>
</div>`;
  const posters = document.querySelectorAll(".poster");
  posters.forEach((poster) => {
    poster.addEventListener("click", function () {
      poster.classList.toggle("klik");
    });
  });
};

inforDetail.onclick = () => {
  divisiDetail.classList.add("open");
  document.body.classList.add("close");
  detailDivisi.innerHTML = `
  <div class="heading_detail">
    <img src="img/maple.png" alt="logo maple" />
    <div class="title">
      <h1><mark>Maple</mark></h1>
      <p>
        Divisi Maple merupakan divisi wajib yang harus diikuti oleh setiap siswa ITRC, mempelajari hal-hal dasar terkait coding
      </p>
    </div>
  </div>
  `;
};
