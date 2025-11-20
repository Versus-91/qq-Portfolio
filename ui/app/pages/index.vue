<template>
    <UContainer class="mt-4">
        <UCard v-for="item in works_content" class="my-4">
            <template #header class="dark:bg-white">
                <div class="h-5 font-bold">{{ item.title }}</div>
            </template>
            <template #default>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-2/3">
                        {{ item.description }}
                        <h2 class="mt-2 text-lg font-medium text-heading">Features</h2>
                        <ul class="text-left text-body  list-disc pl-5">
                            <li>
                                <span>
                                    Bulma CSS
                                </span>
                            </li>
                            <li>Plotly.js</li>
                            <li class="text-body"><span class="font-bold">Technologies:</span> Vue.js 3, Bulma
                                CSS,
                                Scikit-learn, Plotly.js </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 justify-center">
                        <UCarousel v-slot="{ item }" arrows :items="items" class="w-full max-w-xs mx-auto ">
                            <img :src="item" class="rounded-lg">
                        </UCarousel>
                    </div>
                </div>
            </template>
            <template #footer>
                <UButton color="neutral" icon="i-lucide-square-code" variant="outline"
                    class="mx-1 dark:text-white-400 ">Source</UButton>
                <UButton color="primary" icon="i-lucide-play" variant="outline">Demo</UButton>
            </template>
        </UCard>
        <Resume />
    </UContainer>
</template>
<script setup lang="ts">
const items = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5',
    'https://picsum.photos/640/640?random=6'
]
const works_content =
    [
        {
            title: 'Machine Learning in Web',
            description: `A web-based platform for building machine learning pipelines with integrated tools for PFI, PDP, PCA, t-SNE, and autoencoders. Supports data visualization, explainable AI, and dimensionality reduction. Scales to large datasets via TU Dresden's HPC infrastructure.`,
            previewLink: 'https://jolly-pebble-0add22003.2.azurestaticapps.net/',
            sourceLink: '#',
            tags: ['Web', 'Machine Learning'],
            palceholderImage: 'images/logo.png'
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
    ];
</script>