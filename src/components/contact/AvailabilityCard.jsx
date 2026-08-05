import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { availability, statusCards } from "../../data/contactData";

function AvailabilityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10">
        {/* Header */}

        <div className="flex items-center gap-5">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-violet-500/10
              text-violet-400
            "
          >
            <BriefcaseBusiness size={20} />
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Currently Available For
            </h3>

            <div className="mt-3 h-1 w-16 rounded-full bg-violet-500" />
          </div>
        </div>

        {/* Availability List */}

        <div className="mt-8 lg:space-y-5 space-y-2">
          {availability.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="flex items-start gap-4"
            >
              <CheckCircle2
                size={22}
                className="mt-1 shrink-0 text-violet-400"
              />

              <span className="text-md md:text-lg text-gray-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status */}

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {statusCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    className="text-violet-400"
                  />

                  <span className="text-sm text-gray-400">
                    {item.title}
                  </span>
                </div>

                <p className="mt-3 font-medium text-white">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <motion.a
          href="mailto:Mr.ParvinderSinghGandhi@gmail.com"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            via-purple-600
            to-fuchsia-600
            px-8
            py-5
            text-lg
            font-semibold
            text-white
            shadow-[0_0_30px_rgba(139,92,246,.35)]
            transition-all
            duration-300
            hover:shadow-[0_0_45px_rgba(139,92,246,.55)]
          "
        >
          Schedule a Conversation

          <ArrowRight size={22} />
        </motion.a>

        {/* Footer */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
          className="
            mt-8
            text-center
            font-[cursive]
            text-lg
            text-violet-300/80
          "
        >
          I'll get back to you as soon as possible!
        </motion.p>
      </div>
    </motion.div>
  );
}

export default AvailabilityCard;