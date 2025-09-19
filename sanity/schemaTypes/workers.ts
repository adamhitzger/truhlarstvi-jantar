import { defineField, defineType } from "sanity"
export const workers = defineType({
    name: "workers",
    type: "object",
    title: "Inzerát",
    fields: [
        defineField({
            type: "string",
            title: "Název inzerátu",
            name: "name"
        }),
        defineField({
            type: "string",
            title: "Popis inzerátu",
            name: "description"
        }),
    ]
})