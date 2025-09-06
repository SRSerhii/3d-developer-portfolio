
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { useTranslation } from 'react-i18next';

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction = "", type, delay, duration) => ({
  hidden: { opacity: 0, x: direction === "left" ? 100 : direction === "right" ? -100 : 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

const Feedbacks = () => {
  const { t, i18n } = useTranslation();

  const testimonials = [
    {
      id: "testimonial-1",
      testimonial: t('testimonials.feedbacks.client1.feedback'),
      name: t('testimonials.feedbacks.client1.name'),
      designation: t('testimonials.feedbacks.client1.designation'),
      company: t('testimonials.feedbacks.client1.company'),
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: "testimonial-2",
      testimonial: t('testimonials.feedbacks.client2.feedback'),
      name: t('testimonials.feedbacks.client2.name'),
      designation: t('testimonials.feedbacks.client2.designation'),
      company: t('testimonials.feedbacks.client2.company'),
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: "testimonial-3",
      testimonial: t('testimonials.feedbacks.client3.feedback'),
      name: t('testimonials.feedbacks.client3.name'),
      designation: t('testimonials.feedbacks.client3.designation'),
      company: t('testimonials.feedbacks.client3.company'),
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }) => (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className='bg-green-900 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`mt-12 bg-green-900 rounded-[20px]`}>
      <div
        className={`bg-green-900 rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`sectionSubText`}>{t('testimonials.subtitle')}</p>
          <h2 className={`sectionHeadText`}>{t('testimonials.title')}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.id} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");