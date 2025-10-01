import React from 'react';
import './WhatWeDo.css';
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

export const WhatWeDoItem = ({ number, titleKey, paragraphKey }) => {
  const { t } = useTranslation();
  return (
    <article className="whatwedo-item">
      <div className="whatwedo-inner">
        <div className="whatwedo-left">
          <span className="whatwedo-number">{number}</span>
        </div>

        <div className="whatwedo-right">
          <h2 className="whatwedo-title">{t(titleKey)}</h2>
          {paragraphKey && <p className="whatwedo-paragraph">{t(paragraphKey)}</p>}
        </div>
      </div>
      <div className="whatwedo-divider" />
    </article>
  );
};

const items = [
  {
    number: '01',
    titleKey: 'what_section.what_01_title',
    paragraphKey: 'what_section.what_01_phrase',
  },
  {
    number: '02',
    titleKey: 'what_section.what_02_title',
    paragraphKey: 'what_section.what_02_phrase',
  },
  {
    number: '03',
    titleKey: 'what_section.what_03_title',
    paragraphKey: 'what_section.what_03_phrase',
  },
  {
    number: '04',
    titleKey: 'what_section.what_04_title',
    paragraphKey: 'what_section.what_04_phrase',
  },
  {
    number: '05',
    titleKey: 'what_section.what_05_title',
    paragraphKey: 'what_section.what_05_phrase',
  },
];

export default function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <>
      <div id="">
        <SectionTitle
          id="section-title-first-title"
          text={t('navbar.nav_item_what_def')}
          textId="what-we-do"
          paragraph={t('what_section.what_phrase_main')}
        />
      </div>
      <section className="whatwedo">
        {items.map((it) => (
          <WhatWeDoItem key={it.number} {...it} />
        ))}
      </section>
    </>
  );
}
