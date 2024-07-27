import {create} from 'zustand'
import axios from "axios";

export const usePokemonStore = create((set) => ({
    pokemon: [],
    singlePokemon: [],
    randomPokemon: [],
    loading: false,

    getPokemons: async () => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get('http://localhost:5000/api/pokemon')
        set(() => ({pokemon: response.data}))
        set((state) => ({loading: !state.loading}))
    },

    getSinglePokemon: async (name) => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get(`http://localhost:5000/api/pokemon/${name}`)
        set(() => ({singlePokemon: response.data}))
        set((state) => ({loading: !state.loading}))
    },

    getRandomPokemon: async () => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get('http://localhost:5000/api/pokemon')
        const random = response.data.sort(() => Math.random() - Math.random()).slice(0, 3)
        set(() => ({randomPokemon: random}))
        set((state) => ({loading: !state.loading}))
    }
}))