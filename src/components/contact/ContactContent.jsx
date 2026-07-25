import ContactInfo from "./ContactInfo";
import AvailabilityCard from "./AvailabilityCard";

function ContactContent() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
      <ContactInfo />

      <AvailabilityCard />
    </div>
  );
}

export default ContactContent;