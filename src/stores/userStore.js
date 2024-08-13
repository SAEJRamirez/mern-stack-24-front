import {create} from 'zustand'
import axios from "axios";

export const useUserStore = create((set) => ({
    message: "",
    user: null,
    userloading: false,

    login: async (data) => {
        set((state) => ({userLoading: !state.userLoading}))
        const response = await axios.post('http://localhost:5000/api/user/login', data)
        set(() => ({user: response.data}))
        set((state) => ({userLoading: !state.userLoading}))
    },
    userLogout: async () => {
        set((state) => ({userLoading: !state.userLoading}))
        const response = await axios.post('http://localhost:5000/api/user/logout')
        set(() => ({message: response.data}))
        set((state) => ({userLoading: !state.userLoading}))
    },
    register: async (data) => {
        set((state) => ({userLoading: !state.userLoading}))
        const response = await axios.post('http://localhost:5000/api/user/register', data)
        set(() => ({user: response.data}))
        set((state) => ({userLoading: !state.userLoading}))
    },
    updateUser: async (data) => {
        set((state) => ({userLoading: !state.userLoading}))
        const response = await axios.put('http://localhost:5000/api/user/profile', data)
        set(() => ({user: response.data}))
        set((state) => ({userLoading: !state.userLoading}))
    }
}))