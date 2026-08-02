"use client";

import { Controller, DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AskQuestionSchema } from "@/lib/validations";

import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldContent } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const QuestionForm = () => {
  const form = useForm({
    // resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = () => {};

  return (
    <form onSubmit={form.handleSubmit(handleCreateQuestion)} className="flex w-full flex-col gap-10">
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="flex w-full flex-col" >
              <FieldLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FieldLabel>
              <Input
                className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                {...field}
              />
            </Field>
          )}
        />
        <FieldDescription className="body-regular text-light-500 mt-2.5">
          Be specific and imagine you&apos;re asking a question to another person.
        </FieldDescription>
        <FieldContent />
      </FieldGroup>
      <FieldGroup>
        <Controller
          name="content"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="flex w-full flex-col">
              <FieldLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem <span className="text-primary-500">*</span>
              </FieldLabel>
              <div>Editor</div>

            </Field>
          )}
        />
        
        <FieldDescription className="body-regular text-light-500 mt-2.5">
          Introduce the problem and expand on what you&apos;ve put in the title.
        </FieldDescription>
        <FieldContent />
      </FieldGroup>
      <FieldGroup>
        <Controller
          name="tags"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="flex w-full flex-col gap-3">
              <FieldLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FieldLabel>
              <div>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  placeholder="Add tags..."
                  {...field}
                />
                Tags
              </div>
            </Field>
          )}
        />
        {/* <FormControl>Editor</FormControl> */}
        <FieldDescription className="body-regular text-light-500 mt-2.5">
          Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.
        </FieldDescription>
        <FieldContent />
      </FieldGroup>
      <div className="mt-16 flex justify-end">
        <Button type="submit" className="primary-gradient !text-light-900 w-fit">
          Ask A Question
        </Button>
      </div>
    </form>
  );
  
};

export default QuestionForm;
