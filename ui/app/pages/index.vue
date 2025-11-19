<template>
    <UContainer class="mt-4">
        <UCard v-for="item in works_content" class="my-2">
            <template #header class="dark:bg-white">
                <div class="h-5 ">{{ item.title }}</div>
            </template>
            <template #default>
                {{ item.description }}
                <h2 class="my-2 text-lg font-medium text-heading">Features</h2>
                <ul class="space-y-4 text-left text-body">
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-fg-success shrink-0 me-1.5" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>
                            Bulma CSS
                        </span>
                    </li>
                    <li>Plotly.js</li>
                    <li class="text-body text-success">Technologies: Vue.js 3, Bulma CSS, Scikit-learn, Plotly.js </li>
                </ul>
            </template>
            <template #footer>
                <UButton color="neutral" variant="outline" class="mx-1 dark:text-gray-400 dark:bg-white">Demo</UButton>
                <UButton color="neutral" variant="outline">Soure</UButton>
            </template>
        </UCard>
        <Resume />
    </UContainer>
</template>
<script setup lang="ts">
interface CardInfo {
    title: string,
    description: string,

}
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