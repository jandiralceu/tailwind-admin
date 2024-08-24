import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layout/main-layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MainLayout>
      Home Content
    </MainLayout>
  );
}
