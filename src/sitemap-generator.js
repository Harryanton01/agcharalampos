require("babel-register");
//Import our routes
const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;
(
  new Sitemap(router)
  .build("https://agcharalampos.gr")
 //Save it wherever you want
  .save("../public/sitemap.xml")
);
