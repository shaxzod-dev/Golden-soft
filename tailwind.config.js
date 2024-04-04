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
        text_color: "rgb(69,79,91)",
      },
      backgroundImage: {
        banner:
          "url(https://firebasestorage.googleapis.com/v0/b/uploadimage-53655.appspot.com/o/image%2F%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BB%D1%83%D1%87%D1%88%D0%B8%D1%85%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2.png?alt=media&token=6f55982b-2f9b-47f8-87d7-12e37ccd3f14)",
      },
    },
  },
  plugins: [],
};
