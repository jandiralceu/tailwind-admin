import type { MetaFunction } from "@remix-run/node";

import MainLayout from "~/components/layout/main-layout";
import DashboardResumedCard from "~/components/ui/DashboardResumedCard";
import EyeIcon from "~/components/svg/EyeIcon";
import CartIcon from "~/components/svg/CartIcon";
import ProductIcon from "~/components/svg/ProductIcon";
import UsersIcon from "~/components/svg/UsersIcon";
import DownBlueArrow from "~/components/svg/DownBlueArrow";
import UpGreenArrow from "~/components/svg/UpGreenArrow";

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
  return (
    <MainLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <DashboardResumedCard
          label="Total views"
          description="$3.456K"
          icon={<EyeIcon />}
          percentageInfo={
            <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
              0.43%
              <UpGreenArrow />
            </span>
          }
        />

        <DashboardResumedCard
          label="Total Profit"
          description="$45,2K"
          icon={<CartIcon />}
          percentageInfo={
            <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
              4.35%
              <UpGreenArrow />
            </span>
          }
        />

        <DashboardResumedCard
          label="Total Product"
          description="2.450"
          icon={<ProductIcon />}
          percentageInfo={
            <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
              2.59%
              <UpGreenArrow />
            </span>
          }
        />

        <DashboardResumedCard
          label="Total Users"
          description="3.456"
          icon={<UsersIcon />}
          percentageInfo={
            <span className="flex items-center gap-1 text-sm font-medium text-meta-5">
              0.95%
              <DownBlueArrow />
            </span>
          }
        />
      </div>
    </MainLayout>
  );
}
