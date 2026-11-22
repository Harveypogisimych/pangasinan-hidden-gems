export default function PrimaryButton({
  children,
  href = "#destinations",
}) {
  return (
    <a href={href} className="primary-button">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}