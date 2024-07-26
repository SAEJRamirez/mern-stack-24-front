import {create} from 'zustand'
import axios from "axios";

export const usePokemonStore = create((set) => ({
    pokemon: [],
    loading: false,

    getPokemons: async () => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get('http://localhost:5000/api/pokemon')
        set((state) => ({pokemon: response.data}))
        set((state) => ({loading: !state.loading}))
    },

    getSinglePokemon: async (name) => {
        set((state) => ({loading: !state.loading}))
        const response = await axios.get(`http://localhost:5000/api/pokemon/${name}`)
        set((state) => ({pokemon: response.data}))
        set((state) => ({loading: !state.loading}))
    }
}))