'use client'
import TopHeader from '@/Layout/Header/TopHeader'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()

	const activeLink = path => {
		return pathname === path ? 'bg-gray p-2' : ''
	}
	return (
		<div>
			<TopHeader />
			<header className={'w-full'}>
				<div className={'container'}>
					<nav
						className={
							'flex h-[70px] items-center justify-between sticky z-40 top-0 left-0'
						}
					>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/novinki'}
						>
							Новинки
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/pizza'}
						>
							Пицца
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/lavash'}
						>
							Лаваш
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/trindvich'}
						>
							Триндвич
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/shaurma'}
						>
							Шаурма
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/burger'}
						>
							Бургеры
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/hot-dog'}
						>
							Хот-Дог
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/blyuda'}
						>
							Блюда
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/salat'}
						>
							Cалаты
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/napitki'}
						>
							Напитки
						</Link>
						<Link
							className={activeLink('"/catalog/novinki"')}
							href={'/catalog/kofe'}
						>
							Кофе
						</Link>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header
