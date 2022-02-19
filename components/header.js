import React from "react";
import Image from "next/image";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(undefined);

  const Menu = () => {
    const Item = ({ title }) => {
      return (
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            padding: 10,
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ color: "#2E4150", fontSize: 22, fontWeight: 100 }}>
            {title}
          </div>
        </div>
      );
    };

    return (
      <div
        style={{
          marginTop: 65,
          flex: 1,
          zIndex: 2,
          position: "fixed",
          width: "100%",
          borderTop: "0.5px solid #eee",
          height: "auto",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Item title="Inicio" />
        <Item title="Sobre nós" />
        <Item title="Academy" />
        <Item title="Pessoas" />
        <Item title="Eventos" />
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          height: 65,
          paddingLeft: 10,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 20,
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#2E4150", fontSize: 20 }}>Financial</div>
          <div style={{ marginLeft: 5, marginTop: -3 }}>|</div>
          <div style={{ color: "#000608", fontSize: 20, marginLeft: 5 }}>
            Jobs
          </div>
        </div>
        <div
          style={{ cursor: "pointer", marginTop: showMenu ? 5 : null }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            src={
              showMenu
                ? "https://www.btgpactual.com/@18hamb_x.png"
                : "https://www.btgpactual.com/@18hamb.png"
            }
            height={showMenu ? 15 : "10"}
            width={showMenu ? 15 : 25}
          />
        </div>
      </div>
      {showMenu && (
        <>
          <Menu />
        </>
      )}
    </>
  );
};

export default Header;
