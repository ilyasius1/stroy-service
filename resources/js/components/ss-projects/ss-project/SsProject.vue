<template>
    <div class="ss-project">
        <router-link class="ss-project__view-more" :to="`/house/${project.id}`">
            <div class="ss-project__top">
                <img class="ss-project__img" :src="project.imgSrc" alt="" />
                <div class="ss-project__line">
                    <p class="ss-project__s ss-project__line-item">
                        Площадь: <br />
                        {{ project.s }}м<sup>2</sup>
                    </p>
                    <p class="ss-project__size ss-project__line-item">
                        Размер: <br />
                        {{ project.size.width }}X{{ project.size.height }}м
                    </p>
                    <p class="ss-project__baddroom ss-project__line-item">
                        Спальни: <br />
                        {{ project.bedroom }}
                    </p>
                    <p class="ss-project__bathroom ss-project__line-item">
                        Санузлы: <br />
                        {{ project.bathroom }}
                    </p>
                </div>
            </div>
        </router-link>
        <div class="ss-project__middle">
            <p class="ss-project__name">
                Проект дома {{ project.projectName }}
            </p>
        </div>
        <div class="ss-project__bottom">
            <img
                src="@assets/img/ss-projects/shopping_cart_caddy_icon_185995.png"
                alt=""
                class="ss-project__cart"
            />
            <div class="ss-project__minprice">
                <p class="ss-project__minprice-header">Цена от</p>
                <p class="ss-project__minprice-summ">
                    {{ formattedPrice(project.minprice) }}Р
                </p>
            </div>
            <router-link
                class="ss-project__view-more"
                :to="`/house/${project.id}`"
            >
                <SsBtn class="ss-project__btn"
                    ><span> Смотреть подробнее</span>
                    <img
                        src="@assets/img/ss-projects/free-icon-font-eye-3917112.svg"
                        alt=""
                /></SsBtn>
            </router-link>
        </div>
    </div>
</template>
<script src="./ss-project.js"></script>
