import { Button } from "@/components/ui/button";
import MuxUploader, {
    MuxUploaderDrop,
    MuxUploaderFileSelect,
    MuxUploaderProgress,
    MuxUploaderStatus,
} from "@mux/mux-uploader-react";
import { Upload } from "lucide-react";

const UPLOADER_ID = "video-uploader";

interface StudioUploaderProps {
    endpoint?: string | null;
    onSuccess: () => void;
}

export const StudioUploader = ({
    endpoint,
    onSuccess,
}: StudioUploaderProps) => {
    return (
        <div>
            <MuxUploader
                onSuccess={onSuccess}
                endpoint={endpoint}
                id={UPLOADER_ID}
                className="hidden group/hover"
            />
            <MuxUploaderDrop muxUploader={UPLOADER_ID} className="group/drop">
                <div
                    className="flex flex-col items-center gap-6"
                    slot="heading"
                >
                    <div className="flex items-center justify-center gap-2 rounded-full bg-muted h-32 w-32">
                        <Upload className="size-10 text-muted-foreground group/drop-[&[active]]:animate-bounce" />
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-sm">
                            Drag & drop video files to upload
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Your videos will be private until you publish them
                        </p>
                    </div>
                    <MuxUploaderFileSelect muxUploader={UPLOADER_ID}>
                        <Button type="button" className="rounded-full">
                            Select files
                        </Button>
                    </MuxUploaderFileSelect>
                </div>
                <span slot="separator" className="hidden" />
                <MuxUploaderStatus
                    muxUploader={UPLOADER_ID}
                    className="text-sm"
                />
                <MuxUploaderProgress
                    muxUploader={UPLOADER_ID}
                    className="text-sm"
                    type="percentage"
                />
                <MuxUploaderProgress muxUploader={UPLOADER_ID} type="bar" />
            </MuxUploaderDrop>
        </div>
    );
};
