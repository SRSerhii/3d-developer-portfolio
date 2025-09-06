import React, { useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import SectionWrapper from "../hoc/SectionWrapper";
import { useTranslation } from 'react-i18next';

const EarthCanvas = React.lazy(() => import('./canvas/Earth'));

const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: form.name.trim() ? "" : t('contactForm.validation.name'),
      email: form.email.trim()
        ? ""
        : t('contactForm.validation.email.required'),
      message: form.message.trim() ? "" : t('contactForm.validation.message'),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) {
      return;
    }
    setLoading(true);

    const now = new Date();
    const time = now.toLocaleString();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Serhii Shevchenko",
          email: form.email,
          to_email: import.meta.env.VITE_MY_EMAIL,
          message: form.message,
          time: time,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(t('contactForm.alert.success'));

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(t('contactForm.alert.error'));
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-green-900 p-8 rounded-2xl'
      >
        <p className="sectionSubText">{t('contactForm.subtitle')}</p>
        <h3 className="sectionHeadText">{t('contactForm.title')}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('contactForm.fields.name')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('contactForm.fields.name_placeholder')}
              className='bg-green-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('contactForm.fields.email')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('contactForm.fields.email_placeholder')}
              className='bg-green-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('contactForm.fields.message')}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('contactForm.fields.message_placeholder')}
              className='bg-green-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
          </label>

          <button
            type='submit'
            className='bg-green-900 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? t('contactForm.sending') : t('contactForm.sendBtn')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
