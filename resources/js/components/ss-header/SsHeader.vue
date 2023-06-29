<template>
    <div class="ss-header">
        <div class="container ss-header__container">
            <div class="ss-header__top">
                <router-link to="/" class="ss-header__home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                        fill="#fff"
                    >
                        <path
                            d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z"
                        />
                        <path
                            d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z"
                        />
                    </svg>
                </router-link>
                <div class="ss-header__social">
                    <p class="ss-header__social-sub">
                        Подписывайся на нас <br />
                        <span> в соцсетях</span>
                    </p>
                    <ssSocial />
                </div>
                <div class="ss-header__trust">
                    <img
                        src="@assets/img/ss-header/shield_icon_185994.png"
                        alt=""
                        class="ss-header__trust-image"
                    />
                    <p>
                        Нам доверяют <br />
                        <span>гарантия качества</span>
                    </p>
                </div>
                <div class="ss-header__call-back">
                    <img
                        src="@assets/img/ss-header/megafon.png"
                        alt=""
                        class="ss-header__call-back-image"
                    />
                    <div class="ss-header__call-back-cont">
                        <a
                            href="tel:+78001016234"
                            class="ss-header__call-back-tel"
                            >8 800 101 62 34</a
                        >
                        <p
                            @click="openModal({ header: 'Заказать звонок', isPhoneCallRequest: true})"
                            class="ss-header__call-back-ring"
                        >
                            Заказать звонок
                        </p>
                    </div>
                </div>
            </div>
            <div class="ss-header__middle">
                <div class="ss-header__logo-cont">
                    <router-link to="/">
                        <img
                            src="@assets/img/ss-header/logo.svg"
                            alt=""
                            class="ss-header__logo"
                        />
                    </router-link>
                    <ssSocial class="ss-header__social-mob" />
                    <SsBtn
                        class="ss-btn--green ss-header__add-task"
                        @click="
                            openModal({
                                header: 'Оформление заказа',
                            })
                        "
                        >Оставить заявку</SsBtn
                    >
                </div>
                <div class="ss-header__quality">
                    <img
                        src="@assets/img/ss-header/key.png"
                        alt=""
                        class="ss-header__quality-img"
                    />
                    <p class="ss-header__quality-text">
                        Строительсто деревянных <br />
                        домов под ключ
                    </p>
                </div>
                <div class="ss-header__quality">
                    <img
                        src="@assets/img/ss-header/cup.png"
                        alt=""
                        class="ss-header__quality-img"
                    />
                    <p class="ss-header__quality-text">
                        Большой опыт <br />
                        успешной работы
                    </p>
                </div>
            </div>
            <div class="ss-header__bottom">
                <div class="ss-header__advantages">
                    <img
                        src="@assets/img/ss-header/lightning_thunderbolt_thunder_icon_185978.png"
                        alt=""
                        class="ss-header__advantages-image"
                    />
                    <p class="ss-header__advantages-text">
                        Собственное производство
                    </p>
                </div>
                <div
                    class="ss-header__advantages ss-header__advantages--none-mob"
                >
                    <img
                        src="@assets/img/ss-header/pins_placeholders_location_map_markers_geolocation_address_icon_185988.png"
                        alt=""
                        class="ss-header__advantages-image"
                    />
                    <p class="ss-header__advantages-text">
                        Работаем по всей России
                    </p>
                </div>
                <div class="ss-header__advantages">
                    <img
                        src="@assets/img/ss-header/seal_stamp_inkpad_icon_185993.png"
                        alt=""
                        class="ss-header__advantages-image"
                    />
                    <p class="ss-header__advantages-text">
                        Квалифицированные специалисты
                    </p>
                </div>
                <div
                    class="ss-header__advantages ss-header__advantages--none-tablet"
                >
                    <img
                        src="@assets/img/ss-header/hand_like_thumbs_up_icon_185975.png"
                        alt=""
                        class="ss-header__advantages-image"
                    />
                    <p class="ss-header__advantages-text">
                        Гарантия <br />
                        на все!
                    </p>
                </div>
                <div
                    class="ss-header__advantages ss-header__advantages--none-tablet"
                >
                    <img
                        src="@assets/img/ss-header/lock_padlock_security_icon_185979.png"
                        alt=""
                        class="ss-header__advantages-image"
                    />
                    <p class="ss-header__advantages-text">
                        Максимальная комплектация
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./ss-header.js"></script>
