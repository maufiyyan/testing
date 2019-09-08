<template>
	<div class="row">
		<div class="col c-information-2">
			<div class="mb-2 mb-md-5">
				<h3 class="c-information__title">{{data.title}}</h3>
				<p class="c-information-2__description">{{data.description}}</p>
			</div>
			<div class="col mb-2 mb-md-5">
				<swiper :options="swiperOptions">
		            <template v-for="d in data.features">
		              <swiper-slide>
		                <div class="c-card p-3 col-12">
		                    <v-lazy-image
			                  :src="d.src"
			                /> 
		                    <p class="c-card__body hide-desktop">{{d.desc}}</p> 
		                </div>
		              </swiper-slide>
		            </template>
		        </swiper>
			</div>
		</div>
	</div>
</template>
<script>
import VLazyImage from "v-lazy-image";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'component-swiper',
  props:['data'],
  data () {
    return {
      swiperOptions:{
	    slidesPerView: 4.2,
	    spaceBetween: 32,
	    breakpoints: {
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2.3,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10
          }
        }        
      }
    }
  },
  components:{
    VLazyImage,
    swiper,
    swiperSlide
  },
  mounted(){
  	console.log(this.data);
  }
}
</script>