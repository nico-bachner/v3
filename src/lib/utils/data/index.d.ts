type PageData = {
    path: string[]
    title: string
    description: string
    featured: boolean
    visible: boolean
}

type ProjectData = PageData & {
    from: number
    to: number | null
}

type ArticleData = PageData & {
    published: number
    reading_time: number
}
