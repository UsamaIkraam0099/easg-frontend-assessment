// others
import { error_messages } from "../utils";

type OtherInputProps = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
};

type InputProps = {
  errors: any;
  disabled: boolean;
  props: OtherInputProps;
};

const index = ({ props, errors, disabled }: InputProps) => {
  return (
    <div className="form-group mt-4">
      <label htmlFor="name">{props.label}</label>
      <input
        {...props}
        autoComplete="off"
        disabled={disabled}
        className="form-control"
      />

      {errors[props.id] && (
        <label className="error-label">{error_messages[props.id]}</label>
      )}
    </div>
  );
};

export default index;
