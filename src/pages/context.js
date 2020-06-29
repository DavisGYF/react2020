import React from "react";
export const ThemeContext = React.createContext({
  themeColor: "pink",
  // userInfo: {
  //   name: "davis",
  //   age: 30,
  // },
});
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
