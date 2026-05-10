import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gerenciador Cortinas - Sistema de Pedidos" },
      { name: "description", content: "Sistema profissional para gerenciamento de pedidos de cortinas e persianas." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/gerenciador.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      <p>Carregando Gerenciador Cortinas...</p>
    </div>
  );
}
