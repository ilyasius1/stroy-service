<template>
    <div class="ss-send-us" @mouseover="show" @mouseout.self="hide">
        <div v-if="isVisible" class="ss-send-us__links">
<!--            <a href="" class="ss-send-us__link">-->
<!--                <img-->
<!--                    src="@assets/img/ss-send-us/telegram_logo_icon_134592.svg"-->
<!--                    alt=""-->
<!--                    class="ss-send-us__icon"-->
<!--                />-->
<!--            </a>-->
<!--            <a href="" class="ss-send-us__link">-->
<!--                <img-->
<!--                    src="@assets/img/ss-send-us/vk_logo_icon_134603.svg"-->
<!--                    alt=""-->
<!--                    class="ss-send-us__icon"-->
<!--                />-->
<!--            </a>-->
            <a href="https://api.whatsapp.com/send?phone=89524876459" class="ss-send-us__link">
                <img
                    src="@assets/img/ss-send-us/whatsapp_logo_icon_134602.svg"
                    alt=""
                    class="ss-send-us__icon"
                />
            </a>
<!--            <a href="" class="ss-send-us__link">-->
<!--                <img-->
<!--                    src="@assets/img/ss-send-us/youtube_logo_icon_134601.svg"-->
<!--                    alt=""-->
<!--                    class="ss-send-us__icon"-->
<!--                />-->
<!--            </a>-->
<!--            <a href="" class="ss-send-us__link">-->
<!--                <img-->
<!--                    src="@assets/img/ss-send-us/weechat_logo_icon_134614.svg"-->
<!--                    alt=""-->
<!--                    class="ss-send-us__icon"-->
<!--                />-->
<!--            </a>-->
        </div>
        <div class="ss-send-us__main-btn">
            <img
                src="@assets/img/ss-send-us/bubble_chat_messenger_conversation_message_talk_icon_185962.png"
                alt=""
            />
            <div v-if="isVisible" class="ss-send-us__before">Напишите нам</div>
        </div>
    </div>
</template>
<script src="./ss-send-us.js"></script>
