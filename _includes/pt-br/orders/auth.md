<section id="autorizandoOrdem">
  <h2>Autorizando uma ordem</h2>
  <br />
  <p>
    Uma autorização é o processo de validação, para assegurar que
    o cliente está apto a realizar a transação. Caso o cliente
    cumpra todos os pré requisitos a ordem será autorizada e
    ocorrerá um provisionamento (reserva) no saldo do cliente no
    mesmo valor da ordem, assim, a ordem poderá ser capturada
    (confirmada) no processo de captura pelo lojista.
  </p>
  <br />
  <div class="table-responsive">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="table-active text-center bg-light" colspan="2">
            <span class="badge badge-primary">POST</span>
            https://api.hml.amedigital.com/api/orders/purchase
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
            REQUEST BODY SCHEMA:
            <code>application/json</code>
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
            ID da ordem
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
      <div class="card-header bg-ame-success text-success" id="heading200Aut" data-toggle="collapse"
        data-target="#collapse200Aut" aria-expanded="true" aria-controls="collapse200Aut">
        <b>200</b> Ordem autorizada com sucesso
      </div>
      <div id="collapse200Aut" class="collapse show" aria-labelledby="heading200Aut">
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
                    ID da operação que deve ser usado para
                    capturar
                  </td>
                </tr>
                <tr>
                  <th>date</th>
                  <td>
                    <code>string (date-time)</code>
                    <br />
                    Data da transação
                  </td>
                </tr>
                <tr>
                  <th>operationType</th>
                  <td>
                    <code>string (OperationType)</code>
                    <br />
                    Enum: <code>"CREDIT"</code>
                    <code>"DEBIT"</code> <br />Tipo de operação
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
                  <th>title</th>
                  <td>
                    <code>string</code>
                    <br />
                    Título da transação
                  </td>
                </tr>
                <tr>
                  <th>description</th>
                  <td>
                    <code>string</code>
                    <br />
                    Descrição da transação
                  </td>
                </tr>
                <tr>
                  <th>status</th>
                  <td>
                    <code>string (TransactionStatus)</code>
                    <br />
                    Enum: <code>"ERROR"</code>
                    <code>"CREATED"</code> <code>"HOLD"</code>
                    <code>"DENIED"</code>
                    <code>"AUTHORIZED"</code>
                    <code>"CANCELED"</code>
                    <code>"REFUNDED"</code>
                    <code>"SUCCESS"</code>
                    <br />
                    Status de uma transação
                  </td>
                </tr>
                <tr>
                  <th>type</th>
                  <td>
                    <code>string (TransactionType)</code>
                    <br />
                    Enum: <code>"AUTHORIZATION"</code>
                    <code>"REFUND"</code> <code>"HOLD"</code>
                    <code>"DENIED"</code>
                    <code>"AUTHORIZED"</code>
                    <code>"CANCELED"</code>
                    <code>"REFUNDED"</code>
                    <code>"SUCCESS"</code> <br />
                    Tipo de transação
                  </td>
                </tr>
                <tr>
                  <th>cashType</th>
                  <td>
                    <code>string (CashType)</code>
                    <br />
                    Enum: <code>"CARD"</code> <code>"CASH"</code>
                    <code>"MULTIPLE"</code>
                    <code>"CASHBACK"</code> Meio de pagamento
                    utilizado na transação
                  </td>
                </tr>
                <tr>
                  <th>currency</th>
                  <td>
                    <code>string (CurrencyType)</code>
                    <br />
                    Value: <code>"BRL"</code> Moeda no modelo
                    <a href="https://pt.wikipedia.org/wiki/ISO_4217">ISO 4217</a>
                  </td>
                </tr>
                <tr>
                  <th>amount</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Valor da transação sem casas decimais
                  </td>
                </tr>
                <tr>
                  <th>amountRefunded</th>
                  <td>
                    <code>integer (int64)</code>
                    <br />
                    Valor da transação sem casas decimais
                    reembolsado
                  </td>
                </tr>
                <tr>
                  <th>attributes</th>
                  <td>
                    <code>object (AttributeResponse)</code>
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>payOnce</th>
                          <td>
                            <code>boolean</code>
                            <br />Booleano representando se a
                            order pode ser paga somente uma vez
                          </td>
                        </tr>
                        <tr>
                          <th>orderId</th>
                          <td>
                            <code>string (uuid)</code>
                            <br />Referência da ordem que gerou o
                            pagamento
                          </td>
                        </tr>
                        <tr>
                          <th>transactionChangedCallbackUrl</th>
                          <td>
                            <code>string</code>
                            <br />URL de callback configurada para
                            o merchant
                          </td>
                        </tr>
                        <tr>
                          <th>cashbackAmountValue</th>
                          <td>
                            <code>integer</code>
                            <br />Valor do cashback em centavos
                          </td>
                        </tr>
                        <tr>
                          <th>cashbackAmountPercent</th>
                          <td>
                            <code>integer</code>
                            <br />Porcentagem que foi dada no
                            cashback
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
                          <th>externalOrder</th>
                          <td>
                            <code>string (CashType)</code>
                            <br />Enum: <code>"CARD"</code>
                            <code>"CASH"</code>
                            <code>"MULTIPLE"</code>
                            <code>"CASHBACK"</code> <br />
                            Meio de pagamento utilizado na
                            transação
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
                        <tr>
                          <th>deliveryAddress</th>
                          <td>
                            <code>string</code>
                            <br />Endereço de entrega
                          </td>
                        </tr>
                        <tr>
                          <th>taxApplied</th>
                          <td>
                            <code>integer</code>
                            <br />Valor da taxa aplicada em
                            centavos
                          </td>
                        </tr>
                        <tr>
                          <th>bank</th>
                          <td>
                            <code>object (BankResponse)</code>
                            <br />
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>code</th>
                                  <td>
                                    <code>number</code>
                                    <br />Código do banco
                                  </td>
                                </tr>
                                <tr>
                                  <th>name</th>
                                  <td>
                                    <code>string</code>
                                    <br />Nome do banco
                                  </td>
                                </tr>
                                <tr>
                                  <th>imglocation</th>
                                  <td>
                                    <code>string</code>
                                    <br />Caminho da imagem PNG do
                                    ícone
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <th>agency</th>
                          <td>
                            <code>string</code>
                            <br />Agência da conta
                          </td>
                        </tr>
                        <tr>
                          <th>accountNumber</th>
                          <td>
                            <code>string</code>
                            <br />Número da conta corrente
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th>peer</th>
                  <td>
                    <code>object (CreateWalletResponse)</code>
                    <br />
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>id</th>
                          <td>
                            <code>string</code>
                            <br />ID da carteira
                          </td>
                        </tr>
                        <tr>
                          <th>ownerId</th>
                          <td>
                            <code>string</code>
                            <br />ID do dono da carteira
                          </td>
                        </tr>
                        <tr>
                          <th>name</th>
                          <td>
                            <code>string</code>
                            <br />Nome da carteira
                          </td>
                        </tr>
                        <tr>
                          <th>document</th>
                          <td>
                            <code>string</code>
                            <br />Documento do dono da carteira
                          </td>
                        </tr>
                        <tr>
                          <th>type</th>
                          <td>
                            <code>string (WalletType)</code>
                            <br />Enum: <code>"CREDIT"</code>
                            <code>"DEBIT"</code>
                            <code>"CUSTOMER"</code>
                            <br />
                            Tipo de carteira
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th>operationReference</th>
                  <td>
                    <code>string</code>
                    <br />Operação originária desta transação
                  </td>
                </tr>
                <tr>
                  <th>references</th>
                  <td>
                    <code>Array of objects
                                  (TransactionResponse)</code>
                    <br />Transações geradas a partir desta
                    transação
                    <br />
                  </td>
                </tr>
                <tr>
                  <th>splits</th>
                  <td>
                    <code>Array of objects
                                  (TransactionSplitResponse)</code>
                    <br />Splits desta transação
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header bg-ame-danger text-danger" id="heading400Aut" data-toggle="collapse"
        data-target="#collapse400Aut" aria-expanded="true" aria-controls="collapse400Aut">
        <b>400</b> Parâmetros da requisição inválidos
      </div>
      <div id="collapse400Aut" class="collapse show" aria-labelledby="heading400Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading401Aut" data-toggle="collapse"
        data-target="#collapse401Aut" aria-expanded="true" aria-controls="collapse401Aut">
        <b>401</b> Não autorizado, acesso negado.
      </div>
      <div id="collapse401Aut" class="collapse show" aria-labelledby="heading401Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading403Aut" data-toggle="collapse"
        data-target="#collapse403Aut" aria-expanded="true" aria-controls="collapse403Aut">
        <b>403</b> Você não tem permissão para realizar esta
        operação.
      </div>
      <div id="collapse403Aut" class="collapse show" aria-labelledby="heading403Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading405Aut" data-toggle="collapse"
        data-target="#collapse405Aut" aria-expanded="true" aria-controls="collapse405Aut">
        <b>405</b> O verbo utilizado para requisição não é
        suportado.
      </div>
      <div id="collapse405Aut" class="collapse show" aria-labelledby="heading405Aut">
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
      <div class="card-header bg-ame-danger text-danger" id="heading500Aut" data-toggle="collapse"
        data-target="#collapse500Aut" aria-expanded="true" aria-controls="collapse500Aut">
        <b>5XX</b> Ocorreu um erro interno, tente novamente mais
        tarde. Se o problema persistir entre em contato com o
        suporte técnico.
      </div>
      <div id="collapse500Aut" class="collapse show" aria-labelledby="heading500Aut">
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