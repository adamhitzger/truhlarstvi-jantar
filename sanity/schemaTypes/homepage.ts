import { defineField, defineType } from "sanity";

export const homePageSchema = defineType({
    type: "document",
    name: "homepage",
    title: "Hlavní stránka",
    fields: [
        defineField({
            type: "array",
            name: "header",
            title: "Fotky v 1. sekci",
            of: [
                {type: "image"}
            ]
        }),
        defineField({
            type: "array",
            name: "about",
            title: "Fotky v sekci O nás",
            of: [
                {type: "image"}
            ]
        }),
        defineField({
            type: "array",
            name: "workers",
            title: "Inzeráty",
            of: [
                {type: "workers"}
            ]
        }),
    ]
})