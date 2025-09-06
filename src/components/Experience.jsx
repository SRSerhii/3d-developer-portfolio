
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from "../hoc/SectionWrapper";
import {
  SiFreelancer
} from 'react-icons/si';

import { useTranslation } from 'react-i18next';


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#2ef1710d",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {

  const { t, i18n } = useTranslation();
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const experiences = [
    {
      title: t('experience.fullstackdeveloper.title'),
      company_name: t('experience.fullstackdeveloper.company'),
      icon: SiFreelancer,
      iconBg: "#383E56",
      date: t('experience.fullstackdeveloper.duration'),
      points: [
        t('experience.fullstackdeveloper.description.0'),
        t('experience.fullstackdeveloper.description.1'),
      ],
    },
    {
      title: t('experience.headOfAdvertising.title'),
      company_name: t('experience.headOfAdvertising.company'),
      icon: SiFreelancer,
      iconBg: "#E6DEDD",
      date: t('experience.headOfAdvertising.duration'),
      points: [
        t('experience.headOfAdvertising.description.0'),
        t('experience.headOfAdvertising.description.1'),
        t('experience.headOfAdvertising.description.2'),
        t('experience.headOfAdvertising.description.3'),
        t('experience.headOfAdvertising.description.4'),
      ],
    },
    {
      title: t('experience.webDeveloper.title'),
      company_name: t('experience.webDeveloper.company'),
      icon: SiFreelancer,
      iconBg: "#383E56",
      date: t('experience.webDeveloper.duration'),
      points: [
        t('experience.webDeveloper.description.0'),
        t('experience.webDeveloper.description.1'),
        t('experience.webDeveloper.description.2'),
        t('experience.webDeveloper.description.3'),

      ],
    },
  ];

  return (
    <div className='mb-28'>
        <p className={`sectionSubText text-center`}>
          {t('experience.subtitle')}
        </p>
        <h2 className={`sectionHeadText text-center`}>
          {t('experience.title')}
        </h2>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
