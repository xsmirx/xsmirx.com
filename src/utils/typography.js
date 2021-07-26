import Typography from "typography";

const typography = new Typography({
  title: "Ivan Smirnov blog",
  baseFontSize: "18px",
  baseLineHeight: "1.75",
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i", "900", "900i"],
    },
  ],
  headerFontFamily: ["Merriweather", "Georgia", "serif"],
  bodyFontFamily: ["Merriweather", "Georgia", "serif"],
  // headerColor: "hsla(0,0%,0%,1)",
  // bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: "0",
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      // color: "hsla(0,0%,100%,0.7)",
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${"hsla(0.0%,100%,0.85)"}`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "ul,ol": {
      marginLeft: 0,
    },
    "@media only screen and (max-width:480px)": {
      "ul,ol": {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    a: {
      textDecoration: "none",
    },
    "a:hover,a:active": {
      boxShadow: "none",
    },
    "mark,ins": {
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none",
    },
  }),
});

export default typography;
