import { defineField, defineType } from "sanity";

export default defineType({
  name: "dj",
  title: "DJ",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "DJ Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "station",
      title: "Station",
      type: "string",
      options: {
        list: [
          { title: "Ranger Rockwave", value: "ranger-rockwave" },
          { title: "Semper Fi Country", value: "semper-fi-country" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "showName",
      title: "Show Name",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "schedule",
      title: "Schedule",
      type: "string",
      description: "Example: Weekdays 7–10 AM CT",
    }),

    defineField({
      name: "featured",
      title: "Featured DJ",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
