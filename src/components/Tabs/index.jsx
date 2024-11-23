import React, { useState } from "react";

function Tabs() {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState("sobre");

  // Função para mudar a aba ativa
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div style={styles.tabs}>
        <div
          style={activeTab === "sobre" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("sobre")}
        >
          Sobre
        </div>
        <div
          style={activeTab === "contato" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("contato")}
        >
          Contato
        </div>
      </div>
      <div style={styles.content}>
        {activeTab === "sobre" && <div>Conteúdo da aba "Sobre"</div>}
        {activeTab === "contato" && <div>Conteúdo da aba "Contato"</div>}
      </div>
    </div>
  );
}

// Estilos simples para as abas e conteúdo
const styles = {
  tabs: {
    display: "flex",
    borderBottom: "2px solid #ccc",
    cursor: "pointer",
    marginBottom: "10px",
  },
  tab: {
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: "#f1f1f1",
    border: "1px solid #ccc",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  activeTab: {
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: "#007BFF", // Cor de destaque para a aba ativa
    color: "white",
    border: "1px solid #007BFF",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  content: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

export default Tabs;
