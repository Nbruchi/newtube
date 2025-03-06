import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const avatarVariants = cva("", {
    variants: {
        size: {
            default: "h-9 w-9",
            xs: "w-4 h-4",
            sm: "w-6 h-6",
            md: "w-8 h-8",
            lg: "w-10 h-10",
            xl: "w-[160px] h-[160px]",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
    imageUrl: string;
    name: string;
    className?: string;
    onClick?: () => void;
}

export const UserAvatar = ({
    imageUrl,
    name,
    className,
    onClick,
    size,
}: UserAvatarProps) => {
    return (
        <Avatar
            className={cn(avatarVariants({ size, className }))}
            onClick={onClick}
        >
            <AvatarImage src={imageUrl} alt={name} />
        </Avatar>
    );
};
