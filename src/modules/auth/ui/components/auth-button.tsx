import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UserCircle } from "lucide-react";

export const AuthButton = () => {
    // TODO: Add different auth states
    return (
        <>
            <SignedIn>
                <UserButton />
                {/* Add menu items for studio and user profile */}
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/80 rounded-full shadow-none"
                    >
                        <UserCircle />
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};
