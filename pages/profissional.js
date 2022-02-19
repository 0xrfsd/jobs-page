import Image from "next/image";
import React from "react";

// Components
import Header from "../components/header";

import styles from "../styles/Home.module.css";

const Profissional = () => {
  const [windowSize, setWindowSize] = React.useState(undefined);
  const [pageSize, setPageSize] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      setPageSize(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CTA = () => {
    return (
      <>
        <div
          style={{
            flex: 1,
            paddingTop: 65 + 10,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            display: "flex",
            height: "auto",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              color: "#333",
              fontSize: windowSize > 600 ? 60 : 40,
            }}
          >
            Profissional
          </div>
          <div
            style={{
              color: "#333",
              fontWeight: 200,
              width: "70%",
              fontSize: windowSize > 600 ? 33 : 26,
            }}
          >
            Nós temos a soluçāo que você precisa
          </div>
          <div
            style={{
              color: "#333",
              marginTop: 20,
              fontWeight: 300,
              width: "96%",
              fontSize: windowSize > 600 ? 30 : 20,
            }}
          >
            Enquanto você ainda pode estar postando suas vagas em todos portais
            de vagas, nós apresentamos o único primeiro e mais completo portal
            de vagas
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 10,
            paddigRight: 10,
          }}
        >
          <div
            style={{
              height: 50,
              width: 150,
              borderRadius: 5,
              backgroundColor: "#FFF",
              border: "1px solid #333",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: 18, color: "#333" }}>
              Fale conosco
            </div>
          </div>
          <div
            style={{
              marginLeft: 10,
              height: 50,
              width: 150,
              borderRadius: 5,
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: 18, color: "#FFF" }}>
              Registrar
            </div>
          </div>
        </div>
      </>
    );
  };

  const Banner = () => {
    return (
      <div className={styles.bannerprofissional}>
        <div
          style={{ zIndex: 1, color: "#FFF", fontSize: 22, fontWeight: "bold" }}
        ></div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <CTA />
      <Banner />
    </>
  );
};
``;

export default Profissional;
