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
  fetch('json/divisiGS.json')
    .then(response => response.json())
    .then(data => {
      // Akses data di sini
      const dataGS = data[0].gsDetail

      divisiDetail.classList.add("open");
      document.body.classList.add("close");
      detailDivisi.innerHTML = `
<div class="heading_detail">
<img src="${dataGS.headerImg}" alt="${dataGS.headerAlt}" />
<div class="title">
  <h1><mark>${dataGS.title}</mark></h1>
  <p>${dataGS.description}</p>
  <h3>${dataGS.trophy}</h3>
</div>
</div>

<h2><mark>Alat Tempur GS Master</mark></h2>
<div class="tools_list"></div>

<h2><mark>Karya Divisi GS Master</mark></h2>
<div class="produk_list"></div>`;

      const toolsList = document.querySelector('.tools_list');
      // Melakukan perulangan untuk setiap alat di dalam array tools
      dataGS.tools.forEach(tool => {
        // Membuat elemen list item baru untuk setiap tool
        const listItem = document.createElement('div');
        listItem.classList.add("tools");
        listItem.innerHTML = `
              <img class="${tool.style}" src="${tool.img}" alt="logo " />
              <div class="tools_text">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
              </div>
          `;
        // Menambahkan list item ke dalam list
        toolsList.appendChild(listItem);
      });

      const produkList = document.querySelector('.produk_list');
      // Melakukan perulangan untuk setiap alat di dalam array tools
      dataGS.produk.forEach(karya => {
        // Membuat elemen list item baru untuk setiap tool
        const listItem = document.createElement('div');
        listItem.classList.add("produk");
        listItem.innerHTML = `
              <img class="${karya.style}" src="${karya.img}" alt="foto karya" />
              <div class="produk_text">
              <h3>${karya.name}</h3>
              <p>${karya.description}</p>
              <button>${karya.link}</button>
              </div>
          `;
        // Menambahkan list item ke dalam list
        produkList.appendChild(listItem);
      });

    })
    .catch(error => console.error('Error:', error));
};

aiDetail.onclick = () => {
  fetch('json/divisiAI.json')
    .then(response => response.json())
    .then(data => {
      // Akses data di sini
      const dataAI = data[0].aiDetail

      divisiDetail.classList.add("open");
      document.body.classList.add("close");
      detailDivisi.innerHTML = `
<div class="heading_detail">
  <img src="${dataAI.headerImg}" alt="${dataAI.headerAlt}" />
  <div class="title">
    <h1><mark>${dataAI.title}</mark></h1>
    <p>${dataAI.description}</p>
    <h3>${dataAI.trophy}</h3>
  </div>
</div>

<h2><mark>Alat Tempur AI Robotic</mark></h2>
<div class="tools_list"></div>

<h2><mark>Karya Divisi AI Robotic</mark></h2>
<div class="produk_list"></div>`;

      const toolsList = document.querySelector('.tools_list');
      // Melakukan perulangan untuk setiap alat di dalam array tools
      dataAI.tools.forEach(tool => {
        // Membuat elemen list item baru untuk setiap tool
        const listItem = document.createElement('div');
        listItem.classList.add("tools");
        listItem.innerHTML = `
                <img class="${tool.style}" src="${tool.img}" alt="logo " />
                <div class="tools_text">
                  <h3>${tool.name}</h3>
                  <p>${tool.description}</p>
                </div>
            `;
        // Menambahkan list item ke dalam list
        toolsList.appendChild(listItem);
      });

      const produkList = document.querySelector('.produk_list');
      // Melakukan perulangan untuk setiap alat di dalam array tools
      dataAI.produk.forEach(karya => {
        // Membuat elemen list item baru untuk setiap tool
        const listItem = document.createElement('div');
        listItem.classList.add("produk");
        listItem.innerHTML = `
                <img class="${karya.style}" src="${karya.img}" alt="foto karya" />
                <div class="produk_text">
                <h3>${karya.name}</h3>
                <p>${karya.description}</p>
                <button>${karya.link}</button>
                </div>
            `;
        // Menambahkan list item ke dalam list
        produkList.appendChild(listItem);
      });

    })
    .catch(error => console.error('Error:', error));
};

adsDetail.onclick = () => {
  fetch('json/divisiAds.json')
    .then(response => response.json())
    .then(data => {
      // Akses data di sini
      const dataAds = data[0].adsDetail

      divisiDetail.classList.add("open");
      document.body.classList.add("close");
      detailDivisi.innerHTML = `
<div class="heading_detail">
<img src="${dataAds.headerImg}" alt="${dataAds.headerAlt}" />
<div class="title">
  <h1><mark>${dataAds.title}</mark></h1>
  <p>${dataAds.description}</p>
  <h3>${dataAds.trophy}</h3>
</div>
</div>

<h2><mark>Alat Tempur Ads Creator</mark></h2>
<div class="tools_list"></div>

<h2><mark>Karya Divisi Ads Creator</mark></h2>
<div class="karya_list"></div>`;

      const toolsList = document.querySelector('.tools_list');
      // Melakukan perulangan untuk setiap alat di dalam array tools
      dataAds.tools.forEach(tool => {
        // Membuat elemen list item baru untuk setiap tool
        const listItem = document.createElement('div');
        listItem.classList.add("tools");
        listItem.innerHTML = `
              <img class="${tool.style}" src="${tool.img}" alt="logo " />
              <div class="tools_text">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
              </div>
          `;
        // Menambahkan list item ke dalam list
        toolsList.appendChild(listItem);
      });

      const karyaList = document.querySelector('.karya_list');
      // Melakukan perulangan untuk setiap alat di dalam array tools
      dataAds.karya.forEach(karya => {
        // Membuat elemen list item baru untuk setiap tool
        const listItem = document.createElement('div');
        listItem.classList.add("karya");
        listItem.innerHTML = `
              <img class="poster" src="${karya.img}" alt="foto karya" />
              <div class="karya_text">
              <p>${karya.description}</p>
              </div>
          `;

        function posterKlik() {
          const posters = document.querySelectorAll(".poster");
          posters.forEach((poster) => {
            poster.addEventListener("click", function () {
              poster.classList.toggle("klik");
            });
          });
        }
        posterKlik()
        // Menambahkan list item ke dalam list
        karyaList.appendChild(listItem);
        posterKlik()
      });
    })
    .catch(error => console.error('Error:', error));
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
