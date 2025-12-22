export default {
  name: "show",
  title: "Show (Schedule Slot)",
  type: "document",
  fields: [
    { name: "title", title: "Show Title", type: "string", validation: (r: any) => r.required() },
    {
      name: "stationSlug",
      title: "Station",
      type: "string",
      options: {
        list: [
          { title: "Semper Fi Country (KVVS)", value: "semper-fi-country" },
          { title: "Ranger Rockwave (KVVW)", value: "ranger-rockwave" },
        ],
      },
      validation: (r: any) => r.required(),
    },
    { name: "hosts", title: "Hosts", type: "string", validation: (r: any) => r.required() },
    { name: "scheduleText", title: "Schedule Text", type: "string" },
    { name: "description", title: "Description", type: "text" },
  ],
};
