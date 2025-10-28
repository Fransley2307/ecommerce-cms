import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,

} from "@/components/ui/sheet"
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SidebarFormProps = {
    title: string;
    children: ReactNode;
    onSave: () => void;
}

export function SidebarForm({
    title,
    children,
    onSave
}: SidebarFormProps) {

    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseForm(open: boolean) {
        if (!open) {
            const currentPath = location.pathname;
            const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'))
            navigate(newPath);
        }
    }

    return (
        <Sheet open={true} onOpenChange={handleCloseForm}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>
                        Preencha os campos a baixo e clique em salvar.
                    </SheetDescription>
                </SheetHeader>

                {children}

                <SheetFooter>
                    <div className="flex-row gap-1">

                        <button
                            onClick={onSave}
                        >
                            Salvar
                        </button>

                        <SheetClose asChild>
                            <button
                                variant="outline"
                            >
                                Cancelar
                            </button>
                        </SheetClose>


                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}    