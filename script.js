// Simple Greek / English toggle
const en = {
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.order": "Orders",
  "nav.visit": "Visit us",
  "hero.title": "Nuts, dried fruits and so much more.",
  "hero.lead": "Fresh bulk nuts, dried fruits, sweet treats and handmade platters for every table and every celebration.",
  "cta.call": "Call 94 608451",
  "cta.dm": "Send us a DM",
  "strip.1": "Bulk nuts",
  "strip.2": "Dried fruits",
  "strip.3": "Custom platters",
  "strip.4": "Gifts & packages",
  "products.title": "What you'll find",
  "products.sub": "Pick from our shelves or ask us to put together something just for you.",
  "c.nuts.t": "Nuts",
  "c.nuts.d": "Almonds, cashews, walnuts, hazelnuts, pistachios — raw or roasted, sold by weight.",
  "c.dry.t": "Dried fruits",
  "c.dry.d": "Apricots, dates, figs, cranberries, mango and many more.",
  "c.plat.t": "Platters",
  "c.plat.d": "Stunning platters for parties, holidays, christenings and corporate events.",
  "c.pack.t": "Gift packages",
  "c.pack.d": "Gift baskets and boxes, made with care for every occasion.",
  "c.sweet.t": "Treats",
  "c.sweet.d": "Stuffed fruits, caramelised nuts, chocolate dragées and sweet bites.",
  "c.snack.t": "Snacks",
  "c.snack.d": "Crunchy snacks, mixes and ready packs for any moment.",
  "shop.title": "Our shop",
  "shop.p1": "At our shop in Aradippou you'll find dozens of varieties of nuts and dried fruits — fresh and always carefully selected.",
  "shop.p2": "Drop by to taste, pick your favourites, or tell us what you need for your next event.",
  "shop.cta": "How to find us",
  "gallery.title": "From our Instagram",
  "order.title": "Orders",
  "order.p": "For platters, gift packages or large quantities, get in touch by phone or Instagram message. Please let us know a few days in advance.",
  "order.dm": "Message on Instagram",
  "visit.title": "Visit us",
  "visit.addr.t": "Address",
  "visit.addr": "Pavlou Michaila, Aradippou 7104, Larnaca, Cyprus",
  "visit.dir": "Directions on Google Maps →",
  "visit.hours.t": "Opening hours",
  "visit.contact.t": "Contact",
  "d.mon": "Monday", "d.tue": "Tuesday", "d.wed": "Wednesday", "d.thu": "Thursday",
  "d.fri": "Friday", "d.sat": "Saturday", "d.sun": "Sunday",
  "closed": "Closed"
};

const nodes = document.querySelectorAll("[data-i18n]");
const el = {};
nodes.forEach(n => { el[n.dataset.i18n] = n.innerHTML; });

function setLang(lang) {
  nodes.forEach(n => {
    const k = n.dataset.i18n;
    n.innerHTML = lang === "en" && en[k] ? en[k] : el[k];
  });
  document.documentElement.lang = lang;
  document.getElementById("lang").textContent = lang === "en" ? "ΕΛ" : "EN";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

let current = "el";
try { current = localStorage.getItem("lang") || "el"; } catch (e) {}
setLang(current);
document.getElementById("lang").addEventListener("click", () => {
  current = current === "en" ? "el" : "en";
  setLang(current);
});

document.getElementById("year").textContent = new Date().getFullYear();
