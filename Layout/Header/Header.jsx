'use client'
import TopHeader from '@/Layout/Header/TopHeader'
import { navigations } from '@/utils/navigations'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()
	const activeLink = path => {
		return pathname === path ? 'bg-gray p-3 rounded-md' : 'p-3'
	}
	return (
		<header className='header w-full bg-white sticky top-0 md:static'>
			<TopHeader />
			<div className={'w-full h=[70px] hidden md:block'}>
				<div className={'container'}>
					<nav className={'flex h-full items-center justify-between py-1'}>
						{navigations.map(link => (
							<Link
								key={link.path}
								className={activeLink(link.path)}
								href={link.path}
							>
								{link.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
