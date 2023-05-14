import { Posts } from "@/utils/types";

export const bigLetter = (word: any) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    return capitalized
}

export const dataLength = (id: number, post: any) => {
    let currentPost = post.filter((single: any) => single.post_id == id)
    let countSaved = currentPost.length
    return countSaved
}

export const mapPost = (posts: any, categories: any, users: any) => {
    let mapPost: Posts = posts.map((single: Posts) => ({
        id: single.id,
        title: single.title,
        paragraph: single.paragraph,
        image: single.image,
        body: single.body,
        category: categories.find((singleCategory: any) => singleCategory.id == single.category)?.name,
        user: users.find((user: any) => user.id == single.user),
        date: new Date(single.created_at).toISOString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join("."),
    }))

    return mapPost
}