import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container w-1/2">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Link href={"/"}>
            <Image
              src="/assets/icons/cureHub.png"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-8 h-16 w-fit"
            />
          </Link>

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id}
          />

          <p className="copyright mt-4 py-4">
            © 2024 Cure Hub
          </p>
        </div>
      </section>

      <Image
        src="/home/Designer4.jpeg"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[50%] bg-bottom"
      />
    </div>
  );
}