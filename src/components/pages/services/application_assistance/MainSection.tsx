"use client";

import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ModalContent from "@/components/common/ModalContent";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="inline-block rounded-full border border-primary px-5 py-3 text-xl font-medium text-primary">
              Application Success Guide
            </span>
          </div>
          <h2 className="text-center text-4xl font-semibold lg:text-left">
            Expert Guidance for Your Application Success
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Unlock your potential with our Expert Guidance for Your Application
            Success service. Our experienced consultants offer personalized
            support tailored to your needs throughout the application process.
            We assist with document preparation, personal statement reviews, and
            interview coaching to ensure you meet all requirements and
            deadlines. With our guidance, navigate the complexities of studying
            abroad confidently and increase your chances of acceptance.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/consultation">
              <Button>Book Your Consultation</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full xl:min-h-[460px] xl:basis-1/2">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                className="cursor-pointer object-contain object-center xl:object-right"
                src="/images/pages/services/application_assistance/application_assistance.svg"
                alt="University Selection"
                fill
              />
            </DialogTrigger>
            <ModalContent />
          </Dialog>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default MainSection;
