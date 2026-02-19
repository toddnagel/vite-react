import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageTitle from "../components/PageTitle";

const contactCards = [
  {
    icon: faLocationDot,
    title: "Location",
    lines: ["2455 Prudence Street Quas Detroits, MI 48234"],
    links: false,
  },
  {
    icon: faEnvelope,
    title: "Email us",
    lines: ["info@example.com", "info@example.com"],
    links: true,
    href: "mailto:info@example.com",
  },
  {
    icon: faPhone,
    title: "Free call",
    lines: ["+02 (313) 369 5329", "+02 (313) 369 5329"],
    links: true,
    href: "tel:+023133695329",
  },
  {
    icon: faClock,
    title: "Opening hour",
    lines: ["Sun to Fri: 09AM - 5PM", "Saturday: Closed"],
    links: false,
  },
];


function Contact() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="section-title max-w-2xl">
            <PageTitle title="contact us" animate delay={0} />
          </div>
          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
            <div
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] lg:w-1/3"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/contac-img-2.jpg"
                  alt="Contact"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] md:text-4xl">
                Get in touch
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <PageTitle title="Quick support info" animate delay={0} />
            <h2 className="mt-2 text-3xl font-bold text-white opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] md:text-4xl">
              Contact <span className="font-bold">information</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <div
                key={card.title}
                className="flex flex-col rounded-xl border border-white/20 bg-white/5 p-6 opacity-0 transition-colors hover:bg-white/10"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/30 text-xl text-primary-light">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3 className="h3-default text-white">{card.title}</h3>
                <div className="mt-1 space-y-1 text-sm text-white/90">
                  {card.links && card.href
                    ? card.lines.map((line) => (
                        <p key={line}>
                          <a
                            href={card.href}
                            className="text-white/90 underline transition-colors hover:text-primary-light"
                          >
                            {line}
                          </a>
                        </p>
                      ))
                    : card.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
