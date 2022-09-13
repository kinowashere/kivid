import { FunctionComponent, JSX } from "preact";

const TextInput: FunctionComponent<
  JSX.HTMLAttributes<HTMLInputElement> & {
    defaultValue?: string | undefined;
  }
> = (props) => {
  return (
    <input
      {...props}
      className={props.className || "py-2 px-4 rounded-xl bg-gray-100"}
    />
  );
};

export default TextInput;
