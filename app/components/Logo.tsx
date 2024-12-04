export default function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform transition-transform duration-300 group-hover:scale-110"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        className="fill-orange-500"
      />
      <path
        d="M9 10.5h3.5c1.2 0 2.2.3 2.8.9.6.6 1 1.4 1 2.4 0 1-.3 1.8-1 2.4-.6.6-1.6.9-2.8.9H11v3.4H9v-10zm3.4 4.8c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.5-1.2s-.2-.9-.5-1.2c-.3-.3-.8-.4-1.5-.4H11v3.2h1.4z"
        className="fill-white"
      />
      <path
        d="M19.2 10.5h2l3.8 10h-2.2l-.8-2.2h-3.7l-.8 2.2H15.3l3.9-10zm2.2 6.2l-1.2-3.5-1.2 3.5h2.4z"
        className="fill-white"
      />
    </svg>
  );
}
