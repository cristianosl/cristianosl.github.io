<section id="capturandoOrdem">
  <h2>Capturando uma ordem</h2>
  <br />
  <p>
    Uma captura representa a confirmação de uma ordem autorizada.
    No caso de uma venda, ela somente pode se considerar completa
    após a captura de sua autorização.
  </p>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-info">PUT</span>
            https://api.hml.amedigital.com/api/wallet/user/payments/{id}/capture
          </th>
        </tr>
        <tr class="striped">
          <th class="table-active" colspan="2">
            HEADER PARAMETERS:
          </th>
        </tr>
        <tr>
          <th>
            Authorization:
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string</code><br />
            Example: <code>Bearer Token {ACCESS_TOKEN}</code>
            <br />
            Token de acesso formado pela seguinte regra
            <code>token_type</code> +
            <code>access_token</code> (onde token type é sempre
            <b>Bearer</b>)
          </td>
        </tr>
        <tr>
          <th class="table-active" colspan="2">
            PATH PARAMETERS
          </th>
        </tr>
        <tr>
          <th>
            id
            <br />
            <code>required</code>
          </th>
          <td>
            <code>string (uuid)</code>
            <br />
            Exemplo:
            <code>ff363bcb-0db4-41e8-83ce-2ef01eaf95e0</code>
            <br />
            ID da ordem gerado pela Ame no momento da autorização
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <h5>Responses</h5>
  <br />
  <div class="acoordion" id="accordionExample">
    <div class="card">
      <div class="card-header bg-ame-success text-success" id="heading200Cap" data-toggle="collapse"
        data-target="#collapse200Cap" aria-expanded="true" aria-controls="collapse200Cap">
        <b>200</b> Ordem capturada com sucesso
      </div>
      <div id="collapse200Cap" class="collapse show" aria-labelledby="heading200Cap">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>id</th>
                  <td>
                    <code>string (uuid)</code>
                    <br />
                    ID da ordem
                  </td>
                </tr>
                <tr>
                  <th>date</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Data e hora da ordem no formato
                    yyyy-MM-ddTHH:mm:ssZ no padrão UTC
                  </td>
                </tr>
                <tr>
                  <th>name</th>
                  <td>
                    <code>string</code>
                    <br />
                    Nome da carteira da transação
                  </td>
                </tr>
                <tr>
                  <th>type</th>
                  <td>
                    <code>string</code>
                    <br />
                    Value: <code>"PAYMENT"</code> <br />
                    Tipo da ordem que será enviada para a carteira
                  </td>
                </tr>
                <tr>
                  <th>currency</th>
                  <td>
                    <code>string</code>
                    <br />
                    Moeda utilizada na transação de acordo com a
                    <a href="https://pt.wikipedia.org/wiki/ISO_4217">ISO 4217</a>. Atualmente seu valor
                    sempre será
                    <code>BRL</code>
                  </td>
                </tr>
                <tr>
                  <th>cashType</th>
                  <td>
                    <code>string</code>
                    <br />
                    Enum: <code>"CARD"</code> <code>"CASH"</code>
                    <code>"MULTIPLE"</code>
                    <code>"CASHBACK"</code>
                    <code>"BANK_TRANSFER</code> O meio de
                    pagamento utilizado pelo cliente para efetuar
                    o pagamento da ordem.
                    <ul>
                      <li>
                        <code>CASH</code> -> Saldo gerado pela Ame
                      </li>
                      <li>
                        <code>CARD</code> -> Cartão de crédito
                      </li>
                      <li>
                        <code>MULTIPLE</code> -> Vários meios de
                        pagamento
                      </li>
                      <li>
                        <code>BANK_TRANSFER</code> ->
                        Transferência bancária
                      </li>
                      <li>
                        <code>CASHBACK</code> -> Pagamento
                        utilizando cashback
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Valor da ordem em centavos por exemplo
                    <code>R$ 19,77</code> deve ser expressado como
                    <code>1977</code> centavos
                  </td>
                </tr>
                <tr>
                  <th>status</th>
                  <td>
                    <code>string</code>
                    <br />
                    Enum: <code>"AUTHORIZED"</code>
                    <code>"DENIED"</code> <code>"ERROR"</code>
                    <code>"SUCCESS"</code> <code>"HOLD"</code>
                    <code>"CANCELED"</code>
                    <code>"REFUNDED"</code>
                    <br />
                    Status da ordem.
                    <br />
                    <ul>
                      <li>
                        <code>AUTHORIZED</code> a ordem foi pré
                        autorizada na Ame Digital, e já foi feita
                        a reserva do saldo do cliente, porém a
                        compra ainda não foi finalizada, é
                        necessário executar a captura
                        (confirmação) deta odem.
                      </li>
                      <li>
                        <code>SUCCESS</code> Indica que a ordem
                        foi capturada (confirmada) pelo lojista
                      </li>
                      <li>
                        <code>CANCELED</code> A ordem foi
                        cancelada, isso acontece por desistência
                        do lojista em continuar a venda após uma
                        autorização
                      </li>
                      <li>
                        <code>DENIED</code> A ordem foi recusada
                        pela Ame Digital
                      </li>
                      <li>
                        <code>HOLD</code> No caso das ordens de
                        estornos, a solicitação foi aceita porém
                        está em processamento no sistema bancário.
                        Este cenário apenas acontece em transações
                        de cartão de crédito, caso o pagamento
                        seja feito com saldo Ame, o processo será
                        realizado instantâneamente
                      </li>
                      <li>
                        <code>ERROR</code> Ocorreu um erro
                        inesperado durante o processamento da
                        ordem. Para estes casos considere a
                        transação como não autorizada
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>operationType</th>
                  <td>
                    <code>string</code>
                    <br />
                    Enum: <code>"CREDIT"</code>
                    <code>"DEBIT"</code> <br />Indica uma saída ou
                    entrada de fundos na carteira
                  </td>
                </tr>
                <tr>
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Título da ordem, seu valor é de utilização
                    livre
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição da ordem realizada, seu valor é de
                    livre utilização
                  </td>
                </tr>
                <tr>
                  <th>splits</th>
                  <td>
                    <code>Array of CreditCardTransaction (object) or
                                  CashCardTransaction (object)</code>
                    <br />
                    Para cada meio de pagamento utilizado para
                    autorizar a ordem é gerado uma transação no
                    seu respectivo valor, por exemplo: Uma ordem
                    no valor de R$ 100,00 é paga pelo cliente
                    utilizando R$ 70,00 de saldo Ame e R$ 30,00 no
                    cartão de crédito, neste cenário será gerado
                    duas
                    <code>Transaction</code>, uma para cartão de
                    crédito <code>CARD</code> e outra para saldo
                    Ame
                    <code>CASH</code>
                  </td>
                </tr>
                <tr>
                  <th>attributes</th>
                  <td>
                    <code>object (Attributies)</code>
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>cashbackAmountValue</th>
                          <td>
                            <code>integer (int64)</code>
                            <br />Valor do cashback em centavos a
                            ser concedido após a autorização
                          </td>
                        </tr>
                        <tr>
                          <th>customPayload</th>
                          <td>
                            <code>object</code>
                            <br />Atributos livres que foram
                            adicionados ao criar a ordem
                          </td>
                        </tr>
                        <tr>
                          <th>
                            items
                          </th>
                          <td>
                            <code>Array of objects (item)</code>
                            <br />
                            <br />
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>description</th>
                                  <td>
                                    <code>string</code>
                                    <br />Descrição do item da
                                    venda
                                  </td>
                                </tr>
                                <tr>
                                  <th>quantity</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Quantidade do item
                                  </td>
                                </tr>
                                <tr>
                                  <th>amount</th>
                                  <td>
                                    <code>integer (int64)</code>
                                    <br />Por exemplo: 3294
                                    (R$32,94)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Cap" data-toggle="collapse"
        data-target="#collapse400Cap" aria-expanded="true" aria-controls="collapse400Cap">
        <b>400</b> Parâmetros da requisição inválidos
      </div>
      <div id="collapse400Cap" class="collapse show" aria-labelledby="heading400Cap">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading401Cap" data-toggle="collapse"
        data-target="#collapse401Cap" aria-expanded="true" aria-controls="collapse401Cap">
        <b>401</b> Não autorizado, acesso negado.
      </div>
      <div id="collapse401Cap" class="collapse show" aria-labelledby="heading401Cap">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading403Cap" data-toggle="collapse"
        data-target="#collapse403Cap" aria-expanded="true" aria-controls="collapse403Cap">
        <b>403</b> Você não tem permissão para realizar esta
        operação.
      </div>
      <div id="collapse403Cap" class="collapse show" aria-labelledby="heading403Cap">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading405Cap" data-toggle="collapse"
        data-target="#collapse405Cap" aria-expanded="true" aria-controls="collapse405Cap">
        <b>405</b> O verbo utilizado para requisição não é
        suportado.
      </div>
      <div id="collapse405Cap" class="collapse show" aria-labelledby="heading405Cap">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading500Cap" data-toggle="collapse"
        data-target="#collapse500Cap" aria-expanded="true" aria-controls="collapse500Cap">
        <b>5XX</b> Ocorreu um erro interno, tente novamente mais
        tarde. Se o problema persistir entre em contato com o
        suporte técnico.
      </div>
      <div id="collapse500Cap" class="collapse show" aria-labelledby="heading500Cap">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-active" colspan="2">
                    RESPONSE SCHEMA: <code>application/json</code>
                  </th>
                </tr>
                <tr>
                  <th>error</th>
                  <td>
                    <code>string</code>
                    <br />
                    Classificação do erro
                  </td>
                </tr>
                <tr>
                  <th>error_description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição do erro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />