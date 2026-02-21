import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faReddit,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface Owner {
  id: number;
  name: string;
  title: string;
  image: string;
  socials: {
    twitter: string;
    discord: string;
    reddit: string;
  };
}

const owners: Owner[] = [
  {
    id: 1,
    name: "Cryptonite",
    title: "Founder & Visionary Explorer",
    image: "/01.jpg",
    socials: {
      twitter: "#",
      discord: "#",
      reddit: "#",
    },
  },
  {
    id: 2,
    name: "RedShadow",
    title: "Visionary Artist & Cultural Alchemist",
    image: "/02.jpg",
    socials: {
      twitter: "#",
      discord: "#",
      reddit: "#",
    },
  },
  {
    id: 3,
    name: "Code",
    title: "Lead Builder & Degen Architect",
    image: "/03.jpg",
    socials: {
      twitter: "#",
      discord: "#",
      reddit: "#",
    },
  },
];

function OwnerCard({ owner }: { owner: Owner }) {
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
        <a
          href={owner.socials.twitter}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faXTwitter} size="sm" />
        </a>
        <a
          href={owner.socials.discord}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faDiscord} size="sm" />
        </a>
        <a
          href={owner.socials.reddit}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#b7e9f7] text-[#cdcdcd] hover:text-white hover:bg-[#b7e9f7]/80 transition-all duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faReddit} size="sm" />
        </a>
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
