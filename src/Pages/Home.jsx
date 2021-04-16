import React, { useEffect, useState } from "react";

import { CheckLogin, FetchData } from "../Healpers/Functions/Functions";
import About from "./About";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import Header from "./Header";

function Home(props) {
  const [data, setData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const { responseData } = await FetchData("http://localhost:5000/post");
      setData(responseData.data);
    })();

    if (CheckLogin()) {
      setIsLogin(true);
    }
  }, []);

  const navBarMenus = [
    {
      id: "1",
      link: "#about",
      title: "About",
    },
    {
      id: "2",
      link: "#blog",
      title: "Blog",
    },
    {
      id: "3",
      link: "#contact",
      title: "Contact",
    },
  ];

  if (!isLogin) {
    navBarMenus.push({
      id: "4",
      link: "/signin",
      title: "SignIn",
    });
  } else {
    navBarMenus.push({
      id: "4",
      link: "/home",
      title: "Dashboard",
    });
  }

  return (
    <>
      <Header navBarMenus={navBarMenus} type='Home' />
      <About />
      <BlogSection data={data} />
      <ContactSection />
    </>
  );
}

export default Home;
