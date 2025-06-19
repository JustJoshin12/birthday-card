"use client";

export default function ShareButtons() {
  const link = typeof window !== "undefined" ? window.location.href : "";

  const copy = () => navigator.clipboard?.writeText(link);
  const email = () =>
    window.open(
      `mailto:?subject=${encodeURIComponent(
        "Happy Birthday, shortstuff!"
      )}&body=${encodeURIComponent(link)}`
    );
  const share = (network) => {
    const urlEncoded = encodeURIComponent(link);
    const map = {
      whatsapp: `https://wa.me/?text=${urlEncoded}`,
      facebook: `https://facebook.com/sharer/sharer.php?u=${urlEncoded}`,
      twitter: `https://twitter.com/intent/tweet?url=${urlEncoded}`,
    };
    window.open(map[network], "_blank");
  };

  return (
    <div className="flex gap-2 relative">
      <button onClick={copy} className="btn-gradient" aria-label="Copy link">
        Copy Link
      </button>
      <button onClick={email} className="btn-gradient" aria-label="Send email">
        Send via Email
      </button>
      <div className="relative group">
        <button className="btn-gradient" aria-haspopup="true" aria-expanded="false">
          Share on… ▾
        </button>
        <div className="absolute left-0 hidden group-hover:flex flex-col gap-1 p-2 rounded-lg bg-white/90 shadow">
          {[
            { id: "whatsapp", label: "WhatsApp" },
            { id: "facebook", label: "Facebook" },
            { id: "twitter", label: "Twitter" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => share(id)}
              className="rounded px-3 py-1 text-sm hover:bg-gray-100"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 