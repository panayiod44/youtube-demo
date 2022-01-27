import React from "react"
import * as _ from "lodash"
import YTSearch from "youtube-api-search"
import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_detail"
import { Video } from "./interfaces"
import { useDispatch } from "react-redux"
import { setVideos, setSelectedVideo, setApiKey, clearComments } from "./store/Reducers"
import CommentWrapper from "./components/CommentWrapper"

const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM"

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    videoSearch("arsenal")
    dispatch(setApiKey(API_KEY))
  }, [])

  const videoSearch = (term: string) => {
    dispatch(clearComments())
    YTSearch({ key: API_KEY, term: term }, (videos: Array<Video>) => {
      dispatch(setVideos(videos))
      dispatch(setSelectedVideo(videos[0]))
    })
  }

  const search = _.debounce((term) => {
    videoSearch(term)
  }, 300)
  
  return (
    <div>
      <SearchBar onSearchTermChange={search} />
      <VideoDetail />
      <VideoList onVideoSelect={(selectedVideo: any) => dispatch(setSelectedVideo(selectedVideo))} />
      <CommentWrapper />
    </div>
  )

}

export default App
