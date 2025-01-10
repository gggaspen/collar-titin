import Image from "next/image";
import Link from "next/link";

export default function WhatsAppBtn({ text }: Readonly<{ text?: string }>) {
  const encodedMessage = "Hola! Estoy con Titín!";
  const phoneNumber = "+5492215581026";
  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {text ? (
        <p style={{ fontWeight: 600 }}>{text}</p>
      ) : (
        <Image
          src="/WhatsApp_icon.png"
          style={{ margin: "20px" }}
          alt="whatsapp"
          width={30}
          height={30}
          priority
        />
      )}
    </Link>
  );
}
