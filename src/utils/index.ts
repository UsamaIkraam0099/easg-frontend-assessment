const error_messages: any = {
  name: "Please enter a valid name",
  email: "Please enter a valid email address",
  password:
    "Please enter atleast 8 characters with letter, number and special characters",
};

const STORAGE_KEYS = {
  access_token: "@ACCESS_TOKEN",
  user_details: "@USER_DETAILS",
};

export { STORAGE_KEYS, error_messages };
