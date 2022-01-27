export interface Video {
    kind: string
    etag: string
    id: VideioId
    snippet: VideoSnippet
    [k: string]: any
}

export interface VideioId {
    kind: string
    videoId: string
    [k: string]: any
}

export interface VideoSnippet {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishTime: string
    publishedAt: string
    thumbnails: any
    title: string
    [k: string]: any
}

export interface Comment {
    kind: string
    etag: string
    id: string
    snippet: CommentSnippet
    [k: string]: any
}

export interface CommentSnippet {
    videoId: string
    topLevelComment: TopLevelComment
    canReply: boolean
    totalReplyCount: number
    isPublic: boolean
    [k: string]: any
}

export interface TopLevelComment {
    kind: string
    etag: string
    id: string
    snippet: TopLevelCommentSnippet
    [k: string]: any
}

export interface TopLevelCommentSnippet {
    videoId: string
    textDisplay: string
    textOriginal: string
    authorDisplayName: string
    authorProfileImageUrl: string
    authorChannelUrl: string
    authorChannelId: { value: string}
    canRate: boolean
    viewerRating: string
    likeCount: number
    publishedAt: string
    updatedAt: string
    [k: string]: any
}