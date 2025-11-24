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
                        <h2 class="mt-2 text-lg font-medium text-heading" v-if="item.features?.length ?? 0 > 0">Features
                        </h2>
                        <ul class="text-left text-body  list-disc pl-5">
                            <li v-for="f in item.features">
                                <span>
                                    {{ f }}
                                </span>
                            </li>
                            <li class="text-body my-5"><span class="font-bold">Technologies:</span> {{ item.stack }}
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 justify-center" v-if="item.images?.length ?? 0 > 0">
                        <UCarousel auto-height v-slot="{ item }" arrows :items="item.images"
                            class="w-full max-w-xs mx-auto ">
                            <img :src="item" class="rounded-lg">
                        </UCarousel>
                    </div>
                </div>
            </template>
            <template #footer>
                <UButton color="neutral" icon="i-lucide-square-code" variant="outline" class="mx-1 dark:text-white-400 "
                    :to="item.sourceLink" target="_blank">Source</UButton>
                <UButton color="primary" icon="i-lucide-play" :to="item.previewLink" variant="outline" target="_blank">
                    Demo</UButton>
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
            features: ['Training 14 classification and regression models inside browser.', 'Prallel coordinate plot and correlation matrix analysis',
                'PCA and t-SNE dimentionality reduction methods with bplot, scree plot and pca ans t-sne matrix visulaizayion'],
            images: ['https://carddecks.blob.core.windows.net/portfolio/Screenshot 2025-11-24 100327.jpg', 'https://carddecks.blob.core.windows.net/portfolio/ppc.jpg',
                'https://carddecks.blob.core.windows.net/portfolio/Screenshot 2025-11-24 101328.jpg', 'https://carddecks.blob.core.windows.net/portfolio/pfi.jpg'
            ],
            stack: "Vue.js 3, Pyodide, Bulma CSS, Scikit-learn, Plotly.js, HighCharts, TensorFlow.js",
            sourceLink: '#',
            tags: ['Web', 'Machine Learning'],
            palceholderImage: 'images/logo.png'
        },
        {
            title: 'Realtor App(web and android)',
            description: `A full-stack real estate management platform with a web frontend built in Vue.js, a ASP.NET Core backend, a SQL Server database, and a cross-platform mobile app developed with Flutter.`,
            previewLink: '#',
            sourceLink: 'https://github.com/Versus-91/houseclassifieds',
            stack: "ASP.NET Core 8, Vue.js 2, SLQ Server, Bulma.CSS, Bootstrap 4",
            features: ["Architected a .NET 8 backend using clean architecture principles",
                "Designed RESTful API  endpoints with JWT-based authentication ",
                "Added service for rendering images based on user device to improve page load time",
                "Deployed and configured App Service, Azure SQL, Blob Storage, and Key Vault"],
            tags: ['Web'],
            palceholderImage: 'images/t.webp'
        },
        {
            title: 'Distance Aware Vision Transformer',
            description: `Improved model accuracy for cancer detection in whole slide images by designing a distance-aware Vision Transformer (ViT) that incorporated spatial relationships between patches into the self-attention mechanism.
                        `,
            previewLink: '#',
            palceholderImage: 'images/t.webp',
            stack: "PyTorch",
            sourceLink: 'https://github.com/Versus-91/SpatiallyAwareTransformerNetwork',
            tags: ['Deep Learning']
        }
        , {
            title: 'Reinforcement Learning Pac-man',
            description: `Using Deep Reinforcement Learning models to learn how to play Pac-man based on
                                interaction wiith the game
                                and feedback received.`,
            previewLink: '#',
            stack: "PyTorch, Pygame",
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
            stack: "scikit-learn, pandas, matplot, XGBoost",
            sourceLink: 'https://github.com/Versus-91/blackboxofmachinelearning',
            palceholderImage: 'images/t.webp',
            tags: ['Deep Learning']
        }, {
            title: 'Data Visualizations with D3',
            stack: "D3.js",
            description: `Used D3 to create data visualizations for public datasets.`,
            palceholderImage: 'images/map.png',
            tags: ['Web']
        }
    ];
</script>