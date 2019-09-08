<template>
  <div id="app">
    <header class="container-fluid c-header px-0" style="border-bottom: 1px solid rgb(255, 255, 255);">
        <div class="container px-0">
            <div class="row align-items-center c-header__menu">
                <div class="col-auto">
                    <a href="/">
                        <picture class="c-header__logo">
                            <source srcset="https://lelogama.go-jek.com/service_icon_text/gojek-logo_normal.svg" type="image/svg+xml" media="(max-width: 768px)">
                            <img alt="GoJek Logo" src="https://lelogama.go-jek.com/service_icon_text/gojek-logo_normal.svg">
                        </picture>
                    </a>
                </div>
                <nav class="col-auto col-md px-0">
                    <ul class="row c-header__link hide-desktop">
                        <li class="col-auto c-header__link-item ">
                            <a href="/about">
                                About Us
                            </a>
                        </li>
                        <li class="col-auto c-header__link-item" id="link-item-service">
                            <a class="row align-items-center">
                                Services
                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                            </a>
                        </li>
                        <li class="col-auto c-header__link-item ">
                            <a href="/blog/">
                                Blog
                            </a>
                        </li>
                        <li class="col-auto c-header__link-item ">
                            <a href="/faq/">
                                Help Centre
                            </a>
                        </li>
                        <li class="col-auto c-header__link-item js-toggler-parent" id="link-item-join">
                            <a class="row align-items-center">
                                Join Us
                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                            </a>
                        </li>
                        <li class="col-auto c-header__link-item ">
                            <a href="/cerdikiawan/">
                                Cerdikiawan
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="col-auto px-0">
                    <div class="container px-0">
                        <div class="row justify-content-end hide-desktop">
                            <div class="col col-auto" data-toggle="#c-language,#c-link-menu-lang">
                                <div class="row align-items-center c-header__link o-cursor__pointer">
                                    <font-awesome-icon icon="globe" class="c-header__link-icon-left"></font-awesome-icon>
                                    <div id="c-link-menu-lang" class="col c-header__link-item c-header__link-item__lang row align-items-center">
                                        English 
                                    </div>
                                    <font-awesome-icon class="c-header__link-icon-second" icon="angle-down"></font-awesome-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="c-footer">
        <div class="container-fluid px-0">
            <div class="container px-0">
                <div class="row">
                    <div class="col-12">
                        <div class="row c-footer__wrapper">

                            <div id="f-logo" class="c-fitem c-fitem--logo col-12 col-md-4">
                                <a href="/" class="c-fitem__a">
                                    <img class="c-fitem__logo defer" data-src="https://d1j87w3j7cc3a6.cloudfront.net/media/gojek/media/images/gojek-white-text.svg" src="https://d1j87w3j7cc3a6.cloudfront.net/media/gojek/media/images/gojek-white-text.svg" alt="GoJek Logo">
                                </a>
                            </div>
                            <div class="col-12 col-md-6">
                              <div class="row">
                                <div id="f-about" class="c-fitem c-fitem--list col-12 col-md-4">
                                    <h3 class="c-fitem__title">About Gojek</h3>
                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="https://career.go-jek.com/">Careers</a></li>
                                            <li class="c-fitem__list-item"><a href="/blog/semua-blog/">Blog</a></li>
                                            <li class="c-fitem__list-item"><a href="/blog/media-center/">Media Centre</a></li>
                                            <li class="c-fitem__list-item"><a href="https://www.gojek.com/about/">About Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="f-support" class="c-fitem c-fitem--list col-12 col-md-4">
                                    <h3 class="c-fitem__title">Support</h3>
                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="/contact/">Contact Us</a></li>
                                            <li class="c-fitem__list-item"><a href="/privacy-policies/">Privacy Policy</a></li>
                                            <li class="c-fitem__list-item"><a href="/terms-and-condition/">Terms &amp; Conditions</a></li>
                                            <li class="c-fitem__list-item"><a href="/faq/">Help Centre</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <div id="f-social" class="c-fitem c-fitem--social col-12 col-md-4">
                                    <h3 class="c-fitem__title">Follow Us On</h3>
                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item">
                                                <a href="http://facebook.com/gojekindonesia">
                                                    <i class="c-fitem__icon gi gi-facebook"></i>
                                                    <span class="c-fitem__social-text">Facebook</span>
                                                </a>
                                            </li>
                                            <li class="c-fitem__list-item">
                                                <a href="https://twitter.com/gojekindonesia">
                                                    <i class="c-fitem__icon gi gi-twitter"></i>
                                                    <span class="c-fitem__social-text">Twitter</span>
                                                </a>
                                            </li>
                                            <li class="c-fitem__list-item">
                                                <a href="https://www.instagram.com/gojekindonesia/">
                                                    <i class="c-fitem__icon gi gi-instagram"></i>
                                                    <span class="c-fitem__social-text">Instagram</span>
                                                </a>
                                            </li>
                                            <li class="c-fitem__list-item">
                                                <a href="https://www.youtube.com/channel/UCmlKSK0OKn_B3oPwElW4n5w">
                                                    <i class="c-fitem__icon gi gi-youtube"></i>
                                                    <span class="c-fitem__social-text">Youtube</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div id="f-download" class="c-fitem c-fitem--download col-12 col-md-2">
                                <h3 class="c-fitem__title">Download</h3>
                                <div class="c-download">
                                    <div class="c-download__container">
                                        <a href="https://gojek.onelink.me/2351932542?af_banner=true&amp;pid=Go-Jek_Web&amp;c=WebToAppBanner&amp;af_adset=bottom-banner&amp;af_ad=%2Fv4%2F&amp;af_dp=gojek%3A%2F%2Fhome" class="c-download__item">
                                            <img data-src="https://lelogama.go-jek.com/component/nav/picture/google-play-badge3x-p.png" data-srcset="https://lelogama.go-jek.com/cache/1e/aa/1eaaab41ce5c18194149550285c565b4.jpg 400w, https://lelogama.go-jek.com/cache/01/d1/01d1b997ef8a62cd96af80273dcc60b2.jpg 800w, https://lelogama.go-jek.com/cache/c5/0b/c50ba49bc9d41657404189fafe60cefc.jpg 3000w" class="lazy loaded" alt="Play Store Download Link" type="image/jpeg" srcset="https://lelogama.go-jek.com/cache/1e/aa/1eaaab41ce5c18194149550285c565b4.jpg 400w, https://lelogama.go-jek.com/cache/01/d1/01d1b997ef8a62cd96af80273dcc60b2.jpg 800w, https://lelogama.go-jek.com/cache/c5/0b/c50ba49bc9d41657404189fafe60cefc.jpg 3000w" src="https://lelogama.go-jek.com/component/nav/picture/google-play-badge3x-p.png" data-was-processed="true">
                                        </a>

                                        <a href="https://gojek.onelink.me/2351932542?af_banner=true&amp;pid=Go-Jek_Web&amp;c=WebToAppBanner&amp;af_adset=bottom-banner&amp;af_ad=%2Fv4%2F&amp;af_dp=gojek%3A%2F%2Fhome" class="c-download__item">
                                            <img data-src="https://lelogama.go-jek.com/component/nav/picture/app-store-badge3x-p.png" data-srcset="https://lelogama.go-jek.com/cache/54/5b/545b0e137c6d007b78c8da80ae61aaff.jpg 400w, https://lelogama.go-jek.com/cache/14/c7/14c78667d62c014b49ebb21158fa0a0a.jpg 800w, https://lelogama.go-jek.com/cache/79/34/79349ff69dd80242d75601fa3f1f94a0.jpg 3000w" class="lazy loaded" alt="App Store Download Link" type="image/jpeg" srcset="https://lelogama.go-jek.com/cache/54/5b/545b0e137c6d007b78c8da80ae61aaff.jpg 400w, https://lelogama.go-jek.com/cache/14/c7/14c78667d62c014b49ebb21158fa0a0a.jpg 800w, https://lelogama.go-jek.com/cache/79/34/79349ff69dd80242d75601fa3f1f94a0.jpg 3000w" src="https://lelogama.go-jek.com/component/nav/picture/app-store-badge3x-p.png" data-was-processed="true">
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row c-footer__wrapper">
                            <div class="col-12 col-md-4">
                              <div class="row">
                                <div id="f-transport-logistics" class="c-fitem c-fitem--dropdown js-toggler-parent c-fitem--dropdown-1 col-12 col-md-7">
                                    <h3 class="c-fitem__title js-toggler">
                                        Transport &amp; Logistics
                                        <i class="c-fitem__caret gi gi-caret-down"></i>
                                    </h3>
                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="/goride/">GoRide</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gocar/">GoCar</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gosend/">GoSend</a>
                                            </li>
                                            <li class="c-fitem__list-item"><router-link to="/gobox">GoBox</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="f-food-fmcg" class="c-fitem c-fitem--dropdown js-toggler-parent c-fitem--dropdown-2 col">
                                    <h3 class="c-fitem__title js-toggler">
                                        Food &amp; FMCG
                                        <i class="c-fitem__caret gi gi-caret-down"></i>
                                    </h3>
                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="/gofood/">GoFood</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gofoodfestival/">GoFood Festival</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gomed/">GoMed</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6">
                              <div class="row">
                                <div id="f-payments" class="c-fitem c-fitem--dropdown js-toggler-parent c-fitem--dropdown-3 col-12 col-md-4">
                                    <h3 class="c-fitem__title js-toggler">
                                        Payments
                                        <i class="c-fitem__caret gi gi-caret-down"></i>
                                    </h3>

                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="/gopay/">GoPay</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gobills/">GoBills</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gopoints/">GoPoints</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/paylater/">PayLater</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gopulsa/">GoPulsa</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="f-daily-needs" class="c-fitem c-fitem--dropdown js-toggler-parent c-fitem--dropdown-4 col-12 col-md-4">
                                    <h3 class="c-fitem__title js-toggler">
                                        Daily Needs
                                        <i class="c-fitem__caret gi gi-caret-down"></i>
                                    </h3>
                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="/gomassage/">GoMassage</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/goclean/">GoClean</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/goauto/">GoAuto</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/goglam/">GoGlam</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="https://www.go-life.co.id/layanan/go-laundry/">GoLaundry</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="https://www.go-life.co.id/layanan/go-daily/">GoDaily</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="https://www.go-life.co.id/layanan/go-fix/">GoFix</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="f-news-entertainment" class="c-fitem c-fitem--dropdown js-toggler-parent c-fitem--dropdown-5 col-12 col-md-4">
                                    <h3 class="c-fitem__title js-toggler">
                                        News &amp; Entertainment
                                        <i class="c-fitem__caret gi gi-caret-down"></i>
                                    </h3>

                                    <div class="c-fitem__content">
                                        <ul class="c-fitem__list">
                                            <li class="c-fitem__list-item"><a href="/goplay/">GoPlay</a>
                                            </li>
                                            <li class="c-fitem__list-item"><a href="/gotix/">GoTix</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                              </div>
                            </div>
                        </div>
                        <div class="row c-footer__wrapper">
                          <div class="col">
                            <div id="f-location" class="c-fitem c-fitem--location js-toggler-parent float-right">
                                <h3 id="country-select-button" class="c-fitem__title c-fitem__title d-md-none">
                                    <span class="c-fitem__title-left">
                                        <i class="c-fitem__icon gi gi-icon gi-location"></i>
                                        Location
                                    </span>

                                    <span class="c-fitem__title-right">
                                        <span class="c-fitem__selected">
                                            Indonesia
                                        </span>
                                        <i class="c-fitem__caret gi gi-caret-up"></i>
                                    </span>
                                </h3>

                                <h3 id="country-select-desktop" class="c-fitem__title c-fitem__title--desktop d-none d-md-flex js-toggler">
                                    <span class="c-fitem__title-left">
                                        <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
                                        <span class="c-fitem__selected">
                                            Indonesia
                                        </span>
                                    </span>
                                    <span class="c-fitem__title-right">
                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                    </span>
                                </h3>
                                <ul class="c-fitem__country-list">

                                    <li class="c-fitem__country-item">
                                        <a class="c-fitem__country-link" href="https://www.go-viet.vn">
                                            Vietnam
                                        </a>
                                    </li>

                                    <li class="c-fitem__country-item">
                                        <a class="c-fitem__country-link" href="https://www.getthailand.com">
                                            Thailand
                                        </a>
                                    </li>

                                    <li class="c-fitem__country-item">
                                        <a class="c-fitem__country-link" href="https://www.gojek.com/sg/">
                                            Singapore
                                        </a>
                                    </li>

                                    <li class="c-fitem__country-item">
                                        <a class="c-fitem__country-link" href="https://www.gojek.com/">
                                            Indonesia
                                            <i class="c-fitem__tick gi gi-tick"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                          </div>
                        </div>
                        <div class="row c-footer__wrapper">
                          <div class="col">
                            <div id="f-copyright" class="c-fitem c-fitem--copyright">
                                <div class="c-fitem__content text-center">
                                    <p class="c-fitem__copy-text">
                                        © 2019 Gojek
                                        <br>
                                        Gojek is a trademark of PT Aplikasi Karya Anak Bangsa. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.
                                    </p>
                                </div>
                            </div>
                          </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    window.onscroll = () => {
      /*let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;*/
      let header = document.querySelector(".c-header");
      if(header != null){
        header.classList.toggle("active", document.documentElement.scrollTop >= 2 )
      }
    }
    
  }

}
</script>