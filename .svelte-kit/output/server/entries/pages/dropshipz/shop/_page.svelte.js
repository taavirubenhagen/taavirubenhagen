import { c as create_ssr_component, h as each, e as escape } from "../../../../chunks/index2.js";
/* empty css                         */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main class="${"font-sans"}"><section class="${"w-screen h-screen background p-8 md:p-16"}"><h2 class="${"mb-24"}">Shop
    </h2>
    <div class="${"flex flex-wrap gap-16"}">${each([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], (e, i) => {
    return `<div class="${"transition duration-200 relative w-64"}"><img src="${"https://api.lorem.space/image/" + escape(["watch", "furniture", "fashion"][i % 3], true) + "?w=150&h=150"}" alt="${"Shop Item"}" class="${"rounded-lg w-full primary"}">
                <div class="${"absolute z-10 bottom-0 backdrop-brightness-75 backdrop-blur-sm rounded-b-lg w-full p-4 flex flex-col items-end"}"><div class="${"w-full flex flex-col"}"><h5 class="${"text-white"}">Inkless Pen</h5>
                        <h5 class="${"text-white"}">15$</h5></div>
                    </div>
            </div>`;
  })}</div></section></main>`;
});
export {
  Page as default
};
