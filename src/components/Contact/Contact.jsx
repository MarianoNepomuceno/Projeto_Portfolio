import SectionHeader from '../common/SectionHeader/SectionHeader';
import ContactCard from './ContactCard';
import { contactSection, contactItems } from '../../data/contact';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          title={contactSection.title}
          subtitle={contactSection.subtitle}
          id="contact-title"
        />

        <div className="contact__grid">
          {contactItems.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
