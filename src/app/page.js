import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-10 py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Drive when you
                <br />
                want, make what
                <br />
                you need
              </h1>
              <p className="text-lg mb-8">Earn on your own schedule.</p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">
                  Get started
                </button>
                <p className="text-sm">
                  Already have an account?{" "}
                  <a href="#" className="underline hover:text-gray-300">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="flex justify-center">
            <Image
              src="/driver.png"
              alt="Driver Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Why drive with us section */}
      <div className="bg-white text-black px-4 py-10 md:px-16 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why drive with us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
          <Image
            src="/whyDrive.png"
            alt="Driver Illustration"
            width={400}
            height={400}
            className="object-contain transition-transform duration-500 hover:scale-x-[-1]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">🗓️</div>
            <h3 className="font-semibold text-lg mb-1">Set your own hours</h3>
            <p className="text-gray-600 text-sm">
              You decide when and how often you drive.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-2">💵</div>
            <h3 className="font-semibold text-lg mb-1">Get paid fast</h3>
            <p className="text-gray-600 text-sm">
              Weekly payments in your bank account.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-2">🧑‍💻</div>
            <h3 className="font-semibold text-lg mb-1">
              Get support at every turn
            </h3>
            <p className="text-gray-600 text-sm">
              {"If there's anything that you need, you can reach us anytime."}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
