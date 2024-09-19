import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForms";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">

      {/* TODO : OTP verification | Passkey Modal */}

      <section className="remove-scrollbar container w-1/2 my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/cureHub.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-8 h-16 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-12 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Cure Hub
            </p>
            <Link href="/?admin=true" className="text-[#4a9930]">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/home/Designer0.jpeg"
        height={95}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}