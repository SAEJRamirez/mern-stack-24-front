import {create} from 'zustand'
import axios from "axios";

export const usePokemonStore = create((set) => ({
    pokemon: [],
    singlePokemon: [],
    pokemonById: [],
    randomPokemon: [],
    loading: false,
    message: "",
    error: "",

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

    getPokemonById: async (id) => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get(`http://localhost:5000/api/pokemon/single/${id}`)
        set(() => ({pokemonById: response.data}))
        set((state) => ({loading: !state.loading}))

    },

    getRandomPokemon: async () => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get('http://localhost:5000/api/pokemon')
        const random = response.data.sort(() => Math.random() - Math.random()).slice(0, 3)
        set(() => ({randomPokemon: random}))
        set((state) => ({loading: !state.loading}))
    },

    createPokemon: async (data) => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.post('http://localhost:5000/api/pokemon', data)
        set(() => ({message: response.data}))
        set((state) => ({loading: !state.loading}))
    },

    editPokemon: async (id, data) => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.put(`http://localhost:5000/api/pokemon/${id}`, data)
        set(() => ({message: response.data}))
        set((state) => ({loading: !state.loading}))
    },

    deletePokemon: async (id) => {
        const response = await axios.delete(`http://localhost:5000/api/pokemon/${id}`)
        set(() => ({message: response.data}))
        if(response.status === 200) {
            set((state) => ({
                pokemon : state.pokemon.filter((poke) => poke._id !== id)
            }))
        }
    }
}))