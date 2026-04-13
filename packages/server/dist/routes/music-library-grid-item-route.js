"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var music_library_grid_item_route_exports = {};
__export(music_library_grid_item_route_exports, {
  default: () => music_library_grid_item_route_default
});
module.exports = __toCommonJS(music_library_grid_item_route_exports);
var import_express = __toESM(require("express"));
var import_music_library_grid_item_svc = __toESM(require("../services/music-library-grid-item-svc"));
const router = import_express.default.Router();
router.get("/", async (_, res) => {
  const list = await import_music_library_grid_item_svc.default.index();
  res.json(list);
});
router.get("/:soundtrackName", async (req, res) => {
  const { soundtrackName } = req.params;
  try {
    const soundtrack = await import_music_library_grid_item_svc.default.get(soundtrackName);
    if (!soundtrack) res.status(404).json({ error: "Soundtrack not found" });
    else res.json(soundtrack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/", (req, res) => {
  const newSoundtrack = req.body;
  import_music_library_grid_item_svc.default.create(newSoundtrack).then((soundtrack) => res.status(201).json(soundtrack)).catch((err) => res.status(500).send({ error: err.message || err }));
});
var music_library_grid_item_route_default = router;
