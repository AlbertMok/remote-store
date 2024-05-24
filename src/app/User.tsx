import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

export default function User() {
    return (
        <div className="relative w-[80%] h-20 bg-neutral-600 rounded-full p-5 flex justify-end">
            <Popover>
                <PopoverTrigger>
                    <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    Place content for the popover here.
                </PopoverContent>
            </Popover>
        </div>
    )
}
