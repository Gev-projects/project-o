// We don't use antd component because of SEO issues, to return <p /> tag instead of <div /> 
import styled from "styled-components";
import colors from '@atoms/colors';

type Props = {
  size?: string;
  children?: string | JSX.Element;
  bold?: boolean;
  className?: string;
  light?: boolean;
}
interface KeyForSizes {
  [key: string]: string;
}
const defaultSizes: KeyForSizes = {
  lg: '16px',
  md: '14px',
  sm: '12px',
};

const customP: React.FunctionComponent<Props> = ({ ...props }) => <p className={props.className} children={props.children} />;
const TextComponent = styled(customP)`
    font-size: ${props => props.size ? defaultSizes[props.size] : defaultSizes.lg};
    font-weight: ${props => props.bold ? 510 : 400};
    color: ${props => props.light ? colors.dark_80 : colors.dark_100};
    margin-bottom: 0; 
`;

export default function Paragraph(props: Props) {
  const { size, children, bold, light } = props;

  return (
    <TextComponent size={size} light={light} bold={bold}>{children}</TextComponent>
  )
}