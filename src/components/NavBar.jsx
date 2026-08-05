import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Stack", href: "#stack" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
        document.body.style.overflow = "auto";
    };
}, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <motion.nav
        animate={{
          width: scrolled ? "90%" : "95%",
        }}
        transition={{
          duration: 0.35,
        }}
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          px-6
          py-4
          transition-all
          duration-300
          ${
            scrolled
              ? "border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }
        `}
      >
              {/* Logo */}

        <motion.a
          href="#hero"
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          className="group flex items-center"
        >
          <span
            className="
              bg-gradient-to-r
              from-violet-400
              via-fuchsia-400
              to-violet-300
              bg-clip-text
              text-3xl
              font-black
              tracking-[0.3em]
              text-transparent
            "
          >
            PSG
          </span>

          <span
            className="
              ml-1
              h-2
              w-2
              rounded-full
              bg-violet-400
              transition-all
              duration-300
              group-hover:shadow-[0_0_20px_#8b5cf6]
            "
          />
        </motion.a>

                <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                text-gray-300
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item.title}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-violet-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>
        <motion.a
          href="/Parvinder_Singh_Gandhi_Resume.pdf"
          download="Parvinder_Singh_Gandhi_Resume.pdf"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="
            hidden
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[0_0_25px_rgba(139,92,246,.35)]
            lg:flex
          "
        >
          <Download size={18} />

          Resume
        </motion.a>
                <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            p-3
            text-white
            lg:hidden
          "
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>
      
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: .25 }}
              className="
                  mt-3
                  absolute
                  left-4
                  right-4
                  z-40
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/90
                  backdrop-blur-2xl
                  shadow-2xl
                  lg:hidden
              "
          >
            <div className="flex flex-col p-6">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-4
                    text-gray-300
                    transition-all
                    duration-300
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  {item.title}
                </a>
              ))}

              <a
                  href="/Parvinder_Singh_Gandhi_Resume.pdf"
                  download="Parvinder_Singh_Gandhi_Resume.pdf"
                  className="
                      mt-6
                      flex
                      h-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-r
                      from-violet-600
                      to-fuchsia-600
                      font-semibold
                      text-white
                  "
              >
                <Download size={18} />

                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;