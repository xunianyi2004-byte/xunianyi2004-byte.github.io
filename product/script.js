const PRODUCTS = [
  { title:"Warm White LED Candle with Spring Flower", category:"Flameless Candles", subcategory:"Pillar Candles", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/H8988a52090eb403faaf22ca1755b1f67l-scaled.jpg", url:"https://chinalangsheng.com/product/wholesale-flameless-candle-warm-white-led-candle-light-with-spring-flower/" },
  { title:"Modern Pillar LED Flameless Flickering Candles", category:"Flameless Candles", subcategory:"Pillar Candles", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/Hb0b318fa141d4386a4b3f50084169c78t-scaled.jpg", url:"https://chinalangsheng.com/product/excellent-quality-modern-pillar-led-candles-flameless-flickering-candles/" },
  { title:"Battery Powered No-Fire LED Decoration Candle", category:"Flameless Candles", subcategory:"Plastic Candles", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/H4e3bfc17f7d041dfbb3cbfbf0a128088D-600x600.jpg", url:"https://chinalangsheng.com/product/modern-design-no-fire-glim-led-candle-battery-powered-candles-for-decoration/" },
  { title:"Christmas Tree Flameless LED Candle", category:"Flameless Candles", subcategory:"Seasonal Candles", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/He934e493a0ce47f69c1237d290eeaed14-scaled.jpg", url:"https://chinalangsheng.com/product/christmas-tree-flameless-candles-battery-powered-led-candle-realistic-artificial-led-candles/" },
  { title:"String Light Candle Collection", category:"Flameless Candles", subcategory:"String light Candles", image:"../string-light-candles.webp", url:"https://chinalangsheng.com/product-category/string-light/" },
  { title:"Textured Cement Flameless Candle Collection", category:"Flameless Candles", subcategory:"Cement Candles", image:"../cement-candles.webp", url:"https://chinalangsheng.com/contact/" },
  { title:"Decorative Glass Flameless Candle Collection", category:"Flameless Candles", subcategory:"Glass Candles", image:"../glass-candles.webp", url:"https://chinalangsheng.com/contact/" },
  { title:"USB-C Rechargeable Pillar Candle Collection", category:"Flameless Candles", subcategory:"Rechargeable Candles", image:"../rechargeable-candles.webp", url:"https://chinalangsheng.com/contact/" },
  { title:"Decorative Carved Flameless Candle Collection", category:"Flameless Candles", subcategory:"Carved Candles", image:"../carved-candles.webp", url:"https://chinalangsheng.com/contact/" },
  { title:"Waterproof Outdoor LED Candle", category:"Out Door Candles", image:"../outdoor-candles.webp", url:"https://chinalangsheng.com/product-category/flameless-candle/outdoor-use/" },
  { title:"Five-Pack Moving Flame Taper Candles with Remote", category:"Taper Candles", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/H9422c6c011da4b8b939e721dd4d52b2bS.jpg", url:"https://chinalangsheng.com/product/5-pack-flameless-moving-candles-battery-operated-led-candle-with-remote/" },
  { title:"Decorative Moving Flame Taper Candles", category:"Taper Candles", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/H68d412a9173242dbbc611cc2a3eb714f0.jpg", url:"https://chinalangsheng.com/product/delicate-colors-warm-light-decorative-moving-flame-no-fire-led-candles-for-dinner/" },
  { title:"Classic Hanging LED Taper Candle Collection", category:"Taper Candles", image:"../taper-candles.webp", url:"https://chinalangsheng.com/product-category/taper-candle/" },
  { title:"Warm White Battery LED Tealight Candle", category:"Tealights", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/HTB1KWFqXcH85uJjSZFqq6y4tpXau.jpg", url:"https://chinalangsheng.com/product/new-design-good-quality-tea-light-tealight-candle/" },
  { title:"Reusable Mini Flicker Plastic LED Tealights", category:"Tealights", image:"https://chinalangsheng.com/wp-content/uploads/2022/06/HTB173a_i7omBKNjSZFqq6xtqVXaZ.jpg", url:"https://chinalangsheng.com/product/reusable-mini-flicker-prayer-birthday-party-christmas-decorations-white-battery-operated-led-plastic-tealight-tea-light-candles/" },
  { title:"Decorative Color Tealight Candle Collection", category:"Tealights", image:"../tealight.webp", url:"https://chinalangsheng.com/product-category/tealight/" },
  { title:"Gold Geometric Metal Candle Lantern", category:"Lanterns", image:"../outdoor-candles.webp", url:"https://chinalangsheng.com/product/gold-metal-geometric-brass-candle-holder-lantern-for-home-christmas-wedding-decor/" },
  { title:"Garden Black Galvanized Metal Lantern Set", category:"Lanterns", image:"../outdoor-candles.webp", url:"https://chinalangsheng.com/product/hot-product-popular-garden-black-candle-holders-galvanized-metal-lantern-set-of-3/" },
  { title:"Modern Cordless Night Lamp with Metal Shell", category:"Decorative Lighting", image:"https://chinalangsheng.com/wp-content/uploads/2026/05/Hb784d804f58e461db73fa013b2ba8e4b1.jpg", url:"https://chinalangsheng.com/product/modern-cordless-night-lamp-rechargeable-touch-dimming-portable-metal-shell-table-lamp/" },
  { title:"Portable Rechargeable Touch Control Table Lamp", category:"Decorative Lighting", image:"https://chinalangsheng.com/wp-content/uploads/2026/05/H6de0c101d7a44bec9ba044e7f84565d06.jpg", url:"https://chinalangsheng.com/product/portable-cordless-rechargeable-table-lamp-rechargeable-led-cordless-night-lamp-wireless-touch-control-table-lamp/" },
  { title:"Cordless LED Desk Lamp with Touch Dimming", category:"Decorative Lighting", image:"https://chinalangsheng.com/wp-content/uploads/2026/05/H3ad6bac3821d4fb795cdcf936e3f90f8W.jpg", url:"https://chinalangsheng.com/product/novel-cordless-led-desk-lamp-rechargeable-touch-dimming-portable-table-lamp/" },
  { title:"Pyramid Shape Cordless LED Night Lamp", category:"Decorative Lighting", image:"https://chinalangsheng.com/wp-content/uploads/2026/05/Hbf78a8af447c4f39a9bf4c4352ccf2712.jpg", url:"https://chinalangsheng.com/product/pyramid-shape-led-night-lamp-rechargeable-touch-dimming-portable-table-lamp/" },
  { title:"Seasonal Flameless Candle Collection", category:"Seasonal Products", image:"../seasonal-products.webp", url:"https://chinalangsheng.com/product-category/flameless-candle/christmas-series/" },
  { title:"Christmas LED Candle and Light Collection", category:"Seasonal Products", image:"../seasonal-candles.webp", url:"https://chinalangsheng.com/product-category/flameless-candle/christmas-series/" }
];

const PAGE_SIZE = 16;
const state = { category:"all", subcategory:"all", query:"", sort:"featured", page:1 };
const grid = document.querySelector("#product-grid");
const count = document.querySelector("#results-count");
const pagination = document.querySelector("#pagination");
const emptyState = document.querySelector("#empty-state");
const clearButton = document.querySelector("#clear-filters");
const searchInput = document.querySelector("#product-search");
const sortSelect = document.querySelector("#product-sort");
const categoryButtons = [...document.querySelectorAll("[data-category]")];
const subcategoryButtons = [...document.querySelectorAll("[data-subcategory]")];
const categoryDropdown = document.querySelector(".category-dropdown");
const submenuToggle = document.querySelector(".submenu-toggle");

const normalized = (value) => value.toLocaleLowerCase().replace(/\s+/g," ").trim();

function filteredProducts() {
  let items = PRODUCTS.filter((product) => {
    const categoryMatches = state.category === "all" || product.category === state.category;
    const subcategoryMatches = state.subcategory === "all" || product.subcategory === state.subcategory;
    const haystack = normalized([product.title,product.category,product.subcategory || ""].join(" "));
    return categoryMatches && subcategoryMatches && (!state.query || haystack.includes(normalized(state.query)));
  });
  if (state.sort === "az") items = items.sort((a,b) => a.title.localeCompare(b.title));
  if (state.sort === "za") items = items.sort((a,b) => b.title.localeCompare(a.title));
  return items;
}

function productCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.innerHTML = `<a href="${product.url}" aria-label="View ${product.title}">
    <div class="product-media"><img src="${product.image}" alt="${product.title}" width="720" height="806" loading="lazy" /></div>
    <div class="product-copy"><p class="product-category">${product.subcategory || product.category}</p><h2 class="product-title">${product.title}</h2></div>
  </a>`;
  return article;
}

function goToPage(page) {
  state.page = page;
  render();
  document.querySelector(".results-meta").scrollIntoView({behavior:"smooth",block:"start"});
}

function renderPagination(totalPages) {
  pagination.replaceChildren();
  if (totalPages <= 1) return;
  const previous = document.createElement("button");
  previous.type = "button"; previous.textContent = "Prev"; previous.disabled = state.page === 1;
  previous.addEventListener("click",() => goToPage(state.page - 1));
  pagination.append(previous);
  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement("button");
    button.type = "button"; button.textContent = String(page); button.setAttribute("aria-label",`Page ${page}`);
    if (page === state.page) button.setAttribute("aria-current","page");
    button.addEventListener("click",() => goToPage(page));
    pagination.append(button);
  }
  const next = document.createElement("button");
  next.type = "button"; next.textContent = "Next"; next.disabled = state.page === totalPages;
  next.addEventListener("click",() => goToPage(state.page + 1));
  pagination.append(next);
}

function setActiveButtons() {
  categoryButtons.forEach((button) => {
    const active = button.dataset.category === state.category && state.subcategory === "all";
    button.classList.toggle("is-active",active); button.setAttribute("aria-pressed",String(active));
  });
  subcategoryButtons.forEach((button) => {
    const active = button.dataset.subcategory === state.subcategory;
    button.classList.toggle("is-active",active); button.setAttribute("aria-pressed",String(active));
  });
  clearButton.hidden = state.category === "all" && state.subcategory === "all" && !state.query;
}

function render() {
  const products = filteredProducts();
  const totalPages = Math.max(1,Math.ceil(products.length / PAGE_SIZE));
  state.page = Math.min(state.page,totalPages);
  const start = (state.page - 1) * PAGE_SIZE;
  const visible = products.slice(start,start + PAGE_SIZE);
  grid.replaceChildren(...visible.map(productCard));
  grid.hidden = visible.length === 0; emptyState.hidden = visible.length !== 0;
  count.textContent = products.length ? `Showing ${start + 1}–${Math.min(start + PAGE_SIZE,products.length)} of ${products.length} products` : "0 products";
  renderPagination(products.length ? totalPages : 0); setActiveButtons();
}

categoryButtons.forEach((button) => button.addEventListener("click",() => {
  state.category = button.dataset.category; state.subcategory = "all"; state.page = 1;
  categoryDropdown.classList.remove("is-open"); submenuToggle.setAttribute("aria-expanded","false"); render();
}));
subcategoryButtons.forEach((button) => button.addEventListener("click",() => {
  state.category = "Flameless Candles"; state.subcategory = button.dataset.subcategory; state.page = 1;
  categoryDropdown.classList.remove("is-open"); submenuToggle.setAttribute("aria-expanded","false"); render();
}));
submenuToggle.addEventListener("click",() => {
  const open = categoryDropdown.classList.toggle("is-open"); submenuToggle.setAttribute("aria-expanded",String(open));
});
document.addEventListener("click",(event) => {
  if (!categoryDropdown.contains(event.target)) { categoryDropdown.classList.remove("is-open"); submenuToggle.setAttribute("aria-expanded","false"); }
});
searchInput.addEventListener("input",() => { state.query = searchInput.value; state.page = 1; render(); });
sortSelect.addEventListener("change",() => { state.sort = sortSelect.value; state.page = 1; render(); });
clearButton.addEventListener("click",() => { state.category="all"; state.subcategory="all"; state.query=""; state.page=1; searchInput.value=""; render(); });

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click",() => { const open = mainNav.classList.toggle("is-open"); menuToggle.setAttribute("aria-expanded",String(open)); });
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click",() => { mainNav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded","false"); }));
document.querySelector("#year").textContent = new Date().getFullYear();
render();
