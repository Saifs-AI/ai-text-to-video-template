const { createApp } = Vue

const app = createApp({
    data() {
        return {
            features: [
                {
                    icon: 'fas fa-magic',
                    title: 'AI-Powered Generation',
                    description: 'Advanced artificial intelligence transforms your text into compelling video content automatically.'
                },
                {
                    icon: 'fas fa-bolt',
                    title: 'Lightning Fast',
                    description: 'Generate professional videos in minutes, not hours. Save time and resources.'
                },
                {
                    icon: 'fas fa-palette',
                    title: 'Customizable Styles',
                    description: 'Choose from a variety of visual styles and themes to match your brand identity.'
                },
                {
                    icon: 'fas fa-chart-line',
                    title: 'High Engagement',
                    description: 'Create videos that capture attention and drive engagement with your audience.'
                },
                {
                    icon: 'fas fa-mobile-alt',
                    title: 'Mobile Optimized',
                    description: 'Videos perfectly formatted for all devices and social media platforms.'
                },
                {
                    icon: 'fas fa-brain',
                    title: 'Smart Scene Selection',
                    description: 'AI automatically selects the most relevant visuals for your content.'
                }
            ],
            steps: [
                {
                    title: 'Input Your Text',
                    description: 'Simply paste your script, article, or any text content into our platform.'
                },
                {
                    title: 'AI Processing',
                    description: 'Our advanced AI analyzes your content and selects appropriate visuals and transitions.'
                },
                {
                    title: 'Generate Video',
                    description: 'Watch as your text is transformed into a professional, engaging video.'
                },
                {
                    title: 'Download & Share',
                    description: 'Export your video in high quality and share it across any platform.'
                }
            ]
        }
    }
})

app.mount('#app') 