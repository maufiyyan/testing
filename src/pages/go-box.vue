<template>
  <div id="home">
    <section class="banner">
      <v-lazy-image
        class="full-width"
        src="https://lelogama.go-jek.com/component/hero/picture/GoBox_HeroBanner_desktop.jpg"
        src-placeholder="./static/img/placeholder_b.jpg"
      /> 
      <div class="container">
        <div class="banner__content text-align">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1>Heavy lifting? We got it movin'</h1>
                    <p>
                        <em style="color:#f0b323"><strong>#ThereIsAlwaysAWay</strong></em>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
    <section class="container-fluid c-information px-0">
      <div class="container px-md-0">
          <div class="row align-items-center">
              <div class="col-12 col-lg-6">
                  <div class="row">
                      <div class="col-12">
                          <v-lazy-image
                            src="https://lelogama.go-jek.com/component/information/super-app.jpg"
                            src-placeholder="./static/img/placeholder_b.jpg"
                          />
                      </div>
                  </div>
              </div>
              <div class="col-12 col-lg-6 c-information__text--right">
                  <h2 class="mb-2 c-information__title">
                      Meet Solv, Gojek’s new logo
                  </h2>
                  <div class="mb-2 mb-md-4 c-information__description">
                      Our new logo symbolizes Gojek’s transformation from being a ride-hailing service to becoming the largest Super App, with a variety of smart ways to eliminate hassles.
                  </div> 
                  <div class="row">
                      <div class="col-auto">
                          <router-link to="/" class="c-information__link">Find Out Here <font-awesome-icon icon="arrow-right"></font-awesome-icon></router-link>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row">
        <div class="container px-0 swiper_1">
           <swiper :options="swiperOption">
            <template v-for="s in swiper_home_1">
              <swiper-slide>
                <v-lazy-image
                  :src="s.src"
                  src-placeholder="./static/img/placeholder_b.jpg"
                /> 
              </swiper-slide>
            </template>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row">
        <div class="container px-0">
          <h2 class="c-information__title c-information__title--medium">Our Services</h2>
          <br/>
          <template v-for="d in data_services">
            <sliderService :data="d"/>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/css/home.styl'
import VLazyImage from "v-lazy-image";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import sliderService from '@/components/swiper-slider-home'
export default {
  name: 'go-box',
  data () {
    return {
      swiper_home_1:[
        {
          src:'https://lelogama.go-jek.com/component/banner/picture/english2x_goride_eng_desktop.jpg'
        },
        {
          src:'https://lelogama.go-jek.com/component/banner/picture/English_gocar_dekstop_2.jpg'
        },
        {
          src:'https://lelogama.go-jek.com/component/banner/picture/english2x_desktop_gofood_2.jpg'
        },
        {
          src:'https://lelogama.go-jek.com/component/banner/picture/english2x_desktop_2_gopay.jpg'
        },
      ],
      swiperOption: {
        pagination: {
          slidesPerView: 1,
          el: '.swiper-pagination'
        }
      },
      data_services:[
        {
          title:'Transport & Logistics',
          description:'Moving something (or someone) from point A to point B? Our Gojek drivers in green jackets and helmets save your time, and energy.',
          features:[
            {
              src:'https://lelogama.go-jek.com/service_icon/goride_icon_new.svg',
              desc:'Over 2 million drivers nationwide are ready to drive you safely through the traffic.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gocar_icon_new.svg',
              desc:'Hundreds of thousands of drivers to drive you safely with comfort and convenience.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gosend_icon_new.svg',
              desc:'Fast, reliable, and convenient delivery service for your daily needs. Order GoSend now!'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gosend_icon_new.svg',
              desc:'Fast, reliable, and convenient delivery service for your daily needs. Order GoSend now!'
            },
          ]
        },
        {
          title:'Food & FMCG',
          description:'Order food from a whole lotta restaurants, get medicines delivered in a jiffy, or fill your shopping cart from many a mart.',
          features:[
            {
              src:'https://lelogama.go-jek.com/service_icon/gofood_icon_new.svg',
              desc:'The largest food delivery service in Indonesia and Southeast Asia.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gofood_icon_new.svg',
              desc:'The largest food delivery service in Indonesia and Southeast Asia.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gofood_icon_new.svg',
              desc:'The largest food delivery service in Indonesia and Southeast Asia.'
            },
          ]
        },
        {
          title:'Payments',
          description:'From split the bills to donations, we make payments reliable, easy and delightful for our customers and merchants alike.',
          features:[
            {
              src:'https://lelogama.go-jek.com/service_icon/gopay_icon_new.svg',
              desc:'Lihat cara top up GoPay (isi saldo) via driver, Alfamart, bank BCA, BRI, Mandiri, BNI, dan lainnya di sini. Lihat juga cara cek saldo GoPay di sini.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gopay_icon_new.svg',
              desc:'Lihat cara top up GoPay (isi saldo) via driver, Alfamart, bank BCA, BRI, Mandiri, BNI, dan lainnya di sini. Lihat juga cara cek saldo GoPay di sini.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gopay_icon_new.svg',
              desc:'Lihat cara top up GoPay (isi saldo) via driver, Alfamart, bank BCA, BRI, Mandiri, BNI, dan lainnya di sini. Lihat juga cara cek saldo GoPay di sini.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gopay_icon_new.svg',
              desc:'Lihat cara top up GoPay (isi saldo) via driver, Alfamart, bank BCA, BRI, Mandiri, BNI, dan lainnya di sini. Lihat juga cara cek saldo GoPay di sini.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gopay_icon_new.svg',
              desc:'Lihat cara top up GoPay (isi saldo) via driver, Alfamart, bank BCA, BRI, Mandiri, BNI, dan lainnya di sini. Lihat juga cara cek saldo GoPay di sini.'
            }
          ]
        },
        {
          title:'Daily Needs',
          description:'Those regular chores that call for your attention? We have all products under daily needs to make your life simpler and hassle-free.',
          features:[
            {
              src:'https://lelogama.go-jek.com/service_icon/gomassage_icon_new.svg',
              desc:'Recharge your body and experience your very own version of on demand massage!'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gomassage_icon_new.svg',
              desc:'Recharge your body and experience your very own version of on demand massage!'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gomassage_icon_new.svg',
              desc:'Recharge your body and experience your very own version of on demand massage!'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/gomassage_icon_new.svg',
              desc:'Recharge your body and experience your very own version of on demand massage!'
            },
          ]
        },
        {
          title:'News & Entertainment',
          description:'Binge on your favourite series, book tickets to the next concert, organise celebrity events, and do much more. All your treasured digital content belong here.',
          features:[
            {
              src:'https://lelogama.go-jek.com/service_icon/go-play-vertical.svg',
              desc:'Movie/series streaming and download service from Gojek.'
            },
            {
              src:'https://lelogama.go-jek.com/service_icon/go-play-vertical.svg',
              desc:'Movie/series streaming and download service from Gojek.'
            },
          ]
        },
      ]
    }
  },
  components:{
    VLazyImage,
    swiper,
    swiperSlide,
    sliderService
  },
}
</script>