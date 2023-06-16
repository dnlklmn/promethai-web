/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F87C97",
      },
      fontFamily: {
        sans: ["Inter"],
        grotesk: "Space Grotesk",
      },
      fontSize: {
        caption: "0.75rem",
        body: "1rem",
        "body-2": "0.875rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.25rem",
        h5: "1rem",
      },
      lineHeight: {
        "body-2": "2rem",
      },

      dropShadow: {
        img: "0 16px 32px rgba(0, 0, 0, 0.15)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
