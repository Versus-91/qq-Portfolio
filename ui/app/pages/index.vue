<template>
    <UContainer class="mt-4">
        <UCard v-for="item in works_content" class="my-4">
            <template #header class="dark:bg-white">
                <div class="h-5 font-bold">{{ item.title }}</div>
            </template>
            <template #default>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-2/3 ">
                        {{ item.description }}
                        <h2 class=" text-lg font-medium text-heading my-2 mt-2" v-if="item.features?.length ?? 0 > 0">
                            Highlights
                        </h2>
                        <ul class="text-left text-body  list-disc pl-5 my-2">
                            <li v-for="f in item.features">
                                <span>
                                    {{ f }}
                                </span>
                            </li>
                            <li class="text-body"><span class="font-bold">Stack:</span> {{ item.stack }}
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 justify-center" v-if="item.images?.length ?? 0 > 0">
                        <UCarousel fade v-slot="{ item }" :items="item.images" arrows class="w-full max-w-xs mx-auto">
                            <NuxtImg :src="item" class="rounded-lg" />
                        </UCarousel>
                    </div>
                </div>
            </template>
            <template #footer>
                <UButton color="neutral" icon="i-lucide-square-code" variant="outline" class="mx-1 dark:text-white-400 "
                    :to="item.sourceLink" target="_blank">Source</UButton>
                <UButton v-if="!!item.previewLink" color="primary" icon="i-lucide-play" :to="item.previewLink"
                    variant="outline" target="_blank">
                    Demo</UButton>
            </template>
        </UCard>
    </UContainer>
</template>
<script setup lang="ts">

const works_content =
    [
        {
            title: 'Machine Learning in Web',
            description: `A web-based platform for building machine learning pipelines with integrated tools for PFI, PDP, PCA, t-SNE, and autoencoders. Supports data visualization, explainable AI, and dimensionality reduction. Scales to large datasets via TU Dresden's HPC infrastructure.`,
            previewLink: 'https://ml-sandbox-dun.vercel.app/',
            features: ['14+ ML models training directly in browser (no backend needed)',
                'Explainable AI suite: PDP, PFI, and feature contribution analysis',
                'Dimensionality reduction: PCA (biplots/scree), t-SNE, autoencoders',
                'Interactive visualizations: Parallel coordinates, correlation matrices, model insights',
                'HPC integration: Scales to large datasets via TU Dresden infrastructure',
                'Full client-side execution using Pyodide + TensorFlow.js'],
            images: ['https://carddecks.blob.core.windows.net/portfolio/Screenshot 2025-11-24 100327.jpg', 'https://carddecks.blob.core.windows.net/portfolio/ppc.jpg',
                'https://carddecks.blob.core.windows.net/portfolio/Screenshot 2025-11-24 101328.jpg', 'https://carddecks.blob.core.windows.net/portfolio/pfi.jpg'
            ],
            stack: "Vue.js 3, Pyodide, Bulma CSS, Scikit-learn, Plotly.js, HighCharts, TensorFlow.js",
            sourceLink: '',
            tags: ['Web', 'Machine Learning'],
            placeHolderImage: 'images/logo.png'
        },
        {
            title: 'Realtor App',
            description: `A full-stack real estate management platform with a web frontend built in Vue.js, ASP.NET Core 8, and a SQL Server database.`,
            previewLink: 'https://card-decks.azurewebsites.net/',
            sourceLink: 'https://github.com/Versus-91/RealtorSuite',
            stack: "ASP.NET Core 8, ABP, Vue.js 2, SQL Server, Swagger UI, Bulma CSS, Bootstrap 4",
            features: ["ASP.NET 8 backend development for property listing platform",
                "RESTful API design with JWT authentication and authorization",
                "Azure cloud deployment: App Service, SQL Database, Key Vault",
                "Secure configuration management using Azure Key Vault",
                "Device-optimized image rendering service for faster page loads",
                "Entity Framework Core integration with advanced query optimization",
                "Role-based access control and secure API endpoint protection",
                "Automated CI/CD pipeline implementation for Azure deployment",
            ],
            tags: ['Web'],
            images: ['https://carddecks.blob.core.windows.net/portfolio/Home.jpg', 'https://carddecks.blob.core.windows.net/portfolio/show.jpg'
            ],
            placeHolderImage: 'images/t.webp'
        },
        {
            title: 'TDD app with Django 5.0',
            stack: "Django 5.0, Selenium automated test framework, pytest, SQLite",
            description: `Developed a CRUD application with TDD methodology.`,
            features: ["Full CRUD operations implemented with Django",
                "one-time code login without traditional signup process",
                "Test-Driven Development methodology using pytest test suite",
                "Selenium automated browser testing for end-to-end validation",
                "Unit tests for models, views, and forms"],
            placeHolderImage: 'images/map.png',
            sourceLink: "https://github.com/Versus-91/PYTDD",
            tags: ['Web']
        },
        {
            title: 'The Blackbox of Machine Learning',
            description: `
                        Explored the blackbox nature of machine learning algorithms by applying PDP,PFI, and SHAP model interpretability techniques to explain ML models' decissions.`
            ,
            previewLink: '',
            features: ["Explored PDP, PFI, and SHAP for explaining black box models' predictions and enhancing transparency",
                "Simulated 8 different scenarios and visualized the methods' explanations with the true DGP",
                "Benchmarked the methods on 8 public datasets and 12 ML models"],
            stack: "scikit-learn, pandas, matplot, XGBoost",
            sourceLink: 'https://github.com/Versus-91/blackboxofmachinelearning',
            placeHolderImage: 'images/t.webp',
            tags: ['Deep Learning']
        },
        {
            title: 'Data Visualizations with D3',
            stack: "D3.js",
            description: `Used D3 to create Data Visualizations for public datasets as part of Data Visualization class at TU Dresden.`,
            placeHolderImage: 'images/map.png',
            tags: ['Web']
        },
        {
            title: 'Distance Aware Vision Transformer',
            description: `Improved model accuracy for cancer detection in whole slide images by designing a distance-aware Vision Transformer (ViT) that incorporated spatial relationships between patches into the self-attention mechanism.
                        `,
            previewLink: '',
            placeHolderImage: 'images/t.webp',
            stack: "PyTorch",
            sourceLink: 'https://github.com/Versus-91/SpatiallyAwareTransformerNetwork',
            tags: ['Deep Learning']
        }
        , {
            title: 'Deep Reinforcement Learning Pac-Man',
            description: `Using Deep Reinforcement Learning models to learn how to play Pac-Man based on
                                interaction wiith the game
                                and feedback received.`,
            previewLink: '',
            stack: "PyTorch, Pygame",
            sourceLink: 'https://github.com/Versus-91/pacman_final',
            placeHolderImage: 'images/drl.webp',
            tags: ['Deep Learning']
        },
    ];
</script>