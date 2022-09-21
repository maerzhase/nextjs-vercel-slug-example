import { NextPage, GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"

interface SlugPageProps {
  slug?: string
  encodedSlug?: string
}
const ArticleBySlug: NextPage<SlugPageProps> = ({
  slug,
  encodedSlug,
}) => {
  return (
    <>
      <div>slug: {slug}</div>
      <div>encodedSlug: {encodedSlug}</div>
    </>
  );
}

export default ArticleBySlug

interface Props {
  slug?: string,  
  encodedSlug?: string, 
}

interface Params extends ParsedUrlQuery {
  slug?: string
}

export const getServerSidePropsBySlug: GetServerSideProps<
  Props,
  Params
> = async ({ params }) => {
  const slug = params?.slug!;
  return {
    props: {
      slug,
      encodedSlug: encodeURIComponent(slug)
    }
  }
}

export const getServerSideProps = getServerSidePropsBySlug

