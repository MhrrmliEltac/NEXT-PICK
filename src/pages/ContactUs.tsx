import { useFetch } from "@/api/useFetch";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import FormElement from "@/components/general/FormElement";
import FormTextArea from "@/components/general/FormTextArea";
import { ShadButton } from "@/components/ui/button";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { InfoDataType } from "@/types/types";
import { handleSubmit } from "@/utils/contactSubmit";
import { path } from "@/utils/paths";
import { Typography } from "@mui/material";
import { Mail, MapPin, MessageCircle, PhoneCall, User } from "lucide-react";
import { useActionState } from "react";

export interface InitialState {
  success: boolean;
  message: string;
}
const ContactUs = () => {
  const { data: INFO_DATA } = useFetch<InfoDataType[]>(
    path.endpoints.info.list
  );

  const initialState: InitialState = {
    success: false,
    message: "",
  };

  const [_, action, isPending] = useActionState(handleSubmit, initialState);

  return (
    <section>
      <div className="relative min-h-[100px]">
        <CustomBreadcrumb
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Contact Us",
            },
          ]}
        />
      </div>

      <div className="max-w-[1524px] w-[90%] mx-auto mb-[80px]">
        <Typography
          variant="h4"
          fontWeight={500}
          fontSize={{
            xs: "14px",
            md: "24px",
          }}
          color={NEUTRAL_COLOR.neutral600}
        >
          Contact Us
        </Typography>
        <Typography
          variant="overline"
          fontWeight={500}
          fontSize={{
            xs: "10px",
            md: "16px",
          }}
          color={NEUTRAL_COLOR.neutral600}
        >
          Have questions or need assistance?{" "}
        </Typography>

        <div className="max-w-[808px] justify-between items-center my-10 mx-auto">
          {INFO_DATA &&
            INFO_DATA.length > 0 &&
            INFO_DATA.map((info: InfoDataType, index: number) => (
              <div
                key={index}
                className="flex flex-wrap justify-between items-center max-sm:gap-5"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <MapPin size={40} color="#1A4DE1" />
                  <Typography
                    variant="body2"
                    color={NEUTRAL_COLOR.neutral500}
                    fontWeight={400}
                    fontSize={{
                      xs: "10px",
                      md: "12px",
                    }}
                  >
                    {info.address}
                  </Typography>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <Mail size={40} color="#1A4DE1" />
                  <Typography
                    variant="body2"
                    color={NEUTRAL_COLOR.neutral500}
                    fontWeight={400}
                    fontSize={{
                      xs: "10px",
                      md: "12px",
                    }}
                  >
                    {info.email}
                  </Typography>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <PhoneCall size={40} color="#1A4DE1" />
                  <Typography
                    variant="body2"
                    color={NEUTRAL_COLOR.neutral500}
                    fontWeight={400}
                    fontSize={{
                      xs: "10px",
                      md: "12px",
                    }}
                  >
                    {info.phoneNumber}
                  </Typography>
                </div>
              </div>
            ))}
        </div>

        <form
          action={action}
          className="max-w-[600px] w-full flex flex-col gap-4 mx-auto"
        >
          <Typography
            variant="body1"
            fontSize={{ xs: "14px", md: "18px" }}
            fontWeight={400}
            color={NEUTRAL_COLOR.neutral800}
          >
            “Feel free to contact us for any inquiries”
          </Typography>

          {/* user name */}
          <FormElement
            Icon={User}
            htmlFor="name"
            identification="name"
            placeholder="Name"
            id="name"
            name="name"
            readonly={false}
          />

          {/* user email */}
          <FormElement
            Icon={Mail}
            htmlFor="email"
            identification="email"
            placeholder="Email"
            id="email"
            name="email"
            readonly={false}
          />

          {/* user phone number */}
          <FormElement
            Icon={PhoneCall}
            htmlFor="phoneNumber"
            identification="phoneNumber"
            placeholder="Phone number"
            id="phoneNumber"
            name="phoneNumber"
            readonly={false}
          />

          {/* user message */}
          <FormTextArea
            Icon={MessageCircle}
            htmlFor="message"
            id="message"
            identification="message"
            placeholder="Message"
            name="message"
            readonly={false}
          />

          {/* form submit button */}
          <ShadButton
            type="submit"
            className={`${isPending && "animate-pulse"} cursor-pointer`}
          >
            Send message
          </ShadButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
