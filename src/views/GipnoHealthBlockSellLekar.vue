<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Лечение болезней
      </h1>

      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <div class="
      w-full
      grid 
      grid-cols-1 
      sm:grid-cols-2
      lg:grid-cols-3 
      gap-4
      xcolumns-1 xsm:columns-2 xxl:columns-3 
      ">
        <div
          v-for="b in bol"
          :key="b.name"
          class="xw-full xmd:w-1/4 xlg:w-1/6 xp-6 xflex xflex-col xflex-grow xflex-shrink"
        >
          <div
            class="flex-1 bg-white xrounded-t rounded-xl rounded-b-none xoverflow-hidden xshadow  shadow-xl shadow-gray mb-5 pt-5 pb-5 "
          >
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <!-- <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                xGETTING STARTED
              </p> -->

              <div class="w-full font-bold text-xl text-gray-800 px-6">
                {{ b.name }}
              </div>

              <p v-if="b.opis && b.opis.length" class="text-gray-800 text-base px-6 mb-5" >
                {{ b.opis }}
              </p>
            </a>

            <div class="pl-6 xtext-center">

              <button
                type="button"
                class="text-white 
                  bg-gradient-to-r 
                  from-yellow-500 via-orange-600 to-orange-500 
                  hover:from-yellow-600 hover:via-orange-700 hover:to-orange-600 
                  xhover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 
                  text-center mr-2 mb-2"
              >
                Записаться на&nbsp;приём
              </button>


              <!-- <button type="button" class="
inline-flex items-center
xinline-flex
text-white bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  <nobr>
   Консультация 
  </nobr>
</button> -->




              <button
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black xtext-gray-900 xbg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 xdark:bg-gray-800 xdark:text-gray-400 xdark:border-gray-600 xdark:hover:text-white xdark:hover:bg-gray-700"
              >
                <img
                  src="/icon/phone2.svg"
                  class="inline xmr-2 w-4 h-4 fill-current"
                />
                Бесплатная консультация по&nbsp;телефону
              </button>

              <!-- <div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Записаться на
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    приём
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    БЕсплатную консультацию
  </button>
</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import ButtonRepo from '@/components/ButtonRepo.vue'

const bol = [


  
  { name: 'Депрессия' , 'opis' : 'Психическое расстройство, основными признаками которого являются сниженное — угнетённое, подавленное, тоскливое, тревожное, боязливое или безразличное — настроение и снижение или утрата способности получать удовольствие (ангедония).' },
  { name: 'Фобии'  , 'opis' : 'Тревожное расстройство психики, при котором человека преследует постоянное чувство беспричинного страха, вызываемое определенного рода объектами, действиями или обстоятельствами. Это абсолютно иррациональное чувство, для которого нет оснований.' },
  { name: 'Панические атаки'  , 'opis' : 'Необъяснимый, мучительный для больного приступ тяжёлой тревоги, сопровождаемый беспричинным страхом, в сочетании с различными вегетативными (соматическими) симптомами.' },
  { name: 'Низкая самооценка' , 'opis' : 'Принижение человеком своих достоинств, качеств и возможностей. В первую очередь, это то, как и что думает о себе человек, во вторую – то, как он себя ведет, что делает, на что решается, как взаимодействует с миром и окружающими людьми.'  },
  { name: 'Автофобия' , 'opis' : 'Исключительный страх самостоятельного вождения машины.'  },
  { name: 'Ожирение'  , 'opis' : '«полнота, тучность, откормленность» — результат формирования чрезмерных жировых отложений, которые наносят вред здоровью. ' },
  { name: 'Булимия'  , 'opis' : 'Психическое заболевание, представляющее собой расстройство пищевого поведения, при котором больной употребляет большое количество пищи, а потом избавляется от него, вызывая рвоту, применяя слабительные или мочегонные средства, клизмы, чрезмерные физические нагрузки, а также жесткие диеты.' },
  { name: 'Анорексия' , 'opis' : 'Расстройство приёма пищи, характеризующееся значительно сниженным весом тела, преднамеренно вызываемым и/или поддерживаемым самим пациентом, в целях похудения или для профилактики набора лишнего веса.'  },
  { name: 'Энурез' , 'opis' : 'Заболевание, характеризующееся недержанием мочи у человека.'  },
  { name: 'Заикание' , 'opis' : 'Нарушение речи, которое характеризуется частым повторением или пролонгацией звуков, слогов, слов, частыми остановками или нерешительностью в речи, разрывающей её ритмическое течение.'  },
  { name: 'Аллергия-приобретеннная'  , 'opis' : 'Гиперчувствительность организма, развиваемая адаптивной иммунной системой в ответ на неинфекционные вещества окружающей среды, включая неинфекционные компоненты некоторых инфекционных организмов.' },
  { name: 'Алкоголизм'  , 'opis' : 'Разновидность токсикомании, характеризующееся пристрастием к алкоголю (этиловому спирту), с зависимостью от него.' },
  { name: 'Табакокурение'  , 'opis' : 'Как и в любой другой зависимости, различают несколько сторон этой проблемы: пагубное воздействие (в прошлой классификации именовалось как злоупотребление), синдром зависимости, синдром отмены' },
  { name: 'Игромания'  , 'opis' : 'Патологическая склонность к азартным играм, заключается в частых повторных эпизодах участия в азартных играх, которые доминируют в жизни человека' },
  { name: 'Импотенция'  , 'opis' : 'Эректи́льная дисфу́нкция, импоте́нция (лат. impotens — бессильный)' },
  { name: 'Аноргазмия'  , 'opis' : 'Состояние, характеризующееся постоянными трудностями в достижении оргазма при достаточно длительном половом акте и достаточной сексуальной стимуляции. Часто сопровождается снижением полового влечения или его отсутствием.' },
]
</script>
