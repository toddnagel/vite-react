import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faXTwitter,
  faTiktok,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Owner {
  id: number;
  name: string;
  title: string;
  image: string;
  email?: string;
  socials?: {
    twitter?: string;
    discord?: string;
    tiktok?: string;
    instagram?: string;
    telegram?: string;
  };
}

const owners: Owner[] = [
  {
    id: 1,
    name: "Cryptonite",
    title: "Founder & Visionary Explorer",
    image: "/01.jpg",
    email: "xrparmyis@gmail.com",
    socials: {
      twitter: "https://x.com/XoloDojo",
      discord: "#",
      tiktok: "#",
      instagram: "#",
      telegram: "#",
    },
  },
  {
    id: 2,
    name: "RedShadow",
    title: "Visionary Artist & Cultural Alchemist",
    image: "/02.jpg",
    email: "redshadow@xolodojo.com",
    socials: {
      twitter: "#",
      discord: "#",
      tiktok: "#",
      instagram: "#",
      telegram: "#",
    },
  },
  {
    id: 3,
    name: "Code",
    title: "Lead Builder & Degen Architect",
    image: "/03.jpg",
    email: "code@xolodojo.com",
    socials: {
      twitter: "#",
      discord: "#",
      tiktok: "#",
      instagram: "#",
      telegram: "#",
    },
  },
];

function OwnerCard({ owner }: { owner: Owner }) {
  const isValidLink = (s?: string) => !!s && s !== "#" && s.trim() !== "";
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 overflow-hidden rounded-lg w-full max-w-xs">
        <img
          src={owner.image}
          alt={owner.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
        {owner.name}
      </h3>
      <p className="text-sm md:text-base text-[#b7e9f7] mb-4">
        {owner.title}
      </p>
      <div className="flex items-center gap-2">
        {isValidLink(owner.email) && (
          <a
            href={`mailto:${owner.email}`}
            title={owner.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </a>
        )}
        {isValidLink(owner.socials?.twitter) && (
          <a
            href={owner.socials!.twitter}
            title={owner.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faXTwitter} size="sm" />
          </a>
        )}
        {isValidLink(owner.socials?.discord) && (
          <a
            href={owner.socials!.discord}
            title={owner.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faDiscord} size="sm" />
          </a>
        )}
        {isValidLink(owner.socials?.tiktok) && (
          <a
            href={owner.socials!.tiktok}
            title={owner.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faTiktok} size="sm" />
          </a>
        )}
        {isValidLink(owner.socials?.instagram) && (
          <a
            href={owner.socials!.instagram}
            title={owner.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
        )}
        {isValidLink(owner.socials?.telegram) && (
          <a
            href={owner.socials!.telegram}
            title={owner.title}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faTelegram} size="sm" />
          </a>
        )}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <section
        className="transition-all relative bg-cover bg-center bg-no-repeat py-16 md:py-24 mt-4 md:mt-6 lg:mt-8"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="section-title max-w-2xl">
            <PageTitle title="contact us" animate delay={0} />
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {owners.map((owner) => (
              <OwnerCard key={owner.id} owner={owner} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;
