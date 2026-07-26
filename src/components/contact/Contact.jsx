import SectionHeading from "../common/SectionHeading";
import ContactContent from "./ContactContent";

import { Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-10 md:py-14"
    >

      <div className="relative z-10 mx-auto max-w-7xl md:px-6 px-2 ">

        <SectionHeading
          badgeIcon={Mail}
          badge="Get In Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="I'm always open to discussing new opportunities, interesting projects and potential collaborations."
        />

        <ContactContent />

      </div>
    </section>
  );
}

export default Contact;