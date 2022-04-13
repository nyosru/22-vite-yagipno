// import Home from './views/Home.vue'
// import Tpl from '@/views/Tpl.vue'
// import Gipno from '@/views/GipnoHealth.vue'
// import About from './views/About.vue'
// import NotFound from './views/NotFound.vue'
// import Start from './views/Start.vue'

import BlockHeader from '@/views/block/Header.vue'
// import BlockHeaderMini from './views/block/HeaderMini.vue'

import BlockFooter from '@/views/block/Footer.vue'

// import BlockUslugi from './views/block/BlockUslugi.vue'
// import BlockSpeces from './views/block/BlockSpeces.vue'
// import BlockOpis1 from './views/block/BlockOpis1.vue'
// import Call2Action1 from './views/block/Call2Action1.vue'

// import BlockMeropriyatiya from './views/block/BlockMeropriyatiya.vue'
// import BlockMeropriyatiyaOne from './views/block/BlockMeroprOne.vue'

import BlockHealth from '@/views/block/Health.vue'

import BlockLearn from '@/views/block/Learn.vue'
import BlockCards from '@/views/block/CardsTaro.vue'


import BlockContact from '@/views/block/Contact.vue'
import BlockAbout from '@/views/block/About.vue'
import BlockVideo from '@/views/block/Video.vue'

/** @type {import('vue-router').RouterOptions['routes']} */

export const routes = [
    // { path: '/', component: Home, meta: { title: 'Home' } },
    // { path: '/', component: Gipno, meta: { title: 'Gipno' } },
    // { path: '/tpl', component: Tpl, meta: { title: 'Tpl' } },
    // {
    //   path: '/about',
    //   meta: { title: 'About' },
    //   component: About,
    //   // example of route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('./views/About.vue')
    // },

    //   { path: '/', components:
    //   {
    //     head: BlockHeader,
    //     default: Start
    //   }
    // },

    // {
    //     path: '/m/:id_merop',
    //     components: {
    //         header1: BlockHeaderMini,
    //         default: BlockMeropriyatiyaOne,
    //         footer1: BlockFooter,
    //     },
    // },
    {
        path: '/:path(.*)',
        components: {
            header1: BlockHeader,

            // call2action1: Call2Action1,
            // speces: BlockSpeces,

            // opis1: BlockOpis1,
            // uslugi: BlockUslugi,
            // meropriyatiya: BlockMeropriyatiya,
            health: BlockHealth,

            health: BlockHealth,
            learn: BlockLearn,
            CardsTaro: BlockCards,

            about: BlockAbout,
            video: BlockVideo,
            contact: BlockContact,
            // default: Start,
            footer1: BlockFooter,
        },
    },
]