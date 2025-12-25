import { defineField, defineType } from "sanity";

export default defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Artist Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "stations",
      title: "Stations",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Semper Fi Country", value: "semper-fi-country" },
          { title: "Ranger Rockwave", value: "ranger-rockwave" },
        ],
      },
      description: "Which stations this artist appears on",
    }),

    defineField({
      name: "bio",
      title: "Artist Bio",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "image",
      title: "Artist Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "featured",
      title: "Featured Artist",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "website", title: "Website", type: "url" }),
        defineField({ name: "spotify", title: "Spotify", type: "url" }),
        defineField({ name: "appleMusic", title: "Apple Music", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "youtube", title: "YouTube", type: "url" }),
      ],
    }),
  ],
});
