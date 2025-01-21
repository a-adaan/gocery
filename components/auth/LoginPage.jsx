import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="lg:h-[691px] h-full w-full lg:w-[1200px] lg:rounded-[32px] bg-white grid grid-cols-1 lg:grid-cols-2 lg:shadow-lg">
      <LoginForm />
      <div className="lg:bg-[#FFFCF6] rounded-[32px] flex flex-col justify-center items-center lg:items-start order-1 lg:order-2">
        <div className="hidden lg:block px-[59px] py-[68px]">
          <p className="text-2xl text-[#76777D] mb-6">Welcome to</p>
          <p className="text-[44px]">E-commerce App</p>
        </div>
        <img
          src="/image/auth/vector01.svg"
          alt="login"
          className="w-[525px] h-[313px] px-[31px]"
        />
      </div>
    </div>
  );
}
