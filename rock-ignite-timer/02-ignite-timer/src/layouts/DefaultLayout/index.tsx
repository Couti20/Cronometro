import { Outlet } from "react-router-dom"
import { Header } from "../../components"
import { LayoutContainer } from "../styles"

export function DefaultLayout() {
    //Header=  ficara fixo para todas as paginas    
    //Outlet= Um espaço para ser inserido para conteudo
    return (
        <LayoutContainer>

            <Header />
            <Outlet />

        </LayoutContainer>
    )
}