// others
import { en } from "../../../language";
import { AuthLayout } from "../../../layout";
import { useAuthState } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Input, Button } from "../../../components";

function SignUp() {
  // hooks initialization
  const navigate = useNavigate();
  const { errors, disabled, register, onSubmit, handleSubmit } = useAuthState({
    type: "signUp",
  });

  return (
    <AuthLayout>
      <div className="auth-card flex-column shadow p-3 mb-5 bg-white rounded">
        <div className="flex-column d-flex  align-items-center">
          <h2 className="form-main-heading">{en.sign_up}</h2>
          <div className="form-heading-line" />
        </div>

        <form className="main-form w-75" onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={errors}
            disabled={disabled}
            props={{
              id: "name",
              type: "text",
              label: en.name,
              placeholder: en.auth_placeholder.name,
              ...register("name", { required: true }),
            }}
          />

          <Input
            errors={errors}
            disabled={disabled}
            props={{
              id: "email",
              type: "email",
              label: en.amail_address,
              placeholder: en.auth_placeholder.email,
              ...register("email", { required: true }),
            }}
          />

          <Input
            errors={errors}
            disabled={disabled}
            props={{
              id: "password",
              type: "password",
              label: en.password,
              placeholder: en.auth_placeholder.password,
              ...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              }),
            }}
          />

          <Button label={en.sign_up} disabled={disabled} />

          <div className="d-flex from-group mt-4 justify-content-center">
            <label className="account-label">
              {en.already_have_an_account}?{" "}
              <label
                onClick={() => navigate("/signIn")}
                className="sign-in-label"
              >
                {en.sign_in}
              </label>
            </label>
          </div>
        </form>

        <ToastContainer />
      </div>
    </AuthLayout>
  );
}

export default SignUp;
