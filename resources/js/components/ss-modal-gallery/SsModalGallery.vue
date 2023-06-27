<template>
  <div class="ss-modal-gallery">
    <SsBtn
      @click.stop="closeGallery"
      class="ss-btn--grey ss-modal-gallery__close"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512.021 512.021"
        xml:space="preserve"
        width="512"
        height="512"
        fill="#ffffff"
      >
        <g>
          <path
            d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
          ></path>
        </g>
      </svg>
    </SsBtn>
    <img :src="images[currentImage]" class="ss-modal-gallery__image" />
    <div
      @click="setPrevImage"
      class="ss-house__nav-button ss-house__nav-button--prev"
    ></div>
    <div
      @click="setNextImage"
      class="ss-house__nav-button ss-house__nav-button--next"
    ></div>
  </div>
</template>

<script src="./ss-modal-gallery.js"></script>
