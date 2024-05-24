import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { CircleUserIcon, LogOutIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'

const links = [
    {
        name: 'Profile',
        icon: <CircleUserIcon size={20} />,
        href: '/profile',
    },
    {
        name: 'Settings',
        icon: <SettingsIcon size={20} />,
        href: '/settings',
    },
    {
        name: 'Logout',
        icon: <LogOutIcon size={20} />,
        href: '/logout',
    },
]

export default function User() {
    return (
        <div className="relative w-full flex justify-end p-4 right-[100px]">
            <Popover>
                <PopoverTrigger>
                    <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-[150px] p-2">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="flex items-center p-2 hover:bg-gray-100 rounded-lg "
                        >
                            {link.icon}
                            <span className="ml-2">{link.name}</span>
                        </Link>
                    ))}
                </PopoverContent>
            </Popover>
        </div>
    )
}
