import {
    Avatar,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react'
import { CircleUserRoundIcon, LogOutIcon } from 'lucide-react'
import Link from 'next/link'

const links = [
    {
        name: '个人信息',
        icon: <CircleUserRoundIcon size={20} />,
        href: '/profile',
    },
    {
        name: '退出登录',
        icon: <LogOutIcon size={20} />,
        href: '/logout',
    },
]

export default function User() {
    return (
        <div className="relative w-[80%] h-20 bg-neutral-600 rounded-full p-5 flex justify-end">
            <Popover>
                <PopoverTrigger>
                    <Avatar></Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-[150px]">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <span>{link.icon}</span>
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </PopoverContent>
            </Popover>
        </div>
    )
}
