import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layout/main-layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin" },
    {
      name: "description",
      content: "Simple admin panel",
    },
  ];
};

export default function Index() {
  return <MainLayout>Home Content</MainLayout>;
}
