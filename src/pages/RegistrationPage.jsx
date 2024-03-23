import RegisterForm from "../components/auth/RegisterForm";

export default function RegistrationPage() {
  return (
    <section class="container">
      <div class="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 class="text-2xl font-bold mb-6">Register</h2>
        <RegisterForm />
      </div>
    </section>
  );
}
