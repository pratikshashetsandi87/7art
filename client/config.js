export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C5A059",
        goldDark: "#9e7c3a",
        cream: "#FAF9F6",
        beige: "#F4EBD0",
        borderSoft: "#E0D7C6",
        textMain: "#333333",
        textMuted: "#666666",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        gold: "0 20px 40px rgba(197,160,89,0.25)",
        glass: "0 10px 30px rgba(0,0,0,0.08)",
      },
      backdropBlur: {
        glass: "14px",
      },
    },
  },
  plugins: [],
};
