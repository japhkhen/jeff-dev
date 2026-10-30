"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const services = [
  "Brand identity",
  "Website",
  "Product design",
  "Design and build",
  "Not sure yet",
];

const budgets = [
  "Under GHS 2,000",
  "GHS 2,000 – 5,000",
  "GHS 5,000 – 12,000",
  "Above GHS 12,000",
  "Not sure yet",
];

function validate(values: Fields): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  if (name.length < 2) errors.name = "Please enter your name.";
  else if (!/^[\p{L}\s'.-]+$/u.test(name)) {
    errors.name = "Use letters, spaces, and simple punctuation.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const phone = values.phone.replace(/[\s-]/g, "");
  if (phone && !/^(?:\+233|0)\d{9}$/.test(phone)) {
    errors.phone = "Use a Ghana number, such as 055 314 0985.";
  }

  if (!values.service) errors.service = "Choose the kind of work you need.";

  if (values.message.trim().length < 20) {
    errors.message = "Add a sentence or two so Jeff knows what you need.";
  } else if (values.message.trim().length > 2000) {
    errors.message = "Keep the note under 2,000 characters.";
  }

  return errors;
}

function fieldClass(invalid: boolean) {
  return `mt-2 w-full rounded-2xl bg-card px-4 py-3 text-sm text-ink ring-1 outline-none transition placeholder:text-muted/70 focus:ring-2 focus:ring-pine ${
    invalid ? "ring-clay" : "ring-line"
  }`;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<Fields | null>(null);

  function update(key: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first ?? "")?.focus();
      return;
    }
    setSubmitted(values);
  }

  if (submitted) {
    const body = [
      `Name: ${submitted.name}`,
      `Email: ${submitted.email}`,
      `Phone: ${submitted.phone || "Not given"}`,
      `Work: ${submitted.service}`,
      `Budget: ${submitted.budget || "Not given"}`,
      "",
      submitted.message.trim(),
    ].join("\n");
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Project enquiry from ${submitted.name.trim()}`,
    )}&body=${encodeURIComponent(body)}`;

    return (
      <div className="rounded-[1.75rem] bg-card p-6 ring-1 ring-line sm:p-8" role="status">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">
          Noted on this page
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">
          Thanks, {submitted.name.trim().split(" ")[0]}.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This is a static site, so the note stays in your browser and is not
          sent to a server. Open it in your email app, or reach Jeff directly
          on the numbers below.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={mailto}
            className="inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-paper hover:bg-pine-dark"
          >
            Email this brief
          </a>
          <a
            href={profile.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-card px-5 py-3 text-sm font-medium ring-1 ring-line hover:bg-white"
          >
            WhatsApp {profile.whatsapp.display}
          </a>
        </div>
        <button
          type="button"
          className="mt-6 text-sm text-pine underline-offset-4 hover:underline"
          onClick={() => {
            setSubmitted(null);
            setValues(initial);
          }}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[1.75rem] bg-card p-6 ring-1 ring-line sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass(Boolean(errors.name))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-clay" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass(Boolean(errors.email))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-clay" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="055 314 0985"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass(Boolean(errors.phone))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-sm text-clay" role="alert">
              {errors.phone}
            </p>
          ) : (
            <p id="phone-hint" className="mt-1.5 text-xs text-muted">
              A Ghana mobile or landline, if you want a call back.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-medium">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className={fieldClass(Boolean(errors.service))}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-1.5 text-sm text-clay" role="alert">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className="text-sm font-medium">
            Budget <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={fieldClass(false)}
          >
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            About the project
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className={fieldClass(Boolean(errors.message))}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="What are you making, and when do you need it?"
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-sm text-clay" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-paper transition hover:bg-pine-dark"
      >
        Send the brief
      </button>
    </form>
  );
}
