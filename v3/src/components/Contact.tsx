import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <h2 className="m-4 text-4xl text-accent">Contacts</h2>
      <div className="flex flex-wrap items-center justify-center sm:justify-start sm:space-x-8">
        <div className="rounded-full shadow-xl sm:h-[200px] sm:w-[200px]">
          <Image
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
            src="https://avatars.githubusercontent.com/u/37283437?v=4"
            alt="Github Profile Photo"
          ></Image>
        </div>

        <div className="my-4 overflow-x-auto font-normal">
          <table className="">
            <tbody>
              <tr>
                <td className="text-rose-500">E-mail</td>
                <td>
                  <Link href="mailto:iam@hoanganh.dev">
                    {"iam [at] hoanganh [dot] dev"}
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-rose-500">Academic</td>
                <td>
                  <Link href="mailto:anhhoangnguyen@concordia.ca">
                    {"anhhoangnguyen [at] concordia [dot] ca"}
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-rose-500">LinkedIn</td>
                <td className="break-all">
                  <Link href="https://linkedin.com/in/aaanh">
                    https://linkedin.com/in/aaanh
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Contact.displayName = "Contact";
