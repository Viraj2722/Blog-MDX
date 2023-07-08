import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Viraj Walavalkar",
  author: "Viraj Walavalkar",
  avatar: "https://avatars.githubusercontent.com/u/127889803",
  favicon: "https://avatars.githubusercontent.com/u/127889803",
  avatarClass: "rounded-full",
  theme: "auto",
  lang: "en",
  readtime: true,
  dateFormat: (date) => new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(date),
  links: [
    { title: "Email", url: "mailto:virajwalavalkar90982@gmail.com", target: "_blank" },
    { title: "Instagram", url: "https://instagram.com/_viiiraj_27", target: "_blank" },
    { title: "Twitter", url: "https://twitter.com/WalavalkarViraj", target: "_blank" },
    { title: "GitHub", url: "https://github.com/Viraj2722", target: "_blank" },
  ],
});
