<template>
    <UCard>
        <template #default>
            <h1 class="uppercase font-bold border-b-2 border-b-blue-400 py-1 mb-2">Work Experience</h1>
            <div class="flex flex-row w-full mb-2 text-left">
                <div class="basis-2/3 border-cyan-300">
                    <h4 class="text-blue-600 font-bold dark:text-cyan-400">Software Engineer</h4>
                </div>
                <div class="basis-1/3 text-right">
                    <h4 class="text-blue-600 font-bold">10.2022 - 03.2025</h4>
                </div>
            </div>
            <div class="flex pl-4 mb-5">
                <ol class="list-disc">
                    <li>Engineered a client-side ML platform using Pyodide, allowing users to build and train
                        models directly in the browser without code.</li>
                    <li>Designed a responsive UI with Vue.js 3 and Bulma CSS, achieving a Lighthouse score of 91</li>
                    <li>Integrated 15+ ML algorithms into the platform via Pyodide and Scikit-learn</li>
                    <li>Built a Django backend for training large datasets on HPC clusters using SLURM jobs</li>
                    <li>Created an interactive Plotly.js dashboard for data visualization and analysis</li>
                </ol>
            </div>
            <div class="flex flex-row w-full mb-2 text-left">
                <div class="basis-2/3 border-cyan-300">
                    <h4 class="text-blue-600 font-bold dark:text-cyan-400">Full Stack Developer</h4>
                </div>
                <div class="basis-1/3 text-right">
                    <h4 class="text-blue-600 font-bold">02.2020 - 09.2022</h4>
                </div>
            </div>
            <div class="flex pl-4">
                <ol class="list-disc">
                    <li>Optimized SPA applications' performance through tree shaking, lazy-loading modules</li>
                    <li>Identified and optimized inefficient EF Core and SQL queries using SSMS</li>
                    <li>Designed and deployed a standalone data-entry application (Angular 14, ASP.NET Zero)
                        adopted by over 50 hospitals and clinics</li>
                    <li>Built a cross-platform Flutter inspection app (Android) with .NET 6 MVC backend for
                        nationwide vehicle audits (500+ daily reports) with routing,Map service, and CRM integration
                    </li>
                    <li>Created an interactive Plotly.js dashboard for data visualization and analysis</li>
                </ol>
            </div>
            <h1 class="uppercase font-bold border-b-2 border-b-blue-400 py-1 mb-2">Education</h1>
            <div class="flex flex-row w-full mb-2 text-left">
                <div class="basis-2/3 border-cyan-300">
                    <h4 class="text-blue-600 font-bold dark:text-cyan-400">M.Sc. in Computational Modeling and
                        Simulation, TU Dresden</h4>
                </div>
                <div class="basis-1/3 text-right">
                    <h4 class="text-blue-600 font-bold">10.2022 - 03.2025</h4>
                </div>
            </div>
            <ul class="list-disc pl-4">
                <li>
                    Coursework: Scientific Programming, Design Pattern and frameworks, User Interface
                    Design, Data Visualization (D3.js), Scalable Data Engineering
                </li>
                <li>
                    Thesis: Reinforcement Learning for automated stock portfolio optimization (PyTorch, SB3)
                </li>
            </ul>
            <div class="flex flex-row w-full mb-2 text-left">
                <div class="basis-2/3 border-cyan-300">
                    <h4 class="text-blue-600 font-bold dark:text-cyan-400">B.Sc. in Software Engineering, Imam Reza
                        University</h4>
                </div>
                <div class="basis-1/3 text-right">
                    <h4 class="text-blue-600 font-bold">13.2013 - 09.2017</h4>
                </div>
            </div>
        </template>
    </UCard>
    <br class="my-5" />
</template>
<script lang="ts" setup>
</script>