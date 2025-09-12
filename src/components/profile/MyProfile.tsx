import { NEUTRAL_COLOR } from "@/constant/colors";
import { Typography } from "@mui/material";
import { ShadButton } from "../ui/button";
import { useAppSelector } from "@/hook/hooks";
import { RootState } from "@/redux-toolkit/store";
import { Calendar, House, Mail, PhoneCall, Signpost, User } from "lucide-react";
import Wrapper from "./Wrapper";
import { FormElementProps } from "@/types/types";
import FormElement from "../general/FormElement";

const MyProfile = () => {
  const { user } = useAppSelector((state: RootState) => state.user);

  const FormElementValues: FormElementProps[] = [
    {
      id: 1,
      Icon: User,
      htmlFor: "Name",
      identification: "name",
      placeholder: "Name",
      value: user && user?.name,
      name: "name",
      label: "Name",
    },
    {
      id: 2,
      Icon: Mail,
      htmlFor: "email",
      identification: "email",
      placeholder: "Email",
      value: user && user?.email,
      name: "email",
      label: "E-mail address",
    },
    {
      id: 3,
      Icon: PhoneCall,
      htmlFor: "phone",
      identification: "phone",
      placeholder: "Phone number",
      value: user && user?.phone,
      name: "phone",
      label: " Phone number",
      type: "tel",
      readonly: false,
    },
    {
      id: 4,
      Icon: Calendar,
      htmlFor: "birthDate",
      identification: "birthDate",
      placeholder: "Birth date",
      value:
        user.birthDate && new Date(user?.birthDate).toISOString().split("T")[0],
      name: "birthDate",
      label: "Birth date",
      type: "date",
    },
    {
      id: 5,
      Icon: House,
      htmlFor: "address",
      identification: "address",
      placeholder: "Address",
      value: user && user?.address,
      name: "address",
      label: "Address",
      readonly: false,
    },
    {
      id: 6,
      Icon: Signpost,
      htmlFor: "postalCode",
      identification: "postalCode",
      placeholder: "Postal code",
      value: user && user?.postalCode,
      name: "postalCode",
      label: "Postal code",
      readonly: false,
    },
  ];

  return (
    <Wrapper title="Personal data">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {FormElementValues.map((form) => (
          <FormElement
            key={form.id}
            Icon={form.Icon}
            htmlFor={form.htmlFor}
            identification={form.identification}
            label={form.label}
            name={form.name}
            placeholder={form.placeholder}
            value={form.value || ""}
            type={form.type}
            readonly={form.readonly}
            onChange={() => {}}
          />
        ))}
      </div>

      <div
        className="flex flex-col justify-center items-center rounded gap-4 mb-[72px] min-h-[295px] w-full bg-center"
        style={{
          backgroundImage:
            "url(/fone-de-ouvido-de-realidade-virtual-de-vista-superior-branco_23-2148912739.avif)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h3"
          fontSize={{
            xs: 20,
            md: 32,
          }}
          fontWeight={600}
          color={NEUTRAL_COLOR.neutral800}
          className="text-center"
        >
          NEXTPICK Customer Club
        </Typography>
        <Typography
          variant="button"
          sx={{ textTransform: "none" }}
          fontSize={{
            xs: 14,
            md: 16,
          }}
          color={NEUTRAL_COLOR.neutral600}
          className="text-center text-wrap max-w-[400px]"
        >
          Membership in Nextpick’s Costumer Club entitles you to discounts on
          selected member products, as well as exciting offers from our
          partners.
        </Typography>
        <ShadButton variant="outline" className="bg-primary text-white w-fit">
          See offers
        </ShadButton>
      </div>
    </Wrapper>
  );
};

export default MyProfile;
