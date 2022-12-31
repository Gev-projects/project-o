import { FC, memo } from "react";

import Header from "../Header";
import UsersTable from "./_partials/UsersTable";
import UsersWrapper from "./styled/UsersWrapper";

interface Props {
    collapsed: boolean;
    onCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const Users: FC<Props> = (props) => {
    const { collapsed, onCollapse } = props;
    return (
        <>
            <Header title="Users" showButton collapsed={collapsed} onCollapse={onCollapse} modal='NewEmployeeModal'/>
            <UsersWrapper>
                <UsersTable />
            </UsersWrapper>
        </>
    );
};

export default memo(Users);