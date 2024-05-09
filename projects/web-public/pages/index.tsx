import { Text } from "@alura/design-system/components/text";

import { sum } from "@alura/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">@alura/utils/math/sum: sum(2,2) = {sum(2, 2)}</Text>
    </main>
  );
}
