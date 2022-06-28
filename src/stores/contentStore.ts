import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

const URL = process.env.VUE_APP_BASEURL

export interface Article {
    id: number,
    page: string,
    code: string[]
}

export type contentState = {
    articles: Article[]
}

export const useContent = defineStore("content", {
    state: () => ({
        articles: []
    } as contentState),
    getters: {
        getArticles: (state) => {
            return state.articles
        }
    },
    actions: {
        async fetchArticles() {
            try {
                const data = await axios.get(URL + 'articles')
                this.articles = data.data
            }
            catch (error) {
                console.log(error)
            }
        }
    },
})