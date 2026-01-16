import Link from "next/link";

export default function PrimaryButton({ text = "Button", url = "/" }) {
  return (
    <Link href={url}>
      <button
        className="
          mt-4 w-fit flex items-center gap-3 rounded-full
          px-10 py-2.5 text-lg font-medium text-white
          transition-all duration-300
          bg-[radial-gradient(rgba(27,124,156,1)_0%,rgba(26,49,65,1)_100%)]
          bg-[length:100%_100%] bg-center
          shadow-[0_0_25px_rgba(27,124,156,0.6)]
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(27,124,156,0.9)]
          active:scale-95
        "
      >
        {text}
        <span className="text-2xl">→</span>
      </button>
    </Link>
  );
}
