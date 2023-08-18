module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
            @import "@/style/screens.scss";
            @import "@/style/fonts.scss";
            @import "@/style/colors.scss";
            @import "@/style/style.scss";
            `,
      },
    },
  },
};
