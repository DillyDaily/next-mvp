import { GraphQLClient } from 'graphql-request';
import { Fragment } from 'react';

const CategoryPage = (props) => {
    const { loadedCategory } = props;
    
    return(
        <Fragment>
            <h2>{loadedCategory.name}</h2>

        </Fragment>
    );
};

const hygraph = new GraphQLClient(
    'https://api-us-west-2.hygraph.com/v2/cl7pa961y455z01ukbiwy5qf2/master'
);

export async function getStaticProps(context) {
    const { params } = context;

    const categorySlug = params.categoryslug;

    const data = await hygraph.request(`
    {
      categories {
        id
        name
        slug
        categoryImage {
          fileName
          url
        }
      }
    }
  `)

  const category = data.categories.find(category => category.slug === categorySlug);

  return {
    props: {
        loadedCategory: category
    }
  }
};

export async function getStaticPaths() {
    const { categories } = await hygraph.request(`
    {
      categories {
        slug
      }
    }
  `)

   return {
    paths: categories.map(({ slug }) => ({
        params: { categoryslug : slug }
    })),
    fallback: false,
   };
};

export default CategoryPage;