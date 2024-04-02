/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        primary: "rgb(69,79,91)",
      },
      backgroundImage: {
        banner:
          "url(https://firebasestorage.googleapis.com/v0/b/uploadimage-53655.appspot.com/o/image%2FRectangle%206.png?alt=media&token=eaaa2965-8e0e-41bd-a9bc-b9ac215588ed)",
      },
    },
  },
  plugins: [],
};
