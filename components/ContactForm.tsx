"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ChevronDown, CircleAlert, CircleCheck, Loader2, Send } from "lucide-react";
import { serviceOptions } from "@/lib/data/contact-form";
import { siteConfig } from "@/lib/site-config";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_VALUES: FormValues = { name: "", email: "", service: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Ingresá tu nombre.";

  if (!values.email.trim()) {
    errors.email = "Ingresá tu email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Ingresá un email válido.";
  }

  if (!values.service) errors.service = "Elegí una opción.";

  if (!values.message.trim()) {
    errors.message = "Contame brevemente tu consulta.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Agregá un poco más de detalle (mínimo 10 caracteres).";
  }

  return errors;
}

const fieldLabel =
  "block font-mono text-xs tracking-[0.18em] uppercase text-accent mb-2";

function fieldInput(hasError: boolean) {
  return `w-full bg-bg-mid/60 border rounded-md px-4 py-3 font-sans text-base text-ink placeholder:text-accent-dim/50 outline-none transition-colors duration-250 ease-out ${
    hasError ? "border-error/60 focus:border-error" : "border-accent/25 focus:border-cyan"
  }`;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm font-sans text-error">{message}</p>;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  function updateField(key: keyof FormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [key]: value }));
      setErrors((err) => ({ ...err, [key]: undefined }));
    };
  }

  function handleReset() {
    setValues(EMPTY_VALUES);
    setErrors({});
    setStatus("idle");
    setStatusMessage("");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (honeypotRef.current?.value) return; // bot caught by honeypot, fail silently

    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const formData = new FormData();
      formData.append("access_key", siteConfig.web3forms.accessKey);
      formData.append("subject", `Nueva consulta de ${values.name} — ${values.service}`);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("service", values.service);
      formData.append("message", values.message);
      formData.append("botcheck", honeypotRef.current?.value ?? "");

      const res = await fetch(siteConfig.web3forms.endpoint, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setStatusMessage(
          result.message || "No se pudo enviar. Probá de nuevo o escribime por WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage("No se pudo enviar. Probá de nuevo o escribime por WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-[640px] mx-auto flex flex-col items-center gap-4 py-8 text-center">
        <CircleCheck size={32} strokeWidth={1.5} className="text-cyan" />
        <h3 className="m-0 font-sans text-xl font-semibold text-ink">
          ¡Mensaje enviado!
        </h3>
        <p className="m-0 font-sans text-base font-light text-ink-muted max-w-[42ch]">
          Gracias por escribir. Te respondo a la brevedad.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-2 font-mono text-xs tracking-[0.18em] uppercase text-cyan border border-cyan/55 rounded px-5 py-2.5 hover:bg-cyan/8 hover:border-cyan transition-colors duration-200"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-[640px] mx-auto flex flex-col gap-5 text-left"
    >
      <input
        ref={honeypotRef}
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={fieldLabel}>
            Nombre *
          </label>
          <input
            id="cf-name"
            type="text"
            value={values.name}
            onChange={updateField("name")}
            placeholder="Tu nombre"
            className={fieldInput(!!errors.name)}
          />
          <FieldError message={errors.name} />
        </div>
        <div>
          <label htmlFor="cf-email" className={fieldLabel}>
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            value={values.email}
            onChange={updateField("email")}
            placeholder="vos@ejemplo.com"
            className={fieldInput(!!errors.email)}
          />
          <FieldError message={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-service" className={fieldLabel}>
          Servicio de interés *
        </label>
        <div className="relative">
          <select
            id="cf-service"
            value={values.service}
            onChange={updateField("service")}
            className={`${fieldInput(!!errors.service)} appearance-none pr-10`}
          >
            <option value="" disabled className="bg-bg-mid text-accent-dim">
              Elegí una opción
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-bg-mid text-ink">
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-accent"
          />
        </div>
        <FieldError message={errors.service} />
      </div>

      <div>
        <label htmlFor="cf-message" className={fieldLabel}>
          Mensaje *
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={updateField("message")}
          placeholder="Contame tu situación..."
          className={`${fieldInput(!!errors.message)} resize-none`}
        />
        <FieldError message={errors.message} />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2.5 font-mono text-sm text-error">
          <CircleAlert size={16} strokeWidth={1.5} className="shrink-0" />
          {statusMessage}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        className="self-center inline-flex items-center gap-3 font-sans font-medium text-lg text-cyan border border-cyan rounded px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        initial={{ borderColor: "#00E5C7" }}
        whileHover={
          status === "submitting"
            ? undefined
            : {
                y: -4,
                backgroundColor: "rgba(0,229,199,0.1)",
                boxShadow: "0 10px 32px rgba(9,17,32,0.45)",
              }
        }
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        {status === "submitting" ? (
          <>
            Enviando...
            <Loader2 size={16} strokeWidth={1.5} className="animate-spin" />
          </>
        ) : (
          <>
            Enviar mensaje
            <Send size={16} strokeWidth={1.5} />
          </>
        )}
      </motion.button>
    </form>
  );
}
