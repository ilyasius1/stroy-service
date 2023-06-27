<template>
  <div class="ss-modal-overlay" @click.self="closeModal">
    <div class="ss-modal">
      <SsBtn class="ss-btn--grey ss-modal__close-mob" @click="closeModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512.021 512.021"
          style="enable-background: new 0 0 512.021 512.021"
          xml:space="preserve"
          width="512"
          height="512"
          fill="#ffffff"
        >
          <g>
            <path
              d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
            />
          </g>
        </svg>
      </SsBtn>
      <header class="ss-modal__header">{{ getHeader }}</header>
      <p class="ss-modal__item-name" v-if="getHouse">
        Проект дома
        <router-link
          :to="`/house/${getHouse.id}`"
          class="ss-modal__item-link"
          >{{ getHouse.projectName }}</router-link
        >
      </p>
      <label for="fio" class="ss-modal__label">ФИО<span> *</span></label>
      <input
        type="text"
        name="fio"
        id="fio"
        placeholder="Как к Вам обращаться?"
        class="ss-modal__input"
        required
      />
      <label for="email" class="ss-modal__label"
        >Ваш Email<span> *</span></label
      >
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Что бы мы могли прислать Вам расчет"
        class="ss-modal__input"
        required
      />
      <label for="phone" class="ss-modal__label"
        >Ваш номер телефона<span> *</span></label
      >
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Чтобы мы могли быстро уточнить детали"
        class="ss-modal__input"
        required
      />
      <label class="ss-modal__label" for="comment">Комментарий к заявке</label>
      <textarea
        name="comment"
        id="comment"
        placeholder="Укажите интересующий проект или описание к собственному проект"
        class="ss-modal__input ss-modal__input--textarea"
      ></textarea>
      <SsBtn @click="submit" class="ss-btn--green ss-modal__send-btn"
        >Отправить заявку</SsBtn
      >
      <SsBtn class="ss-btn--grey ss-modal__close" @click="closeModal"
        >Назад</SsBtn
      >
    </div>
  </div>
</template>
<script src="./ss-modal.js"></script>
