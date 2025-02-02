import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <>
      {/* Profile Section */}
      <div className="mx-auto py-12 w-[95%] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-[rgba(39,57,146,1)] font-Montserrat font-extrabold text-4xl leading-[48px] tracking-[-0.03em]">
            Our Company's Profile
          </h2>
          <p className="font-Albert_Sans text-[rgba(16,18,22,0.7)] text-[18px] leading-[30px] font-medium">
            As manufacturers and suppliers, we are committed to offering the
            finest products that combine innovative designs, exceptional
            functionality, and unmatched durability.
          </p>
          <p className="font-Albert_Sans mt-4 text-[rgba(16,18,22,0.7)] text-[18px] leading-[30px] font-medium">
            Our team of skilled artisans and engineers work diligently to craft
            products that not only meet but exceed the expectations of
            architects, builders, and homeowners alike.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="profile.png"
            className="rounded-xl shadow-xl w-full max-w-[500px]"
            alt="Company Profile"
          />
        </div>
      </div>

      {/* Decorative Line */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 h-1 rounded-full mx-3 md:mx-10 mb-12" />

      {/* About Us Section */}
      <div className="mx-auto py-12 w-[95%] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src="AboutUs.png"
            className="rounded-xl shadow-xl w-full max-w-[500px]"
            alt="About Us"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-Albert_Sans text-[rgba(16,18,22,0.7)] text-[18px] leading-[30px] font-medium">
            At the heart of our success lies a passion for excellence and an
            unwavering commitment to customer satisfaction. Our product range is
            thoughtfully designed, keeping in mind the latest trends, diverse
            architectural styles, and the evolving needs of our valued
            clientele.
          </p>
          <p className="font-Albert_Sans mt-4 text-[rgba(16,18,22,0.7)] text-[18px] leading-[30px] font-medium">
            From classic to contemporary, our collection caters to a wide
            spectrum of tastes and preferences, including door handles, hinges,
            knobs, pulls, locks, brackets, and more. Each item reflects a
            seamless fusion of artistry and engineering, promising unmatched
            performance and longevity.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
