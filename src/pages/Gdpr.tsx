import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

type GdprSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type GdprContent = {
  badge: string;
  title: string;
  intro: string;
  validFrom: string;
  lastUpdated: string;
  rightsTitle: string;
  rightsList: string[];
  contactTitle: string;
  contactName: string;
  contactAddress: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  contactEmail: string;
  contactPhone: string;
  sections: GdprSection[];
};

const gdprContent: Record<'cs' | 'en', GdprContent> = {
  cs: {
    badge: 'GDPR prohlášení',
    title: 'Informace o zpracování osobních údajů',
    intro:
      'Tento dokument popisuje, jakým způsobem Centra preventivní medicíny zpracovávají osobní údaje klientů, pacientů, návštěvníků webu a dalších osob v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a souvisejícími právními předpisy České republiky.',
    validFrom: 'Platnost dokumentu od: 31. 3. 2026',
    lastUpdated: 'Poslední změna: 31. 3. 2026',
    rightsTitle: 'Práva subjektů údajů podle GDPR',
    rightsList: [
      'právo na přístup k osobním údajům podle čl. 15 GDPR',
      'právo na opravu nepřesných nebo neaktuálních údajů podle čl. 16 GDPR',
      'právo na výmaz údajů v případech uvedených v čl. 17 GDPR',
      'právo na omezení zpracování podle čl. 18 GDPR',
      'právo na přenositelnost údajů podle čl. 20 GDPR',
      'právo vznést námitku proti zpracování podle čl. 21 GDPR',
      'právo podat stížnost u dozorového úřadu (Úřad pro ochranu osobních údajů)',
    ],
    contactTitle: 'Kontakt pro ochranu osobních údajů',
    contactName: 'Premedical BS, s.r.o.',
    contactAddress: 'Palackého třída 3048/124, 612 00 Brno',
    contactEmailLabel: 'E-mail',
    contactPhoneLabel: 'Telefon',
    contactEmail: 'info@premedical.cz',
    contactPhone: '+420 777 745 893',
    sections: [
      {
        id: 'spravce',
        title: '1. Kdo je správcem osobních údajů',
        paragraphs: [
          'Správcem osobních údajů je společnost Centra preventivní medicíny (dále jen "správce"). Správce určuje účel a prostředky zpracování osobních údajů a odpovídá za to, že zpracování probíhá zákonným, korektním a transparentním způsobem.',
        ],
      },
      {
        id: 'rozsah',
        title: '2. Jaké osobní údaje zpracováváme',
        bullets: [
          'identifikační údaje (jméno, příjmení, datum narození, rodné číslo je-li vyžadováno právním předpisem)',
          'kontaktní údaje (telefon, e-mail, adresa)',
          'údaje o zdravotním stavu a anamnéze, laboratorní a diagnostické výsledky',
          'údaje o objednávkách, návštěvách a poskytnutých službách',
          'údaje o komunikaci se správcem (e-mail, telefon, formulář na webu)',
          'technické údaje při používání webu (IP adresa, cookies, provozní logy)',
        ],
      },
      {
        id: 'ucely',
        title: '3. Účely a právní základy zpracování',
        paragraphs: [
          'Osobní údaje zpracováváme zejména za účelem poskytování zdravotních služeb, vedení zdravotnické dokumentace, objednávání termínů, vyřizování dotazů a plnění právních povinností.',
        ],
        bullets: [
          'plnění právní povinnosti (čl. 6 odst. 1 písm. c GDPR a čl. 9 odst. 2 písm. h GDPR)',
          'plnění smlouvy nebo jednání o smlouvě (čl. 6 odst. 1 písm. b GDPR)',
          'oprávněný zájem správce (čl. 6 odst. 1 písm. f GDPR), zejména bezpečnost IT a ochrana práv',
          'souhlas subjektu údajů, pokud je vyžadován (čl. 6 odst. 1 písm. a GDPR)',
        ],
      },
      {
        id: 'prijemci',
        title: '4. Komu můžeme osobní údaje předávat',
        paragraphs: [
          'Osobní údaje mohou být předány pouze v nezbytném rozsahu a za podmínek stanovených právními předpisy. Přístup mohou mít zejména naši smluvní zpracovatelé a osoby podílející se na poskytování zdravotní péče.',
        ],
        bullets: [
          'poskytovatelé IT služeb, hostingu a zabezpečení systémů',
          'laboratoře a smluvní zdravotnická zařízení',
          'účetní, daňoví a právní poradci v rozsahu nezbytném pro plnění povinností',
          'orgány veřejné moci, pokud to vyžaduje zákon',
        ],
      },
      {
        id: 'doba',
        title: '5. Jak dlouho údaje uchováváme',
        paragraphs: [
          'Údaje uchováváme po dobu stanovenou právními předpisy, zejména předpisy upravujícími vedení zdravotnické dokumentace, nebo po dobu nezbytnou k ochraně práv a právem chráněných zájmů správce.',
          'Po uplynutí stanovené doby jsou údaje bezpečně vymazány, anonymizovány nebo archivovány podle příslušných pravidel.',
        ],
      },
      {
        id: 'automatizace',
        title: '6. Automatizované rozhodování a profilování',
        paragraphs: [
          'Správce neprovádí automatizované rozhodování, které by mělo pro subjekt údajů právní účinky nebo se ho obdobně významně dotýkalo podle čl. 22 GDPR.',
        ],
      },
      {
        id: 'cookies',
        title: '7. Cookies a provozní data webu',
        paragraphs: [
          'Při návštěvě webu mohou být zpracovávány technické cookies nezbytné pro funkčnost webu. Analytické a marketingové cookies používáme pouze na základě souhlasu, je-li vyžadován.',
        ],
      },
      {
        id: 'zabezpeceni',
        title: '8. Zabezpečení osobních údajů',
        paragraphs: [
          'Přijali jsme organizační a technická opatření k ochraně osobních údajů před neoprávněným přístupem, ztrátou, zneužitím nebo neoprávněnou změnou. Přístup k datům mají pouze oprávnění pracovníci a smluvní partneři vázaní mlčenlivostí.',
        ],
      },
      {
        id: 'uplatneni-prav',
        title: '9. Jak uplatnit svá práva',
        paragraphs: [
          'Svá práva můžete uplatnit písemně nebo elektronicky na kontaktech uvedených níže. Na žádost reagujeme bez zbytečného odkladu, nejpozději do 1 měsíce od doručení. Ve složitých případech může být lhůta prodloužena o další 2 měsíce.',
        ],
      },
      {
        id: 'zmeny',
        title: '10. Aktualizace tohoto prohlášení',
        paragraphs: [
          'Toto prohlášení můžeme přiměřeně aktualizovat s ohledem na legislativní změny nebo změnu způsobu zpracování. Aktuální verze je vždy dostupná na tomto webu.',
        ],
      },
    ],
  },
  en: {
    badge: 'GDPR statement',
    title: 'Information on personal data processing',
    intro:
      'This document explains how Preventive Medicine Centers process personal data of clients, patients, website visitors, and other individuals in accordance with Regulation (EU) 2016/679 (GDPR) and applicable law.',
    validFrom: 'Effective date: March 31, 2026',
    lastUpdated: 'Last updated: March 31, 2026',
    rightsTitle: 'Data subject rights under GDPR',
    rightsList: [
      'right of access under Article 15 GDPR',
      'right to rectification under Article 16 GDPR',
      'right to erasure in cases listed in Article 17 GDPR',
      'right to restriction of processing under Article 18 GDPR',
      'right to data portability under Article 20 GDPR',
      'right to object under Article 21 GDPR',
      'right to lodge a complaint with the supervisory authority',
    ],
    contactTitle: 'Data protection contact',
    contactName: 'Premedical BS, s.r.o.',
    contactAddress: 'Palackeho trida 3048/124, 612 00 Brno, Czech Republic',
    contactEmailLabel: 'Email',
    contactPhoneLabel: 'Phone',
    contactEmail: 'info@premedical.cz',
    contactPhone: '+420 777 745 893',
    sections: [
      {
        id: 'controller',
        title: '1. Data controller',
        paragraphs: [
          'The data controller is Preventive Medicine Centers (the "controller"). The controller determines the purposes and means of processing and is responsible for lawful, fair, and transparent processing.',
        ],
      },
      {
        id: 'scope',
        title: '2. Categories of personal data',
        bullets: [
          'identification data (name, date of birth, national ID if required by law)',
          'contact data (phone, e-mail, address)',
          'health-related data and diagnostics',
          'appointment and service records',
          'communication data (e-mail, phone, forms)',
          'technical web usage data (IP address, cookies, logs)',
        ],
      },
      {
        id: 'purposes',
        title: '3. Purposes and legal bases',
        paragraphs: [
          'We process personal data mainly for healthcare provision, medical documentation, appointment management, inquiry handling, and legal compliance.',
        ],
        bullets: [
          'legal obligation (Art. 6(1)(c), Art. 9(2)(h) GDPR)',
          'contract performance or pre-contractual measures (Art. 6(1)(b) GDPR)',
          'legitimate interest (Art. 6(1)(f) GDPR), especially IT security and legal protection',
          'consent where required (Art. 6(1)(a) GDPR)',
        ],
      },
      {
        id: 'recipients',
        title: '4. Data recipients',
        paragraphs: [
          'Personal data may be shared only to the extent necessary and under legal safeguards.',
        ],
        bullets: [
          'IT, hosting, and security providers',
          'laboratories and contracted healthcare providers',
          'accounting, tax, and legal advisors where required',
          'public authorities where legally required',
        ],
      },
      {
        id: 'retention',
        title: '5. Retention periods',
        paragraphs: [
          'Data is retained for periods defined by applicable law, especially medical record regulations, or for the time necessary to protect legal claims and legitimate interests.',
          'After retention ends, data is securely deleted, anonymized, or archived as required.',
        ],
      },
      {
        id: 'automated',
        title: '6. Automated decision-making',
        paragraphs: [
          'We do not carry out automated decision-making producing legal or similarly significant effects under Article 22 GDPR.',
        ],
      },
      {
        id: 'cookies',
        title: '7. Cookies and web operation data',
        paragraphs: [
          'Technical cookies required for site functionality may be processed. Analytics and marketing cookies are used only with consent where required.',
        ],
      },
      {
        id: 'security',
        title: '8. Data security',
        paragraphs: [
          'We apply organizational and technical security measures against unauthorized access, loss, misuse, or unlawful alteration. Access is limited to authorized personnel and bound processors.',
        ],
      },
      {
        id: 'rights',
        title: '9. How to exercise your rights',
        paragraphs: [
          'You can submit a request in writing or electronically using the contacts below. We respond without undue delay and no later than one month, extendable by two months in complex cases.',
        ],
      },
      {
        id: 'updates',
        title: '10. Statement updates',
        paragraphs: [
          'This statement may be updated in response to legal or operational changes. The current version is always published on this website.',
        ],
      },
    ],
  },
};

export const Gdpr: React.FC = () => {
  const { language } = useI18n();
  const content = gdprContent[language];

  return (
    <div className="pt-32 pb-20 px-6">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <article className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-7 md:p-10 shadow-sm">
          <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            {content.badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">{content.title}</h1>
          <div className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <span>{content.validFrom}</span>
            <span>{content.lastUpdated}</span>
          </div>
          <p className="mt-6 text-slate-700 leading-relaxed">{content.intro}</p>

          <div className="mt-8 h-px bg-slate-200" />

          <div className="mt-8 space-y-9">
            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-xl border border-emerald-200 bg-emerald-50/60 p-6">
            <h2 className="text-lg font-bold text-emerald-900">{content.rightsTitle}</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-emerald-900">
              {content.rightsList.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{content.contactTitle}</h2>
            <p className="mt-3 text-slate-700">{content.contactName}</p>
            <p className="text-slate-700">{content.contactAddress}</p>
            <p className="mt-2 text-slate-700">{content.contactEmailLabel}: {content.contactEmail}</p>
            <p className="text-slate-700">{content.contactPhoneLabel}: {content.contactPhone}</p>
          </section>
        </article>
      </motion.section>
    </div>
  );
};
