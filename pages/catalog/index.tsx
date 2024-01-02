import { Catalog } from '@/pages/catalog'
import { productService } from '@/shared/service/products.service'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
import { GetStaticProps, NextPage } from 'next'

export const getStaticProps = (async () => {
	const data = await productService.getAllProducts({ page: '1' })
	return {
		props: { products: data },
		revalidate: 60
	}
}) satisfies GetStaticProps

const HomePage: NextPage<{
	products: GetAllProductsDashboardQuery
}> = ({ products }) => {
	return <Catalog products={products} />
}

export default HomePage
