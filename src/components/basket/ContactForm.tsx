"use client";
import { IProduct } from "@/store/product/product.types";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ShopButton from "../ShopButton";

interface FormInputs {
  name: string;
  email: string;
  tel: string;
}

const ContactForm: FC<{ products: IProduct[] }> = ({ products }) => {
  const [submited, setSubmited] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data, e) => {
    e?.preventDefault();
    console.log(`Name:${data.name}\nEmail:${data.email}\nPhone:${data.tel}\n`);
    setSubmited(true);
  };

  if (!submited)
    return (
      <form className="ml-[3vw]" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-4xl">Send application</h2>
        {(errors.name || errors.email || errors.tel) && (
          <div className="bg-red-400 text-red-900 p-[2vmin] mt-[1vmin] text-xl font-medium rounded-xl">
            All fields are required
          </div>
        )}
        <div className="mt-[1vmin] flex flex-col items-start">
          <label
            className={`text-xl ${errors.name && "font-medium text-red-500"}`}
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            placeholder="Alex"
            className={`border rounded-xl p-[1vmin] ${
              errors.name && "border-red-500"
            }`}
            {...register("name", { required: true })}
          />
        </div>
        <div className="mt-[1vmin] flex flex-col items-start">
          <label
            className={`text-xl ${errors.email && "font-medium text-red-500"}`}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={`border rounded-xl p-[1vmin] ${
              errors.email && "border-red-500"
            }`}
            type="email"
            placeholder="mail@mail.com"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
        </div>
        <div className="mt-[1vmin] flex flex-col items-start">
          <label
            className={`text-xl ${errors.tel && "font-medium text-red-500"}`}
            htmlFor="tel"
          >
            Phone:
          </label>
          <input
            className={`border rounded-xl p-[1vmin] ${
              errors.tel && "border-red-500"
            }`}
            type="tel"
            placeholder="+19301452190"
            {...register("tel", { required: true, pattern: /(\+)?[0-9]+$/g })}
          />
        </div>
        <ShopButton text="Enter" />
      </form>
    );
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center min-h-[600px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        className="fill-green-500 w-[20vmin] h-[20vmin]"
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
      <h2 className="text-4xl font-bold">Success!</h2>
    </div>
  );
};

export default ContactForm;
