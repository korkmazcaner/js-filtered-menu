import menu from "./db.js";

const menuListContainer = document.querySelector(".menuList");
const categoryBtn = document.querySelector("#category-btn");

let selectedCategory = "all";

function displayMenuItems(array) {
  return array.map((item) => {
    //tek satırasa arraylerde ve objelerde const atar.
    const { id, title, category, price, img, desc } = item;

    return ` <div class="menuItem">
              <div class="imageContainer"><img src=${img} /></div>
              <div class="itemInfo">
                <span
                  ><h3>${title}</h3>
                  $${price}</span
                >
                <p class="lead">
                  ${desc}
                </p>
              </div>
            </div>`;
  });
}

// oluşturduğumuz divleri htmle gönderme- join array elamanlarını birleştirerek tek elaman haline getirir.
menuListContainer.innerHTML = displayMenuItems(menu).join("");

//categoryBtn clik functionu ekleme
categoryBtn.addEventListener("click", clickHandler);

//clickte çalışacak functionun tanımlaması
function clickHandler(e) {
  selectedCategory = e.target.dataset.id;
  if (selectedCategory === "all") {
    // oluşturduğumuz divleri htmle gönderme- join array elamanlarını birleştirerek tek elaman haline getirir.
    menuListContainer.innerHTML = displayMenuItems(menu).join("");
  } else {
    //menü listesini tıkladığın butona categorylerine göre listeleme
    const filteredList = menu.filter((item) => {
      if (item.category === selectedCategory) {
        return item;
      }
    });
    menuListContainer.innerHTML = displayMenuItems(filteredList).join("");
  }
}
