import { client } from '@/shared/api/apollo-client'
import { IOneProduct } from '@/shared/types/Slider.interface'
import {
	GetAllProductsDashboardDocument,
	GetProductByColorDocument
} from 'gql/gql/graphql'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths = (async () => {
	const { data } = await client.query({
		query: GetAllProductsDashboardDocument,
		variables: { getAllProductInput: { page: '1' } }
	})
	const paths = data.getAllProducts.products.map(item => ({
		params: {
			product: [item.slug, item.productColorId.toString()]
		}
	}))
	return {
		paths,
		fallback: 'blocking'
	}
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }: any) => {
	const [slug, productColorId] = params?.product

	const { data } = await client.query({
		query: GetProductByColorDocument,
		variables: { getProductByColor: { colorId: Number(productColorId), slug } }
	})

	return {
		props: {
			product: data.getProductByColor[0]
		},
		revalidate: 60
	}
}) satisfies GetStaticProps

export default function Page({ product }: { product: IOneProduct }) {
	const router = useRouter()
	console.log(router.query.product, product)
	return <div>logogogog</div>
}
