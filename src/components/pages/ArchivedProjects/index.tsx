import { FC, memo } from "react";

import Header from "../Header";
import ArchivedTable from "./_partials/ArchivedTable";
import ArchivedWrapper from "./styled/ArchivedWrapper";

interface Props {
    collapsed: boolean;
    onCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArchivedProjects: FC<Props> = (props) => {
    const { collapsed, onCollapse } = props;
    return (
        <>
            <Header title="Archived Projects" collapsed={collapsed} onCollapse={onCollapse} />
            <ArchivedWrapper>
                <ArchivedTable />
            </ArchivedWrapper>
        </>
    );
};

export default memo(ArchivedProjects);