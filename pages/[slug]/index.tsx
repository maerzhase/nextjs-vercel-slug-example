import { NextPage, GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"

interface SlugPageProps {
  slug?: string
}
const ArticleBySlug: NextPage<SlugPageProps> = ({
  slug,
}) => {
  return (
    <div>slug: {slug}</div>
  );
}

export default ArticleBySlug

interface Props {
  slug?: string,   
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
    }
  }
}

export const getServerSideProps = getServerSidePropsBySlug

