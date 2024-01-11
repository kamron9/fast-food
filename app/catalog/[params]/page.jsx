'use client'
import { usePathname } from 'next/navigation'

const Catalog = () => {
	const navigation = usePathname()
	return <div>Category : {navigation}</div>
}

export default Catalog
