import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ResetScroll from "@/components/general/ResetScroll";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { Typography } from "@mui/material";
import { ShoppingCart, User2 } from "lucide-react";
import { useState } from "react";
import { IconType } from "react-icons/lib";

type TabType = {
  icon: IconType;
  tabName: string;
  active: boolean;
};

const Profile = () => {
  const [tabs, setTabs] = useState<TabType[]>([
    {
      icon: User2,
      tabName: "My profile",
      active: true,
    },
    {
      icon: ShoppingCart,
      tabName: "Orders",
      active: false,
    },
  ]);

  const handleClick = (tabname: string) => {
    const tab = tabs.filter((item) => {
      if (tabname !== item.tabName) {
        item.active = false;
        return item;
      } else if (tabname === item.tabName) {
        item.active = true;
        return item;
      }
    });
    setTabs(tab);
  };

  return (
    <section>
      <ResetScroll />
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Profile" }]}
        />
      </div>

      <aside className="w-[90%] max-w-[1524px] mx-auto mb-[72px]">
        <ul className="flex flex-col gap-5 justify-center items-start">
          {tabs &&
            tabs.map((tab: TabType, index: number) => {
              const Icon = tab.icon;

              return (
                <li
                  key={index}
                  onClick={() => handleClick(tab.tabName)}
                  className="flex gap-2 items-center m-0 p-0 cursor-pointer"
                >
                  <Icon
                    color={tab.active ? "#1A4DE1" : NEUTRAL_COLOR.neutral800}
                  />
                  <Typography
                    component="span"
                    variant="body2"
                    fontSize={18}
                    color={tab.active ? "#1A4DE1" : NEUTRAL_COLOR.neutral800}
                    fontWeight={600}
                    sx={{ m: 0, p: 0 }}
                  >
                    {tab.tabName}
                  </Typography>
                </li>
              );
            })}
        </ul>
      </aside>
    </section>
  );
};

export default Profile;
