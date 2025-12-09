<template>
    <UCard id="tttt">
        <template #default>
            <h1 class="uppercase font-bold border-b-2 border-b-blue-400 py-1 mb-2">Work Experience</h1>
            <div class="flex flex-row w-full mb-1 text-left">
                <div class="basis-2/3 border-cyan-300">
                    <h4 class="text-blue-600 font-bold dark:text-cyan-400">Software Engineer</h4>
                </div>
                <div class="basis-1/3 text-right">
                    <h4 class="text-blue-600 font-bold">10.2022 - 03.2025</h4>
                </div>
            </div>
            <div class="flex pl-4 pb-2">
                <ol class="list-disc">
                    <li>Created a client-side ML platform using Pyodide, allowing users to build and train
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
                <ol class="list-disc pb-2">
                    <li>Optimized SPA applications' performance through tree shaking, lazy-loading modules</li>
                    <li>Identified and optimized inefficient EF Core and SQL queries using SSMS</li>
                    <li>Designed and deployed a standalone data-entry application (Angular 14, ASP.NET Zero)
                        adopted by over 50 hospitals and clinics</li>
                    <li>Built a cross-platform Flutter inspection app (Android) with .NET 6 MVC backend for
                        nationwide vehicle audits (1000+ daily reports) with routing,Map service, and CRM integration
                    </li>
                    <li>Created an interactive Plotly.js dashboard for data visualization and analysis</li>
                </ol>
            </div>
            <h1 class="uppercase font-bold border-b-2 border-b-blue-400 py-1 mb-2">Education</h1>
            <Experience :title="'M.Sc. in Computational Modeling and Simulation, TU Dresden'"
                :date="'10.2022 - 03.2025'">
                <ul class="list-disc pl-4 pb-2">
                    <li>
                        Coursework: Scientific Programming, Design Pattern and frameworks, User Interface
                        Design, Data Visualization (D3.js), Scalable Data Engineering
                    </li>
                    <li>
                        Thesis: Reinforcement Learning for automated stock portfolio optimization (PyTorch, SB3)
                    </li>
                </ul>
            </Experience>
            <Experience :title="'B.Sc. in Software Engineering, Imam Reza University'" :date="'12.2013 - 09.2017'">
            </Experience>
            <h1 class="uppercase font-bold border-b-2 border-b-blue-400 py-1 mb-2">Skills</h1>
            <p><span class="font-bold">Programming languages:</span> C#, Python, JavaScript/TypeScript</p>
            <p><span class="font-bold">Backend: </span>ASP.NET Core 8, Entity Framework, Django 5</p>
            <p><span class="font-bold">Frontend:</span> Vue.js 3, Angular 2+, Bootstrap 4, Bulma CSS</p>
            <p><span class="font-bold">Cloud Platforms: </span>Microsoft Azure (Key Vault, Blob Storage, SQL Database,
                App Service), DigitalOcean</p>
            <p><span class="font-bold">Tools:</span> Docker, Git, GitHub Actions, SQL Server Management Studio</p>
            <p><span class="font-bold">Languages:</span> German (B1), English (C1)</p>
            <br />
        </template>
    </UCard>
    <br class="my-5" />
</template>
<script lang="ts" setup>
</script>