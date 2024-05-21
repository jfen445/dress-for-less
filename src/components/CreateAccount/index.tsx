"use client";

import { redirect } from "next/navigation";
import * as React from "react";
import Input from "../Input";
import { SignupButton } from "../SignupButton";
import Button from "../Button";
import { UserType } from "../../../common/types";
import { useRouter } from "next/navigation";

const CreateAccountComponent = () => {
  const router = useRouter();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    console.log("faefeawfaew", form);
    const formElements = form.elements as typeof form.elements & {
      firstname: { value: string };
      lastname: { value: string };
      email: { value: string };
      password: { value: string };
      mobileNumber: { value: string };
      instagramHandle: { value: string };
      image: { value: string };
    };

    const email = formElements.email.value;
    const password = formElements.password.value;
    const name =
      formElements.firstname.value + " " + formElements.lastname.value;
    const lastname = formElements.lastname.value;
    const mobileNumber = formElements.mobileNumber.value;
    const instagramHandle = formElements.instagramHandle.value;
    const file = formElements.image.value;
    console.log(
      "form",
      email,
      password,

      lastname,
      mobileNumber,
      instagramHandle,
      file,
      name
    );

    const user: UserType = {
      email: formElements.email.value,
      name: formElements.firstname.value + " " + formElements.lastname.value,
      password: formElements.password.value,
      mobileNumber: formElements.mobileNumber.value,
      instagramHandle: formElements.instagramHandle.value ?? "",
    };

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      // Handle errors
    }
  }

  return (
    <>
      <div className="bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account today!
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-2 w-1/2 mx-auto">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <Input type="text" name="firstname" id="firstname" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <Input type="text" name="lastname" id="lastname" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Input type="email" name="email" id="email" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <Input type="text" name="password" id="password" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-2">
                  <Input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    pattern="[0-9]*"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Instagram Handle
                </label>
                <div className="mt-2">
                  <Input
                    type="text"
                    name="instagramHandle"
                    id="instagramHandle"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="border border-rose-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>New Zealand</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ID Verification
                </label>
                <text className="text-xs">
                  Please upload a photo of any valid ID. This is used for
                  security reasons.
                </text>
                <div className="mt-2">
                  <Input type="file" id="image" name="image" />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3 mx-auto">
              <Button type="submit">Create</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccountComponent;
