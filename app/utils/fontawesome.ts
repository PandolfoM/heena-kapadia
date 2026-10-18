import { config } from "@fortawesome/fontawesome-svg-core";

// FontAwesome's CSS is imported into Tailwind's base layer in globals.css.
// Left to inject it itself, it lands outside any CSS layer and overrides
// Tailwind 4's utilities (e.g. lg:hidden on the menu icon). Import this before
// any FontAwesomeIcon renders; the navbar, on every page, does.
config.autoAddCss = false;
