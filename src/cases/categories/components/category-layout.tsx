
import { BreadCrumb } from "@/components/layout/bread-crumb"
import { CategoryDataTable } from "./data-table/category-data-table"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Outlet, useNavigate } from "react-router-dom"
import { Plus, Search } from "lucide-react";

export function CategoryLayout() {
    
    const navigate = useNavigate();

    function hendleCreate() {
        navigate('/categories/new');
    } 
    
    return (
        <div className="p-4">

            <BreadCrumb title="Categorias" />
            
            <div className="flex flex-col gap-4 py-4">

                <div className="flex flex-ruw justify-end gap-4 my-4">
                    <InputGroup className="max-w-96">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                        <Search />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                    </InputGroup>
                    <button 
                        onClick={hendleCreate}
                    >
                        <Plus />
                        Adicionar
                    </button>
                </div>

                <div>
                    <CategoryDataTable />
                    <Outlet />
                </div>

            </div>

            
        </div>
    )
}