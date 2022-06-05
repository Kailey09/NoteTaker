const express = require("express");
const fs = require("fs");
const notes = require("./db/db.json");
const path = require("path");
const util = require("util");

const app = express();
var PORT = process.env.PORT || 3001;
