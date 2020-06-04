import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
    require("file-loader!./index.pug");
}

import "./scripts/skills.js";
import "./scripts/parallax.js";
import "./scripts/works.js";
import "./scripts/projects-slider.js";
import "./scripts/reviews-slider.js";
import "./scripts/check-form.js";
