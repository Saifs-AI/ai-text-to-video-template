const { createApp } = Vue

const app = createApp({
    data() {
        return {
            videoDescription: '',
            charCount: 0,
            selectedStyle: null,
            showProModal: false,
            generationCount: 0,
            videoStyles: [
                { id: 'mountain', name: 'Mountain Landscape' },
                { id: 'city', name: 'City Timelapse' },
                { id: 'ocean', name: 'Ocean Waves' },
                { id: 'dance', name: 'Dancing Performance' },
                { id: 'nature', name: 'Nature Wildlife' },
                { id: 'space', name: 'Space Journey' }
            ]
        }
    },
    methods: {
        updateCharCount() {
            this.charCount = this.videoDescription.length
            if (this.charCount > 1000) {
                this.videoDescription = this.videoDescription.slice(0, 1000)
                this.charCount = 1000
            }
        },
        selectStyle(styleId) {
            this.selectedStyle = styleId
        },
        enhanceText() {
            if (this.generationCount >= 3) {
                this.showProModal = true
                return
            }
            // Placeholder for text enhancement functionality
            console.log('Enhancing text...')
        },
        generateVideo() {
            if (this.generationCount >= 3) {
                this.showProModal = true
                return
            }
            this.generationCount++
            if (this.generationCount >= 3) {
                this.showProModal = true
            } else {
                // Placeholder for video generation functionality
                console.log('Generating video...')
                window.location.href = 'https://saifs.ai/text-to-video'
            }
        },
        closeProModal() {
            this.showProModal = false
        }
    }
})

app.mount('#app') 