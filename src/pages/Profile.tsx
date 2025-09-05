import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ResetScroll from "@/components/general/ResetScroll";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { Typography } from "@mui/material";
import {
  User2,
  ShoppingCart,
  Heart,
  MessageSquare,
  RefreshCcw,
  MapPin,
  Tag,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { IconType } from "react-icons/lib";
import MyProfile from "@/components/profile/MyProfile";
import ProfileDialog from "@/components/profile/ProfileDialog";
import Orders from "@/components/profile/Orders";

type TabType = {
  icon: IconType;
  tabName: string;
  active: boolean;
};

const renderProfileTabs = (
  tabName: string,
  handleClose: () => void,
  open: boolean
) => {
  switch (tabName) {
    case "My profile":
      return <MyProfile />;
    case "Orders":
      return <Orders />;
    case "Log out":
      return <ProfileDialog onClose={handleClose} open={open} />;
    default:
      return null;
  }
};

const Profile = () => {
  const { user } = useAppSelector((state: RootState) => state.user);

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
    {
      icon: Heart,
      tabName: "My favorite",
      active: false,
    },
    {
      icon: MessageSquare,
      tabName: "Chat history",
      active: false,
    },
    {
      icon: RefreshCcw,
      tabName: "Returns & warranty",
      active: false,
    },
    {
      icon: MapPin,
      tabName: "Addresses",
      active: false,
    },
    {
      icon: Tag,
      tabName: "Discounts",
      active: false,
    },
    {
      icon: Bell,
      tabName: "Notifications",
      active: false,
    },
    {
      icon: Settings,
      tabName: "Data & preferences",
      active: false,
    },
    {
      icon: LogOut,
      tabName: "Log out",
      active: false,
    },
  ]);

  const handleClick = useCallback(
    (tabname: string) => {
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

      if (tabname === "Log out") {
        setOpen((prev) => !prev);
        return;
      }
    },
    [tabs, setTabs]
  );

  const activeTab = useMemo(() => tabs.find((tab) => tab.active), [tabs]);

  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
    setTabs((prev) =>
      prev.map((item) =>
        item.tabName === "My profile"
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  }, []);

  return (
    <section>
      <ResetScroll />
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Profile" }]}
        />
      </div>

      <div className="flex items-start mx-auto max-w-[1540px] w-[90%]">
        <aside className="w-[100%] max-w-[200px] mb-[72px] md:block hidden">
          <Typography
            variant="h4"
            fontSize={24}
            fontWeight={600}
            color={NEUTRAL_COLOR.neutral800}
            sx={{ mb: "16px" }}
          >
            Hi, {user?.name} {user?.surname}
          </Typography>

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

        {activeTab && renderProfileTabs(activeTab.tabName, handleClose, open)}
      </div>
    </section>
  );
};

export default Profile;
