import { motion } from "framer-motion";
import { Send } from "lucide-react";

import ContactInfoCard from "./ContactInfoCard";
import { contactInfo } from "../../data/contactData";

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        w-screen
        md:w-full
        border
        border-white/10
        bg-white/[0.03]
        px-5
        pt-8
        pb-4
        backdrop-blur-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-5">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-violet-500/10
            text-violet-400
          "
        >
          <Send size={20} />
        </div>

        <div>
          <h3 className="md:text-3xl text-2xl font-bold text-white">
            Let's Connect
          </h3>

          <div className="mt-3 h-1 w-16 rounded-full bg-violet-500" />
        </div>
      </div>

      {/* Description */}

      <p className="mt-3 md:text-lg text-md leading-6 md:leading-8 text-gray-400">
        Have an idea, opportunity, or just want to say hello?
        I'm always happy to connect and discuss exciting
        projects or career opportunities.
      </p>

      {/* Cards */}

      <div className="mt-5 space-y-4">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <ContactInfoCard {...item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ContactInfo;