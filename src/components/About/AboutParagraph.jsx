function AboutParagraph({ paragraph }) {
  return (
    <p>
      {paragraph.parts.map((part, index) =>
        part.type === 'strong' ? (
          <strong key={index}>{part.value}</strong>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </p>
  );
}

export default AboutParagraph;
