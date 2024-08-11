import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled: boolean;
}

const index = ({ label, disabled }: ButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="btn btn-primary w-100 mt-4"
    >
      {!disabled ? (
        label
      ) : (
        <span className="spinner-border text-light" role="status" />
      )}
    </button>
  );
};

export default index;
