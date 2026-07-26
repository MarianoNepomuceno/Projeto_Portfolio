import { contactIconMap } from '../../utils/iconMaps';
import './ContactCard.css';

function ContactCard({ item }) {
  const Icon = contactIconMap[item.icon];
  const isExternal = item.id !== 'email';

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="contact-card card"
      aria-label={`${item.label}: ${item.value}`}
    >
      <div className="contact-card__icon" aria-hidden="true">
        {Icon && <Icon />}
      </div>
      <div>
        <span className="contact-card__label">{item.label}</span>
        <span className="contact-card__value">{item.value}</span>
      </div>
    </a>
  );
}

export default ContactCard;
