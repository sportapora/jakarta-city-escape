import MonasHero from "../assets/monas.jpg";
import KotuHero from "../assets/kotu-hero.jpg";
import TMIIHero from "../assets/tmii.png";

export default function Carousel() {
  return (
    <div
      id="default-carousel"
      class="relative h-full w-full"
      data-carousel="slide"
    >
      <div class="relative h-full object-cover object-center overflow-hidden">
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src={MonasHero}
            class="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src={KotuHero}
            class="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
        <div class="duration-700 ease-in-out" data-carousel-item>
          <img
            src={TMIIHero}
            class="absolute
            w-full h-full object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Destinasi Wisata"
          />
        </div>
      </div>
    </div>
  );
}