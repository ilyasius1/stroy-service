<template>
  <SsLoader v-if="loading && !hasError" />
  <div class="ss-house" v-if="!loading && !hasError">
    <SsSectionHeader>Проект дома {{ house.projectName }}</SsSectionHeader>
    <div class="ss-house__info">
      <div class="ss-house__slider">
        <img
          v-if='images'
          :src="images[currentImage]"
          :alt="house.projectName"
          class="ss-house__slider-image"
          @click="openGallery(currentImage)"
        />

        <div
          @click="setPrevImage"
          class="ss-house__nav-button ss-house__nav-button--prev"
        ></div>
        <div
          @click="setNextImage"
          class="ss-house__nav-button ss-house__nav-button--next"
        ></div>
      </div>
      <div class="ss-house__general general">
        <div class="general__infoblock">
          <p class="general__header">Без отделки</p>
          <p>Цены:</p>
          <div class="general__prices">
            <p v-for="(price, key) in withoutFinishingPrices" :key="key">
              <span> {{ formattedPrice(price.price) }} Р</span> ({{
                    findSize(price.sizeId).title
              }}
              под усадку)
            </p>
          </div>
          <p class="general__floor">
            Этажность: {{ house.floor }} этаж
            <span v-if="house.mansarda">+ мансарда</span>.
          </p>
          <p class="general__s">Жилая площадь: {{ house.s }} м<sup>2</sup></p>
          <p>Срок строительства: {{ house.constructionPeriod }}</p>
          <p>Размеры в плане: {{ house.sizeOnPlan }}</p>
          <p>Доставка до 500 км: 0 руб.</p>
          <p>Оплата: без предоплаты</p>
          <p class="general__info">Стоимость проекта указана со сборкой!</p>
          <SsBtn
            @click="
              openModal({
                header: 'Оформление заказа',
                house: {
                  id: house.id,
                  name: house.projectName,
                },
              })
            "
            class="general__btn ss-btn--grey"
            >Заказать</SsBtn
          >
        </div>
        <div class="general__infoblock">
          <p class="general__header">Под ключ</p>
          <p>Цены:</p>
          <div class="general__prices">
            <p v-for="(price, key) in fullConstructionPrices" :key="key">
              <span> {{ formattedPrice(price.price) }} Р</span> ({{
                    findSize(price.sizeId).title
              }}
              под ключ)
            </p>
          </div>
          <p class="general__item general__floor">
            Этажность: {{ house.floor }} этаж
            <span v-if="house.mansarda">+ мансарда</span>.
          </p>
          <p class="general__item general__s">
            Жилая площадь: {{ house.s }} м<sup>2</sup>
          </p>
          <p class="general__item general__constructionPeriod">
            Срок строительства: {{ house.constructionPeriod }}
          </p>
          <p class="general__item general__sizeOnPlan">
            Размеры в плане: {{ house.sizeOnPlan }}
          </p>
          <p>Доставка до 500 км: 0 руб.</p>
          <p>Оплата: без предоплаты</p>
          <p class="general__info">Стоимость проекта указана со сборкой!</p>
          <SsBtn
            @click="
              openModal({
                header: 'Оформление заказа',
                house: {
                  id: house.id,
                  name: house.projectName,
                },
              })
            "
            class="general__btn ss-btn--green"
            >Заказать</SsBtn
          >
        </div>
      </div>
    </div>
    <div class="ss-house__thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="image"
        @click="openGallery(index)"
        class="ss-house__thumbnail"
      />
    </div>
    <SsSectionHeader>Варианты комплектаций</SsSectionHeader>
    <div class="ss-house__variables variables">
      <div class="variables__conteiner">
        <div class="variables__col">
          <div class="variables__header variables__header--fullConstruction">
            <p>Под ключ</p>
            <span>{{ fullConstructionPrices[0]?.price }}Р</span>
          </div>
          <div class="variables__list-cont">
            <ol class="variables__list">
              <li
                v-for="(full, key) in house.complects?.fullConstruction"
                :key="key"
              >
                {{ full }}
              </li>
            </ol>
          </div>
        </div>
        <div class="variables__col">
          <div class="variables__header variables__header--withoutFinishing">
            <p>Без отделки</p>
            <span>{{ withoutFinishingPrices[0]?.price }}Р</span>
          </div>
          <div class="variables__list-cont">
            <ol class="variables__list">
              <li
                v-for="(full, key) in house.complects?.withoutFinishing"
                :key="key"
              >
                {{ full }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="ss-house__services services">
      <SsSectionHeader>Дополнительные услуги</SsSectionHeader>
        <ul>
          <li v-for="(service, key) in house.additionalServices"
              :key="key">
              {{ service }}
          </li>
      </ul>
    </div>
    <SsModalGallery
      v-if="zoom"
      :currentImage="currentImage"
      :images="images"
      :closeGallery="closeGallery"
      :setPrevImage="setPrevImage"
      :setNextImage="setNextImage"
    />
  </div>
  <SsNetworkError v-if='hasError'/>
</template>
<script src="./ss-house.js"></script>
