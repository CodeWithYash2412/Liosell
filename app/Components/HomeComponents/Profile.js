import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="mx-auto py-10 w-[95%] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="mb-3 text-[rgba(39,57,146,1)] font-Montserrat font-bold text-3xl leading-[40px] tracking-[-0.03em]">
          Our Company's Profile
        </h2>
        <p className="font-Albert_Sans text-[rgba(16,18,22,0.5)] text-[20px] leading-[28px] font-medium ">
          As manufacturers and suppliers, we are committed to offering the
          finest products that combine innovative designs, exceptional
          functionality, and unmatched durability. Our team of skilled artisans
          and engineers work diligently to craft products that not only meet but
          exceed the expectations of architects, builders, and homeowners alike.
          Every component in our collection undergoes rigorous testing and
          adheres to the highest standards, ensuring our customers receive
          nothing but the best.{" "}
          <Link
            className="text-[rgba(39,57,149)] text-[20px] leading-[28px] underline font-medium"
            href="/aboutus"
          >
            Read More
          </Link>
        </p>
      </div>
      <div>
        <img src="profile.png" className="rounded-[24px] " alt="" />
      </div>
    </div>
  );
};

export default Profile;
