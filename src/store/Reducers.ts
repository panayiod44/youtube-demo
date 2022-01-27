import { createSlice } from '@reduxjs/toolkit'
import { Video, Comment } from '../interfaces'

const initialVideos: Array<Video> | [] = []
const initialSelectedVideo: Video | any = undefined
const initialComments: Array<Comment> = []

export const videoReducers = createSlice({
    name: 'videos',
    initialState: {
        videos: initialVideos,
        selectedVideo: initialSelectedVideo,
        comments: initialComments,
        API_KEY: ''
    },
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload
        },
        clearVideos: (state) => {
            state.videos = []
        },
        setSelectedVideo: (state, action) => {
            state.selectedVideo = action.payload
        },
        setComments: (state, action) => {
            state.comments = action.payload
        },
        clearComments: (state) => {
            state.comments = []
        },
        setApiKey: (state, action) => {
            state.API_KEY = action.payload
        }
    }
})

export const { setVideos, clearVideos, setSelectedVideo, setComments, clearComments, setApiKey } = videoReducers.actions

export default videoReducers.reducer