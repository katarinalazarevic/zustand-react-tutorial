import { MainLayoutWrapper } from "./main-layout.styled"

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
}
