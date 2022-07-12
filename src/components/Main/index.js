import React from "react";

import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import SecaoContato from "../SecaoContato";
import SecaoSobre from "../SecaoSobre";

export default function Main() {
  return (
    <main>
      <SecaoCapa></SecaoCapa>
      <SecaoProdutos></SecaoProdutos>
      <SecaoContato></SecaoContato>
      <SecaoSobre></SecaoSobre>
    </main>
  )
}
