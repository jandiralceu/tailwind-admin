import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layout/main-layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin | Ação Premiada Genial Investimentos" },
    {
      name: "description",
      content: "Gestão do concurso Ação Premiada Genial Investimentos",
    },
  ];
};

export default function Index() {
  return <MainLayout>Home Content</MainLayout>;
}
