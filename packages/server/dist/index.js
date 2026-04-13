"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_mongo = require("./services/mongo");
var import_auth = __toESM(require("./routes/auth"));
var import_promises = __toESM(require("node:fs/promises"));
var import_path = __toESM(require("path"));
var import_movie_goers = __toESM(require("./routes/movie-goers"));
var import_movies_out_now_grid_item_route = __toESM(require("./routes/movies-out-now-grid-item-route"));
var import_movie_library_grid_item_route = __toESM(require("./routes/movie-library-grid-item-route"));
var import_theaters_list_item_route = __toESM(require("./routes/theaters-list-item-route"));
var import_music_library_grid_item_route = __toESM(require("./routes/music-library-grid-item-route"));
var import_artifacts_library_grid_item_route = __toESM(require("./routes/artifacts-library-grid-item-route"));
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
const staticDir = process.env.STATIC || "public";
app.use(import_express.default.json());
app.use("/api/movie-goers", import_auth.authenticateUser, import_movie_goers.default);
app.use("/api/movies-out-now", import_movies_out_now_grid_item_route.default);
app.use("/api/movie-library", import_movie_library_grid_item_route.default);
app.use("/api/theaters", import_theaters_list_item_route.default);
app.use("/api/music-library", import_music_library_grid_item_route.default);
app.use("/api/famous-film-artifacts", import_artifacts_library_grid_item_route.default);
app.use("/auth", import_auth.default);
app.use(import_express.default.static(staticDir));
app.use("/movie-night", (req, res) => {
  const indexHtml = import_path.default.resolve(staticDir, "index.html");
  import_promises.default.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
(0, import_mongo.connect)("Blazing");
