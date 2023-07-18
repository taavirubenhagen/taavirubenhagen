import { c as create_ssr_component, h as each, v as validate_component, f as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                            */const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-8xl md:text-9xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const P2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-lg selection:text-outline-on-primary">${slots.default ? slots.default({}) : ``}</t>`;
});
const postTitle = "Offenes Kunstprojekt";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imageUrls = [
    "https://www.blitzrechner.de/wp-content/uploads/2015/05/kunstwerke-preise.jpg",
    "https://www.sueddeutsche.de/image/sz.1.5914567/1200x675?v=1686329819",
    "https://www.ahlen.de/fileadmin/Fotos_ab_Mai_2020/Bildung_Kultur/paint-brush-Pixabay.jpg",
    "https://www.akki-ev.de/wp-content/uploads/2014/04/Akki-Kunstcamp-2014.jpg",
    "https://jugendhilfeportal.de/fileadmin/_processed_/2/0/csm_jonne-huotari-S3TD7cw1rPw-unsplash_e283312479.jpg",
    "https://www.sauerlandkurier.de/bilder/2017/05/19/8328582/1429364421-sami-hfe.jpg"
  ];
  return `


<img src="/centered_explosion.png" alt="Color Explosion" class="fixed -z-5 opacity-0 w-full">
<main class="relative z-0 w-full bg-gradient-to-br from-transparent to-transparent"><div class="mt-44 flex_col_center"><div class="flex gap-4">${each(imageUrls, (url, i) => {
    return `<div class="w-64 h-64"><img${add_attribute("src", url, 0)} alt="${"Image " + escape(i, true)}" class="object-cover rounded-lg h-full">
                </div>`;
  })}</div></div>
    <div class="w-full p-8 md:p-16 pt-16 md:pt-32 md:pb-16 flex flex-wrap text-black font-logo">${each(postTitle.split(""), (letter) => {
    return `${validate_component(H1, "H1").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(letter)}`;
      }
    })}`;
  })}</div>
    <div class="p-8 md:p-16 text-black">${validate_component(P2, "P2").$$render($$result, {}, {}, {
    default: () => {
      return `Bei meinem offenen Kunstprojekt habe ich den Park mit Sachen vollgestellt und Leute in Kontakt mit ihrer k\xFCnstlerischen Seite gebracht.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `;
    }
  })}</div></main>`;
});
export {
  Page as default
};
