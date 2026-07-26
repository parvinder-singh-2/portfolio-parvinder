import ContactInfo from "./ContactInfo";
import AvailabilityCard from "./AvailabilityCard";

function ContactContent() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2 w-full">
      <ContactInfo />

      <AvailabilityCard />
    </div>
  );
}

export default ContactContent;