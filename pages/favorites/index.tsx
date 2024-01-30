import { NextPageAuth } from '@/app/Auth_Provider/types'
import { FavoritesPageComponents } from '@/myPages/Favorites'

const FavoritesPage: NextPageAuth = () => {
	return <FavoritesPageComponents />
}
FavoritesPage.isOnlyUser = true

export default FavoritesPage