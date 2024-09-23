import Image from 'next/image';
import { RegisterForm } from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.actions';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[800px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/cureHub.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-16 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">
            © 2024 Cure Hub
          </p>
        </div>
      </section>

      <Image
        src="/home/registerPage.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img hidden-when-width-lessthan-998 max-w-[600px]"
      />
    </div>
  );
};

export default Register;