<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    width="100%"
    height="100px"
    preserveAspectRatio="none"
  >
    <path
      fill="#fffda0"
      fill-opacity="1"
      d="M0,192L40,186.7C80,181,160,171,240,186.7C320,203,400,245,480,245.3C560,245,640,203,720,208C800,213,880,267,960,266.7C1040,267,1120,213,1200,176C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>

  <section
    id="testimonial"
    class="testimonial-area xpy-120"
    style="background-color: #fffda0;"
  >
    <div class="container-fluid">
      <div class="justify-center row">
        <div class="w-full mx-4 xlg:w-1/2">
          <div class="pb-10 pt-40 text-center section-title">
            <h4 class="title">Наши специалисты</h4>
            <!-- <p class="text">
              Смотрим тут специалистов от которых даже воздух вокруг управляется
              лучше
            </p> -->
          </div>
          <!-- section title -->
        </div>
      </div>
      <!-- row -->

      <div class="xrow">
        <div class="xw-full">
          <div class="row content-center testimonial-active">
            <div
              v-for="u2 in speces"
              :key="u2.name"
              class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xl2:w-1/6"
            >
              <spec-item :user="u2"></spec-item>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </section>

  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
  width="100%" height="100px" preserveAspectRatio="none"
  >
    <path
      fill="#fffda0"
      fill-opacity="1"
      d="M0,96L40,112C80,128,160,160,240,197.3C320,235,400,277,480,288C560,299,640,277,720,229.3C800,181,880,107,960,74.7C1040,43,1120,53,1200,90.7C1280,128,1360,192,1400,224L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    ></path>
  </svg> -->
</template>

<script>
import { ref } from 'vue'

import specItem from './BlockSpecesItem.vue'

export default {
  components: { specItem },
  setup() {
    // const menuHidden = ref(true)
    const speces0 = [
      {
        name: 'Андрей Сотников',
        city: 'г. Кострома',
        opis:
          'Энергопрактик. Шаман. Гипнолог. Специалист по работе с картами ТАРО.  С помощью специальных практик открывает нужные энергитические каналы. Остеопат. Специалист по работе с телесным подсознанием.',
        img: 'mimQlW4Oi0c.webp',
        // img: 'mimQlW4Oi0c.jpg',
        link_vk: 'https://vk.com/id21757203',
      },
      {
        name: 'Камиль Зияев',
        city: 'г. Санкт-Петербург',
        opis: 'Костоправ. Массажист. Гипнолог. Специалист широкого профиля',
        // img: '2c07AnT8xio.jpg',
        img: '2c07AnT8xio.webp',
        link_vk: 'https://vk.com/id11250168',
      },
      {
        name: 'Алексей Корнев',
        city: 'г. Кострома',
        opis:
          'Массажист. Гипнолог. Энергопрактик. Словами лечит душу, руками лечит тело.',
        // img: 'UIfxrJ_G_jw.jpg',
        img: 'UIfxrJ_G_jw.webp',
        link_vk: 'https://vk.com/aleksindi',
      },
      {
        name: 'Олег Баранов',
        city: 'г. Москва',
        opis: 'Гипнотизёр. Мастер директивного гипноза. Семейный психолог.',
        // img: 'I40FVh7KHDo.jpg',
        img: 'I40FVh7KHDo.webp',
        link_vk: 'https://vk.com/olegossogelo',
      },
      {
        name: 'Клавдия Жуковская',
        city: 'г. Москва',
        opis:
          'Коуч для VIP , регресс , работа с Родом, проводник по Пути Души, гипнотерапевт, парапсихолог, целитель',
        // img: 'bWk3SJP39VM.jpg',
        img: 'bWk3SJP39VM.webp',
        link_vk: 'https://vk.com/id16710719',
      },
      {
        name: 'Олеся Шаламова',
        city: 'г. Тольятти',
        opis: 'Гипнолог. Шаманка. Мастер висцерального массажа.',
        // img: 'uYe8VwKrd4o.jpg',
        img: 'uYe8VwKrd4o.webp',
        link_vk: 'https://vk.com/id164520618',
      },
      {
        name: 'Сергей Пыжив',
        city: 'г. Санкт-Петербург',
        opis:
          'Мастер директивного гипноза. Психолог. Таролог. Ведун. Автор книг и пособий по гипнозу и терапии. Президент "Союза"',
        // img: 'serg.jpg',
        img: 'serg.webp',
        link_vk: 'https://vk.com/magic_is_me',
      },
      {
        name: 'Татьяна Колданова',
        city: 'г. Коломна',
        opis: 'Семейный психолог. Гипнолог. Мастер Эриксоновского гипноза.',
        // img: 'JGzibqTDPGk.jpg',
        img: 'JGzibqTDPGk.webp',
        link_vk: 'https://vk.com/tkoldanova',
      },
      {
        name: 'Михаил Эджибов',
        city: 'г. Санкт-Петербург',
        opis: 'Психолог. Регрессолог. Гипнолог. Художник.',
        // img: 'Fs_c_dMotes.jpg',
        img: 'Fs_c_dMotes.webp',
        link_vk: 'https://vk.com/gypnozmagic',
      },
      {
        name: 'Таисия Комова',
        city: 'г. Омск',
        opis: 'Регрессолог, Нумеролог, Эзотерик, Гипнолог.',
        // img: 'Rg-FiavZvag.jpg',
        img: 'Rg-FiavZvag.webp',
        link_vk: 'https://vk.com/id31935003',
      },
      {
        name: 'Зинаида Блажко',
        city: 'г. Москва',
        opis: 'Диетолог. Специалист по естественному оздоровлению с помощью авторских методик психокоррекции , разгрузочно-диетической терапии и оздоровительного питания и очищения организма комплексно.',
        // img: 'HsK5pV9wYAg.jpg',
        img: 'HsK5pV9wYAg.webp',
        link_vk: 'https://vk.com/blazhkozina',
      },
      {
        name: 'Дарья Пыжив',
        city: 'г. Евпатория',
        opis: 'Духовный наставник. Гипнолог. Таролог',
        // img: 'T996viIyVGI.jpg',
        img: 'T996viIyVGI.webp',
        link_vk: 'https://vk.com/id180778911',
      },
      {
        name: 'Алексей Шестаков',
        city: 'г. Екатеренбург',
        opis: 'Нарколог, Гипнолог, за один сеанс убирает влечение к алкоголю',
        // img: 'LU16_l4QePs.jpg',
        img: 'LU16_l4QePs.webp',
        link_vk: '',
        link_insta: 'https://www.instagram.com/esperal_centre/',
      },
      {
        name: 'Сергей',
        city: 'г. Тюмень',
        opis:
          'Гипнолог, энергопрактик, путешествия в прошлые жизни',
        // img: 'ssb.png',
        img: 'ssb.webp',
        link_vk: 'https://vk.com/gipnoz911',
      },
      // ])
    ]

    // const speces = ref( speces0.value.sort((a,b) => Math.random() - 0.5) )
    const speces = speces0.sort((a, b) => Math.random() - 0.5)

    return {
      // menuHidden,
      speces,
    }
  },
}
</script>
