import { createApp, ref, reactive, computed } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.prod.min.js'

createApp({
    setup() {
        function setTag(value) {
            tag.value = value
        }
        const tag = ref('')
        const works_content = reactive({
            arr:
                [
                    {
                        title: 'Machine Learning in Web',
                        description: `A web-based platform for building machine learning pipelines with integrated tools for PFI, PDP, PCA, t-SNE, and autoencoders. Supports data visualization, explainable AI, and dimensionality reduction. Scales to large datasets via TU Dresden's HPC infrastructure.`,
                        previewLink: 'https://jolly-pebble-0add22003.2.azurestaticapps.net/',
                        sourceLink: '#',
                        tags: ['Web', 'Machine Learning'],
                        palceholderImage: 'images/logo.png',
                        technoloies:['Vue.js 3']
                    },
                    {
                        title: 'Realtor App(web and android)',
                        description: `A full-stack real estate management platform with a web frontend built in Vue.js, a ASP.NET Core backend, a SQL Server database, and a cross-platform mobile app developed with Flutter.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/houseclassifieds',
                        tags: ['Web'],
                        palceholderImage: 'images/t.webp'
                    },
                    {
                        title: 'Distance Aware Vision Transformer',
                        description: `Improved model accuracy for cancer detection in whole slide images by designing a distance-aware Vision Transformer (ViT) that incorporated spatial relationships between patches into the self-attention mechanism.
                        `,
                        previewLink: '#',
                        palceholderImage: 'images/t.webp',
                        sourceLink: 'https://github.com/Versus-91/SpatiallyAwareTransformerNetwork',
                        tags: ['Deep Learning']
                    }
                    , {
                        title: 'Reinforcement Learning Pac-man',
                        description: `Using Deep Reinforcement Learning models to learn how to play Pac-man based on
                                interaction wiith the game
                                and feedback received.`,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/pacman_final',
                        palceholderImage: 'images/drl.webp',
                        tags: ['Deep Learning']
                    },
                    {
                        title: 'The black box of Machine Learning',
                        description: `
                        Explored the "black box" nature of machine learning algorithms by applying model interpretability techniques to explain ML models' decissions.`
                        ,
                        previewLink: '#',
                        sourceLink: 'https://github.com/Versus-91/blackboxofmachinelearning',
                        palceholderImage: 'images/t.webp',
                        tags: ['Deep Learning']
                    }, {
                        title: 'Data Visualizations with D3',
                        description: `Used D3 to create data visualizations for public datasets.`,
                        palceholderImage: 'images/map.png',
                        tags: ['Web']
                    }
                ]
        })
        const currentCards = computed(() => {
            return tag.value != '' ? works_content.arr.filter(c => c.tags.includes(tag.value)) : works_content.arr
        })
        return {
            tag,
            works_content,
            currentCards,
            setTag
        }
    }
}).mount('#app')
