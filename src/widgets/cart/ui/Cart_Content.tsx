'use client'
import useCartStore from '@/Providers/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import styles from '@/shared/styles/Cart.module.scss'
import { Button } from '@/shared/ui'
import { cn } from '@/shared/utils/utils'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
const CartContent: FC = () => {
	const cartContetn = useStoreZustand(useCartStore, state => state.cart)
	const toggleItem = useCartStore(state => state.toggleCartItem)
	if (cartContetn === undefined) {
		return 'Корзина пуста'
	}
	return cartContetn.map(cartItem => (
		<div key={cartItem.id} className={cn(styles.cart__item, 'px-3')}>
			<Link href={`/catalog/${cartItem.slug}/${cartItem.productColorId}`}>
				<Image
					src={cartItem.image}
					alt={cartItem.name}
					width={150}
					height={190}
					priority
					draggable
					className={styles.cart__image}
				/>
			</Link>
			<div className={cn(styles.cart__content, 'w-full')}>
				<div className='flex flex-col gap-5 '>
					<div className='flex-col flex-1 flex gap-3'>
						<span className={cn('text-balance', styles.cart__name)}>
							{cartItem.name}
						</span>
						<div className='flex gap-2 items-center'>
							<span
								className={cn(
									'w-3 h-3 rounded-full dark:border-white border-2',
									{
										'border-2 border-[#999999] ':
											cartItem.color.imageCss === '#fff'
									}
								)}
								style={{ backgroundColor: cartItem.color?.imageCss }}
							/>
							<span className={styles.cart__color}>{cartItem.color?.name}</span>
						</div>
					</div>
					<div className={cn('flex gap-2 items-center', styles.cart__quantity)}>
						{cartItem.quantity}
					</div>
				</div>
				<div className='flex flex-col justify-self-end ml-auto items-center'>
					<span className={cn('flex-1', styles.cart__price)}>
						{cartItem.price} Pублей
					</span>
					<Button onClick={() => toggleItem(cartItem)}>
						<Trash />
					</Button>
				</div>
			</div>
		</div>
	))
}

export default CartContent
