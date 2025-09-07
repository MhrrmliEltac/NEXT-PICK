import { InitialState } from "@/pages/ContactUs";

export const handleSubmit = (_: InitialState, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phoneNumber");
  const message = formData.get("message");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (email && typeof email === "string" && emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    };
  }

  if (!name && !email) {
    return {
      success: false,
      message: "Username and email are required!",
    };
  }

  console.log(name, email, phone, message);

  return {
    success: true,
    message: "Send message successfull",
  };
};
