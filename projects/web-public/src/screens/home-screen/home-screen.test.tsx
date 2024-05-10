import { customRender } from "@alura/test-commons/react-testing-library";

import { AllProviders } from "../../../components/all-providers";
import { HomeScreen } from "./home-screen";

// Aqui podemos customizar os valores padrão dos providers para cada teste
const render = customRender((props) => <AllProviders {...props} />);

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    // Para páginas provavemlente não iremos fazer teste de snapshot, mas fica o demo
    expect(container).toMatchSnapshot();
  });
});
