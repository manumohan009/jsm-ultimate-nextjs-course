"use client";

import Link from "next/link";
import { Controller, DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({ schema, defaultValues, formType, onSubmit }: AuthFormProps<T>) => {
  const form = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO: Authenticate User
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";
  return (
    <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleSubmit)} className="mt-10 space-y-6">
      <FieldGroup>
        {Object.keys(defaultValues).map((field) => {
          return (
            <Controller
              key={field}
              name={field as Path<T>}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    {field.name === "email"
                      ? "Email Address"
                      : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </FieldLabel>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-12 border"
                    {...field}
                  />
                </Field>
              )}
            />
          );
        })}
        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium rounded-2 font-inter !text-light-900 min-h-12 w-full px-4 py-3"
        >
          {form.formState.isSubmitting ? (buttonText === "Sign In" ? "Signin In..." : "Signing Up...") : buttonText}
        </Button>

        {formType === "SIGN_IN" ? (
          <p>
            Don't have an account?{" "}
            <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">
              Sign in
            </Link>
          </p>
        )}
      </FieldGroup>
    </form>
  );
};

export default AuthForm;
