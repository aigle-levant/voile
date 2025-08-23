// libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller } from "react-hook-form";

export default function Form() {
  const { t } = useTranslation("contact");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  function onSubmit(data: unknown) {
    console.log(data);
  }
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-3 flex flex-col items-center justify-center"
    >
      {/* topic */}
      <div className="flex flex-row">
        <label className="mt-5 mr-3 font-sans text-zinc-950 dark:text-zinc-50">
          {t("topic")} *
        </label>
        <select
          {...register("topic", { required: true })}
          className="my-3 border-b border-zinc-50 p-2"
        >
          <option
            className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
            value={t("customer")}
          >
            {t("customer")}
          </option>
          <option
            className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
            value={t("service")}
          >
            {t("service")}
          </option>
          <option
            className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
            value={t("work")}
          >
            {t("work")}
          </option>
        </select>
      </div>

      {/* subject */}
      <div className="my-4 flex flex-row">
        <label className="font-sans text-zinc-950 dark:text-zinc-50">
          {t("sub")} *
        </label>
        <input
          type="text"
          className="mx-2 border-b border-zinc-50"
          {...register("subject", { required: true })}
        />
      </div>

      {/* civility */}
      <label className="mt-4 mr-6 font-sans text-zinc-950 dark:text-zinc-50">
        {t("prefix")}
      </label>
      <div className="my-4 flex flex-row gap-5 text-zinc-950 dark:text-zinc-50">
        <div className="flex flex-row gap-1">
          <input {...register("prefix")} type="radio" value={t("mr")} />
          <label className="text-zinc-950 dark:text-zinc-50">{t("mr")}</label>
        </div>
        <div className="flex flex-row gap-1">
          <input {...register("prefix")} type="radio" value={t("mrs")} />
          <label className="text-zinc-950 dark:text-zinc-50">{t("mrs")}</label>
        </div>
        <div className="flex flex-row gap-1">
          <input {...register("prefix")} type="radio" value={t("miss")} />
          <label className="text-zinc-950 dark:text-zinc-50">{t("miss")}</label>
        </div>
        <div className="flex flex-row gap-1">
          <input {...register("prefix")} type="radio" value={t("mx")} />
          <label className="text-zinc-950 dark:text-zinc-50">{t("mx")}</label>
        </div>
        <div className="flex flex-row gap-1">
          <input
            {...register("prefix")}
            type="radio"
            value={t("prefix-none")}
          />
          <label className="text-zinc-950 dark:text-zinc-50">
            {t("prefix-none")}
          </label>
        </div>
      </div>

      {/* name */}
      <div className="my-4 flex flex-row gap-5 p-2">
        <label className="font-sans text-zinc-950 dark:text-zinc-50">
          {t("name")} *
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="border-b border-zinc-50"
        />
      </div>

      {/* email */}
      <div className="my-4 flex flex-row gap-5 p-2">
        <label className="font-sans text-zinc-950 dark:text-zinc-50">
          {t("email")} *
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="border-b border-zinc-50"
        />
      </div>

      {/* phone number */}
      <div className="my-4 flex flex-row gap-5 p-2">
        <label className="font-sans text-zinc-950 dark:text-zinc-50">
          {t("phone")}
        </label>
        <Controller
          name="Phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              country="FR"
              {...field}
              className="border-b border-zinc-50 font-sans text-zinc-950 dark:text-zinc-50"
            />
          )}
        />
      </div>

      {/* message */}
      <div className="my-4 flex flex-col gap-5 p-2">
        <label className="font-sans text-zinc-950 dark:text-zinc-50">
          {t("message")} *
        </label>
        <textarea
          {...register("text", { required: true })}
          className="border border-zinc-50 p-8"
        />
      </div>
      {/* button */}
      <button
        type="submit"
        className="mt-4 mb-8 rounded-4xl border border-zinc-50 bg-zinc-50 px-4 py-2 text-zinc-950 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 hover:dark:bg-zinc-800 hover:dark:text-white"
      >
        {t("submit")}
      </button>
    </form>
  );
}
