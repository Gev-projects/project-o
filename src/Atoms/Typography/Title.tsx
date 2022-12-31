// We don't use antd default title because of SEO issues, to return <h1 /> tag instead of <div /> 

import styled from "styled-components";
import colors from '@atoms/colors';

type Props = {
  size?: string;
  children?: string | JSX.Element;
  bold?: boolean;
  className?: string;
};

const large: React.FunctionComponent<Props> = ({ ...props }) => <h1 className={props.className} children={props.children} />;
const LargeHeader = styled(large)`
    font-size: 20px;
    font-weight: ${props => props.bold ? 700 : 510};
    color: ${colors.dark_100};
    margin-bottom: 0;
`;

const middle: React.FunctionComponent<Props> = ({ ...props }) => <h2 className={props.className} children={props.children} />;
const MidHeader = styled(middle)`
    font-size: 16px;
    font-weight: ${props => props.bold ? 700 : 510};
    color: ${colors.dark_100};
    margin-bottom: 0;
`;

const small: React.FunctionComponent<Props> = ({ ...props }) => <h2 className={props.className} children={props.children} />;
const SmallHeader = styled(small)`
    font-size: 14px;
    font-weight: ${props => props.bold ? 700 : 510};
    color: ${colors.dark_100};
    margin-bottom: 0;
`;

interface KeyForSizes {
  [key: string]: JSX.Element;
}

export default function Title(props: Props) {
  const { size, children, bold, className } = props;

  const headers: KeyForSizes = {
    lg: <LargeHeader bold={bold} className={className}>{children}</LargeHeader>,
    md: <MidHeader bold={bold} className={className}>{children}</MidHeader>,
    sm: <SmallHeader bold={bold} className={className}>{children}</SmallHeader>
  };

  return (
    size ? headers[size]
      : headers.lg
  );
}