"use client";

import { FC } from "react";
import { Provider } from "react-redux";
import Header from "./Header/Header";
import store from "@/store";
import { ILink } from "@/types/link.type";

const App: FC<{ children: any }> = ({ children }) => {
  const links: ILink[] = [
    {
      title: "Home",
      href: "/",
    },
  ];
  return (
    <Provider store={store}>
      <Header
        links={links}
        logo={{ imageSrc: "/vercel.svg", width: 250, height: 250 }}
      ></Header>
      {children}
    </Provider>
  );
};

export default App;
