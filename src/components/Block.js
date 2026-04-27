import { Text } from "./Text";

export const Block = ({ header, content, size = "16px", ...props }) => (
  <div className="block">
    <Text size={size} {...props}>
      {header}
    </Text>
    {""}
    <span id="content"> {content} </span>
  </div>
);
