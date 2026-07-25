import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { quickLinks } from "../../data/contactData";

function ContactLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-violet-500/40
                hover:shadow-[0_0_35px_rgba(139,92,246,.15)]
              "
            >
              {/* Glow */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative flex h-full flex-col">
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-violet-500/10
                      text-violet-400
                    "
                  >
                    <Icon size={26} />
                  </div>

                  <motion.div
                    className="text-violet-400"
                    whileHover={{ x: 4, y: -4 }}
                  >
                    <ArrowUpRight size={22} />
                  </motion.div>
                </div>

                {/* Content */}

                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gray-400">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Accent */}

                <div className="mt-8 h-px w-full bg-gradient-to-r from-violet-500/40 to-transparent" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ContactLinks;