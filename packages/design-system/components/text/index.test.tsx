import { Text } from "./index";
import { customRender } from "@alura/test-commons/react-testing-library";

const render = customRender((props) => {
  return <section>{props.children}</section>;
});

describe("<Text />", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h1">Sample Text</Text>);

    expect(container).toMatchSnapshot();
  });
});
