import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ResetScroll from "@/components/general/ResetScroll";

const Profile = () => {
  return (
    <section>
      <ResetScroll />
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Profile" }]}
        />
      </div>
    </section>
  );
};

export default Profile;
