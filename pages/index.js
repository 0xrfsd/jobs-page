import React from "react";
import Head from "next/head";

import Header from "../components/header";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [loading, setLoading] = React.useState(undefined);

  const [showCookies, setShowCookies] = React.useState(true);

  const LoadImages = async () => {};

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

  const Cookies = () => {
    return (
      <div
        style={{
          height: 65,
          width: "100%",
          position: "fixed",
          zIndex: 3,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#1A3A69",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#eee",
            fontSize: windowSize ? (windowSize < 600 ? 8 : 12) : 8,
            width: "70%",
            textAlign: "center",
          }}
        >
          Armazenamos cookies em seu dispositivo para proporcionar uma melhor
          experiência. Ao utilizar esse site, você concorda com nossa política
          de privacidade.
        </div>
        <div
          onClick={() => setShowCookies(!showCookies)}
          style={{
            cursor: "pointer",
            textDecorationLine: "underline",
            color: "#fff",
            textAlign: "center",
            fontSize: 10,
          }}
        >
          Não mostrar mais essa mensagem
        </div>
      </div>
    );
  };

  const Main = () => {
    return (
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            paddingLeft: 20,
            paddingTop: windowSize > 600 ? 20 : 50,
            paddingBottom: 120,
            flexDirection: "row",
          }}
        >
          <div
            style={{
              color: "#FFF",
              width: windowSize > 800 ? "45%" : "65%",
              fontSize: windowSize > 800 ? 50 : 35,
              fontWeight: 700,
            }}
          >
            A ferramenta necessaria para o futuro do trabalho.
          </div>
        </div>
      </div>
    );
  };

  const CTA = () => {
    const Item = ({ title, subtitle, color }) => {
      return (
        <div
          style={{
            height: 200,
            width: "50%",
            backgroundColor: color,
            padding: 20,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: color === "#FFF" ? "#1A3A69" : "#FFF",
            }}
          >
            {title}
          </div>
        </div>
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Item title="Para instituições" subtitle="..." color="#1A3A69" />
        <Item title="Para profissionais" subtitle="..." color="#FFF" />
      </div>
    );
  };

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      {showCookies && (
        <>
          <Cookies />
          <div style={{ height: 65 }} />
        </>
      )}
      <Header />
      <div style={{ height: 65 }} />
      <Main />
      <CTA />
    </div>
  );
}
