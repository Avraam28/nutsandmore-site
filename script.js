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

// ---- Category details (edit these lists to match what's in the shop) ----
// Each item: [Greek name, English name, Greek note, English note]
const categories = {
  nuts: {
    img: "images/p8.jpg",
    el: { t: "Ξηροί καρποί", i: "Ωμοί, καβουρδισμένοι ή αλατισμένοι — τους ζυγίζουμε όσους θέλετε." },
    en: { t: "Nuts", i: "Raw, roasted or salted — weighed out in whatever quantity you like." },
    items: [
      ["Αμύγδαλα", "Almonds", "ωμά, καβουρδισμένα, καπνιστά", "raw, roasted, smoked"],
      ["Κάσιους", "Cashews", "ωμά, ψημένα, αλατισμένα", "raw, roasted, salted"],
      ["Καρύδια", "Walnuts", "ψίχα", "shelled"],
      ["Φουντούκια", "Hazelnuts", "ωμά ή καβουρδισμένα", "raw or roasted"],
      ["Φιστίκια Αιγίνης", "Pistachios", "με ή χωρίς αλάτι", "salted or unsalted"],
      ["Πεκάν", "Pecans", "", ""],
      ["Μακαντέμια", "Macadamia", "", ""],
      ["Καρύδια Βραζιλίας", "Brazil nuts", "", ""],
      ["Κουκουνάρι", "Pine nuts", "", ""],
      ["Αράπικα φιστίκια", "Peanuts", "ψημένα, αλατισμένα", "roasted, salted"],
      ["Πασατέμπος & ηλιόσποροι", "Pumpkin & sunflower seeds", "", ""],
      ["Στραγάλια", "Roasted chickpeas", "", ""]
    ]
  },
  dry: {
    img: "images/p11.jpg",
    el: { t: "Αποξηραμένα φρούτα", i: "Γλυκά, μαλακά και γεμάτα γεύση — ιδανικά για σνακ, γλυκά και πιατέλες." },
    en: { t: "Dried fruits", i: "Sweet, soft and full of flavour — perfect for snacking, baking and platters." },
    items: [
      ["Βερίκοκα", "Apricots", "", ""],
      ["Χουρμάδες", "Dates", "Medjool & άλλες ποικιλίες", "Medjool & other varieties"],
      ["Σύκα", "Figs", "", ""],
      ["Δαμάσκηνα", "Prunes", "", ""],
      ["Κράνμπερι", "Cranberries", "", ""],
      ["Μάνγκο", "Mango", "", ""],
      ["Ανανάς", "Pineapple", "", ""],
      ["Παπάγια", "Papaya", "", ""],
      ["Σταφίδες", "Raisins", "μαύρες & ξανθές", "dark & golden"],
      ["Ακτινίδιο", "Kiwi", "", ""],
      ["Goji berries", "Goji berries", "", ""],
      ["Μπανάνα τσιπς", "Banana chips", "", ""]
    ]
  },
  plat: {
    img: "images/p5.jpg",
    el: { t: "Πιατέλες", i: "Χειροποίητες πιατέλες με ξηρούς καρπούς, αποξηραμένα φρούτα και λιχουδιές, σε όποιο μέγεθος χρειάζεστε." },
    en: { t: "Platters", i: "Handmade platters of nuts, dried fruits and treats, in whatever size you need." },
    items: [
      ["Μικρή πιατέλα", "Small platter", "για το σπίτι ή μικρή παρέα", "for home or a small group"],
      ["Μεσαία πιατέλα", "Medium platter", "για πάρτι και γιορτές", "for parties and celebrations"],
      ["Μεγάλη πιατέλα", "Large platter", "για μεγάλες εκδηλώσεις", "for big events"],
      ["Ξύλινη τάβλα", "Wooden board", "μακρόστενη παρουσίαση", "long serving board"],
      ["Βαφτίσια & γάμοι", "Christenings & weddings", "στα χρώματα της εκδήλωσης", "in your event's colours"],
      ["Εταιρικές εκδηλώσεις", "Corporate events", "κατά παραγγελία", "made to order"]
    ]
  },
  pack: {
    img: "images/p9.jpg",
    el: { t: "Πακέτα δώρου", i: "Δώρα που φτιάχνουμε με μεράκι — διαλέξτε έτοιμο ή φτιάξτε το δικό σας." },
    en: { t: "Gift packages", i: "Gifts made with care — pick a ready one or build your own." },
    items: [
      ["Ξύλινο καφάσι δώρου", "Wooden gift crate", "", ""],
      ["Κουτί δώρου", "Gift box", "σε διάφορα μεγέθη", "in various sizes"],
      ["Βάζα με ξηρούς καρπούς", "Nut jars", "", ""],
      ["Χριστουγεννιάτικα δώρα", "Christmas gifts", "", ""],
      ["Πασχαλινά δώρα", "Easter gifts", "", ""],
      ["Εταιρικά δώρα", "Corporate gifts", "με την ετικέτα σας", "with your own label"]
    ]
  },
  sweet: {
    img: "images/p12.jpg",
    el: { t: "Λιχουδιές", i: "Γλυκές μπουκιές για να συνοδέψουν τον καφέ σας ή να ολοκληρώσουν μια πιατέλα." },
    en: { t: "Treats", i: "Sweet bites to go with your coffee or finish off a platter." },
    items: [
      ["Γεμιστά βερίκοκα & χουρμάδες", "Stuffed apricots & dates", "", ""],
      ["Ρολά φρούτων", "Fruit rolls", "", ""],
      ["Καραμελωμένοι ξηροί καρποί", "Caramelised nuts", "", ""],
      ["Κουφέτα σοκολάτας", "Chocolate dragées", "λευκή, γάλακτος, μαύρη", "white, milk, dark"],
      ["Αμύγδαλα σε σοκολάτα", "Chocolate-coated almonds", "", ""],
      ["Φράουλες σε σοκολάτα", "Chocolate strawberries", "", ""]
    ]
  },
  snack: {
    img: "images/p6.jpg",
    el: { t: "Σνακ", i: "Τραγανά, αλμυρά και έτοιμα για κάθε στιγμή." },
    en: { t: "Snacks", i: "Crunchy, savoury and ready for any moment." },
    items: [
      ["Κράκερ", "Crackers", "", ""],
      ["Μείγματα ξηρών καρπών", "Nut mixes", "", ""],
      ["Μείγμα φοιτητή", "Trail mix", "", ""],
      ["Αρακάς wasabi", "Wasabi peas", "", ""],
      ["Καλαμπόκι ψητό", "Corn nuts", "", ""],
      ["Έτοιμα σακουλάκια", "Ready packs", "για το γραφείο ή το σχολείο", "for work or school"]
    ]
  }
};

const notes = {
  el: "Η διαθεσιμότητα αλλάζει ανάλογα με την εποχή — ρωτήστε μας για τιμές και ό,τι άλλο ψάχνετε.",
  en: "Availability changes with the season — ask us for prices and anything else you're looking for."
};
const moreText = { el: "Δείτε τις ποικιλίες →", en: "See the selection →" };

const dialog = document.getElementById("cat-dialog");
const order = ["nuts", "dry", "plat", "pack", "sweet", "snack"];
let openCat = null;

function renderCat(key) {
  const c = categories[key], L = current === "en" ? "en" : "el";
  dialog.querySelector(".cat-img").src = c.img;
  dialog.querySelector("#cat-title").textContent = c[L].t;
  dialog.querySelector(".cat-intro").textContent = c[L].i;
  dialog.querySelector(".cat-note").textContent = notes[L];
  const ul = dialog.querySelector(".cat-items");
  ul.innerHTML = "";
  c.items.forEach(([gr, en, gn, enn]) => {
    const li = document.createElement("li");
    const s = document.createElement("strong");
    s.textContent = L === "en" ? en : gr;
    li.appendChild(s);
    const note = L === "en" ? enn : gn;
    if (note) { const sp = document.createElement("span"); sp.textContent = note; li.appendChild(sp); }
    ul.appendChild(li);
  });
}

function openDialog(key) {
  openCat = key;
  renderCat(key);
  dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelectorAll("#products .card").forEach((card, i) => {
  const key = order[i];
  if (!key) return;
  card.dataset.cat = key;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  const more = document.createElement("span");
  more.className = "more";
  card.querySelector(".card-body").appendChild(more);
  card.addEventListener("click", () => openDialog(key));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDialog(key); }
  });
});

function updateMore() {
  document.querySelectorAll("#products .more").forEach(m => { m.textContent = moreText[current === "en" ? "en" : "el"]; });
  if (dialog.open && openCat) renderCat(openCat);
}
updateMore();
document.getElementById("lang").addEventListener("click", updateMore);

dialog.querySelector(".cat-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
