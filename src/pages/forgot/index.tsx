/* import { GetStaticProps } from "next";
import { Login } from "../../components/Login";
import {
  PageDocument
} from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql"; */

import { Forgot } from "../../components/Forgot";

export default function Contact() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Forgot you password?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Type your email to recover your account
          </p>
        </div>
        <div className="mt-3 max-w-sm mx-auto justify-items-center">
          <Forgot />
        </div>
      </div>
    </div>
  );
}

/* export const getStaticProps: GetStaticProps = async () => {
  await Promise.all([
    client.query(PageDocument).toPromise(),
  ]);

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
}; */
