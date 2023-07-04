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
            <p v-for="(price, key) in house.prices?.withoutFinishing" :key="key">
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
            <p v-for="(price, key) in house.prices?.fullConstruction" :key="key">
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
            <span>4 995 000Р</span>
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
            <span>2 000 000Р</span>
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
          <li>Сухой профилированный брус 95х145 мм. 25 000 р.</li>
          <li>Сухой профилированный брус 145х145 мм. 28 000 р.</li>
          <li>Свайно-винтовой фундамент. 54 000 р.</li>
          <li>Ленточно-армированный фундамент 300х700(h) мм. 118 000 р.</li>
          <li>Зенкование гвоздей (засвирловка) 10 500 р.</li>
          <li>Скидка 50%! Сборка брусовых стен на деревянные нагеля. 28 500 р.</li>
          <li>Двойная обвязка основания – брус 150х150 мм. 9 000 р.</li>
          <li>Дополнительный венец из бруса – 95х145 мм. 9 000 р.</li>
          <li>Дополнительный венец из бруса – 145х145 мм. 11 000 р.</li>
          <li>Дополнительная брусовая перегородка 1 п.м. – 95×145 мм. 4 500 р.</li>
          <li>Дополнительная каркасная перегородка 1 п.м. – 40×100 мм. 4 000 р.</li>
          <li>Фронтоны из профилированного бруса – 95х145 мм. 10 500 р.</li>
          <li>Фронтоны из профилированного бруса – 145х145 мм. 15 000 р.</li>
          <li>Подоконник с выступом 150 мм. 1 000 р.</li>
          <li>Дополнительное окно с установкой. 4 000 р.</li>
          <li>Дополнительная дверь с установкой. 4 000 р.</li>
          <li>Окно ПВХ (однокамерный) – 1.0х1.2 м. 6 000 р.</li>
          <li>Ройки – усадочный брусок (за 1 проём). 2 000 р.</li>
          <li>Подкровельная мембранная плёнка. 8 000 р.</li>
          <li>Кровля металлочерепица «Монтерей» — толщина 0.4 – 0.5 мм. 20 000 р.</li>
          <li>Обработка основания, лаг, черновых полов – антисептиком. 8 000 р.</li>
          <li>Покраска дома с наружной стороны – Акватекс. 24 000 р.</li>
          <li>Бытовка для проживания бригады – 2.3х3.0 м. 20 000 р.</li>
          <li>Аренда генератора на весь срок строительства (бензин заказчика). 12 000 р.</li>
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
