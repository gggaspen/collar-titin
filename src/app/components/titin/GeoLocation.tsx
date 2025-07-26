import Link from "next/link";
import Image from "next/image";

export default function GeoLocation({
  showIframe,
}: Readonly<{ showIframe?: boolean }>) {
  return (
    <>
      {showIframe ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.565457204754!2d-59.146962389850444!3d-37.32911967198469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f4f7a198879%3A0x258ca4e05f16270f!2sSan%20Mart%C3%ADn%2062%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1732741966502!5m2!1sen!2sar"
          width="300"
          height="100"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      ) : (
        <Link
          href={"https://maps.app.goo.gl/NSKGGUiuwTgNA72b9"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/google-map-icon.png"}
            alt="google map"
            width={30}
            height={30}
          ></Image>
        </Link>
      )}
    </>
  );
}
