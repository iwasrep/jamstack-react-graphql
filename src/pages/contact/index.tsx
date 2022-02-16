import { GetStaticProps } from "next";
import { ContactForm } from "../../components/ContactForm";
import {
  PageDocument,
  usePageQuery,
} from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

export default function Contact() {
  const [
    {
      data: { page },
    },
  ] = usePageQuery({
    variables: {
      slug: "contact",
    },
  });

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {page?.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {page?.subtitle}
          </p>
        </div>
        <div className="mt-3 max-w-4xl mx-auto justify-items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all([
    client.query(PageDocument, { slug: 'contact' }).toPromise(),
  ]);

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
