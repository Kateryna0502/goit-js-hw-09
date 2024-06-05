import"./assets/styles-a47092d1.js";import{S as r}from"./assets/vendor-10cb7c31.js";const i=document.querySelector(".gallery"),t=galleryItems.map(({preview:l,original:a,description:e})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img class="gallery-image" src="${l}" alt="${e}" />
    </a>
  </li>
`).join("");i.innerHTML=t;new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
