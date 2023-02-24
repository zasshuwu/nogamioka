import HomeLayout from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MailTo = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("mailto:AnhNguyen@aaanh.com");
  }, []);

  return (
    <HomeLayout>
      <div className="h-[92.25vh] w-full flex justify-center items-center">
        Mailing to:&nbsp;<a className="link-primary" href="mailto:AnhNguyen@aaanh.com">AnhNguyen@aaanh.com</a>
      </div>
    </HomeLayout>
  );
};

export default MailTo;
