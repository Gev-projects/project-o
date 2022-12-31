import { notification } from "antd";
import './styles.less';
import { SuccessSvg, ErrorSvg, InfoSvg, CloseSvg } from '@svgs';

type Props = {
  message: string,
  description?: string,
};

const toast = (icon: JSX.Element, props: Props) => {
  const { message, description } = props;
  notification.success({
    message: message,
    description: description,
    className: `custom-toast ${description ? 'has-description' : ""}`,
    icon: icon,
    closeIcon: <CloseSvg height={14} width={14} />,
    top: 20,
    duration: 2,
  });
};

const successToast = (props: Props) => {
  toast(<SuccessSvg height={28} width={28} />, props);
};

const errorToast = (props: Props) => {
  toast(<ErrorSvg height={28} width={28} />, props);
};

const infoToast = (props: Props) => {
  toast(<InfoSvg height={28} width={28} />, props);
};

const notifications = {
  successToast,
  errorToast,
  infoToast
};

export default notifications;