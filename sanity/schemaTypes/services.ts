import { defineField, defineType } from "sanity";

export const services = defineType({
    type: "document",
    name: "service",
    title: "Služba",
    fields: [
        defineField({
            type: "string",
            name: "name",
            title: "Název služby"
        }),
        defineField({
            type: "slug",
            name: "slug",
            title: "Slug",
            options: {
                source: "name"
            }
        }),
        defineField({
            type: "string",
            name: "description",
            title: "Popis služby"
        }),
        defineField({
            type: "image",
            name: "photo",
            title: "Náhledová fotka na výšku",
        }),
        defineField({
            type: "array",
            name: "images",
            title: "Obrázky",
            of:[
                {type: "image"}
            ]
        })
    ],
})